import Link from "next/link";

export const metadata = { title: "Admission" };

const statuses = [
  "Draft",
  "Submitted",
  "Under Review",
  "Documents Required",
  "Document Verification",
  "Teacher Verification",
  "Principal Review",
  "SMC / Committee Review (when applicable)",
  "Approved",
  "Rejected",
  "Admission Confirmed",
];

export default function AdmissionPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">Admission</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Online admission for Marathi medium — Std 1–10 and Arts at 11th &amp;
        12th. Applicants select division intent: day scholar or hostel, boys or
        girls section (subject to seat availability and school rules).
      </p>

      <div className="relative mt-10 aspect-[4/3] max-w-xl overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/admission/admission-portal.png"
          alt="Admission portal"
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="mt-12 text-xl font-semibold text-white">
        Application status flow
      </h2>
      <ol className="mt-4 space-y-2">
        {statuses.map((s) => (
          <li
            key={s}
            className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
          >
            <span className="text-[#c9a962]" aria-hidden>
              ◆
            </span>
            {s}
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm text-white/55">
        Full application portal connects in V1. Staff verification remains
        human-led; AI may assist with document preliminary checks only.
      </p>
      <Link
        href="/login/student"
        className="mt-6 inline-flex rounded-md bg-[#8b1538] px-5 py-3 text-sm font-medium text-white"
      >
        Applicant login (preview)
      </Link>
    </div>
  );
}
