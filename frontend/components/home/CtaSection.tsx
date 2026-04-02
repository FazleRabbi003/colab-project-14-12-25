"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CtaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section-pad bg-dark-100 relative overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/[0.08] blur-[100px] pointer-events-none" />

      <div className="container-site" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="badge-gold mx-auto mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse inline-block" />
            Free Performance Audit
          </div>

          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Ready to <span className="text-gold-gradient italic">Scale</span>?
          </h2>

          <p className="text-smoke text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute performance audit. We&apos;ll analyse your current campaigns
            and show you exactly where you&apos;re leaving money on the table.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-base px-9 py-4">
              Book Free Audit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="tel:+442079460958" className="btn-outline text-base px-9 py-4">
              Call Us: +44 20 7946 0958
            </a>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-smoke">
            {[
              "No commitment required",
              "Results within 90 days",
              "Dedicated account manager",
              "Full transparency reporting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
