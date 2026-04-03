import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ProcessSection from "@/components/services/ProcessSection";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Performance marketing services including paid media (PPC), SEO, analytics, CRO, social media ads, and email marketing. Based in London, serving UK & global brands.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
