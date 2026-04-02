"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const services = [
  {
    id: "paid-media",
    icon: "📈",
    title: "Paid Media & PPC",
    tagline: "Maximum return on every pound spent.",
    description:
      "We build, manage, and optimise paid advertising campaigns across Google, Meta, LinkedIn, TikTok, and more. From keyword strategy to creative testing — we handle the entire lifecycle with obsessive attention to performance.",
    features: [
      "Google Search, Shopping & Performance Max",
      "Meta (Facebook & Instagram) Ads",
      "LinkedIn B2B Campaigns",
      "TikTok & YouTube Ads",
      "Programmatic Display & Retargeting",
      "Full bid strategy management",
      "Creative A/B testing",
      "Weekly performance reporting",
    ],
    color: "border-gold/20 hover:border-gold/40",
    accent: "text-gold",
    bgGlow: "bg-gold/[0.04]",
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO & Content Marketing",
    tagline: "Compounding organic growth that outlasts any algorithm.",
    description:
      "We combine technical SEO mastery with high-quality content strategy to build lasting authority in your niche. No shortcuts, no black-hat tactics — just sustainable, revenue-generating organic traffic.",
    features: [
      "Comprehensive technical SEO audit",
      "Core Web Vitals optimisation",
      "Keyword research & content strategy",
      "Expert link acquisition",
      "E-E-A-T content optimisation",
      "Local SEO (UK & International)",
      "Monthly ranking & traffic reports",
      "Competitor gap analysis",
    ],
    color: "border-emerald-500/20 hover:border-emerald-500/40",
    accent: "text-emerald-400",
    bgGlow: "bg-emerald-500/[0.03]",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Analytics & Data Intelligence",
    tagline: "See clearly. Decide confidently. Act decisively.",
    description:
      "We implement robust tracking infrastructures and build custom dashboards that give you a complete, accurate picture of your marketing performance — down to the channel, campaign, and individual ad level.",
    features: [
      "GA4 setup, migration & configuration",
      "Custom Looker Studio dashboards",
      "Multi-touch attribution modelling",
      "Server-side tracking & GTM",
      "Offline conversion tracking",
      "CLTV & cohort analysis",
      "Marketing mix modelling",
      "Real-time performance alerts",
    ],
    color: "border-blue-500/20 hover:border-blue-500/40",
    accent: "text-blue-400",
    bgGlow: "bg-blue-500/[0.03]",
  },
  {
    id: "cro",
    icon: "🎯",
    title: "Conversion Rate Optimisation",
    tagline: "Turn more visitors into customers without spending more.",
    description:
      "CRO is the fastest way to compound your marketing returns. We run structured A/B tests, redesign key landing pages, and fix friction points in your funnel to maximise the value of your existing traffic.",
    features: [
      "Full funnel audit & UX review",
      "Heatmap & session recording analysis",
      "Landing page design & copywriting",
      "A/B & multivariate testing",
      "Checkout & form optimisation",
      "Mobile experience improvement",
      "Post-purchase flow optimisation",
      "Statistical significance reporting",
    ],
    color: "border-orange-500/20 hover:border-orange-500/40",
    accent: "text-orange-400",
    bgGlow: "bg-orange-500/[0.03]",
  },
  {
    id: "social",
    icon: "📱",
    title: "Social Media Advertising",
    tagline: "Creative-led campaigns that stop the scroll and drive action.",
    description:
      "We build paid social campaigns that combine precise audience targeting with compelling creative to generate awareness, leads, and sales across Meta, TikTok, LinkedIn, Pinterest, and more.",
    features: [
      "Full creative strategy & production",
      "Audience research & segmentation",
      "Retargeting funnel architecture",
      "UGC & video ad creation",
      "TikTok performance campaigns",
      "Pinterest Shopping campaigns",
      "Lookalike audience optimisation",
      "Creative performance analysis",
    ],
    color: "border-pink-500/20 hover:border-pink-500/40",
    accent: "text-pink-400",
    bgGlow: "bg-pink-500/[0.03]",
  },
  {
    id: "email",
    icon: "✉️",
    title: "Email & CRM Marketing",
    tagline: "Nurture, convert, and retain at scale.",
    description:
      "Your email list is your most valuable owned asset. We build sophisticated automation flows, lifecycle campaigns, and personalised sequences that drive repeat purchases and maximise customer lifetime value.",
    features: [
      "Welcome & onboarding sequences",
      "Abandoned cart & browse abandonment",
      "Post-purchase & upsell flows",
      "Re-engagement campaigns",
      "Segmentation & personalisation",
      "Klaviyo / Mailchimp / HubSpot setup",
      "A/B testing & deliverability audit",
      "Monthly revenue attribution reports",
    ],
    color: "border-purple-500/20 hover:border-purple-500/40",
    accent: "text-purple-400",
    bgGlow: "bg-purple-500/[0.03]",
  },
];

export default function ServicesList() {
  return (
    <section className="section-pad bg-dark">
      <div className="container-site">
        <div className="space-y-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border p-8 lg:p-12 transition-all duration-300 ${service.color} ${service.bgGlow}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">{service.icon}</span>
            <span className={`text-xs font-mono-alt font-semibold tracking-widest uppercase ${service.accent}`}>
              Service {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white mb-3">
            {service.title}
          </h2>
          <p className={`text-base font-medium mb-5 ${service.accent}`}>{service.tagline}</p>
          <p className="text-smoke leading-relaxed mb-8">{service.description}</p>

          <Link href="/contact" className="btn-primary">
            Discuss This Service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right — features */}
        <div>
          <h4 className="text-xs font-mono-alt font-semibold tracking-widest uppercase text-smoke mb-5">
            What&apos;s Included
          </h4>
          <ul className="space-y-3">
            {service.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-sm text-smoke/90">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={`mt-0.5 shrink-0 ${service.accent}`} stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
