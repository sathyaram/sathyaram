import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Vilcek",
};

export default function Vilcek() {
  return (
    <WebsiteCaseStudy
      title="Vilcek Foundation"
      subtitle="A celebration of immigrants & the arts."
      year="2020"
      agency="ForumOne"
      tags={["WordPress", "JavaScript", "Styled Components"]}
      url="vilcek.org"
      link="https://vilcek.org"
      image="/websites/assets/vilcek.png"
      description="The Vilcek Foundation celebrates the contributions of immigrants to American arts and sciences. Working with ForumOne, I built custom WordPress components for their grant and award programs, including interactive profile layouts for honorees."
    />
  );
}
