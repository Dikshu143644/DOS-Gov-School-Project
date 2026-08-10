import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
  SetMetadata,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { SessionRiskLevel, UserRole } from "@pathraj/database";
import { JwtPayload } from "./auth.service";

export const ROLES_KEY = "roles";
export const WRITE_KEY = "requiresWrite";
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
export const RequiresWrite = () => SetMetadata(WRITE_KEY, true);

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers.authorization as string | undefined;
    if (!auth?.startsWith("Bearer ")) throw new UnauthorizedException();
    try {
      const payload = this.jwt.verify<JwtPayload>(auth.slice(7));
      req.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>(ROLES_KEY, context.getHandler()) ??
      this.reflector.get<UserRole[]>(ROLES_KEY, context.getClass());
    if (!roles?.length) return true;
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    if (!user?.roles?.some((r) => roles.includes(r))) throw new ForbiddenException();
    return true;
  }
}

@Injectable()
export class WriteAccessGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiresWrite = this.reflector.get<boolean>(WRITE_KEY, context.getHandler());
    if (!requiresWrite) return true;
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    if (
      user.riskLevel === SessionRiskLevel.read_only ||
      user.riskLevel === SessionRiskLevel.suspicious
    ) {
      throw new ForbiddenException("Read-only session: write access denied");
    }
    return true;
  }
}
