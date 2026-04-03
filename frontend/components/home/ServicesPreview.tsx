"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: "📈",
    title: "Paid Media & PPC",
    description: "Google, Meta, LinkedIn, TikTok — we build high-performance campaigns that convert at scale with unmatched precision.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn"],
    href: "/services#paid-media",
  },
  {
    icon: "🔍",
    title: "SEO & Content",
    description: "Technical SEO, authority building, and content strategies that drive compounding organic traffic and long-term ROI.",
    tags: ["Technical SEO", "Link Building", "Content"],
    href: "/services#seo",
  },
  {
    icon: "📊",
    title: "Analytics & Data",
    description: "Full-funnel attribution, custom dashboards, and actionable insights that remove guesswork from your marketing.",
    tags: ["GA4", "Looker Studio", "Attribution"],
    href: "/services#analytics",
  },
  {
    icon: "🎯",
    title: "Conversion Optimisation",
    description: "A/B testing, landing page design, and UX improvements that turn more of your traffic into paying customers.",
    tags: ["A/B Testing", "Landing Pages", "UX"],
    href: "/services#cro",
  },
  {
    icon: "📱",
    title: "Social Media Ads",
    description: "Creative-led paid social campaigns on Meta, TikTok, and Pinterest that stop the scroll and drive real results.",
    tags: ["Meta Ads", "TikTok Ads", "Creatives"],
    href: "/services#social",
  },
  {
    icon: "✉️",
    title: "Email Marketing",
    description: "Automated flows, segmentation, and lifecycle campaigns that nurture leads and maximise customer lifetime value.",
    tags: ["Klaviyo", "Automation", "CRM"],
    href: "/services#email",
  },
];

export default function ServicesPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-pad bg-dark relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] blur-[120px] pointer-events-none" />

      <div className="container-site">
        <SectionHeader
          badge="What We Do"
          title="Services Built for"
          titleHighlight="Performance"
          subtitle="From first click to loyal customer — we manage every lever of your digital growth engine."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full card-glass p-7 transition-all duration-300 hover:border-gold/25 hover:shadow-card-hover">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-smoke text-sm leading-relaxed mb-5">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] text-smoke border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
