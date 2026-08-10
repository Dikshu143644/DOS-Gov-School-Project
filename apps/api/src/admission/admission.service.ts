import { Injectable, Inject, NotFoundException, ForbiddenException } from "@nestjs/common";
import { PrismaClient, ApplicationStatus, UserRole } from "@pathraj/database";
import { PRISMA } from "../prisma/prisma.module";
import { randomBytes } from "crypto";

@Injectable()
export class AdmissionService {
  constructor(@Inject(PRISMA) private readonly db: PrismaClient) {}

  private genCode() {
    return `APP-${new Date().getFullYear()}-${randomBytes(3).toString("hex").toUpperCase()}`;
  }

  async createDraft(data: {
    standard: number;
    stream?: string;
    divisionCode?: string;
    residenceType?: string;
    genderSection?: string;
    studentData?: object;
    applicantUserId?: string;
  }) {
    const year = await this.db.academicYear.findFirst({ where: { isCurrent: true } });
    if (!year) throw new NotFoundException("No active academic year");

    return this.db.application.create({
      data: {
        applicationCode: this.genCode(),
        academicYearId: year.id,
        standard: data.standard,
        stream: data.stream,
        divisionCode: data.divisionCode as never,
        residenceType: data.residenceType as never,
        genderSection: data.genderSection as never,
        studentData: data.studentData ?? {},
        applicantUserId: data.applicantUserId,
        status: ApplicationStatus.draft,
        statusHistory: { create: { status: ApplicationStatus.draft, note: "Draft created" } },
      },
    });
  }

  async updateDraft(id: string, data: Record<string, unknown>, userId?: string) {
    const app = await this.db.application.findUnique({ where: { id } });
    if (!app) throw new NotFoundException();
    if (app.status !== ApplicationStatus.draft) throw new ForbiddenException("Cannot edit submitted application");
    if (userId && app.applicantUserId && app.applicantUserId !== userId)
      throw new ForbiddenException();

    return this.db.application.update({
      where: { id },
      data: {
        studentData: (data.studentData as object) ?? app.studentData,
        parentData: (data.parentData as object) ?? app.parentData,
        addressData: (data.addressData as object) ?? app.addressData,
        standard: (data.standard as number) ?? app.standard,
        stream: (data.stream as string) ?? app.stream,
        divisionCode: (data.divisionCode as never) ?? app.divisionCode,
      },
    });
  }

  async submit(id: string, userId?: string) {
    const app = await this.db.application.findUnique({ where: { id } });
    if (!app) throw new NotFoundException();
    return this.db.application.update({
      where: { id },
      data: {
        status: ApplicationStatus.submitted,
        submittedAt: new Date(),
        statusHistory: {
          create: {
            status: ApplicationStatus.submitted,
            changedById: userId,
            note: "Application submitted",
          },
        },
      },
    });
  }

  async track(code: string) {
    const app = await this.db.application.findUnique({
      where: { applicationCode: code.toUpperCase() },
      include: { statusHistory: { orderBy: { createdAt: "asc" } }, academicYear: true },
    });
    if (!app) return null;
    const sd = app.studentData as Record<string, string>;
    return {
      applicationCode: app.applicationCode,
      status: app.status,
      standard: app.standard,
      stream: app.stream,
      submittedAt: app.submittedAt,
      studentName: sd.fullName ?? sd.firstName,
      history: app.statusHistory,
      academicYear: app.academicYear.label,
    };
  }

  async listForStaff(roles: UserRole[]) {
    if (!roles.some((r) => [UserRole.principal, UserRole.clerk, UserRole.platform_admin].includes(r)))
      throw new ForbiddenException();
    return this.db.application.findMany({
      orderBy: { updatedAt: "desc" },
      take: 100,
      select: {
        id: true,
        applicationCode: true,
        status: true,
        standard: true,
        submittedAt: true,
        updatedAt: true,
      },
    });
  }

  async updateStatus(
    id: string,
    status: ApplicationStatus,
    userId: string,
    note?: string,
  ) {
    return this.db.application.update({
      where: { id },
      data: {
        status,
        statusHistory: {
          create: { status, changedById: userId, note },
        },
      },
    });
  }
}
