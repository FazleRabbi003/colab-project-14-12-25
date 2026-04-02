"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const results = [
  {
    client: "E-Commerce Brand",
    industry: "Fashion & Retail",
    metric: 412,
    suffix: "%",
    label: "ROAS Increase",
    description: "Rebuilt Google Shopping + Meta retargeting strategy, reducing CPA by 58% in 90 days.",
    tags: ["Google Ads", "Meta", "Shopping"],
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
  },
  {
    client: "SaaS Platform",
    industry: "B2B Technology",
    metric: 238,
    suffix: "%",
    label: "More Qualified Leads",
    description: "Full-funnel LinkedIn + Google Ads overhaul, dropping cost-per-lead from £180 to £42.",
    tags: ["LinkedIn Ads", "Google Ads", "B2B"],
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
  },
  {
    client: "FinTech Startup",
    industry: "Financial Services",
    metric: 5.2,
    suffix: "x",
    label: "Return on Ad Spend",
    description: "Launched performance campaigns from scratch achieving £2.4M ARR in 12 months.",
    tags: ["Paid Social", "PPC", "CRO"],
    color: "from-blue-500/15 to-blue-500/5",
    border: "border-blue-500/20",
  },
];

export default function ResultsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-pad bg-dark-100 relative overflow-hidden">
      <div className="container-site">
        <SectionHeader
          badge="Case Studies"
          title="Results That"
          titleHighlight="Speak for Themselves"
          subtitle="We don't just run campaigns — we build growth systems. Here's what we've achieved for our clients."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {results.map((result, i) => (
            <motion.div
              key={result.client}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${result.color} border ${result.border} p-8`}
            >
              {/* Industry badge */}
              <div className="text-xs font-mono-alt tracking-widest uppercase text-smoke mb-6">
                {result.industry}
              </div>

              {/* Metric */}
              <div className="font-display text-6xl font-bold text-white mb-1 leading-none">
                +<AnimatedCounter to={result.metric} suffix={result.suffix} decimals={result.suffix === "x" ? 1 : 0} />
              </div>
              <div className="text-sm font-mono-alt font-medium text-gold tracking-wide uppercase mb-4">
                {result.label}
              </div>

              {/* Description */}
              <p className="text-smoke text-sm leading-relaxed mb-6">{result.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {result.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] text-smoke/70 border border-white/[0.08]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-smoke mb-6">Ready to be our next success story?</p>
          <a href="/contact" className="btn-primary">
            Start Growing Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
