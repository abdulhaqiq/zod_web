"use client";
import { useState } from "react";
import BorderGlow from "@/components/BorderGlow";

const FAQS = [
  {
    q: "Is Zod free to use?",
    a: "Yes. Zod is free to download and use with no time limits. The free plan includes up to 10 AI-ranked daily picks, text messaging, and photo verification. Upgrade to Pro for unlimited picks, incognito mode, and advanced features.",
  },
  {
    q: "How does Zod's AI matching work?",
    a: "During sign-up you answer 12 questions covering personality, values, lifestyle, and relationship goals. Our AI maps your answers across 200+ compatibility dimensions — drawn from relationship psychology research — and ranks every profile you see by your personal compatibility score.",
  },
  {
    q: "Is Zod available worldwide?",
    a: "Zod is active in 120+ countries on iOS and Android. Some features may vary by region. International matching is supported — many couples on Zod have connected across countries.",
  },
  {
    q: "How does photo and ID verification work?",
    a: "Every profile must pass AI photo verification before going live. Optional government ID verification adds a blue verified badge to your profile, increasing trust with potential matches. Verified users receive 3x more likes on average.",
  },
  {
    q: "Can I delete my account and data?",
    a: "Yes. You can permanently delete your account and all associated data at any time from Settings. We honour all GDPR, CCPA, and local privacy law data deletion requests within 30 days.",
  },
  {
    q: "What makes Zod different from Tinder or Hinge?",
    a: "Most apps show you profiles based on proximity and photos. Zod ranks every profile by a deep compatibility score built from 200+ signals. We also offer AI ice-breaker suggestions, incognito browse, zero pay-to-match ads, and end-to-end encrypted messaging — features not available together on any competitor.",
  },
  {
    q: "How do I cancel my Pro subscription?",
    a: "Cancel anytime from your account settings on iOS, Android, or the web. You keep Pro features until the end of your billing period. No cancellation fees.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
            FAQ
          </span>
          <h2
            className="text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "'Product Sans', sans-serif" }}
          >
            Common questions.
          </h2>
        </div>

        <BorderGlow backgroundColor="#0a0a0a" borderRadius={0} animated={false}>
          <div className="flex flex-col divide-y divide-white/6">
            {FAQS.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/2 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-white">{item.q}</span>
                  <span className="flex-shrink-0 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed pr-14">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
