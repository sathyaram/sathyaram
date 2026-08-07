"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import SocialLinkRow from "./SocialLinkRow";
import { MenuIcon, CloseIcon } from "./icons";
import { contactLinks, socialLinks } from "@/lib/social";

// One-pager: everything lives on the homepage, with individual routes only
// for the website case studies (linked from the homepage cards).
const links = [
  { href: "/about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  // `open` is mount, `closing` is the exit animation playing over the top of
  // it — the panel has to outlive the click that dismissed it or it would
  // vanish on the frame you tap, with no way to animate out.
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar is chromeless at the top and only gains its pill background once
  // you scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Not while the menu is open: the panel is a full-bleed background of its
  // own, so a second translucent pill floating on top of it reads as a stray
  // rectangle around the logo rather than as the nav bar it is when it's over
  // page content.
  const solid = scrolled && !open;

  const closeMenu = useCallback(() => setClosing(true), []);

  // Unmounts the panel once the exit animation is done (see onAnimationEnd
  // below, and the backstop under it).
  const finishClose = useCallback(() => {
    setClosing(false);
    setOpen(false);
  }, []);

  // animationend is the primary signal, so the unmount stays in step with
  // whatever duration the CSS actually says. But it isn't guaranteed to
  // arrive: a backgrounded tab freezes animations at time 0 and fires nothing,
  // so a menu dismissed on the way out of the tab would still be sitting over
  // the page on return. Comfortably longer than the 200ms exit, since this
  // should only ever win when the event doesn't come at all.
  useEffect(() => {
    if (!closing) return;
    const timeout = setTimeout(finishClose, 600);
    return () => clearTimeout(timeout);
  }, [closing, finishClose]);

  useEffect(() => {
    if (!open || closing) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);

    // The panel covers the viewport, so the page behind it shouldn't scroll
    // under it. Restoring the previous value rather than clearing outright
    // leaves body's own `overflow-x: hidden` (globals.css) intact.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // The menu only exists below md. Crossing that line while it's open hides
    // the panel via md:hidden but would leave this lock behind it, with no
    // visible control left to release it — so cross back to the desktop nav
    // properly instead.
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => {
      if (desktop.matches) finishClose();
    };
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, closing, closeMenu, finishClose]);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Same-page hash links don't get a native re-scroll on a second click,
  // since the URL (including the hash) never changes — the browser only
  // scrolls to a fragment when navigating to it for the first time. Scroll
  // manually instead, every time, so repeat clicks keep working.
  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // The mobile menu should close on any nav click regardless of which path
    // below runs — it used to sit at the end, after two early returns, so
    // clicking "Work" while on a page other than "/" (a case study, About,
    // etc.) left the menu open since neither return reached it.
    closeMenu();
    if (pathname !== "/") return;
    const target = document.getElementById("work");
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Deferred a frame rather than scrolled inline: closeMenu() only *starts*
    // the exit, so at this point React hasn't committed it and the effect above
    // still has `overflow: hidden` on the body — a synchronous scroll would be
    // swallowed by it and land nowhere.
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      if (window.location.hash !== "#work") {
        window.history.pushState(null, "", "/#work");
      }
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-6">
        <nav
          className={`mx-auto flex max-w-4xl items-center justify-between rounded-full px-4 py-4 transition-colors duration-300 ${
            solid ? "bg-background/80 backdrop-blur" : "bg-transparent"
          }`}
        >
          <Link
            href="/"
            aria-label="Sathya Ram, home"
            className="logo-link flex items-center animate-[nav-fade-in_600ms_ease-out_both] motion-reduce:animate-none"
          >
            <Logo className="h-7 w-auto text-foreground transition-opacity hover:opacity-80" />
          </Link>

          <ul className="hidden items-center gap-8 animate-[nav-fade-in_600ms_ease-out_100ms_both] motion-reduce:animate-none md:flex">
            {links.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={link.href === "/#work" ? scrollToWork : undefined}
                    aria-current={isActive ? "page" : undefined}
                    // .nav-link lives in globals.css now (was Nav.module.scss).
                    // Its active state keys off aria-current, already set just
                    // above, rather than a second class mirroring the same
                    // thing.
                    className={`nav-link text-base ${
                      isActive ? "text-foreground" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 animate-[nav-fade-in_600ms_ease-out_200ms_both] motion-reduce:animate-none">
            <span className="relative flex items-center">
              <ThemeToggle />
              {/* A tiny planet orbiting the toggle on a plain circular ring. */}
              <span aria-hidden="true" className="logo-orbit">
                <span className="logo-orbit-ring" />
                <span className="logo-orbit-spin">
                  <span className="logo-orbit-planet" />
                </span>
              </span>
            </span>
            {/* Lives in the header, which outranks the panel's z-index, so the
                close control stays on top of the full-screen menu rather than
                being covered by it. */}
            <button
              type="button"
              onClick={() => (open ? closeMenu() : setOpen(true))}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        // `fixed`, not a panel hanging off the header: as a flow child this
        // used to expand the sticky header's height while open, pushing the
        // whole page down — which also broke the "Work" link, since
        // scrollIntoView measured the target while the page was displaced.
        // Taking the full viewport keeps page geometry stable either way, and
        // gives the three links room to be the only thing on screen.
        //
        // A SIBLING of the header, not a child of it, and that placement is
        // what keeps the X clickable. The header is `sticky` with a z-index,
        // so it opens a stacking context: nested inside, the panel's z-40 only
        // ever competes with the header's own children — and it beat the nav
        // bar outright, since that bar isn't positioned and so paints below
        // every positioned descendant no matter how low their z-index. Out
        // here the comparison is the one intended, z-40 against the header's
        // own z-50.
        //
        // onAnimationEnd fires for descendants too (the staggered items
        // below), so the exit only completes when it's the panel's own
        // animation that ended.
        <div
          id="mobile-menu"
          // overflow-y-auto and a py that shrinks on short viewports: the
          // labelled social rows are much taller than the icon strip they
          // replaced, and on a 667px phone the stack plus a fixed py-24 came to
          // more than the viewport. justify-center still centres it whenever
          // there IS room; the scroll only engages when there isn't.
          className={`mobile-menu fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 overflow-y-auto bg-background/95 px-6 py-20 backdrop-blur-xl md:hidden ${
            closing ? "is-closing" : ""
          }`}
          onAnimationEnd={(e) => {
            if (e.target === e.currentTarget && closing) finishClose();
          }}
        >
          {/* Display-sized and centred, one per line — at this scale the label
              itself is the tap target, so the padded full-width rows the old
              dropdown needed to be tappable aren't doing anything here. */}
          <nav aria-label="Menu">
            <ul className="flex flex-col items-center gap-1">
              {links.map((link, i) => {
                const isActive = isLinkActive(link.href);
                return (
                  <li
                    key={link.href}
                    className="mobile-menu-item"
                    style={{ animationDelay: `${100 + i * 70}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={
                        link.href === "/#work" ? scrollToWork : closeMenu
                      }
                      aria-current={isActive ? "page" : undefined}
                      // .mobile-nav-link carries the same sweep-through rule
                      // the desktop links use, scaled up and reduced to a
                      // single underline — two hairlines bracketing 40px type
                      // reads as a box. :active is in the selector alongside
                      // :hover so a tap shows it too, since a touch device
                      // never fires the hover half.
                      className={`mobile-nav-link block px-4 py-2 font-display text-[2.5rem] font-bold leading-tight tracking-[-0.03em] transition-colors hover:text-foreground ${
                        isActive ? "text-foreground" : "text-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* These live in the footer too, but that's a long scroll away on
              mobile — surface them here, as the same labelled rows rather than
              a strip of bare glyphs: an icon alone asks you to recognise a
              brand mark, and "Resume" has no mark to recognise. Contact and
              profiles keep their own groups, same split as the footer.

              One column, left-aligned inside a block that's centred as a
              whole (w-fit + mx-auto), so the icons line up in a column and the
              labels share a left edge — centring each row independently would
              leave both ragged. Every row continues the same stagger the nav
              links started, picking up where they left off. */}
          <div className="mx-auto flex w-fit flex-col gap-5">
            {[contactLinks, socialLinks].map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-3">
                {group.map((item, i) => (
                  <SocialLinkRow
                    key={item.label}
                    {...item}
                    onClick={closeMenu}
                    className="mobile-menu-item"
                    style={{
                      animationDelay: `${
                        100 +
                        (links.length +
                          groupIndex * contactLinks.length +
                          i) *
                          70
                      }ms`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
