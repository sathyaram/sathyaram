import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Brookings",
};

export default function Brookings() {
  return (
    <WebsiteCaseStudy
      title="The Brookings Institute"
      subtitle="A mission-driven thinktank center."
      year="2024"
      agency="Teal Media"
      gradientFrom="#022A4E"
      gradientTo="#00649F"
      url="brookings.edu"
      link="https://brookings.edu"
      image="/websites/assets/brookings.webp"
      description="Brookings is a nonprofit public policy organization based in Washington, D.C. Working with Teal Media, I helped build out custom WordPress templates for their research-heavy content, balancing dense policy content with a clean, readable layout."
      stats={[
        { label: "Timeline", value: "3 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · HTML/CSS · JS" },
      ]}
      overview={[
        "Brookings publishes a constant stream of research: reports, op-eds, expert commentary, event recaps. The redesign needed a front end that could hold all of that without feeling like an archive — dense, but never cluttered.",
        "My part of the build was the front end: turning the design system into custom WordPress templates, and making sure hundreds of research posts, expert profiles, and program pages actually behaved consistently once real content landed in them.",
      ]}
      contributions={[
        "Built custom WordPress page templates for research posts, reports, and expert profiles",
        "Wrote the responsive HTML/CSS component library — cards, filters, pagination — reused across every content type",
        "Implemented the front-end JS behind the research library's live filtering and search",
        "Tuned typography and spacing specifically for long-form policy reading",
      ]}
      codeFilename="research-library.js"
      codeLines={[
        [{ text: "// research-library.js — debounced live search", type: "comment" }],
        [{ text: "const", type: "keyword" }, { text: " debounce = (" }, { text: "fn" }, { text: ", " }, { text: "delay" }, { text: " = " }, { text: "200", type: "value" }, { text: ") => {" }],
        [{ text: "  let", type: "keyword" }, { text: " timer;" }],
        [{ text: "  return", type: "keyword" }, { text: " (...args) => {" }],
        [{ text: "    clearTimeout(timer);" }],
        [{ text: "    timer = setTimeout(() => fn(...args), delay);" }],
        [{ text: "  };" }],
        [{ text: "};" }],
        [],
        [{ text: "searchInput" }, { text: ".addEventListener(" }, { text: "\"input\"", type: "string" }, { text: ", debounce((e) => {" }],
        [{ text: "  filterResearch(e.target.value);" }],
        [{ text: "}));" }],
      ]}
    />
  );
}
