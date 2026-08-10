import Link from "next/link";
import { getPrimaryEmail, getPrimaryPhone, getSchoolConfig } from "@/lib/school-config";

export function SiteFooter() {
  const school = getSchoolConfig();
  const phone = getPrimaryPhone();
  const email = getPrimaryEmail();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#070a12]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(/assets/hero/digital-governance-footer.png)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c9a962]">
              Institution
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {school.identity.nameFullEn}
            </p>
            <p className="mt-2 text-xs text-white/50">
              UDISE Sr. No: {school.identity.udiseCode}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c9a962]">
              Contact
            </p>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li>
                <a href={`tel:${phone.display}`} className="hover:text-white">
                  {phone.label}: {phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email.address}`}
                  className="hover:text-white"
                >
                  {email.address}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c9a962]">
              Platform
            </p>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li>
                <Link href="/platform/integrations" className="hover:text-white">
                  Integrations &amp; roadmap
                </Link>
              </li>
              <li>Hybrid hosting: MeitY cloud + on-premises</li>
              <li className="text-xs text-white/45">
                Data owned by the school; government access by permission only.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {school.identity.nameEn}. Digital
          governance platform — design preview (English UI).
        </p>
      </div>
    </footer>
  );
}
