import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <SocialLinks />
        <div className="flex w-full flex-col items-center gap-2 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-foreground">Sathya Ram</p>
          <p>
            &copy; {new Date().getFullYear()} — Websites, design, and
            photography. ·{" "}
            <Link
              href="/colophon"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Colophon
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
