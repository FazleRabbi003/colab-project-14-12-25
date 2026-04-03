"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 320, suffix: "%", label: "Average ROAS Improvement", prefix: "" },
  { value: 50, suffix: "M+", label: "Ad Spend Managed", prefix: "£" },
  { value: 500, suffix: "+", label: "Campaigns Launched", prefix: "" },
  { value: 98, suffix: "%", label: "Client Retention Rate", prefix: "" },
];

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative bg-dark-100 border-y border-white/[0.06]">
      <div className="container-site py-16">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-100 p-8 lg:p-10 flex flex-col items-center text-center"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                <AnimatedCounter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>
              <p className="text-sm text-smoke font-mono-alt tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
