# sathyaram.com

My portfolio: websites, design, and photography. Live at **[sathyaram.com](https://sathyaram.com)**.

Currently **v8.1**, a full rebuild on the Next.js App Router. The version number
is in the hero, and this repo carries the history of every version before it.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS v4 |
| 3D | three.js, the interactive starfield |
| Type | Bricolage Grotesque (display), Work Sans (body), Californication (script) |
| Email | Resend, via a route handler |
| Hosting | Vercel |

## Layout

```
app/
  page.tsx              Home: hero, services, work grid, photography, CTA
  about/                Bio, testimonials, awards
  contact/              Contact form
  colophon/             What this site is built with
  websites/[project]/   Case studies
  api/contact/          Form handler (Resend)
  not-found.tsx         404
  opengraph-image.tsx   Social card, generated at build time
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
components/             Shared UI
lib/                    Shared data (social links, project ordering)
public/                 Images, resume
```

## A few things I enjoyed building

**The starfield** is real three.js, not a CSS trick, but a `BufferGeometry` point
cloud you can click to "catch" a star, which bursts into sparks and respawns at
the back of the field. It's code-split so it loads after first paint, which is
how the site keeps a 100 Lighthouse performance score and 0ms Total Blocking
Time while running a live WebGL render loop.

**Scroll reveals** are one small component (`ScrollGroup`) that clones a stagger
class onto its direct children rather than wrapping them, because wrapping breaks CSS
grid, since `grid-column` only applies to direct grid children.

**The case study link** wipes to a solid fill on hover using `clip-path` rather
than a `scaleX` transform. Transforms stretch an element's border-radius along
with the box, so the corners visibly warp mid-animation; `clip-path` masks a
static, correctly-rounded box instead.

**Old URLs still work.** v7 served case studies from the root (`/brookings`), and
this version nests them under `/websites/`. Every old path 301s to its new home
so nothing that's already indexed or sitting in someone's inbox breaks.

## Lighthouse

100 / 100 / 100 / 100 for performance, accessibility, best practices, SEO.

---

© Sathya Ram. Code is available to read; the writing, photography, and design
work are not licensed for reuse.
