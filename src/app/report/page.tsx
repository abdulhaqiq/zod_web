import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Report a Problem",
  description:
    "Report a user, fake profile, harassment, or safety concern on Zod. Every report is reviewed. Anonymous and fast.",
  keywords: ["Zod report", "report Zod user", "Zod block user", "Zod safety report"],
  alternates: { canonical: "https://zod.app/report" },
  openGraph: {
    title: "Report a Problem on Zod",
    description: "We take every report seriously. Anonymous. Reviewed within hours.",
    url: "https://zod.app/report",
    type: "website",
  },
};

const REPORT_TYPES = [
  {
    id: "fake",
    label: "Fake profile or impersonation",
    desc: "This person is using someone else's photos or pretending to be someone they're not.",
    urgency: "normal",
  },
  {
    id: "harassment",
    label: "Harassment or abusive messages",
    desc: "I received threatening, hateful, or repeatedly unwanted messages from this person.",
    urgency: "high",
  },
  {
    id: "explicit",
    label: "Unsolicited explicit content",
    desc: "I received explicit photos or videos I did not ask for.",
    urgency: "high",
  },
  {
    id: "spam",
    label: "Spam or scam",
    desc: "This person is trying to sell something, redirect me to another platform, or defraud me.",
    urgency: "normal",
  },
  {
    id: "minor",
    label: "Suspected minor",
    desc: "I believe this person may be under 18 years old.",
    urgency: "urgent",
  },
  {
    id: "danger",
    label: "Immediate safety concern",
    desc: "I have reason to believe someone is in danger or that I may be in danger.",
    urgency: "urgent",
  },
  {
    id: "other",
    label: "Something else",
    desc: "My concern doesn't fit any of the above categories.",
    urgency: "normal",
  },
];

const urgencyStyles: Record<string, string> = {
  urgent: "border-red-900/50 bg-red-950/20 hover:bg-red-950/30",
  high: "border-amber-900/40 bg-amber-950/10 hover:bg-amber-950/20",
  normal: "border-white/10 bg-transparent hover:bg-white/[0.02]",
};

const urgencyBadge: Record<string, { label: string; cls: string }> = {
  urgent: { label: "Urgent", cls: "bg-red-950 text-red-400 border border-red-900/60" },
  high: { label: "Priority", cls: "bg-amber-950 text-amber-500 border border-amber-900/60" },
  normal: { label: "", cls: "" },
};

export default function ReportPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-16 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Report a Problem
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              We take every<br />report seriously.
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
              Reports are reviewed by our trust and safety systems. The person you report will never know it was you. If you are in immediate danger, please call emergency services first.
            </p>
          </div>
        </section>

        {/* Emergency banner */}
        <section className="px-6 py-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto">
            <div className="border border-red-900/50 bg-red-950/20 px-6 py-4 flex items-start gap-4">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400 flex-shrink-0 mt-0.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <p className="text-xs text-red-300 leading-relaxed">
                <strong>In immediate danger?</strong> Call your local emergency services (999 in the UK, 911 in the US, 112 in the EU) immediately. Do not wait.
              </p>
            </div>
          </div>
        </section>

        {/* Report type selector */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Select the type of report</p>
            <div className="flex flex-col gap-3">
              {REPORT_TYPES.map((type) => (
                <label
                  key={type.id}
                  className={`flex items-start gap-5 p-5 border cursor-pointer transition-colors ${urgencyStyles[type.urgency]}`}
                >
                  <input type="radio" name="report_type" value={type.id} className="mt-1 accent-white flex-shrink-0" />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-white">{type.label}</span>
                      {urgencyBadge[type.urgency].label && (
                        <span className={`text-[9px] px-2 py-0.5 uppercase tracking-wide ${urgencyBadge[type.urgency].cls}`}>
                          {urgencyBadge[type.urgency].label}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{type.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <p className="text-[10px] tracking-widest uppercase text-gray-600">Details</p>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-600">Username or profile link (if known)</label>
              <input
                type="text"
                placeholder="@username or profile URL"
                className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-600">Your email (so we can follow up)</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-600">What happened?</label>
              <textarea
                rows={5}
                placeholder="Describe the issue in as much detail as you can. The more context you give us, the faster we can act."
                className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-600">Screenshots (optional)</label>
              <div className="border border-dashed border-white/10 px-4 py-8 flex flex-col items-center gap-2 hover:border-white/20 transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-xs text-gray-700">Click to upload or drag and drop</p>
                <p className="text-[10px] text-gray-800">PNG, JPG up to 10MB</p>
              </div>
            </div>
            <button
              type="submit"
              className="self-start px-10 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Submit report
            </button>
            <p className="text-[10px] text-gray-700 leading-relaxed">
              Reports are anonymous. The reported user will not be notified. We aim to review all reports within 4 hours. For urgent safety matters, email <a href="mailto:safety@dhabli.com" className="text-gray-500 hover:text-white transition-colors">safety@dhabli.com</a> directly.
            </p>
          </div>
        </section>

        {/* Alternative */}
        <section className="py-16 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-4">
            <p className="text-gray-600 text-sm">Prefer to report in-app?</p>
            <p className="text-xs text-gray-700 leading-relaxed max-w-xs">
              Tap the three-dot menu on any profile or message thread and select &quot;Report&quot;. It takes two taps.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
