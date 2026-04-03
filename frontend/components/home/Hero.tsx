"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GradientOrb from "@/components/ui/GradientOrb";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background orbs */}
      <GradientOrb size={700} color="gold" top="10%" left="60%" opacity={0.6} />
      <GradientOrb size={500} color="purple" top="60%" left="20%" opacity={0.5} />
      <GradientOrb size={400} color="gold" top="80%" left="80%" opacity={0.3} />

      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-site relative z-10 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <div className="badge-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse inline-block" />
            London&apos;s #1 Performance Marketing Agency
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-5xl mx-auto"
        >
          We Turn Ad Spend Into{" "}
          <span className="text-gold-gradient italic relative">
            Exponential
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M2 9 Q100 2 200 7 Q300 12 398 5"
                stroke="url(#gold-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gold-grad" x1="0" y1="0" x2="100%" y2="0">
                  <stop stopColor="#C9A84C" />
                  <stop offset="1" stopColor="#E2C97E" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          Growth
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-smoke text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Data-driven paid media, SEO, and conversion strategies that deliver measurable
          ROI for ambitious UK &amp; global brands.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 justify-center mb-16">
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Audit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/services" className="btn-outline text-base px-8 py-4">
            View Our Services
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-smoke"
        >
          {[
            { icon: "⭐", text: "4.9/5 Google Rating" },
            { icon: "🏆", text: "Google Premier Partner" },
            { icon: "🚀", text: "500+ Campaigns Launched" },
            { icon: "💰", text: "£50M+ Ad Spend Managed" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span className="font-mono-alt text-xs tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono-alt text-smoke/40 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
