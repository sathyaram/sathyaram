/** Canonical origin. Was hardcoded separately in robots.ts, sitemap.ts and
 *  layout.tsx — three places that all have to agree or the site starts
 *  advertising URLs it doesn't serve. */
export const SITE_URL = "https://sathyaram.com";

/** Springy overshoot easing — the "delight" curve the cards, CTA and 404
 *  buttons all hover with. Previously copy-pasted into page.tsx and
 *  not-found.tsx, which is how two copies of a magic number quietly drift
 *  apart. */
export const SPRING = "cubic-bezier(0.175,0.885,0.32,1.275)";
