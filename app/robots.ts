import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * The site shipped without a robots.txt, so crawlers had no explicit signal
 * and no pointer to a sitemap — worth fixing on a brand-new deploy that
 * still needs to be discovered.
 *
 * /api/ is disallowed because the contact endpoint is POST-only: a crawler
 * hitting it can't do anything useful, and it shouldn't appear in an index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
