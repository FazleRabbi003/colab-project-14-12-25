"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: "📊",
    title: "Data Over Opinion",
    description:
      "Every decision is backed by data. We never guess — we test, measure, and iterate based on real evidence from your campaigns.",
  },
  {
    icon: "🔬",
    title: "Relentless Optimisation",
    description:
      "We never settle for 'good enough'. Our team continuously tests new hypotheses, creative angles, and bid strategies to extract maximum performance.",
  },
  {
    icon: "🤝",
    title: "Radical Transparency",
    description:
      "You get full access to your accounts, plain-English reporting, and honest conversations about what's working and what isn't.",
  },
  {
    icon: "🚀",
    title: "Growth Obsessed",
    description:
      "We measure our success by your success. Our KPIs are your KPIs — revenue, leads, ROAS, and long-term growth.",
  },
  {
    icon: "🎨",
    title: "Creative Precision",
    description:
      "Great performance marketing needs great creative. We combine data-driven targeting with compelling storytelling to stop the scroll.",
  },
  {
    icon: "🛡️",
    title: "Trust & Integrity",
    description:
      "No hidden fees, no inflated numbers, no vanity metrics. We build long-term partnerships based on honest, attributable results.",
  },
];

export default function ValuesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="values" className="section-pad bg-dark relative overflow-hidden">
      <div className="container-site">
        <SectionHeader
          badge="What We Stand For"
          title="Our Core"
          titleHighlight="Values"
          subtitle="The principles that guide every campaign, every decision, every relationship."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="card-glass p-7 rounded-2xl group hover:border-gold/20 transition-colors"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold-light transition-colors">
                {value.title}
              </h3>
              <p className="text-smoke text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
