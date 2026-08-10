import { Module } from "@nestjs/common";
import { ThrottlerModule, ThrottlerGuard } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { PrismaModule } from "./prisma/prisma.module";
import { RedisModule } from "./redis/redis.module";
import { AuthModule } from "./auth/auth.module";
import { AuditModule } from "./audit/audit.module";
import { AdmissionModule } from "./admission/admission.module";
import { StudentsModule } from "./students/students.module";
import { StaffModule } from "./staff/staff.module";
import { ApprovalsModule } from "./approvals/approvals.module";
import { ResidentialModule } from "./residential/residential.module";
import { DocumentsModule } from "./documents/documents.module";
import { IdentityModule } from "./identity/identity.module";
import { AiModule } from "./ai/ai.module";
import { AdminModule } from "./admin/admin.module";
import { CommunicationsModule } from "./communications/communications.module";
import { ClerkModule } from "./clerk/clerk.module";
import { HealthModule } from "./health/health.module";
import { PublicModule } from "./public/public.module";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      { name: "default", ttl: 60000, limit: 100 },
      { name: "auth", ttl: 60000, limit: 10 },
      { name: "ai", ttl: 60000, limit: 30 },
    ]),
    PrismaModule,
    RedisModule,
    AuthModule,
    AuditModule,
    AdmissionModule,
    StudentsModule,
    StaffModule,
    ApprovalsModule,
    ResidentialModule,
    DocumentsModule,
    IdentityModule,
    AiModule,
    AdminModule,
    CommunicationsModule,
    ClerkModule,
    HealthModule,
    PublicModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
