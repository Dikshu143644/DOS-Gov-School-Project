import { NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { getSchoolConfig } from "@/lib/school-config";

const configPath = path.join(process.cwd(), "config", "school.json");

export async function GET() {
  const school = getSchoolConfig();
  return NextResponse.json({
    phones: school.contact.phones,
    emails: school.contact.emails.map((e) => ({
      address: e.address,
      label: e.label,
    })),
    note: "Additional contact numbers can be added by authorized staff in the Platform Admin module (Principal / Clerk / Digital Systems Administrator).",
  });
}

/** Staff-authenticated update — placeholder until IAM (V0) ships. */
export async function PATCH(request: Request) {
  const auth = request.headers.get("x-platform-admin-key");
  if (!auth || auth !== process.env.PLATFORM_CONTACT_EDIT_KEY) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        hint: "Set PLATFORM_CONTACT_EDIT_KEY in environment and send x-platform-admin-key header. Full UI editor ships with Platform Admin (V0).",
      },
      { status: 401 },
    );
  }

  const body = (await request.json()) as {
    phones?: Array<{
      id: string;
      label: string;
      number: string;
      display: string;
      isPrimary?: boolean;
    }>;
  };

  if (!body.phones?.length) {
    return NextResponse.json({ error: "phones array required" }, { status: 400 });
  }

  const raw = await readFile(configPath, "utf-8");
  const config = JSON.parse(raw) as ReturnType<typeof getSchoolConfig>;
  const defaultEditable = config.contact.phones[0]?.editableByRole ?? [
    "platform_admin",
    "principal",
    "clerk",
  ];
  config.contact.phones = body.phones.map((p) => ({
    ...p,
    isPrimary: p.isPrimary ?? false,
    editableByRole: defaultEditable,
  }));
  await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");

  return NextResponse.json({ ok: true, phones: config.contact.phones });
}
