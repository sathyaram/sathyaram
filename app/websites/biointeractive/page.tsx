import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "HHMI BioInteractive",
};

export default function Biointeractive() {
  return (
    <WebsiteCaseStudy
      title="HHMI BioInteractive"
      subtitle="Netflixing science, for kids."
      year="2020"
      agency="ForumOne"
      tags={["Drupal 8", "JavaScript", "Styled Components"]}
      url="biointeractive.org"
      link="https://biointeractive.org"
      image="/websites/assets/howie.png"
      description="HHMI's BioInteractive brings free science education resources to classrooms. Working with ForumOne, I helped build custom Drupal 8 components and JavaScript-driven interactives designed to make complex science genuinely engaging for students."
    />
  );
}
