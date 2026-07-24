import {
  ResumeIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "@/components/icons";

// Shared by the footer ("Elsewhere") and the mobile nav menu, so the two
// stay in sync from one source.
export const socialLinks = [
  { label: "Resume", href: "/resume.pdf", icon: ResumeIcon },
  { label: "Instagram", href: "https://www.instagram.com/sathya.ram", icon: InstagramIcon },
  { label: "Dribbble", href: "https://dribbble.com/sathyaram", icon: DribbbleIcon },
  { label: "Github", href: "https://github.com/sathyaram", icon: GithubIcon },
  { label: "Codepen", href: "https://codepen.io/sathyaram", icon: CodepenIcon },
];
