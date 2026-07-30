import {
  ResumeIcon,
  EmailIcon,
  LinkedInIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "@/components/icons";

// Shared by the footer and the mobile nav menu, so the two stay in sync from
// one source. `compact` marks the icons that optically read larger than the
// rest at the same box size — the stroke-drawn ones, plus the LinkedIn
// letterforms — so they get sized down wherever rendered.
//
// Typed explicitly rather than left to inference: with inference, an array
// where no entry happens to set `compact` gets a type without that property
// at all, and every consumer reading `compact` fails to compile. Which is
// exactly what happened when LinkedIn — the only compact entry in
// socialLinks — moved over to contactLinks.
export type SocialLink = {
  label: string;
  href: string;
  icon: (props: { className?: string }) => React.ReactElement;
  compact?: boolean;
};
/** Ways to actually reach me, plus the CV. LinkedIn belongs here rather than
 *  with the platform marks below: it's how people make professional contact,
 *  not somewhere I post work. */
export const contactLinks: SocialLink[] = [
  { label: "Email", href: "mailto:sathyatheram@gmail.com", icon: EmailIcon, compact: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathya-ram/", icon: LinkedInIcon, compact: true },
  { label: "Resume", href: "/resume.pdf", icon: ResumeIcon, compact: true },
];

/** Places I post work. */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/sathya.ram", icon: InstagramIcon },
  { label: "Dribbble", href: "https://dribbble.com/sathyaram", icon: DribbbleIcon },
  { label: "Github", href: "https://github.com/sathyaram", icon: GithubIcon },
  { label: "Codepen", href: "https://codepen.io/sathyaram", icon: CodepenIcon },
];
