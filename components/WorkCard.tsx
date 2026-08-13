import Link from "next/link";
import Image from "next/image";
import Sparkle from "./Sparkle";
import Reveal from "./Reveal";
import { SPRING } from "@/lib/site";

export type WorkCardProps = {
  href: string;
  title: string;
  year: string;
  /** What it was built with, shown next to the year. Kept short — this line
   *  is uppercase at 0.2em tracking, which eats horizontal space fast, and a
   *  full role title ("Front-End Developer") wrapped the kicker on narrow
   *  cards and left a dangling separator behind. */
  tech?: string;
  blurb: string;
  /** Hover-outline colours. Also builds the fill unless `gradient` overrides it. */
  from: string;
  to: string;
  /** Full gradient string, for palettes that don't reduce to two stops. */
  gradient?: string;
  /** Grid-column span, for the asymmetric website grid. Must be prefixed with
   *  the same breakpoint the grid gains its columns at (`lg:`) — a span that
   *  starts earlier than the columns do lands in a one-column grid, where it
   *  spills into implicit zero-width tracks and stops filling the row. */
  span?: string;
  /** Optional: the website cards each carry a cut-out standing in for the
   *  client. Projects have no equivalent artwork yet, and the card is built to
   *  read as finished without one rather than leaving a gap where it would go. */
  image?: string;
  imageScale?: number;
  /** A screenshot of the thing itself, for cards with no cut-out artwork.
   *  Treated completely differently from `image`: that one floats a
   *  transparent object on the gradient, this one sits in the corner as a
   *  framed window into the app, bleeding off the card's edge. */
  screenshot?: string;
  /** Address shown in the screenshot's browser bar. */
  screenshotUrl?: string;
  /** Card height, as Tailwind classes rather than a value — arbitrary-value
   *  utilities have to be static strings, so this can't be interpolated.
   *  Defaults to the website cards' height, which is sized around the artwork
   *  sitting in the lower two-thirds. A card with no artwork wants less: the
   *  copy occupies the top ~140px and everything below it is void. */
  heightClass?: string;
};

/**
 * The homepage work card, shared by Featured Work and Projects so the two
 * grids can't drift apart. Extracted from app/page.tsx when the second grid
 * landed — the markup was already ~90 lines of carefully tuned layering, and
 * copying it would have meant every future fix needing to be made twice.
 */
export default function WorkCard({
  href,
  title,
  year,
  tech,
  blurb,
  from,
  to,
  gradient,
  span = "",
  image,
  imageScale = 1,
  screenshot,
  screenshotUrl,
  heightClass = "min-h-[22rem] sm:min-h-[28rem]",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      style={{ transitionTimingFunction: SPRING }}
      className={`group relative flex flex-col overflow-hidden rounded-[2.5rem] p-9 transition-all duration-500 hover:-translate-y-2 sm:rounded-[4rem] sm:p-12 ${heightClass} ${span}`}
    >
      {/* The brand fill lives on its own layer so hover can dissolve it,
          leaving just the outline with the starfield showing through. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{
          background:
            gradient ?? `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      />

      {/* ...and the same gradient takes over as the outline. Always the
          two-stop pair, even where the fill runs more: the ring is 6px of
          painted edge, and four stops squeezed into it read as mud. */}
      <div
        aria-hidden="true"
        className="gradient-ring pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={
          {
            "--ring-from": from,
            "--ring-to": to,
          } as React.CSSProperties
        }
      />

      {/* A single object standing in for each client, sitting on the
          bottom edge of the card. object-contain (not cover) and no
          clipping frame, so the whole thing is visible and never
          cropped or stretched — these are transparent cut-outs meant
          to float on the gradient, not photos in a window. */}
      {image && (
        <div
          // Centred horizontally via inset-x-0 + mx-auto rather than a
          // translate, so it doesn't fight the hover lift below.
          // The source art is trimmed to its own edges (no transparent
          // padding), so this offset moves the object itself rather than
          // an empty box — it hangs past the card's bottom edge and gets
          // clipped there, so it reads as tucked in behind it.
          className="pointer-events-none absolute inset-x-0 -bottom-[50px] mx-auto h-[58%] w-[58%] transition-transform duration-500 group-hover:-translate-y-2"
          style={{ transitionTimingFunction: SPRING }}
        >
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 640px) 30vw, 58vw"
            // Scaled per-project so each object reads at the right size
            // on its card — a jug and a brain don't fill the same frame
            // at the same scale. Tailwind's arbitrary-value classes have
            // to be static strings, so the number comes in via a CSS var
            // instead of being interpolated into the class name. Grown
            // from the bottom edge (origin-bottom) so it stays planted
            // there instead of drifting off the card as it enlarges;
            // the hover bump stays proportional to the base scale.
            className="origin-bottom scale-[var(--img-scale)] object-contain object-bottom transition-transform duration-500 group-hover:scale-[calc(var(--img-scale)*1.05)]"
            style={
              {
                transitionTimingFunction: SPRING,
                "--img-scale": imageScale,
              } as React.CSSProperties
            }
          />
        </div>
      )}

      <Sparkle className="absolute right-8 top-8 h-7 w-7 translate-y-2 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:right-10 sm:top-10" />

      <div className="relative">
        {/* Same "·" separator the case studies use for their own kicker
            (agency · year) and the stat row uses between stack items. Set a
            step down from the rest of the card at 11px — matching the small-
            label size used on the case studies — so the line reads as
            metadata rather than as content competing with the title. */}
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-500 group-hover:text-foreground/60">
          {tech ? `${year} · ${tech}` : year}
        </p>
        <Reveal
          as="h3"
          // One shared viewport-based size across every card, so the
          // titles all read at the same scale regardless of how wide
          // their grid column is. (An earlier cqw version sized off
          // each card's own width, which made the narrow cards'
          // titles noticeably smaller.) Long titles wrap onto another
          // line rather than shrinking to fit.
          //
          // Light mode: once the fill dissolves on hover, white text
          // would sit straight on the beige page background with
          // barely any contrast, so it swaps to the theme foreground
          // colour instead (near-black in light mode, still
          // effectively white in dark mode).
          className="mt-2 block font-display font-bold leading-[1.05] text-white transition-colors duration-500 group-hover:text-foreground text-[clamp(1.75rem,3vw,2.5rem)]"
          text={title}
        />
        {/* Deliberately one line: enough for a visitor to know what the
            thing is before clicking, short enough that a screen of cards
            still reads as objects rather than paragraphs. Same string as
            the page it opens leads with, so a card can't drift from it. */}
        <p className="card-blurb mt-3 max-w-md text-sm text-white/75 transition-colors duration-500 group-hover:text-foreground/75">
          {blurb}
        </p>
      </div>

      {/* A framed window into the app, running past the card's bottom-right so
          it reads as a screen continuing beyond the frame rather than a picture
          placed inside one. Only the top-left corner is rounded — the other
          three sit outside the card, where rounding is either invisible or
          reads as a seam against the card's own curve.

          In normal flow after the text, NOT absolutely positioned, and that is
          the point. Pinned to the card's bottom, its distance from the blurb
          was whatever the card height minus the text height happened to leave —
          so it drifted with every title length and breakpoint, and the two
          cards in a row disagreed because one title wraps and the other
          doesn't. Placed after the text it simply sits `mt-7` below it, the
          same on every card at every width, and flex-1 lets it absorb the
          leftover height instead of that surplus becoming a gap. Overlap stops
          being something to calculate and becomes impossible.

          The negative margins do the bleeding: they first cancel the card's own
          padding, then carry it past the edge. */}
      {screenshot && (
        <div
          className="pointer-events-none relative -mb-16 -mr-12 ml-auto mt-7 flex min-h-0 w-[82%] flex-1 flex-col overflow-hidden rounded-tl-2xl shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-2 sm:-mb-20 sm:-mr-16 sm:mt-8"
          style={{ transitionTimingFunction: SPRING }}
        >
          {/* Same browser-chrome motif as BrowserMockup on the case studies,
              scaled down — but with fixed dark colours rather than that
              component's theme tokens. Those resolve against the page
              background; here the frame sits on a bright brand gradient, so in
              light mode a themed chrome would come out pale and read as part
              of the card rather than as a window onto something else. */}
          <div className="flex shrink-0 items-center gap-2 bg-[#1b1c20] px-3 py-2">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
            </div>
            {screenshotUrl && (
              <div className="flex-1 truncate rounded bg-white/5 px-2 py-0.5 text-center text-[9px] text-white/45">
                {screenshotUrl}
              </div>
            )}
          </div>
          {/* object-left-top, not object-top: these are ~1600x1060 desktop
              captures in a frame that goes nearly square on a phone, so cover
              has to discard a lot of width. Centred, it took that off both
              edges at once and ate into the left of the UI where each app's
              title and controls sit — the Spring Tuner frame read as "Tuner".
              Anchoring left puts the whole crop on the right instead, which is
              the side already bleeding off the card. */}
          <div className="relative flex-1">
            <Image
              src={screenshot}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 45vw, 75vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      )}
    </Link>
  );
}
