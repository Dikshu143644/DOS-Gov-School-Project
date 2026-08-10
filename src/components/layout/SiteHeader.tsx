"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admission", label: "Admission" },
  { href: "/events", label: "Events" },
  { href: "/notices", label: "Notices" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0e1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group max-w-[min(100%,14rem)] sm:max-w-xs">
          <span className="block text-[10px] uppercase tracking-[0.2em] text-[#c9a962]">
            Government Ashram School
          </span>
          <span className="block text-sm font-semibold leading-tight text-white group-hover:text-[#e8dcc0]">
            Pathraj, Karjat · Raigad
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login/student"
            className="rounded-md border border-white/15 px-3 py-2 text-sm text-white/90 hover:bg-white/5"
          >
            Student Login
          </Link>
          <Link
            href="/login/staff"
            className="rounded-md bg-[#8b1538] px-3 py-2 text-sm font-medium text-white hover:bg-[#a8223a]"
          >
            Staff Login
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-white/15 px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              <Link
                href="/login/student"
                className="flex-1 rounded-md border border-white/15 py-2 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Student
              </Link>
              <Link
                href="/login/staff"
                className="flex-1 rounded-md bg-[#8b1538] py-2 text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Staff
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
