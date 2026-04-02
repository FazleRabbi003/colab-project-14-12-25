"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "@/components/ui/SectionHeader";

const team = [
  {
    name: "Alex Reynolds",
    role: "Founder & CEO",
    bio: "Former Google & Meta Ads lead. 12 years scaling D2C and SaaS brands from seed to Series B.",
    initials: "AR",
    color: "from-gold to-gold-dark",
    speciality: "Paid Media Strategy",
  },
  {
    name: "Natasha Holt",
    role: "Head of Paid Media",
    bio: "Certified Google Premier Partner with £30M+ in managed ad spend across e-commerce and fintech.",
    initials: "NH",
    color: "from-purple-400 to-purple-700",
    speciality: "PPC & Programmatic",
  },
  {
    name: "Marcus Bell",
    role: "Head of SEO",
    bio: "Technical SEO specialist who has built organic channels generating 7-figure annual revenue for clients.",
    initials: "MB",
    color: "from-blue-400 to-blue-700",
    speciality: "Technical & Content SEO",
  },
  {
    name: "Isha Patel",
    role: "Data & Analytics Lead",
    bio: "Ex-McKinsey data analyst. Builds attribution models and custom dashboards that actually tell the truth.",
    initials: "IP",
    color: "from-emerald-400 to-emerald-700",
    speciality: "Analytics & Attribution",
  },
  {
    name: "Tom Whitfield",
    role: "CRO & UX Director",
    bio: "Conversion specialist with 200+ A/B tests shipped. Obsessively focused on turning traffic into revenue.",
    initials: "TW",
    color: "from-orange-400 to-orange-700",
    speciality: "Conversion Optimisation",
  },
  {
    name: "Chloe Summers",
    role: "Creative Strategy Lead",
    bio: "Award-winning creative strategist who builds the hooks, scripts, and concepts that make ads people remember.",
    initials: "CS",
    color: "from-pink-400 to-pink-700",
    speciality: "Creative & Copywriting",
  },
];

export default function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="section-pad bg-dark-100">
      <div className="container-site">
        <SectionHeader
          badge="The Team"
          title="The People Behind"
          titleHighlight="Your Growth"
          subtitle="Senior specialists — not juniors. Every account is handled by people with 7+ years of experience."
          className="mb-16"
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glass p-7 rounded-2xl group hover:border-gold/20 transition-all duration-300"
            >
              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5 shadow-gold group-hover:scale-105 transition-transform`}
              >
                <span className="font-display font-bold text-white text-lg">{member.initials}</span>
              </div>

              <h3 className="font-display text-lg font-semibold text-white mb-0.5">{member.name}</h3>
              <div className="text-gold text-xs font-mono-alt tracking-wide uppercase mb-3">{member.role}</div>
              <p className="text-smoke text-sm leading-relaxed mb-4">{member.bio}</p>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-smoke/70 font-mono-alt">
                ✦ {member.speciality}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
