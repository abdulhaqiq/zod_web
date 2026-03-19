import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Manage your cookie preferences for Zod. Control which cookies are active on your device.",
};

const CATEGORIES = [
  {
    id: "essential",
    name: "Essential Cookies",
    required: true,
    description:
      "These cookies are required for Zod to function. They enable core features such as authentication, security, and session management. They cannot be disabled.",
    examples: [
      "Session authentication token",
      "CSRF protection cookie",
      "Load balancer routing cookie",
    ],
  },
  {
    id: "functional",
    name: "Functional Cookies",
    required: false,
    description:
      "These cookies enable enhanced features and personalisation, such as remembering your language preference, notification settings, and UI configuration. Disabling them may affect your experience.",
    examples: [
      "Language and locale preferences",
      "Notification settings",
      "Onboarding state",
    ],
  },
  {
    id: "analytics",
    name: "Analytics Cookies",
    required: false,
    description:
      "These cookies help us understand how you use Zod so we can improve the product. Data is aggregated and anonymised. We use Amplitude and Google Analytics for this purpose.",
    examples: [
      "Feature usage tracking (anonymised)",
      "App performance monitoring",
      "Crash reporting and error logs",
    ],
  },
  {
    id: "marketing",
    name: "Marketing Cookies",
    required: false,
    description:
      "These cookies track app download conversions from our marketing campaigns. They help us understand which channels are driving growth. We never use these cookies to show ads inside the app.",
    examples: [
      "Meta Pixel (install attribution)",
      "TikTok Pixel (install attribution)",
      "Campaign click tracking",
    ],
  },
];

export default function CookieSettingsPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-16 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-7">
              Legal · Cookies
            </span>
            <h1
              className="text-4xl sm:text-6xl font-black leading-[1.02] tracking-tight mb-5"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Cookie Settings
            </h1>
            <p className="text-base text-gray-400 leading-relaxed">
              We believe in transparency and control. Choose which cookies you're comfortable with. Essential cookies are always active because the app can't work without them.
            </p>
          </div>
        </section>

        {/* Settings UI */}
        <section className="border-t border-white/6 px-6 pb-24">
          <div className="max-w-2xl mx-auto pt-12 space-y-6">

            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="border border-white/10 bg-white/[0.01] p-6">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div className="flex items-center gap-3">
                    <h2
                      className="text-sm font-black text-white"
                      style={{ fontFamily: "'Product Sans', sans-serif" }}
                    >
                      {cat.name}
                    </h2>
                    {cat.required && (
                      <span className="text-[9px] px-2 py-0.5 bg-white/8 text-gray-400 uppercase tracking-widest font-medium">
                        Always On
                      </span>
                    )}
                  </div>

                  {/* Toggle */}
                  <div className="shrink-0">
                    {cat.required ? (
                      <div
                        aria-disabled="true"
                        className="relative w-11 h-6 bg-white/20 rounded-none cursor-not-allowed"
                        role="switch"
                        aria-checked="true"
                        aria-label={`${cat.name} - always enabled`}
                      >
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white" />
                      </div>
                    ) : (
                      <label className="relative inline-flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          defaultChecked={cat.id === "functional"}
                          className="sr-only peer"
                          aria-label={`Toggle ${cat.name}`}
                        />
                        <div className="w-11 h-6 bg-white/10 border border-white/15 peer-checked:bg-white/20 peer-checked:border-white/30 transition-all relative">
                          <div className="absolute left-1 top-1 w-4 h-4 bg-gray-600 peer-checked:bg-white transition-all peer-checked:translate-x-5" />
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-wider text-gray-700 font-semibold mb-2">Examples</p>
                  {cat.examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 bg-gray-700 rounded-full shrink-0" />
                      <span className="text-[11px] text-gray-600">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                className="flex-1 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                Save My Preferences
              </button>
              <button
                type="button"
                className="flex-1 py-3 border border-white/15 text-white text-sm font-medium hover:border-white/30 hover:bg-white/[0.03] transition-all"
              >
                Accept All
              </button>
              <button
                type="button"
                className="flex-1 py-3 border border-white/10 text-gray-500 text-sm font-medium hover:border-white/20 hover:text-gray-400 transition-all"
              >
                Reject All Optional
              </button>
            </div>

            {/* Footer note */}
            <div className="pt-6 border-t border-white/6">
              <p className="text-xs text-gray-700 leading-relaxed">
                Your preferences are saved in a cookie on your device and will persist for 12 months. You can change these settings at any time. For more information, read our{" "}
                <a href="/cookies" className="text-gray-500 hover:text-gray-300 transition-colors underline">
                  Cookie Policy
                </a>
                . Your choices here apply to this browser only. For mobile app tracking preferences, go to Settings → Privacy in the Zod app.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
