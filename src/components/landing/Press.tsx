import BorderGlow from "@/components/BorderGlow";

const PRESS = [
  {
    outlet: "TechCrunch",
    quote: "Zod&apos;s AI compatibility engine is the most sophisticated matching technology we&apos;ve tested — it actually works.",
    award: "App of the Year 2025",
  },
  {
    outlet: "The Verge",
    quote: "The app that finally put science behind swiping. A genuine step forward for online dating.",
    award: "Best New App",
  },
  {
    outlet: "Forbes",
    quote: "4 million downloads in 18 months without a single paid acquisition campaign. Growth driven entirely by word of mouth.",
    award: "Top 50 Startups 2025",
  },
  {
    outlet: "Wired",
    quote: "Zod proves you can build a profitable, ethical dating product without dark patterns or paywalled matches.",
    award: "Editor&apos;s Choice",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-20 px-6 bg-black border-y border-white/6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-600 tracking-widest uppercase text-center mb-10">As seen in</p>

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
