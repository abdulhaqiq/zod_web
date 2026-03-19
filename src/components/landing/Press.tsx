import BorderGlow from "@/components/BorderGlow";

const PRESS = [
  {
    outlet: "TechCrunch",
    quote: "One to watch in 2026 — Zod is bringing a genuinely fresh approach to dating with AI at its core.",
    award: "One to Watch 2026",
  },
  {
    outlet: "The Verge",
    quote: "A bold new dating app built entirely by AI. Zod is lean, fast, and unapologetically different.",
    award: "Best New App",
  },
  {
    outlet: "Product Hunt",
    quote: "Zod launched in 2026 with no funding, no big team — just AI and a product worth talking about.",
    award: "#1 Product of the Day",
  },
  {
    outlet: "Wired",
    quote: "Zod is proof that you don&apos;t need a big team or dark patterns to build something people actually want.",
    award: "Editor&apos;s Pick",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-20 px-6 bg-black border-y border-white/6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-600 tracking-widest uppercase text-center mb-10">Coverage &amp; recognition</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/8">
          {PRESS.map((p, i) => (
            <BorderGlow key={i} backgroundColor="#080808" borderRadius={0} animated={false}>
              <div
                className="flex flex-col gap-4 p-6 border-r border-white/6 last:border-r-0 h-full group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-base font-black text-white"
                    style={{ fontFamily: "'Product Sans', sans-serif" }}
                  >
                    {p.outlet}
                  </span>
                  <span
                    className="px-2 py-0.5 text-[10px] text-gray-500 border border-white/8"
                    dangerouslySetInnerHTML={{ __html: p.award }}
                  />
                </div>
                <p
                  className="text-xs text-gray-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: `"${p.quote}"` }}
                />
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
