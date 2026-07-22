import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";

export const metadata: Metadata = {
  title: "Home Planet Fund",
};

export default function HomePlanetFund() {
  return (
    <WebsiteCaseStudy
      title="Home Planet Fund"
      subtitle="Patagonia's greenroots foundation."
      year="2024"
      agency="Teal Media"
      tags={["WordPress", "Custom CSS", "JavaScript"]}
      url="homeplanetfund.org"
      link="https://homeplanetfund.org"
      image="/websites/assets/homeplanet.png"
      description="Home Planet Fund is Patagonia's grassroots climate action fund. Working with Teal Media, I helped build a custom WordPress site with hand-tuned CSS to match Patagonia's distinct brand system across grant and initiative pages."
    />
  );
}
