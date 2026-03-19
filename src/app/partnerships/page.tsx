import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Zod is seeking founding partners as we launch in 2026. Be part of something new.",
};

const TYPES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Technology Integrations",
    desc: "If you build tools for video, voice, safety, or identity — let's talk about building together. We want best-in-class technology in every layer of the product.",
    examples: "Video calling · Identity verification · Safety tooling · Payments",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Brand & Lifestyle",
    desc: "We are building an audience of singles looking for real relationships. If your brand genuinely fits their lives, we want to explore what a founding partnership looks like.",
    examples: "Restaurants & experiences · Travel · Wellness · Fashion",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Media & Content",
    desc: "We have a story worth telling — an AI-built dating app that launched in 2026 without faking its numbers. If you make content around relationships, tech, or culture, let's create something together.",
    examples: "Podcasts · Editorial · YouTube · Newsletters",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Events & Experiences",
    desc: "We want to get people off the app and into the room. If you run events — dinners, social experiences, anything that brings people together — we want to partner from day one.",
    examples: "Singles events · Social experiences · Pop-ups · Venue partnerships",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Research & Academic",
    desc: "We are building a dataset around compatibility, communication, and modern relationships. We welcome early research partnerships with institutions who want access.",
    examples: "Universities · Behavioural labs · Public health · Think tanks",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Distribution",
    desc: "We are looking for distribution partners who can put Zod in front of the right audiences — telcos, platforms, or employers looking to offer something genuinely useful to their users.",
    examples: "Telco bundles · Platform deals · Employee benefits · Device partnerships",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Partnerships
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Be a founding<br />partner.
              </h1>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zod launched in 2026. We have no big audience numbers to pitch you yet — what we have is an early-stage product with a clear direction, and a genuine interest in building with partners who share our values.
                </p>
                <a
                  href="mailto:partnerships@dhabli.com"
                  className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                >
                  partnerships@dhabli.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-6">How We Think About Partnerships</p>
            <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
              <p>
                We don&apos;t have an advertising model, and we never will. That means every partnership we enter needs to genuinely improve the experience for our users — not extract value from it.
              </p>
              <p>
                Being early has one major upside: founding partners get to help shape how the relationship works. If you come in now, you&apos;re not fitting into a pre-built slot — you&apos;re helping define what that slot looks like.
              </p>
              <p>
                We are particularly interested in partners who care about privacy, safety, and doing things the right way. If your company culture conflicts with those values, we&apos;re probably not the right fit.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership types */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">What We&apos;re Open To</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Partnership types
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
              {TYPES.map((type) => (
                <div key={type.title} className="bg-black p-8 flex flex-col gap-4">
                  <div className="text-gray-500 w-10 h-10 flex items-center justify-center border border-white/10">
                    {type.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white">{type.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{type.desc}</p>
                  <p className="text-[10px] text-gray-700 leading-relaxed border-t border-white/6 pt-3 mt-auto">
                    {type.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-4xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Let&apos;s talk
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Tell us who you are and what kind of partnership you have in mind. We reply to every genuine enquiry personally.
            </p>
            <a
              href="mailto:partnerships@dhabli.com"
              className="px-10 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Start the conversation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
