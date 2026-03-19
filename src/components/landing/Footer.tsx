import { ZodLogo } from "./shared";

const LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Matching", href: "#ai" },
    { label: "Safety", href: "#safety" },
    { label: "Pricing", href: "#pricing" },
    { label: "Compatibility Quiz", href: "#" },
    { label: "Success Rate", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
    { label: "Careers", href: "/careers", badge: "Hiring" },
    { label: "Investors", href: "/investors" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Cookie Settings", href: "/cookie-settings" },
    { label: "GDPR", href: "/gdpr" },
    { label: "CCPA", href: "/ccpa" },
    { label: "Accessibility", href: "/accessibility" },
  ],
  Support: [
    { label: "Help Centre", href: "/help-centre" },
    { label: "Community Guidelines", href: "/community-guidelines" },
    { label: "Safety Centre", href: "/safety-centre" },
    { label: "Report a Problem", href: "/report" },
    { label: "Safety Tips", href: "/safety-tips" },
    { label: "Status", href: "/status", badge: "Operational" },
    { label: "Sitemap", href: "/sitemap-page" },
  ],
  Download: [
    { label: "iOS App", href: "#", sub: "App Store" },
    { label: "Android App", href: "#", sub: "Google Play" },
    { label: "Web App", href: "#", sub: "browser.zod.app" },
    { label: "Wear OS", href: "#", sub: "Coming soon" },
    { label: "Apple Watch", href: "#", sub: "Coming soon" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.858L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.54V6.77a4.84 4.84 0 0 1-1.06-.08z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95C1 8.12 1 12 1 12s0 3.88.46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.88 23 12 23 12s0-3.88-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/6">

      {/* App download CTA strip */}
      <div className="border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-white font-black text-lg" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Find your person. Download Zod.
            </p>
            <p className="text-xs text-gray-600">Available on iOS, Android and web. Free to start.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-all group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 leading-none">Download on the</span>
                <span className="text-xs font-semibold text-white leading-tight">App Store</span>
              </div>
            </a>
            {/* Google Play */}
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-all group"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.83-2.83L3.18 23.76zm16.44-9.37L16.5 12l3.12-2.39L20.82 12l-1.2 2.39zM3 .24C2.64.2 2.3.3 2.07.52L13.68 12 2.07 23.48c.23.22.57.32.93.28L15 12 3 .24zm10.68 11.17L3.18.24C3.07.17 2.96.12 2.84.1L14.5 12 3 23.76c.12-.02.23-.07.34-.14L13.68 12.59l-2.83-2.83 2.83-1.35z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 leading-none">Get it on</span>
                <span className="text-xs font-semibold text-white leading-tight">Google Play</span>
              </div>
            </a>
            {/* Web App */}
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 border border-white/15 hover:border-white/30 hover:bg-white/[0.03] transition-all group"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 leading-none">Open in</span>
                <span className="text-xs font-semibold text-white leading-tight">Web App</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main link grid */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 mb-14">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex flex-col gap-5">
            <div className="text-white">
              <ZodLogo size={44} />
            </div>
            <p className="text-xs text-gray-600 leading-relaxed max-w-[190px]">
              The AI-powered dating app built for real relationships.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 flex-wrap">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-200 border border-white/8 hover:border-white/20 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            {/* Trust badges */}
            <div className="flex flex-col gap-1.5 mt-1">
              <div className="flex items-center gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 flex-shrink-0">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-[10px] text-gray-700">ID-verified matches</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 flex-shrink-0">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-[10px] text-gray-700">End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[10px] text-gray-700">GDPR & CCPA compliant</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-3">
              <p className="text-[10px] font-bold text-white uppercase tracking-[0.12em] mb-1">{category}</p>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs text-gray-600 hover:text-gray-300 transition-colors flex items-center gap-2 group"
                >
                  {item.label}
                  {"badge" in item && item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.5 leading-none font-medium uppercase tracking-wide ${
                        item.badge === "Hiring"
                          ? "bg-white/8 text-gray-400"
                          : item.badge === "Operational"
                          ? "bg-emerald-950 text-emerald-500 border border-emerald-900/60"
                          : "bg-white/8 text-gray-500"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {"sub" in item && item.sub && (
                    <span className="text-[10px] text-gray-700 group-hover:text-gray-600 transition-colors ml-0.5">
                      — {item.sub}
                    </span>
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <p className="text-xs text-gray-700">
              &copy; {new Date().getFullYear()} Zevello, Inc. All rights reserved.
            </p>
            <div className="hidden sm:block w-px h-3 bg-white/10" />
            <p className="text-xs text-gray-700">Made with care with 100% AI</p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block flex-shrink-0"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span className="text-xs text-gray-700">2,847 matches made today</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-[10px] text-gray-700 hover:text-gray-500 transition-colors uppercase tracking-wide">English</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-[10px] text-gray-700 hover:text-gray-500 transition-colors uppercase tracking-wide">العربية</a>
              <span className="text-white/10">|</span>
              <a href="#" className="text-[10px] text-gray-700 hover:text-gray-500 transition-colors uppercase tracking-wide">हिन्दी</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
