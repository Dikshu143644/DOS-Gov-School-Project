import { Body, Controller, Post, Get, Req, UseGuards } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("register")
  @Throttle({ auth: { limit: 5, ttl: 60000 } })
  register(@Body() body: Record<string, string>, @Req() req: { ip?: string }) {
    return this.auth.register({
      email: body.email,
      password: body.password,
      fullName: body.fullName,
      captchaToken: body.captchaToken,
      phone: body.phone,
    });
  }

  @Post("login")
  @Throttle({ auth: { limit: 10, ttl: 60000 } })
  login(@Body() body: Record<string, string>, @Req() req: { ip?: string; headers: Record<string, string> }) {
    return this.auth.login({
      email: body.email,
      password: body.password,
      captchaToken: body.captchaToken,
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
      deviceId: body.deviceId,
    });
  }

  @Post("otp/verify")
  verifyOtp(@Body() body: { target: string; code: string; purpose: string }) {
    return this.auth.verifyOtp(body.target, body.code, body.purpose);
  }

  @Post("otp/send")
  sendOtp(@Body() body: { userId?: string; target: string; channel: string; purpose: string }) {
    return this.auth.sendOtp(body.userId ?? null, body.target, body.channel, body.purpose);
  }

  @Post("refresh")
  refresh(@Body() body: { refreshToken: string }) {
    return this.auth.refresh(body.refreshToken);
  }

  @Post("logout")
  @UseGuards(JwtAuthGuard)
  logout(@Req() req: { user: { sub: string; sessionId: string } }) {
    return this.auth.logout(req.user.sessionId, req.user.sub);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  me(@Req() req: { user: { sub: string } }) {
    return this.auth.me(req.user.sub);
  }
}
