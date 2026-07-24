import Link from "next/link";
import {
  ResumeIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "./icons";

const elsewhere = [
  { label: "Resume", href: "/resume.pdf", icon: ResumeIcon },
  { label: "Instagram", href: "https://www.instagram.com/sathya.ram", icon: InstagramIcon },
  { label: "Dribbble", href: "https://dribbble.com/sathyaram", icon: DribbbleIcon },
  { label: "Github", href: "https://github.com/sathyaram", icon: GithubIcon },
  { label: "Codepen", href: "https://codepen.io/sathyaram", icon: CodepenIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <nav
          aria-label="Elsewhere"
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
        >
          {elsewhere.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-foreground transition-opacity hover:opacity-80"
            >
              {/* Solid brand blue in light mode; the same gradient as the
                  logo mark in dark mode, animated the same way the
                  Services/Work/Photography kickers pan (see
                  .icon-gradient-fill/-stroke + the gradient's own
                  <animateTransform> in layout.tsx). Resume is a line icon
                  so it renders a touch bigger than the filled brand marks
                  at the same box size — sized down slightly to sit
                  visually inline. The label doesn't gradiate — it just
                  tracks the theme foreground colour. */}
              <Icon className={label === "Resume" ? "h-6 w-6" : "h-7 w-7"} />
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border px-6 py-4">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-center text-xs text-muted sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Sathya Ram. All rights reserved.</p>
          <Link
            href="/colophon"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Colophon
          </Link>
        </div>
      </div>
    </footer>
  );
}
