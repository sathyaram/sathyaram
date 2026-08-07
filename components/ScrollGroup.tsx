"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactElement } from "react";

type ScrollGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** ms between each child's reveal. */
  step?: number;
  /** ms before the FIRST child reveals. For a group that should follow
   *  something already on screen — the footer's link lists trailing their
   *  column heading, which is its own group and so starts its own clock at 0. */
  offset?: number;
  /** Since the stagger classes are cloned onto the children rather than onto
   *  wrappers (see below), the children have to be legal children of this
   *  element: `ul` is here so a list can stagger its own `li`s without a `div`
   *  illegally sitting between them. */
  as?: "div" | "ul";
};

type ClonableProps = { className?: string; style?: CSSProperties };

/**
 * Fades + rises each direct child into place, staggered, the first time
 * the group scrolls into view (fires once — re-scrolling past it doesn't
 * replay).
 *
 * Clones the stagger class/style/data-attribute directly onto each child
 * rather than wrapping it in a new div. An earlier version wrapped —
 * which broke the featured-work grid, because its asymmetric layout sets
 * `sm:col-span-2`/`sm:col-span-3` on the card itself, and CSS grid-column
 * only has an effect on a *direct* grid child. With a wrapper div in
 * between, the wrapper (unstyled, so `auto`) became the real grid item
 * and the span classes went inert, collapsing every card to one column.
 * Cloning keeps the original element as the direct child, so this only
 * works when each child is a single real element (true for every current
 * use — plain divs and one Link).
 */
export default function ScrollGroup({
  children,
  className,
  step = 90,
  offset = 0,
  as = "div",
}: ScrollGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Lazy-initialized so the reduced-motion case starts already "visible"
  // instead of flipping true via a synchronous setState inside the effect.
  const [visible, setVisible] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  // The per-child transitionDelay below only exists to stagger the one-time
  // reveal. Left in place afterward it also delays every later transition
  // on that element (hover, since these cards use `transition-all`), so
  // hovering a later card in the grid felt laggy. Clear it back out once
  // the reveal has had time to finish.
  const [settled, setSettled] = useState(visible);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    let observer: IntersectionObserver | undefined;

    // The -10% bottom inset holds the reveal back until a group is meaningfully
    // in view rather than just barely clipping the fold. But an element near the
    // END of the document can never clear that band: at maximum scroll its top
    // rests at viewportH - (its own height + whatever document is left below
    // it), and if that lands inside the bottom 10% the observer never reports an
    // intersection and the group is stuck at opacity 0 forever. The footer's
    // last row hit exactly this — 64px tall with 28px below it, so it only
    // intersected on viewports under ~920px and stayed invisible on any taller
    // desktop window. Measure whether the inset is actually reachable and drop
    // it when it isn't, so no group can be permanently hidden by it.
    const start = () => {
      observer?.disconnect();
      const rect = el.getBoundingClientRect();
      const belowInDocument =
        document.documentElement.scrollHeight - (rect.bottom + window.scrollY);
      const topAtMaxScroll = window.innerHeight - (rect.height + belowInDocument);
      const insetIsReachable = topAtMaxScroll < window.innerHeight * 0.9;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          observer?.disconnect();
        },
        { threshold: 0, rootMargin: insetIsReachable ? "0px 0px -10% 0px" : "0px" },
      );
      observer.observe(el);
    };

    start();
    // Reachability depends on the viewport height, so a resize (or a phone
    // rotating) can flip a not-yet-revealed group from reachable to stuck.
    // Re-measure rather than leaving it on the mount-time decision.
    window.addEventListener("resize", start, { passive: true });
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", start);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || settled) return;
    const count = Children.count(children);
    const timeout = setTimeout(
      () => setSettled(true),
      offset + (count - 1) * step + 900,
    );
    return () => clearTimeout(timeout);
  }, [visible, settled, children, step, offset]);

  // Both options are plain block-level elements taking the same props, so
  // narrowing the tag to one of them keeps the ref and prop types concrete —
  // a `"div" | "ul"` union leaves JSX unable to resolve either.
  const Tag = as as "div";

  return (
    <Tag ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const element = child as ReactElement<ClonableProps>;
        return cloneElement(element, {
          className: `scroll-stagger-item ${element.props.className ?? ""}`,
          style: {
            ...element.props.style,
            transitionDelay: settled ? undefined : `${offset + index * step}ms`,
          },
          "data-visible": visible,
        } as ClonableProps & { "data-visible": boolean });
      })}
    </Tag>
  );
}
