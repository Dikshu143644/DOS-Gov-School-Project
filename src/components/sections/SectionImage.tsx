import Image from "next/image";
import Link from "next/link";

type SectionImageProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: React.ReactNode;
  cta?: { href: string; label: string };
};

export function SectionImage({
  id,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  children,
  cta,
}: SectionImageProps) {
  return (
    <section
      id={id}
      className="section-anchor mx-auto max-w-6xl px-4 py-20 md:py-28"
    >
      <div
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 to-transparent" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a962]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
            {description}
          </p>
          {children && <div className="mt-6 space-y-3">{children}</div>}
          {cta && (
            <Link
              href={cta.href}
              className="mt-8 inline-flex rounded-md border border-[#8b1538]/50 bg-[#8b1538]/20 px-4 py-2 text-sm font-medium text-white hover:bg-[#8b1538]/40"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
