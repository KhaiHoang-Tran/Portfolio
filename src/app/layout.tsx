import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { portfolio } from "@/content/portfolio";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-sans-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `${portfolio.name} — ${portfolio.role}`,
  description: portfolio.summary,
  robots: { index: false, follow: false }, // Enable indexing once the final CV and content are ready.
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={geistSans.variable}><body>{children}</body></html>;
}
