import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Spring Tuner",
  description:
    "A feel-first spring easing generator for CSS. Drag two sliders, watch six real components move, copy pure CSS built on the linear() timing function.",
};

export default function SpringTuner() {
  return (
    <CaseStudy
      section="projects"
      slug="springtuner"
      title="Spring Tuner"
      subtitle="Spring easing for CSS, tuned by feel: drag two sliders, watch real components move, copy pure CSS."
      year="2026"
      gradientFrom="#12305f"
      gradientTo="#7dd3fc"
      // Hosted here rather than on its own domain, so the "visit it" button
      // points at a path on this site. Same treatment as the client work's
      // live-site button — it's still leaving the case study for the real
      // thing, which is the only distinction that button is drawing.
      url="sathyaram.com/springtuner"
      link="/springtuner"
      description="A spring easing generator that you tune by watching rather than by reading numbers. Two sliders drive six real UI components, and the output is plain CSS — no animation library at the other end."
      stats={[
        { label: "Stack", value: "Next.js · CSS linear()" },
        { label: "Type", value: "Personal Project" },
        { label: "Year", value: "2026" },
      ]}
      overview={[
        "CSS transition timing historically couldn't overshoot. cubic-bezier is confined to a monotonic ease, so anything with real spring physics — the small bounce past the target and back — meant reaching for a JavaScript animation library.",
        "The linear() timing function changed that. It accepts a list of sampled points, so a spring curve can be solved ahead of time and handed to CSS as data. Spring Tuner is the tool for producing that list: tune the motion until it feels right, then take the CSS.",
      ]}
      contributions={[
        "Built the curve solver that samples spring physics into a linear() point list",
        "Designed the two-slider control scheme, so tuning is a feel exercise rather than a physics one",
        "Wrote a six-component preview grid so a curve can be judged on real UI instead of a bouncing square",
        "Added a curve graph and an export panel for reading the maths behind whatever was tuned by eye",
      ]}
      highlights={[
        {
          title: "Feel first, numbers second",
          body:
            "Stiffness and damping are the wrong handles for most people, because neither maps cleanly onto what you're trying to achieve — you want to know whether it feels snappy or loose, not what its damping ratio is. The sliders are arranged around the felt qualities, and the graph and numeric output are there afterward for anyone who does want them.",
        },
        {
          title: "Six previews, because one lies",
          body:
            "A curve that looks great on a bouncing ball can feel wrong on a modal, a toggle, or a list item, because the distance travelled and the element's size change how the same overshoot reads. Showing six different components moving on one curve at once is the fastest way to catch a setting that only works in isolation.",
        },
        {
          title: "The output is just CSS",
          body:
            "The whole point is leaving with nothing attached. What you copy is a transition-timing-function that runs anywhere CSS runs, with no runtime, no dependency, and no bundle cost — which is the argument for linear() over shipping a spring library in the first place.",
        },
      ]}
    />
  );
}
