import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Safety Centre",
  description: "How Zod keeps you safe — ID verification, encryption, reporting tools, and more.",
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "ID Verification",
    desc: "Every Zod user is invited to verify their identity using a government-issued ID. Verified users get a badge, and unverified accounts have limited functionality. You always know who you're talking to.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "End-to-End Encryption",
    desc: "All messages between you and your matches are end-to-end encrypted. Not even our team can read your conversations. Your private exchanges stay private.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "AI Content Moderation",
    desc: "Our AI monitors for abusive language, unsolicited explicit content, and suspicious behaviour patterns in real time — flagging and actioning violations before you have to deal with them.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "One-Tap Reporting",
    desc: "Report any profile, photo, or message in two taps. Reports are actioned within hours. You can report anonymously — the other person will never know you reported them.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "Instant Block",
    desc: "Block anyone at any time — they are immediately removed from your match list and will never be shown to you again. Blocking is permanent and anonymous.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.62 4.38 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Emergency Contact",
    desc: "Before a date, share your plans with a trusted friend using our built-in safety share feature. They get your match's profile and your planned location — just in case.",
  },
];

const PRINCIPLES = [
  "We never show your exact location — only approximate distance.",
  "Your phone number and email are never visible to other users.",
  "You can use Zod without connecting any social media accounts.",
  "We do not sell your data to advertisers or third parties.",
  "Reported users are reviewed by safety systems, not other users.",
  "We cooperate fully with law enforcement on serious safety matters.",
];

export default function SafetyCentrePage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-20 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Safety Centre
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Your safety is<br />not optional.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Safety is not a feature we added after launch. It is built into every layer of Zod — from how we verify identities to how we handle reports.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Safety features</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-black p-8 flex flex-col gap-4">
                  <div className="text-gray-500 w-10 h-10 flex items-center justify-center border border-white/10">
                    {f.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white">{f.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">Our commitments</p>
              <h2 className="text-4xl font-black tracking-tight leading-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                What we will always do
              </h2>
            </div>
            <ul className="divide-y divide-white/6 border-t border-white/6">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="py-5 flex items-start gap-4 text-sm text-gray-400 leading-relaxed">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Urgent help */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="border border-amber-900/40 bg-amber-950/30 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <div>
                  <p className="text-sm font-bold text-white mb-1">In immediate danger?</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    If you are in immediate danger, call your local emergency services. Zod's safety tools are not a substitute for emergency services.
                  </p>
                </div>
              </div>
              <a
                href="mailto:safety@dhabli.com"
                className="flex-shrink-0 px-6 py-2.5 border border-amber-900/60 text-amber-500 text-xs font-bold hover:bg-amber-950/50 transition-colors"
              >
                safety@dhabli.com
              </a>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              More resources
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/safety-tips" className="px-6 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors">
                Safety tips
              </a>
              <a href="/community-guidelines" className="px-6 py-3 border border-white/15 text-xs text-gray-400 hover:border-white/30 hover:text-white transition-colors">
                Community guidelines
              </a>
              <a href="/report" className="px-6 py-3 border border-white/15 text-xs text-gray-400 hover:border-white/30 hover:text-white transition-colors">
                Report a problem
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
