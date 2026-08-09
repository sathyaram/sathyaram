import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Harry Potter Spellbook",
  description:
    "A fan-made grimoire: eighty-eight spells with incantations, plus wand-gesture practice, spell effects and an ambient score. Built with Next.js and Tailwind.",
};

export default function Spellbook() {
  return (
    <CaseStudy
      section="projects"
      slug="spellbook"
      title="Harry Potter Spellbook"
      subtitle="A fan-made grimoire of eighty-eight spells, with a wand you can actually practise the gestures on."
      year="2026"
      gradientFrom="#05060c"
      gradientTo="#c39a2e"
      // Hosted here rather than on its own domain. The live route uses the
      // app's full name rather than this page's shorter slug — see the note on
      // EMBEDDED_APPS in next.config.ts.
      url="sathyaram.com/harrypotterspellbook"
      link="/harrypotterspellbook"
      description="A reference for eighty-eight spells that didn't want to stay a reference. Alongside the incantations and effects, each spell has a wand gesture you can practise, scored against the movement it expects."
      stats={[
        { label: "Stack", value: "Next.js · Canvas · Tailwind" },
        { label: "Spells", value: "88" },
        { label: "Year", value: "2026" },
      ]}
      overview={[
        "It began as a straightforward reference — eighty-eight spells, their incantations, and what each one does. That part is a data problem, and it was finished quickly.",
        "The interesting half is the practice mode. Every spell carries a wand gesture, and the app scores how closely you trace it, which turns a lookup table into something you interact with. The night sky, the ambient score, and the spell effects exist to make that feel like the right setting for it rather than a form with a canvas in it.",
      ]}
      contributions={[
        "Modelled eighty-eight spells as structured data — incantation, effect, and the gesture each one expects",
        "Built the gesture practice overlay, scoring a traced wand movement against the target path",
        "Wrote the per-spell effect layer so casting resolves into something visible",
        "Added the ambient score and animated night sky that set the scene without stealing from it",
      ]}
      highlights={[
        {
          title: "Scoring a gesture is a fuzzy problem",
          body:
            "Nobody traces the same path twice, so comparing a drawn stroke to a target can't be a coordinate-by-coordinate diff — that fails everyone. The scoring has to tolerate scale, position and speed while still catching a genuinely wrong shape, which is the whole difficulty of the feature and the reason it's the part worth talking about.",
        },
        {
          title: "Atmosphere on a budget",
          body:
            "A night sky and an ambient score are easy to do expensively. Both are built to sit underneath the actual content without competing for frames — the sky is generated rather than a video, and the score is opt-in, because unprompted audio is a good way to get a tab closed.",
        },
        {
          title: "Clearly fan-made",
          body:
            "It labels itself a fan-made grimoire in the footer, uses none of the films' assets, and takes its visual language from parchment and gold rather than from anyone's brand. Worth being deliberate about on a project built around someone else's world.",
        },
      ]}
    />
  );
}
