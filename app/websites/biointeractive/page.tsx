import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "HHMI BioInteractive",
};

export default function Biointeractive() {
  return (
    <WebsiteCaseStudy
      title="HHMI BioInteractive"
      subtitle="Netflixing science, for kids."
      year="2020"
      agency="ForumOne"
      gradientFrom="#5C1A1A"
      gradientTo="#F2B880"
      url="biointeractive.org"
      link="https://biointeractive.org"
      image="/websites/assets/howie.png"
      description="HHMI's BioInteractive brings free science education resources to classrooms. Working with ForumOne, I helped build custom Drupal 8 components and JavaScript-driven interactives designed to make complex science genuinely engaging for students."
      stats={[
        { label: "Timeline", value: "5 months" },
        { label: "Role", value: "Front-End Developer" },
        { label: "Stack", value: "Drupal 8 · JavaScript" },
      ]}
      overview={[
        "BioInteractive's whole premise is that science content shouldn't feel like a textbook — it should feel like something you'd actually want to click into. That meant the front end had to carry a lot of the personality: real interactivity, not just video embeds and PDFs.",
        "Working with ForumOne, I built the Drupal 8 templating and the JavaScript layer behind the interactive modules — quizzes, simulations, guided walkthroughs — used across hundreds of lesson pages for classrooms.",
      ]}
      contributions={[
        "Built custom Drupal 8 components for interactive science modules",
        "Developed the front-end JS behind classroom interactives — quizzes, simulations, guided walkthroughs",
        "Coded the responsive HTML/CSS layout for the resource library and lesson pages",
        "Implemented keyboard and screen-reader accessibility across the interactive modules",
      ]}
      highlights={[
        {
          title: "Interactives that work without a mouse",
          body:
            "A simulation you can only operate by dragging is a simulation half a classroom can't use. Every interactive module — quizzes, guided walkthroughs, the drag-based simulations — got a full keyboard path and live-region announcements, so progress and feedback are spoken aloud rather than only shown. In a product built for schools, that isn't a nice-to-have; it's whether the resource is usable at all.",
        },
        {
          title: "One module pattern, hundreds of lessons",
          body:
            "Rather than hand-building each interactive, I built a small set of Drupal 8 components with a shared JavaScript initialization layer. Educators configure a module's content in Drupal and the front end wires up state, validation, and feedback automatically — which is how the same handful of patterns covers hundreds of lesson pages.",
        },
        {
          title: "Progressive enhancement, on purpose",
          body:
            "School networks are slow and sometimes hostile to JavaScript. The lesson pages render their content server-side first and layer interactivity on top, so if a script fails or is blocked, students still get the material — just without the quiz. Degrading to 'readable' beats degrading to 'blank'.",
        },
      ]}
      codeFilename="quiz-module.js"
      codeLines={[
        [{ text: "// quiz-module.js — cell division quiz", type: "comment" }],
        [{ text: "document" }, { text: ".querySelectorAll(" }, { text: "\".quiz__option\"", type: "string" }, { text: ").forEach((option) => {" }],
        [{ text: "  option.addEventListener(" }, { text: "\"click\"", type: "string" }, { text: ", () => {" }],
        [{ text: "    const", type: "keyword" }, { text: " correct = option.dataset.correct === " }, { text: "\"true\"", type: "string" }, { text: ";" }],
        [{ text: "    option.classList.toggle(" }, { text: "\"quiz__option--correct\"", type: "string" }, { text: ", correct);" }],
        [{ text: "    announceResult(correct);" }],
        [{ text: "  });" }],
        [{ text: "});" }],
      ]}
    />
  );
}
