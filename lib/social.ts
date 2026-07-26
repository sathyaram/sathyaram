import {
  ResumeIcon,
  EmailIcon,
  LinkedInIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "@/components/icons";

// Shared by the footer ("Elsewhere") and the mobile nav menu, so the two
// stay in sync from one source. `compact` marks the icons that optically
// read larger than the rest at the same box size — the stroke-drawn ones,
// plus the LinkedIn letterforms — so they get sized down wherever rendered.
/** Ways to get in touch or read the CV — not social profiles, so these sit
 *  on their own line rather than mixed in with the platform marks. */
export const contactLinks = [
  { label: "Resume", href: "/resume.pdf", icon: ResumeIcon, compact: true },
  { label: "Email", href: "mailto:sathyatheram@gmail.com", icon: EmailIcon, compact: true },
];

/** Actual profiles, on platforms. */
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathya-ram/", icon: LinkedInIcon, compact: true },
  { label: "Instagram", href: "https://www.instagram.com/sathya.ram", icon: InstagramIcon },
  { label: "Dribbble", href: "https://dribbble.com/sathyaram", icon: DribbbleIcon },
  { label: "Github", href: "https://github.com/sathyaram", icon: GithubIcon },
  { label: "Codepen", href: "https://codepen.io/sathyaram", icon: CodepenIcon },
];
