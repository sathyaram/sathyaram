# sathyaram.com

My portfolio: websites, design, and photography. Live at **[sathyaram.com](https://sathyaram.com)**.

Currently **v8.3**, a full rebuild on the Next.js App Router. The version number
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
  websites/<slug>/      Case studies: client briefs
  projects/<slug>/      Case studies: self-initiated work
  api/contact/          Form handler (Resend)
  fonts/                Self-hosted typefaces
  not-found.tsx         404
  opengraph-image.tsx   Social card, generated at build time
  robots.ts             robots.txt
  sitemap.ts            sitemap.xml
components/             Shared UI
lib/                    Shared data (social links, case study ordering)
scripts/                Embedding an app: export it, verify it, screenshot it
public/                 Images, resume
  <app>/                A standalone app's static export, served verbatim
```

The two case study sections are the same card and the same grid; what differs
is what's in them. Websites are client work, Projects are the things nobody
asked for. Both read their ordering from `lib/`, which is also what the
sitemap and the prev/next links read, so a case study can't end up listed in
one place and missing from another.

All four Projects ship the app itself, not just a write-up of one. Each is
built in its own repo, exported to static files, and dropped into
`public/<app>/` by `scripts/embed-app.sh`, so `/springtuner` and friends are
the running thing rather than a screenshot of it. `next.config.ts` rewrites
each to its `index.html`, since static file serving does no directory-index
resolution. They're also `linguist-vendored` in `.gitattributes`: that build
output is bigger than this site's own source, and GitHub was reading the whole
repo as an HTML project because of it.

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
