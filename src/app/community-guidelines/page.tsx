import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "The rules and values that keep Zod a safe, respectful, and genuine place to find connections.",
};

const RULES = [
  {
    number: "01",
    title: "Be genuine",
    desc: "Use your real photos. Represent yourself honestly. Don't use Zod to create a persona you're not. Authenticity is the foundation of every real connection.",
    examples: ["No fake profile photos", "No misleading bios", "No impersonating other people"],
  },
  {
    number: "02",
    title: "Be respectful",
    desc: "Treat every person on Zod the way you'd want to be treated. Rejection is a normal part of dating — respond to it with grace. Harassment, threats, or abusive language will result in immediate removal.",
    examples: ["No sexual messages without consent", "No hate speech or slurs", "No intimidation or threats"],
  },
  {
    number: "03",
    title: "Keep it safe",
    desc: "Never share personal information — address, workplace, financial details — with someone you've just matched with. Take your time. If something feels off, trust that instinct and report it.",
    examples: ["No soliciting personal details early", "No sending unsolicited explicit content", "No meeting in isolated locations on a first date"],
  },
  {
    number: "04",
    title: "No spam or commercial activity",
    desc: "Zod is for meeting people, not for selling products, promoting services, or redirecting users to other platforms. Promotional content of any kind is not allowed.",
    examples: ["No selling products or services", "No promoting OnlyFans or similar platforms", "No referral links or affiliate marketing"],
  },
  {
    number: "05",
    title: "No minors",
    desc: "Zod is strictly for users aged 18 and over. If you suspect another user is under 18, report them immediately. We take this seriously and act on every report.",
    examples: ["Age-appropriate profile photos only", "No contact with or solicitation of minors", "Immediate removal for violations"],
  },
  {
    number: "06",
    title: "Protect others' privacy",
    desc: "What happens in a conversation stays in that conversation. Don't screenshot, share, or publish private messages or photos without explicit consent.",
    examples: ["No screenshotting private conversations", "No sharing someone's profile without consent", "No doxxing or exposure of personal information"],
  },
];

const CONSEQUENCES = [
  { level: "Warning", desc: "Minor first-time violations may receive a formal warning and content removal." },
  { level: "Temporary suspension", desc: "Repeated or more serious violations result in a temporary account suspension." },
  { level: "Permanent ban", desc: "Severe violations — harassment, explicit non-consensual content, impersonation — result in immediate and permanent removal." },
  { level: "Law enforcement", desc: "Illegal activity — including content involving minors or credible threats — is reported to the relevant authorities." },
];

export default function CommunityGuidelinesPage() {
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
              Community Guidelines
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              The rules that keep<br />Zod worth using.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Zod only works if everyone feels safe and respected. These guidelines are not suggestions — they are the conditions of being here. Violating them has consequences.
            </p>
          </div>
        </section>

        {/* Rules */}
        <section className="py-20 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto flex flex-col gap-px bg-white/6">
            {RULES.map((rule) => (
              <div key={rule.number} className="bg-black p-8 sm:p-10 grid sm:grid-cols-[64px_1fr_260px] gap-6 items-start">
                <span className="text-3xl font-black text-white/10" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  {rule.number}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-bold text-white">{rule.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{rule.desc}</p>
                </div>
                <ul className="space-y-2 pt-1">
                  {rule.examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2 text-xs text-gray-700">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5 text-gray-700">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Consequences */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Enforcement</p>
            <h2 className="text-4xl font-black tracking-tight mb-10" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              What happens when rules are broken
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6">
              {CONSEQUENCES.map((c) => (
                <div key={c.level} className="bg-black p-8 flex flex-col gap-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{c.level}</span>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              See something wrong?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Report it. Every report is reviewed by our trust and safety systems. You can report directly inside the app or contact us below.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/report" className="px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors">
                Report a problem
              </a>
              <a href="mailto:safety@dhabli.com" className="px-8 py-3 border border-white/15 text-sm text-gray-400 hover:border-white/30 hover:text-white transition-colors">
                safety@dhabli.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
