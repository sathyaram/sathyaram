import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Sontag",
};

export default function Sontag() {
  return (
    <WebsiteCaseStudy
      title="The Sontag Foundation"
      subtitle="The definitive enterprise for brain cancer research."
      year="2021"
      agency="Push10"
      gradientFrom="#042342"
      gradientTo="#2B86E0"
      url="sontagfoundation.org"
      link="https://sontagfoundation.org"
      image="/websites/assets/sontag.png"
      description="The Sontag Foundation funds brain cancer research fellowships across the country. Working with Push10, I helped build a custom WordPress site focused on presenting grantee research and foundation initiatives clearly and accessibly."
      stats={[
        { label: "Timeline", value: "3 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · JavaScript" },
      ]}
      overview={[
        "Sontag funds brain cancer research fellowships, and researchers and institutions needed to be able to find grant guidelines and past fellows' work without wading through a wall of text — a real challenge for a site built almost entirely around dense scientific and administrative content.",
        "With Push10, I built the front end for the fellowship program: a searchable grantee directory, application guideline pages that could stay readable at any length, and page templates the foundation's team could manage without needing a developer for every update.",
      ]}
      contributions={[
        "Built the grantee research directory with filtering by institution and research area",
        "Developed WordPress page templates for the fellowship program and grantee profile pages",
        "Implemented accessible, front-end JS-driven accordions for grant guidelines and FAQs",
        "Coded the responsive layout system shared across research and news pages",
      ]}
      highlights={[
        {
          title: "Accordions that don't fight screen readers",
          body:
            "Grant guidelines are long, procedural, and legally fussy — exactly the content people scan for one specific clause. The accordions collapse that wall of text without hiding it from assistive tech: real buttons, proper aria-expanded and aria-controls wiring, keyboard operable, and every panel still reachable and findable via in-page search. Accessible disclosure is easy to fake and easy to get subtly wrong.",
        },
        {
          title: "A directory researchers can actually search",
          body:
            "The grantee directory is the site's real utility — researchers use it to find who's working on what, and where. Filtering by institution and research area combines rather than replaces, so you can narrow to one institution's neuro-oncology fellows in two clicks instead of scrolling a list of every fellow the foundation has ever funded.",
        },
        {
          title: "Templates the foundation owns",
          body:
            "A small team maintains this site between grant cycles. The fellowship and grantee templates were built so that adding a new cohort, a new profile, or a new guideline section is a content task, not a development one — which is what keeps a site like this current a year after launch.",
        },
      ]}
      codeFilename="grant-guidelines.js"
      codeLines={[
        [{ text: "// grant-guidelines.js — accessible accordion", type: "comment" }],
        [{ text: "document" }, { text: ".querySelectorAll(" }, { text: "\".accordion-trigger\"", type: "string" }, { text: ").forEach((btn) => {" }],
        [{ text: "  btn.addEventListener(" }, { text: "\"click\"", type: "string" }, { text: ", () => {" }],
        [{ text: "    const", type: "keyword" }, { text: " panel = btn.nextElementSibling;" }],
        [{ text: "    const", type: "keyword" }, { text: " open = btn.getAttribute(" }, { text: "\"aria-expanded\"", type: "string" }, { text: ") === " }, { text: "\"true\"", type: "string" }, { text: ";" }],
        [{ text: "    btn.setAttribute(" }, { text: "\"aria-expanded\"", type: "string" }, { text: ", String(!open));" }],
        [{ text: "    panel.hidden = open;" }],
        [{ text: "  });" }],
        [{ text: "});" }],
      ]}
    />
  );
}
