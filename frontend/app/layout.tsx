import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growthflux.co.uk"),
  title: {
    default: "GrowthFlux — Performance Marketing Agency London",
    template: "%s | GrowthFlux",
  },
  description:
    "GrowthFlux is London's elite performance marketing agency. We drive measurable ROI through data-driven paid media, SEO, conversion optimisation & growth strategy.",
  keywords: [
    "performance marketing agency london",
    "paid media agency UK",
    "PPC agency london",
    "growth marketing agency",
    "digital marketing agency UK",
    "SEO agency london",
  ],
  openGraph: {
    type: "website",
    url: "https://growthflux.co.uk",
    siteName: "GrowthFlux",
    title: "GrowthFlux — Performance Marketing Agency London",
    description: "Elite performance marketing. Measurable results. Real growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthFlux — Performance Marketing Agency",
    description: "Elite performance marketing. Real results.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-dark text-white font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
