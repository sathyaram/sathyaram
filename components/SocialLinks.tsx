import {
  ResumeIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "./icons";

const links = [
  { label: "Resume", href: "/resume.pdf", icon: ResumeIcon, brand: "resume" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sathya.ram",
    icon: InstagramIcon,
    brand: "instagram",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/sathyaram",
    icon: DribbbleIcon,
    brand: "dribbble",
  },
  {
    label: "Github",
    href: "https://github.com/sathyaram",
    icon: GithubIcon,
    brand: "github",
  },
  {
    label: "Codepen",
    href: "https://codepen.io/sathyaram",
    icon: CodepenIcon,
    brand: "codepen",
  },
] as const;

export default function SocialLinks() {
  return (
    <nav aria-label="Elsewhere" className="flex items-center justify-center">
      {links.map(({ label, href, icon: Icon, brand }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          data-brand={brand}
          className="social-link"
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
