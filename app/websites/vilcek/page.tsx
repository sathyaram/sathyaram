import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Vilcek",
};

export default function Vilcek() {
  return (
    <WebsiteCaseStudy
      title="Vilcek Foundation"
      subtitle="A celebration of immigrants & the arts."
      year="2020"
      agency="ForumOne"
      gradientFrom="#5C4433"
      gradientTo="#E3D2B4"
      url="vilcek.org"
      link="https://vilcek.org"
      description="The Vilcek Foundation celebrates the contributions of immigrants to American arts and sciences. Working with ForumOne, I built custom WordPress components for their grant and award programs, including interactive profile layouts for honorees."
      stats={[
        { label: "Timeline", value: "4 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · JavaScript" },
      ]}
      overview={[
        "The Vilcek Foundation's prizes celebrate immigrant achievement in the arts and sciences, and the honorees are the whole point of the site — every layout decision had to put their stories first, not the foundation's branding.",
        "Working with ForumOne, I built the front end for the prize and grant programs: profile templates flexible enough for a scientist one year and a choreographer the next, plus the browsing experience for exploring honorees across years and disciplines.",
      ]}
      contributions={[
        "Built interactive honoree profile templates with filterable, award-year archives",
        "Developed the front-end JS for the honoree spotlight carousel on the homepage",
        "Implemented custom WordPress page templates for grant and prize program pages",
        "Coded the responsive grid system used across the awards gallery",
      ]}
      highlights={[
        {
          title: "One template, forty different people",
          body:
            "The hardest part of the honoree profiles wasn't the layout, it was the variance. A biomedical researcher's page and a choreographer's page carry completely different media — papers and citations versus performance video and production stills. I built the template as a set of optional, self-contained blocks so an editor composes each profile from what that honoree actually has, and the page still holds together when half the blocks are missing.",
        },
        {
          title: "Browsing by year, discipline, or accident",
          body:
            "The archive had to work for someone hunting a specific 2014 winner and for someone with no idea who they're looking for. Filtering runs off award year and discipline taxonomies with the state reflected in the URL, so a filtered view is shareable and the back button behaves. The spotlight carousel on the homepage covers the second case — it's there to make you stumble into someone.",
        },
        {
          title: "A grid that gets out of the way",
          body:
            "Honoree portraits arrive at wildly different crops and aspect ratios. The awards gallery uses a responsive grid with consistent aspect-ratio containers and object-fit, so the collection reads as one considered set instead of a ransom note — without anyone having to re-crop hundreds of images by hand.",
        },
      ]}
      codeFilename="honoree-carousel.js"
      codeLines={[
        [{ text: "// honoree-carousel.js", type: "comment" }],
        [{ text: "const", type: "keyword" }, { text: " track = document.querySelector(" }, { text: "\".honoree-track\"", type: "string" }, { text: ");" }],
        [{ text: "let", type: "keyword" }, { text: " index = " }, { text: "0", type: "value" }, { text: ";" }],
        [],
        [{ text: "function", type: "keyword" }, { text: " next() {" }],
        [{ text: "  index = (index + " }, { text: "1", type: "value" }, { text: ") % slides.length;" }],
        [{ text: "  track.style.transform = " }, { text: "`translateX(-${index * 100}%)`", type: "string" }, { text: ";" }],
        [{ text: "}" }],
        [],
        [{ text: "autoplay = setInterval(next, " }, { text: "5000", type: "value" }, { text: ");" }],
      ]}
    />
  );
}
