import {
  Injectable,
  Inject,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as argon2 from "argon2";
import { createHash, randomInt } from "crypto";
import { PrismaClient, SessionRiskLevel, UserRole } from "@pathraj/database";
import Redis from "ioredis";
import { PRISMA } from "../prisma/prisma.module";
import { REDIS } from "../redis/redis.module";
import { AuditService } from "../audit/audit.service";

export type JwtPayload = {
  sub: string;
  sessionId: string;
  roles: UserRole[];
  riskLevel: SessionRiskLevel;
};

@Injectable()
export class AuthService {
  constructor(
    @Inject(PRISMA) private readonly db: PrismaClient,
    @Inject(REDIS) private readonly redis: Redis,
    private readonly jwt: JwtService,
    private readonly audit: AuditService,
  ) {}

  async verifyCaptcha(token: string): Promise<boolean> {
    if (process.env.CAPTCHA_SECRET === "MOCK" || !process.env.CAPTCHA_SECRET) {
      return token === "mock-captcha-token" || token.length > 0;
    }
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.CAPTCHA_SECRET,
        response: token,
      }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success;
  }

  async checkRateLimit(key: string, limit: number, windowSec: number): Promise<boolean> {
    const count = await this.redis.incr(key);
    if (count === 1) await this.redis.expire(key, windowSec);
    return count <= limit;
  }

  async register(dto: {
    email: string;
    password: string;
    fullName: string;
    captchaToken: string;
    phone?: string;
  }) {
    const ok = await this.verifyCaptcha(dto.captchaToken);
    if (!ok) throw new BadRequestException("CAPTCHA verification failed");

    const rl = await this.checkRateLimit(`reg:${dto.email}`, 5, 3600);
    if (!rl) throw new ForbiddenException("Too many registration attempts");

    const existing = await this.db.user.findFirst({
      where: { OR: [{ email: dto.email }, ...(dto.phone ? [{ phone: dto.phone }] : [])] },
    });
    if (existing) throw new BadRequestException("User already exists");

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.db.user.create({
      data: {
        email: dto.email,
        phone: dto.phone,
        fullName: dto.fullName,
        passwordHash,
        roles: { create: { role: UserRole.applicant } },
      },
      include: { roles: true },
    });

    await this.sendOtp(user.id, dto.email, "email", "verify_email");
    return { userId: user.id, message: "Registered. Verify OTP sent to email." };
  }

  async sendOtp(userId: string | null, target: string, channel: string, purpose: string) {
    const code = String(randomInt(100000, 999999));
    const codeHash = createHash("sha256").update(code).digest("hex");
    await this.db.otpChallenge.create({
      data: {
        userId: userId ?? undefined,
        target,
        channel,
        codeHash,
        purpose,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });
    // Dev: log OTP; production: SMTP/SMS/WhatsApp
    console.log(`[OTP ${channel}] ${target}: ${code} (${purpose})`);
    if (process.env.SMTP_HOST) {
      // nodemailer could be wired here
    }
    return { sent: true, devCode: process.env.NODE_ENV !== "production" ? code : undefined };
  }

  async verifyOtp(target: string, code: string, purpose: string) {
    const hash = createHash("sha256").update(code).digest("hex");
    const challenge = await this.db.otpChallenge.findFirst({
      where: { target, purpose, verified: false, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: "desc" },
    });
    if (!challenge || challenge.codeHash !== hash) {
      if (challenge) {
        await this.db.otpChallenge.update({
          where: { id: challenge.id },
          data: { attempts: { increment: 1 } },
        });
      }
      throw new UnauthorizedException("Invalid OTP");
    }
    await this.db.otpChallenge.update({ where: { id: challenge.id }, data: { verified: true } });
    if (challenge.userId) {
      await this.db.user.update({
        where: { id: challenge.userId },
        data: purpose.includes("email") ? { emailVerified: true } : { phoneVerified: true },
      });
    }
    return { verified: true };
  }

  async login(dto: {
    email: string;
    password: string;
    captchaToken: string;
    ipAddress?: string;
    userAgent?: string;
    deviceId?: string;
  }) {
    const ok = await this.verifyCaptcha(dto.captchaToken);
    if (!ok) throw new BadRequestException("CAPTCHA verification failed");

    const ipKey = `login:ip:${dto.ipAddress ?? "unknown"}`;
    const ipRl = await this.checkRateLimit(ipKey, 5, 60);
    if (!ipRl) {
      await this.audit.securityEvent({
        type: "rate_limit",
        severity: "high",
        description: "Login rate limit exceeded for IP",
        ipAddress: dto.ipAddress,
      });
      throw new ForbiddenException("Too many login attempts from this IP");
    }

    const user = await this.db.user.findUnique({
      where: { email: dto.email },
      include: { roles: true },
    });
    if (!user?.passwordHash) throw new UnauthorizedException("Invalid credentials");

    const accRl = await this.checkRateLimit(`login:acc:${user.id}`, 10, 60);
    if (!accRl) throw new ForbiddenException("Too many login attempts for this account");

    const valid = await argon2.verify(user.passwordHash, dto.password);
    if (!valid) {
      await this.audit.log({
        actorId: user.id,
        action: "login_failed",
        resource: "auth",
        ipAddress: dto.ipAddress,
        userAgent: dto.userAgent,
        result: "failure",
      });
      throw new UnauthorizedException("Invalid credentials");
    }

    const lockdown = await this.db.systemLockdown.findFirst({ where: { active: true } });
    if (lockdown) throw new ForbiddenException("System in emergency lockdown");

    const riskLevel = await this.evaluateSessionRisk(user.id, dto.ipAddress, dto.deviceId);
    if (riskLevel === SessionRiskLevel.blocked) {
      throw new ForbiddenException("Session blocked due to security policy");
    }

    const needsOtp =
      riskLevel === SessionRiskLevel.suspicious ||
      riskLevel === SessionRiskLevel.read_only ||
      !user.emailVerified;

    if (needsOtp && !user.emailVerified) {
      await this.sendOtp(user.id, user.email!, "email", "login_step_up");
      return { requiresOtp: true, riskLevel, userId: user.id };
    }

    return this.createSession(user, dto.ipAddress, dto.userAgent, dto.deviceId, riskLevel);
  }

  private async evaluateSessionRisk(
    userId: string,
    ipAddress?: string,
    deviceId?: string,
  ): Promise<SessionRiskLevel> {
    const recent = await this.db.session.findMany({
      where: { userId, isRevoked: false },
      orderBy: { createdAt: "desc" },
      take: 5,
    });
    const knownIps = new Set(recent.map((s) => s.ipAddress).filter(Boolean));
    const knownDevices = new Set(recent.map((s) => s.deviceId).filter(Boolean));

    if (recent.length >= 3) return SessionRiskLevel.suspicious;
    if (ipAddress && knownIps.size > 0 && !knownIps.has(ipAddress))
      return SessionRiskLevel.read_only;
    if (deviceId && knownDevices.size > 0 && !knownDevices.has(deviceId))
      return SessionRiskLevel.read_only;
    return SessionRiskLevel.normal;
  }

  async createSession(
    user: { id: string; roles: { role: UserRole }[] },
    ipAddress?: string,
    userAgent?: string,
    deviceId?: string,
    riskLevel: SessionRiskLevel = SessionRiskLevel.normal,
  ) {
    const refreshToken = createHash("sha256")
      .update(`${user.id}-${Date.now()}-${randomInt(1e9)}`)
      .digest("hex");
    const session = await this.db.session.create({
      data: {
        userId: user.id,
        refreshHash: refreshToken,
        ipAddress,
        userAgent,
        deviceId,
        riskLevel,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const roles = user.roles.map((r) => r.role);
    const payload: JwtPayload = {
      sub: user.id,
      sessionId: session.id,
      roles,
      riskLevel,
    };
    const accessToken = this.jwt.sign(payload, { expiresIn: "15m" });

    await this.audit.log({
      actorId: user.id,
      action: "login_success",
      resource: "auth",
      resourceId: session.id,
      ipAddress,
      userAgent,
      sessionId: session.id,
      newValue: { riskLevel },
    });

    return {
      accessToken,
      refreshToken,
      sessionId: session.id,
      riskLevel,
      roles,
      expiresIn: 900,
    };
  }

  async refresh(refreshToken: string) {
    const hash = createHash("sha256").update(refreshToken).digest("hex");
    const session = await this.db.session.findFirst({
      where: { refreshHash: hash, isRevoked: false, expiresAt: { gt: new Date() } },
      include: { user: { include: { roles: true } } },
    });
    if (!session) throw new UnauthorizedException("Invalid session");

    const roles = session.user.roles.map((r) => r.role);
    const payload: JwtPayload = {
      sub: session.userId,
      sessionId: session.id,
      roles,
      riskLevel: session.riskLevel,
    };
    return {
      accessToken: this.jwt.sign(payload, { expiresIn: "15m" }),
      riskLevel: session.riskLevel,
      roles,
    };
  }

  async logout(sessionId: string, userId: string) {
    await this.db.session.updateMany({
      where: { id: sessionId, userId },
      data: { isRevoked: true },
    });
    await this.audit.log({
      actorId: userId,
      action: "logout",
      resource: "auth",
      sessionId,
    });
    return { ok: true };
  }

  async me(userId: string) {
    return this.db.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        phone: true,
        fullName: true,
        fullNameMr: true,
        emailVerified: true,
        roles: { select: { role: true } },
        staff: true,
        student: true,
      },
    });
  }
}
