import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Zod is a pre-seed AI dating app launched in 2026 seeking its first investors. Real product, honest stage, strong thesis.",
  keywords: ["Zod investors", "Zod investment", "AI dating startup 2026", "dating app startup", "Zevello funding"],
  alternates: { canonical: "https://zod.app/investors" },
  openGraph: {
    title: "Invest in Zod — Pre-Launch AI Dating App",
    description: "Pre-seed. Real product. Right time. The dating market is broken — Zod is the fix.",
    url: "https://zod.app/investors",
    type: "website",
  },
};

const WHY = [
  {
    title: "The market is broken — and users know it",
    desc: "Dating app satisfaction scores have declined every year since 2018. Users are exhausted. A product genuinely optimised for outcomes, not engagement, is a rare and defensible position.",
  },
  {
    title: "AI gives us a structural advantage from day one",
    desc: "Our matching engine is built on relationship psychology and behavioural science. We can move faster, test more, and improve continuously — with a fraction of the overhead of a traditional team.",
  },
  {
    title: "Subscription model with zero advertising",
    desc: "Our revenue comes entirely from subscribers — not advertisers. This aligns our incentives with users and removes the conflict of interest that corrupts every ad-funded dating app.",
  },
  {
    title: "Getting in early means getting in right",
    desc: "We are pre-traction. There are no inflated numbers here — just a strong product thesis, a differentiated approach, and an early window before the story is already written.",
  },
];

const OPPORTUNITY = [
  { label: "Global online dating market", value: "$9.6B", note: "2025 estimate" },
  { label: "Projected market size by 2030", value: "$14.1B", note: "CAGR ~8%" },
  { label: "Users dissatisfied with current apps", value: "~70%", note: "Various surveys, 2024–25" },
  { label: "Willingness to pay for better matches", value: "High", note: "Consistent across age groups" },
];

export default function InvestorsPage() {
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
              Investor Relations
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Pre-launch.<br />Real product.<br />Right time.
              </h1>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Zod launched in 2026. We are at the very beginning — no inflated traction, no fabricated metrics. What we have is a genuinely differentiated product, a lean AI-powered team, and a clear thesis for why the dating market is ready to be disrupted.
                </p>
                <a
                  href="mailto:investors@dhabli.com"
                  className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 hover:border-white pb-0.5 transition-colors"
                >
                  investors@dhabli.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Where we are */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Current Stage</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6">
              <div className="bg-black py-10 px-8 flex flex-col gap-3">
                <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>2026</span>
                <span className="text-xs font-medium text-gray-400">Year founded & launched</span>
                <span className="text-[10px] text-gray-700">We built fast. We launched honestly.</span>
              </div>
              <div className="bg-black py-10 px-8 flex flex-col gap-3">
                <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>Pre-seed</span>
                <span className="text-xs font-medium text-gray-400">Funding stage</span>
                <span className="text-[10px] text-gray-700">Seeking our first investors now.</span>
              </div>
              <div className="bg-black py-10 px-8 flex flex-col gap-3">
                <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>AI-first</span>
                <span className="text-xs font-medium text-gray-400">Team model</span>
                <span className="text-[10px] text-gray-700">Lean, automated, and built to scale without headcount drag.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Market opportunity */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">The Opportunity</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                A $9B market that nobody likes
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-white/6 border-t border-white/6 mb-12">
              {OPPORTUNITY.map((o) => (
                <div key={o.label} className="py-6 grid sm:grid-cols-3 gap-4 items-center">
                  <span className="text-sm text-gray-400">{o.label}</span>
                  <span className="text-2xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>{o.value}</span>
                  <span className="text-xs text-gray-700">{o.note}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
              The online dating market is large and growing — but satisfaction is at an all-time low. That gap between spend and satisfaction is exactly where Zod sits.
            </p>
          </div>
        </section>

        {/* Why invest */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">Investment Case</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Why Zod, why now
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6">
              {WHY.map((w) => (
                <div key={w.title} className="bg-black p-8 flex flex-col gap-4">
                  <h3 className="text-sm font-bold text-white leading-snug">{w.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we are asking for */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-6">What We&apos;re Looking For</p>
            <h2
              className="text-4xl font-black tracking-tight mb-10"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Beyond the cheque
            </h2>
            <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
              <p>
                We are looking for investors who understand early-stage consumer products, believe in AI-first company building, and are comfortable with a founder who will tell you what is true — not what sounds impressive.
              </p>
              <p>
                We want partners who bring more than capital: distribution thinking, consumer experience, and the patience to build something that lasts rather than something that pops.
              </p>
              <p>
                If that's you, reach out. We will send a deck immediately and arrange a call within the week.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-4xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Let&apos;s talk
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Send us an email and we will respond with a deck and availability within 48 hours.
            </p>
            <a
              href="mailto:investors@dhabli.com"
              className="px-10 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              investors@dhabli.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
