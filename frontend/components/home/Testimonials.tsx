"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote: "GrowthFlux completely transformed our paid acquisition. Within 3 months, our ROAS went from 1.8x to 7.4x. The team's data-driven approach and creativity is unlike any agency we've worked with.",
    author: "Sarah Mitchell",
    role: "Head of Marketing",
    company: "Luxe Commerce",
    initials: "SM",
    result: "7.4x ROAS",
  },
  {
    quote: "We were burning cash on poorly targeted LinkedIn campaigns. GrowthFlux restructured everything and dropped our cost-per-lead from £240 to £38 while doubling our pipeline value. Exceptional.",
    author: "James Thornton",
    role: "CEO & Founder",
    company: "ScaleStack (SaaS)",
    initials: "JT",
    result: "84% Lower CPL",
  },
  {
    quote: "Their SEO strategy gave us 312% more organic traffic in 6 months. They don't just chase rankings — they build genuine authority in your niche. Best investment we've made in digital marketing.",
    author: "Priya Kapoor",
    role: "Growth Director",
    company: "HealthPath UK",
    initials: "PK",
    result: "312% Traffic Growth",
  },
  {
    quote: "The GrowthFlux team became an extension of our internal team. Their reporting is transparent, their strategies are bold, and their results are real. We've renewed our contract for the third year.",
    author: "David Clarke",
    role: "CMO",
    company: "Zenith FinTech",
    initials: "DC",
    result: "3-Year Partnership",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />

      <div className="container-site">
        <SectionHeader
          badge="Client Love"
          title="Don't Take Our"
          titleHighlight="Word for It"
          subtitle="Here's what our clients say about working with GrowthFlux."
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="card-glass-gold p-10 rounded-3xl mb-8"
            >
              <Stars />
              <blockquote className="font-display text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
                    <span className="font-display font-bold text-dark text-sm">
                      {testimonials[active].initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonials[active].author}</div>
                    <div className="text-sm text-smoke">
                      {testimonials[active].role} · {testimonials[active].company}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold font-mono-alt text-sm font-semibold">
                  {testimonials[active].result}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2 bg-gold"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
