import { caseStudyOgImage, ogSize, ogContentType } from "@/components/caseStudyOgImage";
import { websiteCards } from "@/lib/websites";

// Data comes from the same list the homepage card renders from, so this can't
// drift from it. See components/caseStudyOgImage.tsx.
const card = websiteCards.find((c) => c.slug === "brookings")!;

export const alt = card.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return caseStudyOgImage({
    title: card.title,
    blurb: card.blurb,
    kicker: `Teal Media · ${card.year}`,
    from: card.from,
    to: card.to,
    gradient: card.gradient,
  });
}
