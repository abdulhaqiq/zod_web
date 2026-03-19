import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "A complete map of every page on Zod — product, company, legal, support, and more.",
  keywords: ["Zod sitemap", "Zod all pages", "Zod site structure"],
  alternates: { canonical: "https://zod.app/sitemap-page" },
  openGraph: {
    title: "Zod Sitemap",
    description: "Browse every page on Zod.",
    url: "https://zod.app/sitemap-page",
    type: "website",
  },
};

const SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "AI Matching", href: "/#ai" },
      { label: "Safety", href: "/#safety" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Careers", href: "/careers" },
      { label: "Open Roles", href: "/hiring" },
      { label: "Investors", href: "/investors" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help-centre" },
      { label: "Community Guidelines", href: "/community-guidelines" },
      { label: "Safety Centre", href: "/safety-centre" },
      { label: "Report a Problem", href: "/report" },
      { label: "Safety Tips", href: "/safety-tips" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/gdpr" },
      { label: "CCPA", href: "/ccpa" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "iOS — App Store", href: "#" },
      { label: "Android — Google Play", href: "#" },
      { label: "Web App", href: "#" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Sitemap
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Every page on Zod.
            </h1>
          </div>
        </section>

        {/* Sitemap grid */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-5">{section.title}</p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-gray-200 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/15 group-hover:bg-white/40 transition-colors flex-shrink-0" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
