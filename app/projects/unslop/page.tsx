import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Unslop",
  description:
    "Strips the typographic tells out of AI-written text — smart quotes, real ellipses, em dashes, zero-width spaces — with a reveal view showing exactly what was found. Runs entirely in the browser.",
};

export default function Unslop() {
  return (
    <CaseStudy
      section="projects"
      slug="unslop"
      title="Unslop"
      subtitle="Strips the tells out of AI-written text, and shows you every one it found before it touches them."
      year="2026"
      gradientFrom="#00aeef"
      gradientTo="#fff200"
      description="Language models leave fingerprints in punctuation: smart quotes, real ellipsis characters, em dashes everywhere, and invisible spacing that breaks things quietly. Unslop finds them, shows them to you, and cleans only the categories you agree to."
      stats={[
        { label: "Stack", value: "Next.js · Rules engine" },
        { label: "Type", value: "Personal Project" },
        { label: "Year", value: "2026" },
      ]}
      overview={[
        "Some of what it catches is cosmetic — curly quotes, a real ellipsis character, em dashes used with abandon. Some of it is not: zero-width spaces and narrow no-break spaces survive a copy-paste invisibly and then break JSON.parse, a CSV import, or a form validator, with nothing on screen to explain why.",
        "The reveal view is the actual product. Anything can strip characters; the useful part is being shown exactly what was in there and where, so the decision to remove it is yours. Every rule is a toggle, and the set you choose persists.",
      ]}
      contributions={[
        "Wrote the scanner that segments text by rule, so every match can be highlighted in place rather than just counted",
        "Built the reveal view that renders those segments as an annotated diff against the clean output",
        "Made each rule independently toggleable, with the chosen set persisted to localStorage",
        "Wired preferences through useSyncExternalStore so the server render and the hydrating paint agree",
      ]}
      highlights={[
        {
          title: "Reveal before clean",
          body:
            "The default view isn't the cleaned text, it's the annotated one. Showing the work first is what separates this from a find-and-replace: you can see that the em dashes were deliberate and keep them, or discover the zero-width space that's been breaking your import all afternoon. Cleaning silently would have thrown away the more useful half.",
        },
        {
          title: "Nothing leaves the browser",
          body:
            "It's a rules engine, not a model call, so there's no API, no key, and no request. That's a design decision rather than a shortcut — people paste unpublished drafts and client work into a tool like this, and the only credible way to promise it stays private is to have nowhere to send it.",
        },
        {
          title: "Preferences without a hydration flash",
          body:
            "The enabled rule set lives in localStorage, which the server can't see. Rather than an effect that reads storage after mount and re-renders — the usual source of a visible flicker — the toggles are read through useSyncExternalStore, so the server renders the defaults, hydration matches, and the stored set swaps in cleanly.",
        },
      ]}
    />
  );
}
