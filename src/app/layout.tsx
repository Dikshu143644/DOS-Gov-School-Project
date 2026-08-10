import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getSchoolConfig } from "@/lib/school-config";

const school = getSchoolConfig();

export const metadata: Metadata = {
  title: {
    default: `${school.identity.nameEn} | Digital Governance Platform`,
    template: `%s | ${school.identity.nameEn}`,
  },
  description:
    "Official digital presence for Government Secondary & Higher Secondary Ashram School, Pathraj — Marathi medium, Std 1–12, residential and day scholar programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
