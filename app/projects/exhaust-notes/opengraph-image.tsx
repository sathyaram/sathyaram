import { caseStudyOgImage, ogSize, ogContentType } from "@/components/caseStudyOgImage";
import { projectOrder } from "@/lib/projects";

// Data comes from the same list the homepage card renders from, so this can't
// drift from it. See components/caseStudyOgImage.tsx.
const card = projectOrder.find((c) => c.slug === "exhaust-notes")!;

export const alt = card.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return caseStudyOgImage({
    title: card.title,
    blurb: card.blurb,
    kicker: `${card.year} · ${card.tech}`,
    from: card.from,
    to: card.to,
    gradient: card.gradient,
  });
}
