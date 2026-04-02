import Link from "next/link";

const services = [
  { label: "Paid Media (PPC)", href: "/services#paid-media" },
  { label: "SEO & Content", href: "/services#seo" },
  { label: "Analytics & Data", href: "/services#analytics" },
  { label: "Conversion Rate Optimisation", href: "/services#cro" },
  { label: "Social Media Ads", href: "/services#social" },
  { label: "Email Marketing", href: "/services#email" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Values", href: "/about#values" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-dark-100 border-t border-white/[0.06] overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/[0.04] blur-[100px] pointer-events-none" />

      <div className="container-site py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="font-display font-bold text-dark text-sm">G</span>
              </div>
              <span className="font-display font-semibold text-lg">
                Growth<span className="text-gold-gradient">Flux</span>
              </span>
            </Link>
            <p className="text-smoke text-sm leading-relaxed mb-6">
              Performance marketing that moves the needle. Real data. Real results. Real growth.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  ),
                },
                {
                  label: "Twitter / X",
                  href: "#",
                  icon: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-smoke hover:text-gold hover:border-gold/30 hover:bg-gold/[0.08] transition-all duration-200"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono-alt font-semibold tracking-widest uppercase text-gold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-smoke hover:text-gold-light transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono-alt font-semibold tracking-widest uppercase text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-smoke hover:text-gold-light transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono-alt font-semibold tracking-widest uppercase text-gold mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {[
                {
                  icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
                  text: "hello@growthflux.co.uk",
                  href: "mailto:hello@growthflux.co.uk",
                },
                {
                  icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z",
                  text: "+44 20 7946 0958",
                  href: "tel:+442079460958",
                },
                {
                  icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0",
                  text: "Canary Wharf, London",
                  href: "#",
                },
              ].map(({ icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-2.5 text-sm text-smoke hover:text-gold-light transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold">
                      <path d={icon} />
                    </svg>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-smoke-dark">
            &copy; {year} GrowthFlux Ltd. All rights reserved. Registered in England &amp; Wales.
          </p>
          <div className="flex items-center gap-5 text-xs text-smoke-dark">
            <Link href="#" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-light transition-colors">Terms of Service</Link>
            <span className="text-gold font-mono-alt tracking-widest">growthflux.co.uk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
