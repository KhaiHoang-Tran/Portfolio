import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MapPin, MoveUpRight, Sparkles } from "lucide-react";
import { Effect, Effects } from "@animate-ui/react/primitives/effects/effect";
import { Button as AnimateButton } from "@animate-ui/react/primitives/buttons/button";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { HeroActions } from "@/components/hero-actions";
import { ProjectPreview } from "@/components/project-preview";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-2xl md:mb-10">
      <div className="section-eyebrow"><span className="eyebrow-line" />{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-400 transition-[color,background-color,border-color] hover:border-teal-200/35 hover:bg-teal-200/[0.07] hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
      {children}
    </a>
  );
}

export default function Home() {
  const featured = portfolio.projects[0];

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <section id="top" className="hero-section relative overflow-hidden border-b border-white/[0.07]">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-glow pointer-events-none absolute" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 md:pb-28 md:pt-28 lg:min-h-[710px] lg:grid-cols-[1.2fr_.8fr] lg:gap-10 lg:px-12 lg:pb-32 lg:pt-28">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-200/20 bg-teal-200/[0.06] px-3 py-1.5 text-[11px] font-medium tracking-wide text-teal-200 sm:text-xs"><span className="size-2 rounded-full bg-teal-300" />{portfolio.badge}</div>
              <p className="mb-4 text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">Hello, I&apos;m {portfolio.name}</p>
              <h1 className="max-w-3xl font-sans text-[clamp(3rem,6.6vw,5.75rem)] leading-[1.09] font-semibold tracking-[-0.02em] text-white">Building reliable<br/><span className="text-gradient">backends</span><span className="text-teal-300">.</span></h1>
              <Effects holdDelay={100} fade>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">{portfolio.intro}</p>
                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">{portfolio.role} <span className="mx-1.5 text-slate-600">·</span> {portfolio.location}</p>
              </Effects>
              <Effect delay={200} fade className="mt-8">
                <HeroActions />
              </Effect>
              <div className="mt-10 flex items-center gap-3"><span className="mr-2 text-xs text-slate-500">Find me on</span><SocialLink href={portfolio.github} label="GitHub profile"><GitHubIcon size={17}/></SocialLink><SocialLink href={portfolio.linkedin} label="LinkedIn profile"><LinkedInIcon size={17}/></SocialLink><SocialLink href={`mailto:${portfolio.email}`} label="Send email"><Mail size={17}/></SocialLink></div>
            </div>

            <Effect fade slide={{ offset: 10 }} className="hero-visual relative mx-auto w-full max-w-[470px] lg:max-w-none">
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" /><div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <div className="hero-code-card relative overflow-hidden rounded-2xl border border-white/12 bg-[#10171c]/95 shadow-[0_35px_100px_-35px_rgba(0,0,0,.8)]">
                <div className="flex h-11 items-center justify-between border-b border-white/[0.08] px-4"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-[#f58181]/70"/><span className="size-2.5 rounded-full bg-[#eac876]/70"/><span className="size-2.5 rounded-full bg-[#82d7af]/70"/></div><span className="text-[11px] text-slate-500">portfolio.tsx</span><span className="text-slate-600"><Sparkles size={13}/></span></div>
                <div className="p-5 font-mono text-[11px] leading-7 sm:p-7 sm:text-[13px]">
                  <div><span className="code-purple">const</span> <span className="code-white">developer</span> <span className="code-purple">=</span> <span className="code-white">&#123;</span></div>
                  <div className="pl-5"><span className="code-blue">name</span><span className="code-white">:</span> <span className="code-green">&quot;{portfolio.name}&quot;</span><span className="code-white">,</span></div>
                  <div className="pl-5"><span className="code-blue">role</span><span className="code-white">:</span> <span className="code-green">&quot;{portfolio.role}&quot;</span><span className="code-white">,</span></div>
                  <div className="pl-5"><span className="code-blue">stack</span><span className="code-white">:</span> <span className="code-white">[</span></div>
                  <div className="pl-10"><span className="code-green">&quot;Java&quot;</span><span className="code-white">,</span> <span className="code-green">&quot;Spring Boot&quot;</span><span className="code-white">,</span></div>
                  <div className="pl-10"><span className="code-green">&quot;SQL Server&quot;</span></div>
                  <div className="pl-5 code-white">]</div>
                  <div className="code-white">&#125;;</div>
                  <div className="mt-5"><span className="code-purple">export default</span> <span className="code-yellow">developer</span><span className="code-white">;</span><span className="ml-1 inline-block h-4 w-[2px] translate-y-1 bg-teal-300 motion-safe:animate-pulse"/></div>
                </div>
              </div>
              <div className="hero-float-card absolute -bottom-7 -left-4 flex items-center gap-3 rounded-xl border border-white/12 bg-[#151e22] p-3.5 shadow-2xl sm:-left-9"><div className="grid size-9 place-items-center rounded-lg bg-teal-300/15 text-teal-200"><Sparkles size={17}/></div><div><div className="text-xs font-semibold text-white">Backend development</div><div className="mt-0.5 text-[10px] text-slate-400">Java · Spring Boot · SQL Server</div></div></div>
            </Effect>
            <a href="#about" className="absolute bottom-8 left-5 hidden items-center gap-2 text-xs text-slate-500 transition-colors hover:text-teal-200 focus-visible:outline-2 focus-visible:outline-teal-300 sm:left-8 lg:flex lg:left-12">Scroll to explore <ArrowDown size={13}/></a>
          </div>
        </section>

        <section id="about" className="section-wrap border-b border-white/[0.07]"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 md:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-12"><Effect inView fade><div><SectionHeading eyebrow="01 / About me" title="Behind the API."/></div></Effect><Effect inView fade><div className="lg:pt-8"><p className="max-w-2xl font-sans text-lg leading-[1.7] font-medium tracking-normal text-slate-100 md:text-xl">{portfolio.about[0]}</p><p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">{portfolio.about[1]}</p><div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-7 text-sm text-slate-400"><span className="inline-flex items-center gap-2"><MapPin size={15} className="text-teal-300"/>{portfolio.location}</span><span className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-teal-300"/>FPT University · Expected graduation October 2027</span></div></div></Effect></div></section>

        <section id="skills" className="section-wrap border-b border-white/[0.07] bg-[#0a0e12]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12"><Effect inView fade><div><SectionHeading eyebrow="02 / Technical skills" title="Tools of the trade." description="The languages, frameworks, and technologies I use for backend development."/></div></Effect><div className="grid gap-4 md:grid-cols-3">{portfolio.skills.map((group, index) => <Effect key={group.category} inView fade slide={{ offset: 10 }} delay={index * 90} asChild><div className="skill-card group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7"><div className="mb-7 flex items-center justify-between"><span className="text-[11px] font-semibold tracking-[0.16em] text-teal-300 uppercase">0{index + 1}</span><span className="text-slate-600 transition-colors group-hover:text-teal-300"><MoveUpRight size={18}/></span></div><h3 className="mb-4 font-sans text-lg font-semibold tracking-[-0.015em] text-white">{group.category}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className={cn("rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300", ["Java", "Spring Boot", "SQL Server"].includes(item) && "border-teal-200/35 bg-teal-200/[0.08] text-teal-100")}>{item}</span>)}</div></div></Effect>)}</div></div></section>

        <section id="projects" className="section-wrap border-b border-white/[0.07]"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-12"><div className="flex flex-wrap items-end justify-between gap-5"><Effect inView fade><div><SectionHeading eyebrow="03 / Selected work" title="Featured project." description="My backend work on the Horse Racing Tournament Management System, alongside other public repositories."/></div></Effect><a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-teal-200 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-teal-300">View GitHub <ArrowUpRight size={16}/></a></div>
          <div className="grid gap-7 lg:grid-cols-2"><Effect inView fade slide={{ offset: 10 }} asChild><article className="project-card group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10151a] lg:col-span-2 lg:grid lg:grid-cols-[1.16fr_.84fr]"><div className="project-visual overflow-hidden p-4 sm:p-5 lg:min-h-[430px]"><ProjectPreview variant={featured.preview}/></div><div className="flex flex-col p-6 sm:p-8"><div className="mb-5 flex items-center justify-between gap-3 text-[11px] font-medium tracking-[0.15em] text-teal-300 uppercase"><span>{featured.number} / {featured.type}</span><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] tracking-normal text-slate-400 normal-case">{featured.period}</span></div><h3 className="font-sans text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-white sm:text-[28px]">{featured.title}</h3><p className="mt-2 text-xs font-medium text-teal-200">{featured.role}</p><p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">{featured.description}</p><div className="mt-5 flex flex-wrap gap-2">{featured.stats.map((stat) => <span key={stat} className="rounded-md border border-teal-200/20 bg-teal-200/[0.07] px-3 py-2 text-xs font-medium text-teal-100">{stat}</span>)}</div><div className="mt-5 flex flex-wrap gap-2">{featured.tags.map((tag) => <span key={tag} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-[11px] text-slate-300">{tag}</span>)}</div><div className="mt-auto flex gap-5 pt-8"><a href={featured.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-teal-300" aria-label={`${featured.abbreviation} backend repository`}><GitHubIcon size={15}/> View backend repository <ArrowUpRight size={13}/></a></div></div></article></Effect></div>
          <div className="mt-12 border-t border-white/[0.08] pt-8"><h3 className="mb-5 text-sm font-semibold text-white">Other repositories</h3><div className="grid gap-3 md:grid-cols-3">{portfolio.otherRepositories.map((repo) => <Effect key={repo.name} inView fade slide={{ offset: 12 }} asChild><a href={repo.github} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-3 rounded-xl border border-white/[0.09] bg-white/[0.025] p-5 transition-[border-color,background-color] hover:border-teal-200/25 hover:bg-teal-200/[0.035] focus-visible:outline-2 focus-visible:outline-teal-300"><span><span className="block text-sm font-semibold text-white">{repo.name}</span><span className="mt-1.5 block text-xs leading-5 text-slate-400">{repo.detail}</span></span><ArrowUpRight size={16} className="shrink-0 text-slate-500 transition-colors group-hover:text-teal-200" aria-hidden="true" /></a></Effect>)}</div></div>
        </div></section>

        <section id="education" className="section-wrap border-b border-white/[0.07] bg-[#0a0e12]"><div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-12"><Effect inView fade><div><SectionHeading eyebrow="04 / Education" title="Education." description="Software Engineering at FPT University."/></div></Effect><div className="max-w-2xl rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8"><h3 className="mb-6 flex items-center gap-3 text-sm font-semibold text-white"><span className="grid size-8 place-items-center rounded-lg bg-teal-300/10 text-teal-200">✧</span>Academic path</h3><div className="timeline">{portfolio.education.map((item) => <Effect key={item.title} inView fade slide={{ offset: 10 }} asChild><div className="timeline-item"><span className="timeline-dot"/><div className="mb-2 text-xs font-medium tracking-wide text-teal-300">{item.period}</div><h4 className="text-lg font-semibold tracking-tight text-white">{item.title}</h4><div className="mt-1 text-sm text-slate-300">{item.organization}</div></div></Effect>)}</div></div></div></section>

        <section id="contact" className="section-wrap relative overflow-hidden"><div className="contact-glow pointer-events-none absolute" aria-hidden="true"/><div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-12"><Effect inView fade><div className="mx-auto max-w-3xl text-center"><div className="mb-7 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.17em] text-teal-300 uppercase"><span className="size-1.5 rounded-full bg-teal-300"/>05 / Get in touch</div><h2 className="font-sans text-[clamp(2.55rem,5.6vw,4.8rem)] leading-[1.14] font-semibold tracking-[-0.02em] text-white">Have something in mind?<br/><span className="text-gradient">Let&apos;s connect.</span></h2><p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">For project discussions or professional inquiries, reach me by email or LinkedIn.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><AnimateButton asChild><a href={`mailto:${portfolio.email}`} className={buttonVariants({ size: "lg" })}>Say hello <ArrowUpRight size={17}/></a></AnimateButton><AnimateButton asChild><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg" })}>Connect on LinkedIn <LinkedInIcon size={16}/></a></AnimateButton></div><a href={`mailto:${portfolio.email}`} className="mt-8 inline-block text-base font-medium text-teal-200 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-teal-300">{portfolio.email}</a></div></Effect></div></section>
      </main>
      <footer className="border-t border-white/[0.07]"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12"><div className="text-xs text-slate-500">© {new Date().getFullYear()} {portfolio.name}. Built with care.</div><div className="flex items-center gap-5"><a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 transition-colors hover:text-teal-200">GitHub</a><a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 transition-colors hover:text-teal-200">LinkedIn</a><a href="#top" className="inline-flex items-center gap-1 text-xs text-slate-400 transition-colors hover:text-teal-200">Back to top <ArrowRight size={12} className="-rotate-90"/></a></div></div></footer>
    </>
  );
}
