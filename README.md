# Fuel Framer Website — Next.js

A Next.js wrapper around the static Framer-exported HTML site. The original HTML, CSS, and JS are preserved byte-for-byte in `public/` so styling stays identical to the source.

## How it works

All pages live in `public/` as static HTML and are served directly by Next.js / Vercel. Routes:

| URL | File |
| --- | --- |
| `/` | redirects to `/about.html` |
| `/about.html` (or `/about`) | `public/about.html` |
| `/contact.html` (or `/contact`) | `public/contact.html` |
| `/work/portfolio.html` (or `/work/portfolio`) | `public/work/portfolio.html` |
| `/work/portfolio/{slug}.html` (or `/work/portfolio/{slug}`) | `public/work/portfolio/{slug}.html` |
| `/blog/{slug}.html` (or `/blog/{slug}`) | `public/blog/{slug}.html` |

Clean URLs (without `.html`) are handled by rewrites in `next.config.js`. The original HTML files use relative `.html` links internally, which also continue to work.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On Vercel, click "Add New Project" and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. No env vars needed. Click Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- The site originally pointed to `index.html` (a homepage) which was **not** present in the source HTTrack dump. The `/` route therefore redirects to `/about.html`. If you obtain the original homepage HTML later, drop it into `public/index.html` and remove the `redirects()` block in `next.config.js`.
- All fonts, images, and JS chunks load from `framerusercontent.com` (the original Framer CDN), so nothing needs to be self-hosted.
