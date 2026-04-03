"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function MissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-pad bg-dark-100">
      <div className="container-site">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="badge-gold mb-6">Our Mission</div>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Performance That <span className="text-gold-gradient italic">Actually Performs</span>
            </h2>
            <p className="text-smoke leading-relaxed mb-6">
              We started GrowthFlux because we were tired of agencies that talked about &ldquo;brand
              awareness&rdquo; while conveniently ignoring revenue. Our mission is simple: build
              marketing systems that generate measurable, attributable returns.
            </p>
            <p className="text-smoke leading-relaxed">
              Based in London&apos;s Canary Wharf, we partner with scale-ups, established brands, and
              ambitious DTC businesses across the UK and internationally. Every strategy we build
              is grounded in data, tested rigorously, and optimised relentlessly.
            </p>
          </motion.div>

          {/* Right — stats card grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🎯", label: "Founded", value: "2019" },
              { icon: "👥", label: "Team Size", value: "28 Experts" },
              { icon: "🌍", label: "Countries Served", value: "14+" },
              { icon: "🏆", label: "Awards Won", value: "12" },
            ].map((item) => (
              <div key={item.label} className="card-glass p-6 rounded-xl">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-display text-2xl font-bold text-gold-gradient mb-1">{item.value}</div>
                <div className="text-xs font-mono-alt text-smoke tracking-wider uppercase">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
