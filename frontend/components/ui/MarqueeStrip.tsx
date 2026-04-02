"use client";

const clients = [
  "Deliveroo", "Monzo", "Bulb Energy", "Treatwell", "Babylon Health",
  "Zopa", "Cazoo", "Octopus Energy", "Typeform", "GoCardless",
  "Deliveroo", "Monzo", "Bulb Energy", "Treatwell", "Babylon Health",
  "Zopa", "Cazoo", "Octopus Energy", "Typeform", "GoCardless",
];

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/[0.06]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      <div className="marquee-inner">
        {clients.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-smoke/50 text-xs font-mono-alt font-semibold tracking-[0.2em] uppercase shrink-0"
          >
            <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
