import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getSchoolConfig } from "@/lib/school-config";

import { Inter, Mukta } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mukta = Mukta({ weight: ['300', '400', '500', '600', '700'], subsets: ['devanagari', 'latin'], variable: '--font-mukta' });

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
      <body className={`${inter.variable} ${mukta.variable} min-h-screen antialiased bg-background text-text font-inter`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
