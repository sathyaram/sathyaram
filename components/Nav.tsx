"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./icons";
import styles from "./Nav.module.scss";

// One-pager: everything lives on the homepage, with individual routes only
// for the website case studies (linked from the homepage cards).
const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar is chromeless at the top and only gains its pill background once
  // you scroll (or when the mobile menu is open, so it stays legible).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-4xl items-center justify-between rounded-full border px-4 py-2 transition-colors duration-300 ${
          solid
            ? "border-border bg-background/80 backdrop-blur"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" aria-label="Sathya Ram — home" className="logo-link flex items-center">
          <Logo className="h-7 w-auto text-foreground transition-opacity hover:opacity-80" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.link} ${isActive ? styles.active : ""} text-base ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-4xl rounded-2xl border border-border bg-background p-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={isActive ? "font-medium text-foreground" : "text-muted"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
