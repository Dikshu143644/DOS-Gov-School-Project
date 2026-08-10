import { ContactPhones } from "@/components/contact/ContactPhones";
import { getSchoolConfig } from "@/lib/school-config";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  const school = getSchoolConfig();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <h1 className="text-3xl font-semibold text-white">Contact</h1>
      <p className="mt-4 max-w-2xl text-white/70">
        {school.identity.nameFullEn}
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white">Phone numbers</h2>
          <p className="mt-2 text-sm text-white/55">
            Primary contact is configurable. Authorized roles will add or edit
            numbers from the Platform Admin workspace (no public editing).
          </p>
          <div className="mt-6">
            <ContactPhones />
          </div>
          <h2 className="mt-10 text-lg font-semibold text-white">Email</h2>
          <a
            href={`mailto:${school.contact.emails[0].address}`}
            className="mt-2 inline-block text-[#c9a962] hover:underline"
          >
            {school.contact.emails[0].address}
          </a>
          <h2 className="mt-10 text-lg font-semibold text-white">Address</h2>
          <ul className="mt-2 text-sm text-white/75">
            {school.contact.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-white/45">
            UDISE Sr. No: {school.identity.udiseCode}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/contact/contact-campus.png"
            alt="Contact campus"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
