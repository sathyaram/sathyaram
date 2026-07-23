import {
  ResumeIcon,
  InstagramIcon,
  DribbbleIcon,
  GithubIcon,
  CodepenIcon,
} from "./icons";

const brandLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sathya.ram",
    icon: InstagramIcon,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/sathyaram",
    icon: DribbbleIcon,
  },
  {
    label: "Github",
    href: "https://github.com/sathyaram",
    icon: GithubIcon,
  },
  {
    label: "Codepen",
    href: "https://codepen.io/sathyaram",
    icon: CodepenIcon,
  },
] as const;

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link gap-2 rounded-full border border-border px-4 py-2 text-sm"
      >
        <ResumeIcon className="h-4 w-4" />
        Resume
      </a>

      <nav aria-label="Elsewhere" className="flex items-center gap-1">
        {brandLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="icon-link h-10 w-10 rounded-full hover:bg-foreground/5"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
      </nav>
    </div>
  );
}
