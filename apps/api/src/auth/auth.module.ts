import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtAuthGuard, RolesGuard, WriteAccessGuard } from "./guards";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? "dev_jwt_change_in_production",
      signOptions: { expiresIn: "15m" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard, RolesGuard, WriteAccessGuard],
  exports: [AuthService, JwtModule, JwtAuthGuard, RolesGuard, WriteAccessGuard],
})
export class AuthModule {}
