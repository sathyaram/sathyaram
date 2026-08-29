/**
 * The three things I offer, in one place because two things read them now:
 * the homepage cards and the Person schema in app/layout.tsx, which
 * advertises them to search engines as `makesOffer`. Same reasoning as
 * lib/websites.ts — a list two consumers share can't be allowed to drift,
 * and a service described one way to visitors and another way to Google is
 * exactly the kind of drift nobody notices.
 */
export type Service = {
  emoji: string;
  emojiBack: string;
  title: string;
  blurb: string;
  flipDuration: string;
  flipDelay: string;
};

export const services: Service[] = [
  {
    emoji: "💻",
    emojiBack: "⚡",
    title: "Development",
    blurb:
      "React, Next.js, and WordPress builds with polished interactions and purposeful animation.",
    flipDuration: "11s",
    flipDelay: "0.8s",
  },
  {
    emoji: "🎨",
    emojiBack: "✨",
    title: "Design",
    blurb:
      "Logos, interfaces, and design systems crafted with clarity, purpose, and attention to detail.",
    flipDuration: "13s",
    flipDelay: "4.2s",
  },
  {
    emoji: "📷",
    emojiBack: "🌄",
    title: "Photography",
    blurb:
      "Expressive portraiture and cinematic imagery that feels natural, vibrant, and distinctly human.",
    flipDuration: "15s",
    flipDelay: "2.4s",
  },
];
