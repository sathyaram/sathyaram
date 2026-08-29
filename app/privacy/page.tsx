import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Reveal from "@/components/Reveal";
import ScrollGroup from "@/components/ScrollGroup";

export const metadata: Metadata = pageMetadata({
  title: "Privacy",
  description:
    "What sathyaram.com collects, why, and who else can see it. Short version: a contact form that emails me, and anonymous analytics.",
  path: "/privacy",
});

/** Shown in the page and in the JSON-LD below, so the two can't disagree. */
const UPDATED = "August 13, 2026";

const EMAIL = "sathyatheram@gmail.com";

/**
 * Written against what the code actually does, not against a template:
 * the contact route (app/api/contact/route.ts) hands four fields to Resend
 * and keeps nothing, the theme toggle writes localStorage rather than a
 * cookie, and next/font self-hosts both typefaces at build time so no
 * visitor request ever reaches Google Fonts. Anything that changes on that
 * list needs changing here the same day — a privacy policy that describes
 * an older version of the site is worse than none.
 */
type Section = { heading: string; body: string[] };

const sections: Section[] = [
  {
    heading: "The short version",
    body: [
      "This is a personal portfolio. There are no ads, no trackers beyond analytics, no newsletter, and no accounts. Nothing here is sold or shared with anyone for marketing, and there is no database of visitors — because there is no database at all.",
    ],
  },
  {
    heading: "When you use the contact form",
    body: [
      "The form asks for your name, email address, subject, and message. Those four fields are passed to Resend, an email delivery service, which sends them to my personal inbox. They are not written to a database, a spreadsheet, or a log — this site has no storage to put them in.",
      "From then on your message lives in my email like any other message, and I keep it as long as the conversation is useful. Ask me to delete it and I will.",
      "The form also contains a hidden field that real visitors never see. If it gets filled in, the submission is discarded as automated. It collects nothing about you.",
    ],
  },
  {
    heading: "Analytics",
    body: [
      "This site uses Google Analytics 4 to count visits and see which pages get read. It sets cookies in your browser and collects the usual things: pages viewed, roughly where in the world you are (derived from your IP address, not stored as your IP), your browser, and your device type.",
      "I use it to know whether the work is being seen. I do not use it to identify individuals, and I have never tried to.",
      "You can opt out entirely with Google's browser add-on, or by blocking analytics in your browser or an extension. The site works exactly the same either way.",
    ],
  },
  {
    heading: "Hosting",
    body: [
      "The site is hosted by Vercel, which keeps standard server logs — IP address, timestamp, the page requested — for security and reliability. That is ordinary web-server behaviour and applies to every site you visit, here included.",
    ],
  },
  {
    heading: "What stays on your device",
    body: [
      "Your light or dark mode choice is saved in your browser's local storage. It is not a cookie, it is never sent to the server, and I cannot read it. Clearing your browser data removes it.",
      "The typefaces are served from this domain rather than from Google Fonts, so loading a page here does not tell Google you visited.",
    ],
  },
  {
    heading: "Other people's services",
    body: [
      "Three companies can see data as a result of you using this site: Vercel hosts it, Resend delivers contact-form messages, and Google provides analytics. Each has its own privacy policy, and each processes that data on my behalf rather than for their own purposes.",
      "Links out to client sites, GitHub, LinkedIn and the like are ordinary links. Once you follow one you are on someone else's site under someone else's policy.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Wherever you live, you can ask me what I hold about you, ask for a copy, or ask me to delete it. In practice that means searching my email for your messages, and I will do it on request.",
      "If you are in the UK or EU, the legal basis for the contact form is your consent — you chose to write to me — and for analytics it is my legitimate interest in understanding how the site is used. If you are in California, I do not sell or share personal information as those terms are defined by the CCPA, and I never have.",
    ],
  },
  {
    heading: "Children",
    body: [
      "This site is aimed at people looking to hire a developer and designer. It is not directed at children, and I do not knowingly collect anything from them.",
    ],
  },
  {
    heading: "Changes",
    body: [
      "If what the site collects changes, this page changes with it and the date below moves. There is no mailing list to notify, so the date is the honest signal.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal
          as="h1"
          className="block text-center font-display font-bold leading-[1.05] tracking-[-0.035em] text-logo-blue text-[clamp(2.5rem,7.4vw,5.75rem)]"
          text="Privacy"
        />
        <p className="mt-4 text-center text-muted">
          What this site collects, why, and who else can see it. Last updated{" "}
          {UPDATED}.
        </p>

        {sections.map((section) => (
          <ScrollGroup key={section.heading} className="mt-12">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted transition-all duration-700">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-foreground transition-all duration-700"
              >
                {paragraph}
              </p>
            ))}
          </ScrollGroup>
        ))}

        <ScrollGroup className="mt-12">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted transition-all duration-700">
            Asking me anything about this
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground transition-all duration-700">
            Email{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-logo-blue underline underline-offset-4"
            >
              {EMAIL}
            </a>
            , or use the{" "}
            <Link
              href="/contact"
              className="text-logo-blue underline underline-offset-4"
            >
              contact form
            </Link>
            . A real person reads both.
          </p>
        </ScrollGroup>
      </div>
    </div>
  );
}
