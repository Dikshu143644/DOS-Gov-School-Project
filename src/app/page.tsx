import { HeroSection } from "@/components/sections/HeroSection";
import { SectionImage } from "@/components/sections/SectionImage";
import { ContactPhones } from "@/components/contact/ContactPhones";
import Link from "next/link";
import { getSchoolConfig } from "@/lib/school-config";

export default function HomePage() {
  const school = getSchoolConfig();
  const divisions = school.academicStructure.divisionCombinations;

  return (
    <>
      <HeroSection />

      <SectionImage
        id="about"
        eyebrow="About the school"
        title="Residential Ashram education in Pathraj"
        description="Government Secondary & Higher Secondary Ashram School, Pathraj serves learners in a Marathi-medium environment with both day scholar and hostel programmes. Divisions are organised by residence type and gender so class teachers and wardens can manage records clearly and securely."
        imageSrc="/assets/school/about-ashram-school.png"
        imageAlt="Students in a respectful residential learning environment"
        cta={{ href: "/about", label: "Read full profile" }}
      />

      <SectionImage
        id="academics"
        reverse
        eyebrow="Academics"
        title="Std 1–12 · Marathi medium · Arts at 11 & 12"
        description="All standards from 1st through 12th follow Marathi medium instruction. At the higher secondary level (11th and 12th), the school offers the Arts stream. Class placement respects four division types for operational clarity."
        imageSrc="/assets/academics/academics-marathi-medium.png"
        imageAlt="Marathi medium classroom learning"
        cta={{ href: "/academics", label: "View structure" }}
      >
        <ul className="grid gap-2 sm:grid-cols-2">
          {divisions.map((d) => (
            <li
              key={d.code}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85"
            >
              {d.labelEn}
            </li>
          ))}
        </ul>
      </SectionImage>

      <SectionImage
        id="admission"
        eyebrow="Admission"
        title="Online admission with verified review"
        description="Applications move through draft, submission, document review, and multi-level approval involving the Principal, admission committee, and School Management Committee when required. Status tracking stays visible to applicants."
        imageSrc="/assets/admission/admission-portal.png"
        imageAlt="Digital admission application concept"
        cta={{ href: "/admission", label: "Admission information" }}
      />

      <SectionImage
        id="hostel"
        reverse
        eyebrow="Residential"
        title="Hostel and day scholar pathways"
        description="Ashram school operations distinguish hostel students from day scholars, with separate boys and girls divisions. Hostel modules (rooms, attendance, warden records) will align with official Ashram Shala Sanhita after confirmation — not invented rules."
        imageSrc="/assets/hostel/hostel-residential.png"
        imageAlt="Government ashram hostel residential life"
        cta={{ href: "/academics", label: "Division model" }}
      />

      <SectionImage
        id="events"
        eyebrow="Events"
        title="Events published only after approval"
        description="Staff may submit photos, notices, and reports. Nothing appears on the public site until reviewed by authorized approvers — protecting institutional trust."
        imageSrc="/assets/events/events-cultural.png"
        imageAlt="Cultural events at the school"
        cta={{ href: "/events", label: "Events" }}
      />

      <SectionImage
        id="notices"
        reverse
        eyebrow="Notices"
        title="Official notices and updates"
        description="Approved notices appear here and on the public notice board. Draft and pending items remain internal."
        imageSrc="/assets/notices/notices-governance.png"
        imageAlt="Official notices and governance"
        cta={{ href: "/notices", label: "View notices" }}
      />

      <section
        id="contact"
        className="section-anchor border-t border-white/10 bg-[#0f1628]/50 py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-start">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/contact/contact-campus.png"
              alt="Campus and contact"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              School office
            </h2>
            <p className="mt-3 text-sm text-white/70">
              {school.identity.nameFullEn}
            </p>
            <ContactPhones />
            <p className="mt-6 text-sm">
              Email:{" "}
              <a
                href={`mailto:${school.contact.emails[0].address}`}
                className="text-[#c9a962] hover:underline"
              >
                {school.contact.emails[0].address}
              </a>
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Full contact page →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-panel rounded-2xl p-8 md:p-10">
          <h2 className="text-xl font-semibold text-white">
            Register digitization &amp; district reporting
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
            Existing paper registers will be digitized into this platform.
            Mandatory exports will follow{" "}
            <strong className="text-white/90">district formats</strong> for
            ITDP Raigad and Tribal Development Department reporting. Student data
            is legally owned by the school; government bodies may access records
            only with documented permission and audit trail.
          </p>
          <Link
            href="/platform/integrations"
            className="mt-6 inline-flex rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            View integration roadmap (API keys marked)
          </Link>
        </div>
      </section>
    </>
  );
}
