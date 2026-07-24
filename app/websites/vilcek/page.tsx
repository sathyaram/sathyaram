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
      tags={["WordPress", "JavaScript", "Styled Components"]}
      url="vilcek.org"
      link="https://vilcek.org"
      image="/websites/assets/vilcek.png"
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
