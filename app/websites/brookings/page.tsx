import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "The Brookings Institute",
  description:
    "Front-end development for the Brookings Institution with Teal Media: reusable WordPress templates and a debounced research-library filter for a high-volume public policy publisher.",
};

export default function Brookings() {
  return (
    <WebsiteCaseStudy
      slug="brookings"
      title="The Brookings Institute"
      subtitle="A mission-driven think tank."
      year="2024"
      agency="Teal Media"
      gradientFrom="#022A4E"
      gradientTo="#00649F"
      url="brookings.edu"
      link="https://brookings.edu"
      image="/websites/assets/brookings-hero.webp"
      description="Brookings is a nonprofit public policy organization based in Washington, D.C. Working with Teal Media, I helped build out custom WordPress templates for their research-heavy content, balancing dense policy content with a clean, readable layout."
      stats={[
        { label: "Timeline", value: "3 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "WordPress · HTML/CSS · JS" },
      ]}
      overview={[
        "Brookings publishes a constant stream of research: reports, op-eds, expert commentary, event recaps. The redesign needed a front end that could hold all of that without feeling like an archive, dense, but never cluttered.",
        "My part of the build was the front end: turning the design system into custom WordPress templates, and making sure hundreds of research posts, expert profiles, and program pages actually behaved consistently once real content landed in them.",
      ]}
      contributions={[
        "Built custom WordPress page templates for research posts, reports, and expert profiles",
        "Wrote the responsive HTML/CSS component library (cards, filters, pagination) reused across every content type",
        "Implemented the front-end JS behind the research library's live filtering and search",
        "Tuned typography and spacing specifically for long-form policy reading",
      ]}
      highlights={[
        {
          title: "Debounced search that respects the server",
          body:
            "The research library filters live as you type. Firing a request per keystroke across an archive that size is a good way to melt a server, so the input is debounced and in-flight requests are cancelled when a newer one supersedes them, you get the feeling of instant filtering without the traffic that usually implies.",
        },
        {
          title: "One component library, every content type",
          body:
            "Brookings publishes reports, op-eds, expert profiles, event recaps, and commentary, and each has its own editorial rules. Instead of a bespoke template per type, I built one responsive HTML/CSS component set (cards, filters, pagination, bylines) that every template composes from. New content types get assembled from existing parts rather than designed from scratch.",
        },
        {
          title: "Typography tuned for long-form policy",
          body:
            "Most of these pages are read, not skimmed, some run to thousands of words of dense policy analysis. Measure, line height, and the spacing between headings and body were tuned specifically for sustained reading rather than inherited from a framework default. It's the least flashy work on the project and probably the most load-bearing.",
        },
      ]}
      codeFilename="research-library.js"
      codeLines={[
        [{ text: "// research-library.js: debounced search, superseding requests", type: "comment" }],
        [{ text: "const", type: "keyword" }, { text: " debounce = (" }, { text: "fn" }, { text: ", " }, { text: "delay" }, { text: " = " }, { text: "200", type: "value" }, { text: ") => {" }],
        [{ text: "  let", type: "keyword" }, { text: " timer;" }],
        [{ text: "  return", type: "keyword" }, { text: " (...args) => {" }],
        [{ text: "    clearTimeout(timer);" }],
        [{ text: "    timer = setTimeout(() => fn(...args), delay);" }],
        [{ text: "  };" }],
        [{ text: "};" }],
        [],
        [{ text: "let", type: "keyword" }, { text: " inFlight;" }],
        [],
        [{ text: "const", type: "keyword" }, { text: " filterResearch = " }, { text: "async", type: "keyword" }, { text: " (query) => {" }],
        [{ text: "  inFlight?.abort();" }, { text: " // a newer query supersedes the last", type: "comment" }],
        [{ text: "  inFlight = " }, { text: "new", type: "keyword" }, { text: " AbortController();" }],
        [],
        [{ text: "  try", type: "keyword" }, { text: " {" }],
        [{ text: "    const", type: "keyword" }, { text: " res = " }, { text: "await", type: "keyword" }, { text: " fetch(" }, { text: "`/api/research?q=${query}`", type: "string" }, { text: ", {" }],
        [{ text: "      signal: inFlight.signal," }],
        [{ text: "    });" }],
        [{ text: "    render(" }, { text: "await", type: "keyword" }, { text: " res.json());" }],
        [{ text: "  } " }, { text: "catch", type: "keyword" }, { text: " (err) {" }],
        [{ text: "    if", type: "keyword" }, { text: " (err.name !== " }, { text: "\"AbortError\"", type: "string" }, { text: ") " }, { text: "throw", type: "keyword" }, { text: " err;" }],
        [{ text: "  }" }],
        [{ text: "};" }],
        [],
        [{ text: "searchInput" }, { text: ".addEventListener(" }, { text: "\"input\"", type: "string" }, { text: ", debounce((e) => {" }],
        [{ text: "  filterResearch(e.target.value);" }],
        [{ text: "}));" }],
      ]}
    />
  );
}
