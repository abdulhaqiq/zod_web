import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Hiring",
  description:
    "Current job openings at Zod — AI Product Lead, AI Systems Engineer, Growth Lead. Join the AI-first dating app team.",
  keywords: ["Zod hiring", "Zod open roles", "AI jobs 2026", "dating app engineer jobs", "Zod engineer"],
  alternates: { canonical: "https://zod.app/hiring" },
  openGraph: {
    title: "Zod Is Hiring — Open Roles",
    description: "A few great people wanted. See current openings at Zod.",
    url: "https://zod.app/hiring",
    type: "website",
  },
};

const ROLES = [
  {
    title: "AI Product Lead",
    team: "Product",
    location: "Remote",
    type: "Full-time",
    desc: "Own the product roadmap and work directly with AI systems to design, test, and ship features fast. You'll set direction — the AI does the execution.",
  },
  {
    title: "AI Systems Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Build and maintain the AI infrastructure that runs the matching engine, moderation systems, and product automation. Deep ML and systems experience preferred.",
  },
  {
    title: "Growth & Community Lead",
    team: "Growth",
    location: "Remote",
    type: "Full-time",
    desc: "Get Zod in front of the right people. We need someone who can build organic growth loops, work with creators, and grow an early user community with zero budget waste.",
  },
];

export default function HiringPage() {
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
              Open Roles
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h1
                  className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  We are hiring.<br />
                  <span className="text-gray-500">A few great people.</span>
                </h1>
                <p className="text-sm text-gray-600 mt-4 max-w-md leading-relaxed">
                  We are an AI-first team and we keep it lean on purpose. These are real roles — not placeholders.
                </p>
              </div>
              <div className="flex flex-col gap-1 sm:text-right pb-1">
                <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>{ROLES.length}</span>
                <span className="text-xs text-gray-600">open positions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Roles */}
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col gap-px bg-transparent">
          <div className="flex flex-col divide-y divide-white/6 border-t border-white/6">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="py-10 grid lg:grid-cols-[1fr_320px] gap-8 items-start group hover:bg-white/[0.015] -mx-6 px-6 transition-colors cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2
                      className="text-lg font-black text-white"
                      style={{ fontFamily: "'Product Sans', sans-serif" }}
                    >
                      {role.title}
                    </h2>
                    <span className="text-[10px] px-2 py-0.5 border border-white/10 text-gray-600 uppercase tracking-wider">{role.team}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{role.desc}</p>
                </div>
                <div className="flex flex-col gap-3 lg:items-end pt-1">
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    <span className="text-xs text-gray-600 flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {role.location}
                    </span>
                    <span className="text-xs text-gray-700">·</span>
                    <span className="text-xs text-gray-600">{role.type}</span>
                  </div>
                  <a
                    href={`mailto:careers@dhabli.com?subject=Application: ${role.title}`}
                    className="text-xs px-5 py-2 border border-white/15 text-gray-400 hover:border-white/30 hover:text-white transition-colors"
                  >
                    Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speculative */}
        <section className="py-16 px-6 border-t border-white/6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <p className="text-gray-600 text-sm">Don&apos;t see your role?</p>
            <h2
              className="text-3xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Write to us anyway.
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              If you believe in what we&apos;re building and think you can contribute something real, send us an email. We read everything.
            </p>
            <a
              href="mailto:careers@dhabli.com"
              className="px-8 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors"
            >
              careers@dhabli.com
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
