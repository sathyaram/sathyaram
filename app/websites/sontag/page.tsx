import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Sontag",
};

export default function Sontag() {
  return (
    <WebsiteCaseStudy
      title="The Sontag Foundation"
      subtitle="The definitive enterprise for brain cancer research."
      year="2021"
      agency="Push10"
      tags={["WordPress", "JavaScript", "Styled Components"]}
      url="sontagfoundation.org"
      link="https://sontagfoundation.org"
      image="/websites/assets/sontag.png"
      description="The Sontag Foundation funds brain cancer research fellowships across the country. Working with Push10, I helped build a custom WordPress site focused on presenting grantee research and foundation initiatives clearly and accessibly."
    />
  );
}
