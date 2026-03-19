import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Safety Tips",
  description:
    "Practical safety tips for using Zod — staying safe on the app, preparing for a first date, and what to do on the night.",
  keywords: ["Zod safety tips", "dating safety tips", "online dating safety", "first date safety", "Zod safe"],
  alternates: { canonical: "https://zod.app/safety-tips" },
  openGraph: {
    title: "Zod Safety Tips — Date Smarter, Stay Safer",
    description: "Practical safety advice for every stage of dating on Zod.",
    url: "https://zod.app/safety-tips",
    type: "website",
  },
};

const STAGES = [
  {
    stage: "On the app",
    color: "text-blue-400",
    tips: [
      { title: "Keep early conversations on Zod", body: "Don't move to WhatsApp, Telegram, or other platforms too quickly. Staying on Zod keeps you protected by our reporting and blocking tools." },
      { title: "Watch for red flags in messages", body: "Be cautious if someone asks for money, refuses video chat, pushes for personal details early, or their story changes over time. These are common scam patterns." },
      { title: "Reverse image search profile photos", body: "If you're unsure someone's photos are genuine, you can right-click and reverse image search them. Verify before you invest emotionally." },
      { title: "Never send money", body: "No matter how compelling the story — an emergency, a flight home, a business deal — never send money to someone you haven't met in person. This is always a scam." },
    ],
  },
  {
    stage: "Moving to a first date",
    color: "text-purple-400",
    tips: [
      { title: "Video call before meeting", body: "A short video call before your first in-person meeting gives you confidence the person is who they say they are. Most genuine people are happy to do this." },
      { title: "Tell someone your plans", body: "Let a friend or family member know who you're meeting, where, and when. Share your match's profile with them. Use Zod's built-in safety share feature." },
      { title: "Choose a public place for the first meeting", body: "A café, a restaurant, a busy park — somewhere with other people around. Avoid going to someone's home or inviting them to yours for a first meeting." },
      { title: "Organise your own transport", body: "Don't rely on your date to pick you up or drop you off for the first meeting. Being in control of your own travel keeps your options open." },
    ],
  },
  {
    stage: "On the date",
    color: "text-emerald-400",
    tips: [
      { title: "Keep your phone charged", body: "Make sure you go into the date with enough battery to call someone if you need to. Keep your location services on." },
      { title: "Watch your drink", body: "Don't leave your drink unattended. If you think your drink may have been tampered with, stop drinking it and seek help immediately." },
      { title: "Trust your instincts", body: "If something feels wrong, it probably is. You don't owe anyone an explanation. It is always okay to leave." },
      { title: "Have an exit plan", body: "Know how you're getting home before you arrive. Have a friend you can call. It's not pessimism — it's preparation." },
    ],
  },
];

const RESOURCES = [
  { label: "National Domestic Violence Hotline (US)", value: "1-800-799-7233" },
  { label: "National Stalking Helpline (UK)", value: "0808 802 0300" },
  { label: "Samaritans (UK & Ireland)", value: "116 123" },
  { label: "Crisis Text Line (US)", value: "Text HOME to 741741" },
];

export default function SafetyTipsPage() {
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
              Safety Tips
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Date smarter.<br />Stay safer.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              Online dating is genuinely wonderful — and like anything that involves meeting strangers, it requires common sense. These tips are practical, not scary.
            </p>
          </div>
        </section>

        {/* Tips by stage */}
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">
          {STAGES.map((stage) => (
            <div key={stage.stage}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-xs font-bold uppercase tracking-widest ${stage.color}`}>{stage.stage}</span>
                <div className="flex-1 h-px bg-white/6" />
              </div>
              <div className="grid sm:grid-cols-2 gap-px bg-white/6">
                {stage.tips.map((tip) => (
                  <div key={tip.title} className="bg-black p-8 flex flex-col gap-3">
                    <h3 className="text-sm font-bold text-white">{tip.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{tip.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency resources */}
        <section className="py-16 px-6 border-t border-white/6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Emergency Resources</p>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6">
              {RESOURCES.map((r) => (
                <div key={r.label} className="bg-black px-8 py-6 flex items-center justify-between gap-6">
                  <span className="text-xs text-gray-500">{r.label}</span>
                  <span className="text-sm font-bold text-white flex-shrink-0">{r.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-700 mt-4">
              For immediate emergencies, always call your local emergency services first (999 UK · 911 US · 112 EU).
            </p>
          </div>
        </section>

        {/* Links */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Need to report something?
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="/report" className="px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors">
                Report a problem
              </a>
              <a href="/safety-centre" className="px-8 py-3 border border-white/15 text-sm text-gray-400 hover:border-white/30 hover:text-white transition-colors">
                Safety centre
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
