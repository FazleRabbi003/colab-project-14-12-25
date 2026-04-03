"use client";

import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-28 pb-12">
      <GradientOrb size={500} color="gold" top="40%" left="80%" opacity={0.4} />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="badge-gold mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          Let&apos;s Talk Growth
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl"
        >
          Start Your <span className="text-gold-gradient italic">Growth</span> Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-smoke text-xl max-w-xl leading-relaxed"
        >
          Book a free 30-minute strategy call. We&apos;ll analyse your current marketing and
          show you exactly where the biggest growth opportunities are.
        </motion.p>
      </div>
    </section>
  );
}
