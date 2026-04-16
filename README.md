# theVvowBooks — Landing

Marketing/landing page for [theVvowBooks](https://techvow-dashboard-theta.vercel.app), a staffing-management SaaS. This repo is independent from the main app — every CTA on the page redirects to the production app for sign-in or sign-up.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS 4
- framer-motion (entry/hover springs, sticky-header scroll fade)
- @phosphor-icons/react (icons)
- Geist Sans + Geist Mono via `next/font/google`

## Environment variables

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Base URL of the production app. CTAs append `/login` and `/login?mode=signup`. | `https://techvow-dashboard-theta.vercel.app` |

To point the landing page at a different deployment, set `NEXT_PUBLIC_APP_URL` in Vercel project env vars (or in a local `.env.local`):

```
NEXT_PUBLIC_APP_URL=https://staging.example.com
```

The constants live in [`lib/config.ts`](./lib/config.ts).

## Develop

```bash
npm install
npm run dev          # http://localhost:3000 (Turbopack)
npm run build        # production build
npm run start        # serve the production build locally
```

## File layout

```
app/
  layout.tsx        # Geist fonts + global metadata
  page.tsx          # composes the section components
  globals.css       # token system + glass / mesh / noise utilities
components/
  ui/               # Button, Container
  sections/         # Header, Hero, Features, Faq, CtaFooter, Footer
lib/
  config.ts         # APP_URL, SIGN_IN_URL, SIGN_UP_URL
vercel.json         # framework: nextjs
```

## Design notes

- Light mode by default. The `.dark` token block is included in `globals.css` so a future dark toggle can flip a class on `<html>`.
- Accent (teal `#0D9488`) is reserved for interaction signals — links, CTAs, focus rings — never decorative fill.
- Glass cards in the hero panel rely on `backdrop-filter`; supported in all modern browsers.
- All copy aims to sound calm and confident — no buzzwords.

## Deploy to Vercel

This is a vanilla Next.js project — Vercel auto-detects everything. Just point a project at the repo and (optionally) set `NEXT_PUBLIC_APP_URL` in the dashboard.
