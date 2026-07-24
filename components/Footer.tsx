import Link from "next/link";
import Logo from "./Logo";
import {
  ResumeIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "./icons";

const navigate = [
  { href: "/about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-7">
        <Link
          href="/"
          aria-label="Sathya Ram — home"
          className="logo-link flex items-center"
        >
          <Logo className="h-6 w-auto text-foreground" />
        </Link>

        <nav aria-label="Footer" className="flex items-center gap-6">
          {navigate.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {elsewhere.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
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
