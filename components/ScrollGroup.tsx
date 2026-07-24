"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactElement } from "react";

type ScrollGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** ms between each child's reveal. */
  step?: number;
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
export default function ScrollGroup({ children, className, step = 90 }: ScrollGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Lazy-initialized so the reduced-motion case starts already "visible"
  // instead of flipping true via a synchronous setState inside the effect.
  const [visible, setVisible] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const element = child as ReactElement<ClonableProps>;
        return cloneElement(element, {
          className: `scroll-stagger-item ${element.props.className ?? ""}`,
          style: { ...element.props.style, transitionDelay: `${index * step}ms` },
          "data-visible": visible,
        } as ClonableProps & { "data-visible": boolean });
      })}
    </div>
  );
}
