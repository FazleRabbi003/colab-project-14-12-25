import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GrowthFlux. Book a free 30-minute performance marketing audit and discover how we can scale your business.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-pad bg-dark">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
