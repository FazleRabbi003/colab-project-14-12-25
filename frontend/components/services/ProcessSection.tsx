"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We deep-dive into your existing performance data, competitors, and growth goals to identify the highest-leverage opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We build a bespoke 90-day growth roadmap with clear KPIs, channel priorities, budget recommendations, and expected outcomes.",
  },
  {
    number: "03",
    title: "Launch & Build",
    description:
      "Our team executes with precision — campaigns, tracking, landing pages, creatives, and automations — all built to perform from day one.",
  },
  {
    number: "04",
    title: "Optimise & Scale",
    description:
      "We run continuous testing loops, weekly optimisation sprints, and monthly strategy reviews to compound your results over time.",
  },
];

export default function ProcessSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-pad bg-dark-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/[0.04] blur-[100px] pointer-events-none" />
      <div className="container-site">
        <SectionHeader
          badge="How We Work"
          title="Our 4-Step"
          titleHighlight="Growth Process"
          subtitle="A proven framework that takes you from audit to scale in 90 days."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}

              <div className="card-glass p-7 rounded-2xl relative z-10 h-full">
                <div className="font-display text-5xl font-bold text-gold-gradient opacity-30 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-smoke text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
