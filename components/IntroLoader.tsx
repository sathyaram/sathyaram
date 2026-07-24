"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "./Logo";

// Layout effect on the client (so the overlay is gone before paint on return
// visits), plain effect on the server to avoid the SSR warning.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function IntroLoader() {
  // Rendered on the server so the overlay covers the very first paint; the
  // effect below decides whether it actually plays.
  const [phase, setPhase] = useState<"intro" | "done">("intro");

  useIsomorphicLayoutEffect(() => {
    // TEMPORARY: playing on every load (including client-side nav back to
    // "/") so it's easy to review. Restore the sessionStorage gate below —
    // play once per tab session — before shipping:
    //
    //   let seen = false;
    //   try { seen = sessionStorage.getItem("intro-seen") === "1"; } catch {}
    //   if (seen) { setPhase("done"); return; }
    //   try { sessionStorage.setItem("intro-seen", "1"); } catch {}

    const html = document.documentElement;
    const previousOverflow = document.body.style.overflow;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hold the reveal animations until the panels start clearing, and lock
    // scroll so the page can't move under the overlay.
    html.classList.add("intro-playing");
    document.body.style.overflow = "hidden";

    const revealAt = reduce ? 0 : 2100;
    const doneAt = reduce ? 0 : 3300;

    const releaseReveals = setTimeout(
      () => html.classList.remove("intro-playing"),
      revealAt,
    );
    const finish = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = previousOverflow;
    }, doneAt);

    return () => {
      clearTimeout(releaseReveals);
      clearTimeout(finish);
      html.classList.remove("intro-playing");
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="intro" aria-hidden="true">
      <span className="intro-panel" />
      <span className="intro-panel" />
      <span className="intro-panel" />
      <span className="intro-panel" />
      <div className="intro-logo">
        <Logo className="h-auto w-full" />
      </div>
    </div>
  );
}
