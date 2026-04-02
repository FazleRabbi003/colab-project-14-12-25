import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GrowthFlux is London's elite performance marketing agency. Founded in 2019, we're a team of 28 data-driven specialists obsessed with measurable ROI.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
