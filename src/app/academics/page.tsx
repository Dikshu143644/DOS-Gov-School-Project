import { getSchoolConfig } from "@/lib/school-config";

export const metadata = { title: "Academics" };

export default function AcademicsPage() {
  const school = getSchoolConfig();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">Academics</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Marathi medium for all standards. Higher secondary (11th &amp; 12th) —
        Arts stream only.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white">Standards</h2>
          <p className="mt-2 text-sm text-white/70">
            1st through 12th Standard — single medium: Marathi.
          </p>
          <p className="mt-4 text-xs uppercase tracking-wider text-[#c9a962]">
            11 &amp; 12
          </p>
          <p className="mt-1 text-sm text-white/85">Arts (Marathi medium)</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-white">Division model</h2>
          <p className="mt-2 text-sm text-white/70">
            Divisions depend on residence (day scholar vs hostel) and gender
            (boys vs girls). Exact section labels will match school registers
            after digitization.
          </p>
          <ul className="mt-4 space-y-2">
            {school.academicStructure.divisionCombinations.map((d) => (
              <li
                key={d.code}
                className="rounded-md bg-white/5 px-3 py-2 text-sm text-white/90"
              >
                {d.labelEn}{" "}
                <span className="text-white/40">({d.code})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/academics/academics-marathi-medium.png"
          alt="Academics"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
