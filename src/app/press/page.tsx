import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Press resources, media contact, and story angles for journalists writing about Zod — the AI dating app launched in 2026.",
  keywords: ["Zod press", "Zod media", "Zod news", "AI dating app press", "Zod press kit"],
  alternates: { canonical: "https://zod.app/press" },
  openGraph: {
    title: "Zod Press — Media Resources & Contact",
    description: "We just launched. Be the first to cover the AI dating app that's doing things differently.",
    url: "https://zod.app/press",
    type: "website",
  },
};

const ASSETS = [
  {
    label: "Brand Kit",
    desc: "Logos, wordmarks, colour palette, and usage guidelines",
    size: "12 MB",
  },
  {
    label: "Product Screenshots",
    desc: "High-resolution iOS and Android screenshots, all screens",
    size: "34 MB",
  },
  {
    label: "Fact Sheet",
    desc: "Company background, product overview, and founding story",
    size: "1 MB",
  },
  {
    label: "App Preview Video",
    desc: "60-second product walkthrough for media embeds",
    size: "22 MB",
  },
];

const ANGLES = [
  {
    title: "The AI dating app built to make itself redundant",
    desc: "Zod is the only dating app designed to get users off the app as fast as possible — because finding the right person is the only success metric that matters.",
  },
  {
    title: "How an AI team built a dating product from scratch in 2026",
    desc: "No traditional team. No VC-backed hype cycle. Zod was designed, built, and launched by an AI-powered operation — and it shows in the product.",
  },
  {
    title: "Dating app fatigue is real — Zod is the alternative",
    desc: "Users are exhausted by swiping. Zod replaces the scroll with a science-backed compatibility engine that surfaces fewer, better matches.",
  },
  {
    title: "The startup that launched without faking its numbers",
    desc: "In an industry full of inflated download counts and paid reviews, Zod launched in 2026 with a simple promise: we will only tell you what is true.",
  },
];

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-20 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Press & Media
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                We just launched.<br />Be the first to cover us.
              </h1>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zod launched in 2026. We have no press coverage yet — which means you get the first-mover story. If you&apos;re writing about AI, dating, or the future of relationships, we&apos;d love to talk.
                </p>
                <a
                  href="mailto:press@dhabli.com"
                  className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                >
                  press@dhabli.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About the company */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">About Zod</p>
              <h2
                className="text-4xl font-black tracking-tight leading-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                The basics, for your story.
              </h2>
            </div>
            <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
              <p>
                Zod is a dating app launched in 2026, built from the ground up by an AI-powered team. It uses a compatibility engine trained on relationship psychology and behavioural science to surface fewer, better matches — rather than encouraging endless swiping.
              </p>
              <p>
                Unlike every other major dating app, Zod has no advertising model. Revenue comes entirely from subscribers. That single decision changes everything about how the product is built.
              </p>
              <p>
                We are early. We are honest about that. What we have is a product that works differently — and a willingness to show you exactly how and why.
              </p>
            </div>
          </div>
        </section>

        {/* Story angles */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">Story Ideas</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Angles worth covering
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6">
              {ANGLES.map((a) => (
                <div key={a.title} className="bg-black p-8 flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-white leading-snug">&ldquo;{a.title}&rdquo;</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press kit */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">Press Kit</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Everything you need
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6">
              {ASSETS.map((asset) => (
                <div key={asset.label} className="bg-black p-8 flex items-center justify-between gap-6 group hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-bold text-white">{asset.label}</span>
                    <span className="text-xs text-gray-600">{asset.desc}</span>
                    <span className="text-[10px] text-gray-700">{asset.size}</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 text-gray-600 group-hover:text-white group-hover:border-white/30 transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-4xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Get in touch
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We respond to every media enquiry personally. No PR agency, no canned responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:press@dhabli.com"
                className="px-8 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors"
              >
                Email press team
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-white/15 text-xs text-gray-400 hover:border-white/30 hover:text-white transition-colors"
              >
                Download press kit
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
