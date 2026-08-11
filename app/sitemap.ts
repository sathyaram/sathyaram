import type { MetadataRoute } from "next";
import { homepageProjects } from "@/lib/projects";
import { websiteOrder } from "@/lib/websites";
import { SITE_URL } from "@/lib/site";

/**
 * Both sets of case studies come straight from their lib/ lists — the same
 * ones that drive the homepage grids and the prev/next links — so the sitemap
 * can't drift out of sync with what the site actually presents.
 *
 * Which also means this file doesn't decide what's listed. A case study that
 * nothing links to stays reachable by URL but isn't advertised — pointing
 * crawlers at an orphan page nobody can navigate to isn't doing it any
 * favours — and it joins the sitemap the day it joins the grid, by being added
 * to the list rather than to anything here. Nothing is held back at the
 * moment: all six websites and all four projects are on the homepage, so all
 * ten are below.
 *
 * Priorities are relative, not absolute — the homepage leads, the work
 * itself comes next, then supporting pages. Deliberately omits /api/* and
 * the v7 redirect sources, which should not be indexed as destinations.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const caseStudies = websiteOrder.map((website) => ({
    url: `${SITE_URL}/websites/${website.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  // homepageProjects, not projectOrder — that filter is where the rule above
  // actually lives for projects; the websites' equivalent is which cards are
  // in websiteCards.
  const projects = homepageProjects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...caseStudies,
    ...projects,
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/colophon`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    // The resume is a file rather than a page, but it is indexed like one, and
    // for a while the only version Google held was a filename that no longer
    // exists (both old names now 301 here — see next.config.ts). Listing the
    // current URL is the one lever this repo has on that: it advertises the
    // URL worth crawling instead of waiting for the stale entries to age out.
    // Deliberately below the pages — it should never outrank the site itself.
    {
      url: `${SITE_URL}/resume.pdf`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];
}
