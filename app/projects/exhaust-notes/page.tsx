import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Exhaust Notes",
  description:
    "A curated library of real exhaust recordings, built so any two cars can be played side by side. Next.js App Router, the Web Audio API, and a rebuild of a 2019 original.",
};

export default function ExhaustNotes() {
  return (
    <CaseStudy
      section="projects"
      slug="exhaust-notes"
      title="Exhaust Notes"
      subtitle="Real exhaust recordings, played side by side, so you can hear exactly why two cars sound different."
      year="2026"
      gradientFrom="#6e1119"
      gradientTo="#f42737"
      // Hosted here rather than on its own domain. The live route drops the
      // hyphen this page’s slug carries — the route is the thing being linked
      // around, and it is the app’s own name.
      url="sathyaram.com/exhaustnotes"
      link="/exhaustnotes"
      description="A curated collection of real exhaust recordings, not synthesised engine tones, built around a single interaction: pick two cars, play them together, and hear the difference directly rather than by switching between tabs."
      stats={[
        { label: "Stack", value: "Next.js · Web Audio API" },
        { label: "Type", value: "Personal Project" },
        { label: "Year", value: "2026" },
      ]}
      overview={[
        "The original ran in 2019 on React, Express and MongoDB. This is a rebuild on the Next.js App Router with Tailwind v4, keeping the premise and replacing everything underneath it.",
        "The premise is comparison. Plenty of projects synthesise engine noise from parameters; this one does the opposite, treating each recording as a fixed artefact and putting two of them in the same room. What makes a flat-plane V8 sound unlike a cross-plane one is only obvious when they overlap.",
      ]}
      contributions={[
        "Built the comparison stage around a shared audio engine, so two recordings start together rather than drifting apart",
        "Designed a compare route keyed on the pair (/compare/[pair]), making any two-car comparison a shareable URL",
        "Wrote the garage and card UI for browsing the library and building a comparison from it",
        "Handled playback state in React context so the tray, stage and cards all read one source of truth",
      ]}
      highlights={[
        {
          title: "Comparison, not simulation",
          body:
            "There are engine-sound projects that generate tones from RPM and cylinder count, and they're solving a different problem. This one is a library of real recordings, which means the work isn't in the synthesis, it's in making two arbitrary files start at the same instant, sit at comparable levels, and stay in sync long enough that your ear can do the comparing.",
        },
        {
          title: "A URL per pairing",
          body:
            "Every comparison lives at its own route rather than in component state, so the interesting part of the app is linkable. It also means the back button behaves and a comparison can be sent to someone else, which is most of the point of a tool built around an argument about which car sounds better.",
        },
      ]}
    />
  );
}
