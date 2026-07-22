"use client";

import { useSyncExternalStore } from "react";
import { getTheme, getServerTheme, setTheme, subscribeTheme } from "@/lib/theme";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      suppressHydrationWarning
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
