import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Zod — the AI-first dating app launched in 2026. A lean team building something that matters. See what it means to work here.",
  keywords: ["Zod careers", "Zod jobs", "AI company jobs 2026", "dating app jobs", "Zevello careers"],
  alternates: { canonical: "https://zod.app/careers" },
  openGraph: {
    title: "Careers at Zod — Build the Future of Human Connection",
    description: "Zod is an AI-first team. Small, lean, and building fast. See open roles.",
    url: "https://zod.app/careers",
    type: "website",
  },
};

const PRINCIPLES = [
  "We ship fast and iterate openly",
  "AI does the heavy lifting — humans set the direction",
  "Small and lean beats large and slow, always",
  "We are kind to each other and honest with everyone",
  "We build for real outcomes, not vanity metrics",
  "Feedback is a gift — give it honestly, receive it graciously",
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden border-b border-white/6">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Careers at Zod
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                We are an<br />AI-first team.
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed pb-2">
                Zod launched in 2026 and is run by a lean, AI-powered operation. We don&apos;t have 50 open roles or a sprawling org chart. What we have is a focused product, a clear mission, and a very high bar for what we bring into the team.
              </p>
            </div>
          </div>
        </section>

        {/* What AI-first means */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">What AI-First Means</p>
              <h2
                className="text-4xl font-black tracking-tight leading-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                The whole company runs on AI.
              </h2>
            </div>
            <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
              <p>
                Zod is not a traditional company that uses AI as a feature. The entire operation — product development, testing, iteration, support — is designed to run through intelligent automation. That&apos;s how a very small team can build something that competes with companies 10× our size.
              </p>
              <p>
                This means we move fast. It means we don&apos;t hire headcount to fill seats. And it means that anyone who joins us needs to be comfortable working alongside AI systems, not just managing people.
              </p>
              <p>
                We are a new company. We are honest about that. But the model we are building is the future of how software companies will operate — and we think being early to that is an advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Who we want */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">Who We&apos;re Looking For</p>
              <h2
                className="text-4xl font-black tracking-tight leading-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                People who thrive in the early.
              </h2>
            </div>
            <div className="space-y-5 text-sm text-gray-400 leading-relaxed">
              <p>
                We are not for everyone. If you want a large team, a defined role, and a clear career ladder, we are probably not the right fit right now.
              </p>
              <p>
                If you want to do work that matters from day one, move fast, and help shape what a company looks like when it&apos;s built AI-first from the ground up — we want to hear from you.
              </p>
              <p>
                We value curiosity, ownership, and the ability to work effectively alongside AI tools. We don&apos;t care much about titles. We care about impact.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">How We Work</p>
              <h2
                className="text-4xl font-black tracking-tight leading-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Our operating principles
              </h2>
            </div>
            <ul className="space-y-0 divide-y divide-white/6 self-start">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="py-5 flex items-start gap-4">
                  <span className="text-[10px] text-gray-700 pt-0.5 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-gray-400 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-4xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Interested?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We have a small number of open positions. See what we&apos;re looking for — or just reach out directly.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="/hiring"
                className="px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                See open roles
              </a>
              <a
                href="mailto:careers@dhabli.com"
                className="px-8 py-3 border border-white/15 text-sm text-gray-400 hover:border-white/30 hover:text-white transition-colors"
              >
                Write to us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
