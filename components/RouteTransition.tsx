"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// useLayoutEffect warns if it runs during server rendering; fall back to
// useEffect on the server so we don't get a console warning. On the client
// we need the *layout* effect so we can set the "hidden" start state before
// the browser paints — otherwise there's a flash of fully-visible content.
const useBrowserLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useBrowserLayoutEffect(() => {
    // Skip the initial server-rendered paint — only fade on navigation.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // 1. Snap to the hidden start state with no transition...
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    // 2. ...force the browser to commit that frame (reading a layout
    //    property flushes pending style changes)...
    void el.offsetHeight;
    // 3. ...then turn the transition on and go to the visible state.
    el.style.transition = "opacity 400ms ease-out, transform 400ms ease-out";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}
