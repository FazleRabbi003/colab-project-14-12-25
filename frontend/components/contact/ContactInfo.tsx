"use client";

import { motion } from "framer-motion";

const info = [
  {
    icon: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
    ),
    label: "Email Us",
    value: "hello@growthflux.co.uk",
    href: "mailto:hello@growthflux.co.uk",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
    ),
    label: "Call Us",
    value: "+44 20 7946 0958",
    href: "tel:+442079460958",
    sub: "Mon–Fri, 9am–6pm GMT",
  },
  {
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: "Visit Us",
    value: "1 Canada Square, Canary Wharf",
    href: "#",
    sub: "London, E14 5AB",
  },
];

const guarantees = [
  "Free 30-min strategy session",
  "No lock-in contracts",
  "Dedicated account manager",
  "First results within 30 days",
  "Full account transparency",
  "Weekly reporting included",
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact cards */}
      {info.map(({ icon, label, value, href, sub }, i) => (
        <motion.a
          key={label}
          href={href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex items-start gap-4 p-6 card-glass rounded-2xl hover:border-gold/25 transition-all duration-200 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {icon}
            </svg>
          </div>
          <div>
            <div className="text-xs font-mono-alt text-smoke uppercase tracking-wider mb-0.5">{label}</div>
            <div className="text-white font-medium">{value}</div>
            <div className="text-xs text-smoke mt-0.5">{sub}</div>
          </div>
        </motion.a>
      ))}

      {/* What you get */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card-glass-gold rounded-2xl p-6"
      >
        <h4 className="text-sm font-mono-alt font-semibold text-gold tracking-widest uppercase mb-4">
          What You Get
        </h4>
        <ul className="space-y-2.5">
          {guarantees.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-smoke/90">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
