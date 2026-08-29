import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Crawlers that ingest pages to train models, as distinct from the ones
 * below that fetch a page to answer someone's question and cite it back.
 *
 * Blocking these costs nothing in search. Google-Extended and
 * Applebot-Extended are training-only opt-outs — neither affects Google
 * Search or Siri, which use Googlebot and Applebot and are untouched here.
 */
const AI_TRAINING_CRAWLERS = [
  "GPTBot", // OpenAI, model training
  "ClaudeBot", // Anthropic, model training
  "Google-Extended", // Gemini training — NOT Google Search
  "Applebot-Extended", // Apple Intelligence training — NOT Siri/Spotlight
  "CCBot", // Common Crawl, the corpus most other models are built from
  "meta-externalagent", // Meta, model training
  "Bytespider", // ByteDance, model training
];

/**
 * Assistant crawlers that fetch a page in order to answer a question and
 * link back to it. These are a referral source, not a training pipeline —
 * being in their answers is how someone looking for a developer finds this
 * site now, so they stay allowed.
 */
const AI_SEARCH_CRAWLERS = [
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT fetching a link on a user's behalf
  "Claude-SearchBot", // Claude search index
  "Claude-User", // Claude fetching a link on a user's behalf
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity fetching on a user's behalf
];

/**
 * The site shipped without a robots.txt, so crawlers had no explicit signal
 * and no pointer to a sitemap — worth fixing on a brand-new deploy that
 * still needs to be discovered.
 *
 * /api/ is disallowed because the contact endpoint is POST-only: a crawler
 * hitting it can't do anything useful, and it shouldn't appear in an index.
 *
 * The split below is a deliberate position rather than a default: the
 * writing, photography and design work here shouldn't become training data,
 * but the site should absolutely still turn up when someone asks an
 * assistant who to hire. To reverse it, move a name between the two lists —
 * that is the whole change.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
      ...AI_TRAINING_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
