"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const textAlign = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 ${textAlign} ${className}`}
    >
      {badge && (
        <div className="badge-gold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          {badge}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight text-white">
        {title}{" "}
        {titleHighlight && (
          <span className="text-gold-gradient italic">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`text-smoke text-lg leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
