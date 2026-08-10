import { SectionImage } from "@/components/sections/SectionImage";
import { getSchoolConfig } from "@/lib/school-config";

export const metadata = { title: "About" };

export default function AboutPage() {
  const school = getSchoolConfig();

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-28">
        <h1 className="text-3xl font-semibold text-white">About the school</h1>
        <p className="mt-4 max-w-3xl text-white/70">
          {school.identity.nameFullEn}
        </p>
      </div>
      <SectionImage
        eyebrow="Mission"
        title="Education, protection, and digital governance"
        description="This platform supports day-to-day school operations, residential student care, and transparent communication with families — while keeping sensitive student records under school ownership and strict access control."
        imageSrc="/assets/school/about-ashram-school.png"
        imageAlt="Ashram school community"
      />
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white">Governance</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-white/75">
            <li>{school.governance.dataOwnership}</li>
            <li>{school.governance.governmentAccess}</li>
            <li>
              Admission decisions may involve:{" "}
              {school.governance.admissionAuthorities.join(", ")}.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
