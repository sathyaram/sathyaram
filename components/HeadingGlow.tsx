"use client";

import { useEffect } from "react";

// Section headings light up while they sit in a strip near the top of the
// viewport, then unlight once they scroll out of it. The band is a fraction
// of the viewport height (not fixed px) so it scales with the screen: a
// heading glows while its top is between ~4% and 30% down from the top.
// This toggles the `is-lit` class on every [data-glow-heading]; the actual
// glow lives in globals.css (.heading-glow / .dark .heading-glow.is-lit).
const BAND_TOP_RATIO = 0.04;
const BAND_BOTTOM_RATIO = 0.3;

export default function HeadingGlow() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const bandTop = vh * BAND_TOP_RATIO;
      const bandBottom = vh * BAND_BOTTOM_RATIO;
      document
        .querySelectorAll<HTMLElement>("[data-glow-heading]")
        .forEach((el) => {
          const { top } = el.getBoundingClientRect();
          el.classList.toggle("is-lit", top > bandTop && top < bandBottom);
        });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
