import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const year = await prisma.academicYear.upsert({
    where: { label: "2025-26" },
    update: { isCurrent: true },
    create: {
      label: "2025-26",
      startDate: new Date("2025-06-01"),
      endDate: new Date("2026-05-31"),
      isCurrent: true,
    },
  });

  const flags = [
    { key: "ai_agents", name: "AI Agents", enabled: true },
    { key: "aadhaar_production", name: "Aadhaar Production", enabled: false },
    { key: "aadhaar_mock", name: "Aadhaar Mock Mode", enabled: true },
    { key: "biometric_sync", name: "Biometric Sync", enabled: true },
    { key: "whatsapp_notifications", name: "WhatsApp", enabled: false },
    { key: "parent_portal", name: "Parent Portal", enabled: true },
    { key: "emergency_lockdown", name: "Emergency Lockdown", enabled: false },
  ];
  for (const f of flags) {
    await prisma.featureFlag.upsert({
      where: { key: f.key },
      update: {},
      create: { ...f, description: f.name },
    });
  }

  const passwordHash = await bcrypt.hash("Admin@Pathraj2025", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@pathraj.local" },
    update: {},
    create: {
      email: "admin@pathraj.local",
      fullName: "Platform Administrator",
      fullNameMr: "शाळा डिजिटल व्यासपीठ प्रशासक",
      passwordHash,
      emailVerified: true,
      roles: { create: { role: UserRole.platform_admin } },
    },
  });

  const principal = await prisma.user.upsert({
    where: { email: "principal@pathraj.local" },
    update: {},
    create: {
      email: "principal@pathraj.local",
      fullName: "Shri. S. K. Patil",
      passwordHash,
      emailVerified: true,
      roles: { create: { role: UserRole.principal } },
      staff: {
        create: {
          employeeCode: "STF-001",
          designation: "Principal",
          designationMr: "मुख्याध्यापक",
        },
      },
    },
  });

  const clerk = await prisma.user.upsert({
    where: { email: "clerk@pathraj.local" },
    update: {},
    create: {
      email: "clerk@pathraj.local",
      fullName: "Office Clerk",
      fullNameMr: "लिपिक",
      passwordHash,
      emailVerified: true,
      roles: { create: { role: UserRole.clerk } },
      staff: {
        create: {
          employeeCode: "STF-002",
          designation: "Clerk",
          designationMr: "लिपिक",
        },
      },
    },
  });

  const wingA = await prisma.hostelWing.upsert({
    where: { code: "WING-A" },
    update: {},
    create: { code: "WING-A", name: "Wing A (Girls)", gender: "girls", capacity: 200 },
  });
  const wingB = await prisma.hostelWing.upsert({
    where: { code: "WING-B" },
    update: {},
    create: { code: "WING-B", name: "Wing B (Boys)", gender: "boys", capacity: 250 },
  });

  for (const wing of [wingA, wingB]) {
    for (let n = 101; n <= 104; n++) {
      const room = await prisma.room.upsert({
        where: { wingId_number: { wingId: wing.id, number: String(n) } },
        update: {},
        create: {
          wingId: wing.id,
          number: String(n),
          floor: Math.floor(n / 100),
          capacity: 4,
          beds: {
            create: [{ label: "1" }, { label: "2" }, { label: "3" }, { label: "4" }],
          },
        },
      });
      void room;
    }
  }

  console.log("Seed complete:", { year: year.label, admin: admin.email, principal: principal.email, clerk: clerk.email });
  console.log("Default password: Admin@Pathraj2025");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
