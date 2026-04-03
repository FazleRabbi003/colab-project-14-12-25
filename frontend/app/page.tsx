import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import ServicesPreview from "@/components/home/ServicesPreview";
import ResultsSection from "@/components/home/ResultsSection";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <MarqueeStrip />
      <ServicesPreview />
      <ResultsSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
