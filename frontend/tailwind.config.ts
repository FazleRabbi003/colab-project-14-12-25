import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C97E",
          dark: "#A07830",
          muted: "rgba(201,168,76,0.15)",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#111111",
          200: "#161616",
          300: "#1C1C1C",
          400: "#222222",
          500: "#2A2A2A",
        },
        smoke: {
          DEFAULT: "#888888",
          light: "#AAAAAA",
          dark: "#555555",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #A07830 100%)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.18) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
        "border-gradient":
          "linear-gradient(135deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,76,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,76,0.6)" },
        },
      },
      boxShadow: {
        gold: "0 0 30px rgba(201,168,76,0.25)",
        "gold-lg": "0 0 60px rgba(201,168,76,0.3)",
        card: "0 4px 40px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 60px rgba(0,0,0,0.6), 0 0 30px rgba(201,168,76,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
