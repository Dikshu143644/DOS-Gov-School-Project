import Image from "next/image";
import Link from "next/link";
import { getSchoolConfig } from "@/lib/school-config";

export function HeroSection() {
  const school = getSchoolConfig();

  return (
    <section className="section-anchor relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/pathraj-school-hero.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/40 via-[#0a0e1a]/75 to-[#0a0e1a]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col justify-end px-4 pb-16 pt-32 md:min-h-[calc(90vh-5rem)] md:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#c9a962]">
          Tribal Development · Residential Education · Raigad
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          {school.identity.nameFullEn}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          A digital governance and student management platform for Marathi-medium
          education from{" "}
          <strong className="font-medium text-white">1st to 12th Standard</strong>
          , with{" "}
          <strong className="font-medium text-white">Arts</strong> at the higher
          secondary level — serving day scholars and hostel students in separate
          boys and girls divisions.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admission"
            className="rounded-md bg-[#8b1538] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#8b1538]/30 hover:bg-[#a8223a]"
          >
            Apply for Admission
          </Link>
          <Link
            href="/contact"
            className="glass-panel rounded-md px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            Contact the Office
          </Link>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="glass-panel rounded-lg p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              Medium
            </dt>
            <dd className="mt-1 text-sm font-medium text-white">Marathi only</dd>
          </div>
          <div className="glass-panel rounded-lg p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              UDISE Sr. No
            </dt>
            <dd className="mt-1 text-sm font-medium text-white">
              {school.identity.udiseCode}
            </dd>
          </div>
          <div className="glass-panel rounded-lg p-4">
            <dt className="text-xs uppercase tracking-wider text-white/50">
              Location
            </dt>
            <dd className="mt-1 text-sm font-medium text-white">
              Karjat Taluka, Raigad
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
