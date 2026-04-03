"use client";

import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark pt-28 pb-20">
      <GradientOrb size={600} color="gold" top="20%" left="70%" opacity={0.5} />
      <GradientOrb size={400} color="purple" top="60%" left="10%" opacity={0.4} />

      <div className="container-site relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge-gold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            About GrowthFlux
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            We Exist to Make Your{" "}
            <span className="text-gold-gradient italic">Marketing Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-smoke text-xl leading-relaxed max-w-2xl"
          >
            Founded in London, GrowthFlux is a performance marketing agency obsessed with
            one thing: delivering measurable ROI for ambitious brands. No vanity metrics.
            No fluff. Just growth.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
