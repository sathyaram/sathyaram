"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./icons";
import styles from "./Nav.module.scss";

const links = [
  { href: "/about", label: "About" },
  { href: "/websites", label: "Websites" },
  { href: "/designs", label: "Designs" },
  { href: "/photography", label: "Photography" },
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
        <Link href="/" className="font-display text-lg font-semibold">
          Sathya Ram
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.link} ${isActive ? styles.active : ""} text-sm ${
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
