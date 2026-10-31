"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button as AnimateButton } from "@animate-ui/react/primitives/buttons/button";
import { portfolio } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080b0f]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300" aria-label={`${portfolio.name}, back to top`}>
          <span className="grid size-9 place-items-center rounded-xl border border-teal-200/25 bg-teal-200/[0.09] text-sm font-semibold tracking-normal text-teal-200 transition-colors group-hover:bg-teal-200/[0.16]">{portfolio.initials}</span>
          <span className="hidden text-sm font-semibold tracking-normal text-white sm:block">{portfolio.name}<span className="ml-0.5 text-teal-300">.</span></span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-[background-color,color] duration-200 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-teal-300">{link.label}</a>
          ))}
        </nav>

        <div className="hidden md:block">
          <AnimateButton asChild>
            <a href="#contact" className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-[13px] font-medium text-white transition-[background-color,border-color] hover:border-teal-200/40 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
              Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </AnimateButton>
        </div>

        <button type="button" className="grid size-10 place-items-center rounded-lg border border-white/15 text-slate-100 focus-visible:outline-2 focus-visible:outline-teal-300 md:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={cn("border-t border-white/[0.07] bg-[#0b0f14] px-5 py-4 md:hidden", !menuOpen && "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1">
          {[...links, { label: "Contact", href: "#contact" }].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-teal-300">{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
