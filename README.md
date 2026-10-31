# Tran Hoang Khai — Backend Developer portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui styling, Animate UI, Motion, and Lucide icons.

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update content

1. Edit [`src/content/portfolio.ts`](src/content/portfolio.ts) for personal details, skills, projects, repositories, and education.
2. The existing `public/sample-cv.pdf` is retained but is not linked from the page. Add a download link in `src/components/hero-actions.tsx` only after the final CV PDF is supplied.
3. `src/components/project-preview.tsx` shows an illustrative HRTMS system view, not an application screenshot. Replace it with a real screenshot if one becomes available.
4. Remove `robots: { index: false, follow: false }` in `src/app/layout.tsx` when the final public content is ready for search engines.

No work experience or live demo is shown because verified details were not provided. The project statistics and scope come from the portfolio owner; the public repository pages were reviewed for repository identity and structure.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The Animate UI skill used for the motion decisions is retained in `.agents/skills/animate-ui/`.

## Typography

The site self-hosts Geist Sans through `next/font/local` using `src/app/fonts/geist-sans-latin.woff2`. The font is licensed under the SIL Open Font License; its notice is in `src/app/fonts/OFL.txt`. Code-related text uses a JetBrains Mono-first monospace stack with local system fallbacks.
