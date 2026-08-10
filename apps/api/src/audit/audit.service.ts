import { Injectable, Inject } from "@nestjs/common";
import { PrismaClient } from "@pathraj/database";
import { PRISMA } from "../prisma/prisma.module";

@Injectable()
export class AuditService {
  constructor(@Inject(PRISMA) private readonly db: PrismaClient) {}

  async log(params: {
    actorId?: string;
    action: string;
    resource: string;
    resourceId?: string;
    oldValue?: unknown;
    newValue?: unknown;
    ipAddress?: string;
    userAgent?: string;
    sessionId?: string;
    result?: string;
  }) {
    return this.db.auditLog.create({
      data: {
        actorId: params.actorId,
        action: params.action,
        resource: params.resource,
        resourceId: params.resourceId,
        oldValue: params.oldValue as object | undefined,
        newValue: params.newValue as object | undefined,
        ipAddress: params.ipAddress,
        userAgent: params.userAgent,
        sessionId: params.sessionId,
        result: params.result ?? "success",
      },
    });
  }

  async securityEvent(params: {
    type: string;
    severity: string;
    userId?: string;
    description: string;
    metadata?: unknown;
    ipAddress?: string;
  }) {
    return this.db.securityEvent.create({
      data: {
        type: params.type,
        severity: params.severity,
        userId: params.userId,
        description: params.description,
        metadata: params.metadata as object | undefined,
        ipAddress: params.ipAddress,
      },
    });
  }
}
