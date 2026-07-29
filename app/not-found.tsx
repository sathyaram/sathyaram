import Link from "next/link";
import Reveal from "@/components/Reveal";
import Sparkle from "@/components/Sparkle";

// Springy overshoot easing — same constant the homepage cards and CTA use.
const SPRING = "cubic-bezier(0.175,0.885,0.32,1.275)";

/**
 * Catches every unmatched URL for the whole app (the root not-found has done
 * this since Next 13.3), and inherits the root layout — so the starfield,
 * nav and footer all come along for free rather than needing to be rebuilt
 * here. Leans into the site's own space theme instead of being a generic
 * error page: a lost-in-space gag, the same sparkle flourish as the hero,
 * and both an escape hatch home and a nudge toward the actual work.
 */
export default function NotFound() {
  return (
    <div className="relative px-6 py-24 text-center sm:py-32">
      {/* Same decorative sparkles as the hero, asymmetrically placed. The
          wrapper span does the pop-in, the Sparkle keeps the float loop —
          they can't share an element since both animate transform. */}
      <span
        className="sparkle-pop absolute right-[12%] top-[8%] hidden motion-reduce:animate-none sm:block"
        style={{ animationDelay: "450ms" }}
      >
        <Sparkle className="h-10 w-10 animate-[sparkle-float_6s_ease-in-out_infinite] text-sparkle motion-reduce:animate-none sm:h-12 sm:w-12 dark:text-white" />
      </span>
      <span
        className="sparkle-pop absolute left-[10%] top-[38%] hidden motion-reduce:animate-none sm:block"
        style={{ animationDelay: "600ms" }}
      >
        <Sparkle className="h-8 w-8 animate-[sparkle-float_7s_ease-in-out_infinite] text-sparkle [animation-delay:-2s] motion-reduce:animate-none dark:text-white" />
      </span>

      <div className="mx-auto max-w-xl">
        <Reveal
          as="h1"
          segments={[{ text: "404", className: "gradient-text-name" }]}
          className="block font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(4rem,14vw,9rem)]"
        />

        {/* .load-rise, not a ScrollGroup: every element on a 404 sits above
            the fold, so a scroll-triggered reveal might never fire at all —
            a visitor who lands here and doesn't scroll would just see the
            content missing. Same 28px/700ms rise as the scroll reveals
            elsewhere, staggered by inline delay, but keyed to load. The
            delays continue past the <h1>'s own per-letter Reveal so the
            whole page reads as one sequence. */}
        <p
          className="load-rise font-script leading-none text-foreground dark:text-logo-blue gradient-text-name text-[clamp(2rem,6vw,3rem)] pb-1 sm:pb-2"
          style={{ animationDelay: "260ms" }}
        >
          Lost in space
        </p>
        <p
          className="load-rise mt-4 text-muted"
          style={{ animationDelay: "360ms" }}
        >
          This page drifted off somewhere. The rest of the site is still right
          here, though.
        </p>
        <div
          className="load-rise mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "460ms" }}
        >
          <Link
            href="/"
            className="inline-block rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            style={{ transitionTimingFunction: SPRING }}
          >
            Back Home
          </Link>
          <Link
            href="/#work"
            className="inline-block rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60"
            style={{ transitionTimingFunction: SPRING }}
          >
            See the Work
          </Link>
        </div>
      </div>
    </div>
  );
}
