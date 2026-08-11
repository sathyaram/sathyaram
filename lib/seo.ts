import type { Metadata } from "next";

/**
 * Per-page metadata, built in one place because Next merges metadata
 * *shallowly*: a page that sets `title` and `description` but not `openGraph`
 * inherits the root layout's entire `openGraph` object verbatim. That's how
 * every case study ended up advertising the homepage's og:title and
 * og:url — the page-level title never reached the social card, so sharing
 * /websites/brookings anywhere unfurled as "Sathya Ram | Developer &
 * Designer" pointing at the site root.
 *
 * The same rule is why `canonical` can't live in the root layout: it would be
 * inherited by every page that doesn't override it, and each one would then
 * tell Google it's a duplicate of the homepage. Canonical has to be set per
 * route, which is exactly what this function makes cheap to do.
 *
 * og:image needs care, because the two ways of setting it don't compose. A
 * route's own opengraph-image.tsx supplies its card automatically, but an
 * explicit `images` here *overrides* that file — while setting no `images` at
 * all on a route that has no opengraph-image.tsx of its own leaves it with no
 * card whatsoever, since replacing the layout's `openGraph` also drops the
 * site-wide image it was inheriting. Neither default is safe everywhere, so
 * `hasOwnCard` picks between them.
 *
 * It defaults to false — the site-wide card — because that's the forgiving
 * direction: a new route added without touching this flag unfurls with the
 * generic card, which is merely unremarkable. The other default would have it
 * unfurl as a bare link with no image at all.
 */
export function pageMetadata({
  title,
  description,
  path,
  hasOwnCard = false,
}: {
  /** Bare page title, without the brand. Matches the layout's title template. */
  title: string;
  description: string;
  /** Root-relative, no trailing slash — resolved against metadataBase. */
  path: string;
  /**
   * True when this route has its own opengraph-image.tsx. Leaves `images`
   * unset so the file convention supplies the card instead of being
   * overridden by the site-wide fallback.
   */
  hasOwnCard?: boolean;
}): Metadata {
  // The layout's `template` only rewrites `title`; og:title is a separate
  // field and never sees it, so the brand prefix is applied by hand here to
  // keep the two consistent.
  const socialTitle = `Sathya Ram | ${title}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    // Replaces the layout's openGraph wholesale (shallow merge), so the
    // fields that aren't page-specific have to be repeated.
    openGraph: {
      type: "website",
      siteName: "Sathya Ram",
      locale: "en_US",
      title: socialTitle,
      description,
      url: path,
      ...(hasOwnCard ? {} : { images: ["/opengraph-image"] }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
