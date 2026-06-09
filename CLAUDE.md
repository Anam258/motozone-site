@AGENTS.md
# MotoZone Project Instructions

## Tech Stack & Architecture
- Framework: Next.js (App Router) with TypeScript
- Styling: Tailwind CSS (Strictly use standard utility classes, no inline styles)
- Deployment Target: Vercel Static Export (`output: 'export'`)
- Icons: lucide-react
- Images: Next.js `next/image` with fallback placeholders

## Design & UI Rules
- Theme: Dark, ultra-premium, high-performance motorsport aesthetic.
- Color Palette: Dark slate/zinc backgrounds (`bg-zinc-950`), clean white/gray text, with sharp accents using Suzuki Blue or Crimson Red.
- Quality: Production-grade, pixel-perfect responsive layouts (Mobile-first).

## Development Workflow
- Build Command: `npm run build`
- Format/Lint Command: `npm run lint`
- Always verify that components do not break static export constraints (e.g., handle client-side hooks with 'use client' only where necessary).