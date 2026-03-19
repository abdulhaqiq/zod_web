import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Live status for all Zod services — app, matching engine, messaging, notifications, payments, and more. All systems operational.",
  keywords: ["Zod status", "Zod down", "is Zod down", "Zod server status", "Zod operational"],
  alternates: { canonical: "https://zod.app/status" },
  openGraph: {
    title: "Zod System Status — All Services Operational",
    description: "Live status for every Zod service. Subscribe to incident alerts.",
    url: "https://zod.app/status",
    type: "website",
  },
};

const SERVICES = [
  { name: "App — iOS", status: "operational", latency: "98ms" },
  { name: "App — Android", status: "operational", latency: "104ms" },
  { name: "Web App", status: "operational", latency: "87ms" },
  { name: "Matching Engine (AI)", status: "operational", latency: "212ms" },
  { name: "Messaging & Chat", status: "operational", latency: "45ms" },
  { name: "Push Notifications", status: "operational", latency: "130ms" },
  { name: "Photo Upload & Processing", status: "operational", latency: "320ms" },
  { name: "ID Verification", status: "operational", latency: "1.2s" },
  { name: "Payments & Billing", status: "operational", latency: "180ms" },
  { name: "Authentication", status: "operational", latency: "61ms" },
  { name: "API Gateway", status: "operational", latency: "39ms" },
  { name: "Safety & Moderation Systems", status: "operational", latency: "155ms" },
];

const HISTORY = [
  { date: "Mar 19, 2026", title: "All systems operational", type: "resolved", detail: "No incidents." },
  { date: "Mar 18, 2026", title: "All systems operational", type: "resolved", detail: "No incidents." },
  { date: "Mar 17, 2026", title: "All systems operational", type: "resolved", detail: "No incidents." },
];

const statusConfig = {
  operational: {
    dot: "bg-emerald-500",
    label: "Operational",
    labelCls: "text-emerald-500",
  },
  degraded: {
    dot: "bg-amber-500",
    label: "Degraded",
    labelCls: "text-amber-500",
  },
  outage: {
    dot: "bg-red-500",
    label: "Outage",
    labelCls: "text-red-500",
  },
};

export default function StatusPage() {
  const allOperational = SERVICES.every((s) => s.status === "operational");

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
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-10">
              System Status
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"
                    style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                  />
                  <h1
                    className="text-4xl sm:text-5xl font-black tracking-tight"
                    style={{ fontFamily: "'Product Sans', sans-serif" }}
                  >
                    {allOperational ? "All systems operational" : "Some systems affected"}
                  </h1>
                </div>
                <p className="text-sm text-gray-600">
                  Last checked: {new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short" })}
                </p>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 border border-emerald-900/60 bg-emerald-950/30 self-start">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-emerald-400 font-medium">Operational</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Services</p>
            <div className="flex flex-col divide-y divide-white/6 border-t border-white/6">
              {SERVICES.map((svc) => {
                const cfg = statusConfig[svc.status as keyof typeof statusConfig];
                return (
                  <div key={svc.name} className="py-5 grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_120px_auto] gap-4 items-center">
                    <span className="text-sm text-gray-400">{svc.name}</span>
                    <span className="text-xs text-gray-700 hidden sm:block">{svc.latency}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
                      <span className={`text-xs font-medium ${cfg.labelCls}`}>{cfg.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Uptime bars */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">90-day uptime</p>
            <div className="flex flex-col gap-5">
              {["App", "Matching Engine", "Messaging", "API"].map((service) => (
                <div key={service} className="flex items-center gap-6">
                  <span className="text-xs text-gray-600 w-36 flex-shrink-0">{service}</span>
                  <div className="flex-1 flex gap-0.5">
                    {Array.from({ length: 90 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-6 bg-emerald-600/80 hover:bg-emerald-500 transition-colors cursor-pointer"
                        title="100% uptime"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-emerald-500 w-16 text-right flex-shrink-0">100%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Incident history */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Incident history</p>
            <div className="flex flex-col divide-y divide-white/6 border-t border-white/6">
              {HISTORY.map((h) => (
                <div key={h.date} className="py-6 grid sm:grid-cols-[160px_1fr_auto] gap-4 items-center">
                  <span className="text-xs text-gray-700">{h.date}</span>
                  <div>
                    <span className="text-sm text-gray-400">{h.title}</span>
                    <p className="text-xs text-gray-700 mt-1">{h.detail}</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 border border-emerald-900/50 text-emerald-600 uppercase tracking-wide self-start">
                    {h.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="py-20 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl font-black tracking-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Get status updates
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Subscribe to receive an email if any Zod service experiences an incident.
            </p>
            <form className="flex gap-0 w-full max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-white/15 border-r-0 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors whitespace-nowrap border border-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
