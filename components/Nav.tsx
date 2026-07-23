"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { MenuIcon, CloseIcon } from "./icons";
import styles from "./Nav.module.scss";

// The site reads as a one-pager now: Websites, Photography and Designs all
// live on the homepage. Their routes still exist (case studies are linked
// from the homepage cards), they're just not in the nav.
const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isLinkActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-border bg-background/80 px-6 py-2 backdrop-blur">
        <Link href="/" aria-label="Sathya Ram — home" className="flex items-center">
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
