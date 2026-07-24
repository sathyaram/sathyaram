"use client";

import { Children, useEffect, useRef, useState } from "react";

type ScrollGroupProps = {
  children: React.ReactNode;
  className?: string;
  /** ms between each child's reveal. */
  step?: number;
};

/**
 * Fades + rises each direct child into place, staggered, the first time
 * the group scrolls into view (fires once — re-scrolling past it doesn't
 * replay). Each child is wrapped in its own div, so this only changes
 * layout if a parent grid/flex relies on a specific element being the
 * *direct* child rather than any block-level box — true for the grids
 * this is used on.
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
      {Children.map(children, (child, index) => (
        <div
          className="scroll-stagger-item"
          data-visible={visible}
          style={{ transitionDelay: `${index * step}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
