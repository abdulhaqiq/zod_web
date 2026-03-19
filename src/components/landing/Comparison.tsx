import BorderGlow from "@/components/BorderGlow";

const ROWS = [
  { feature: "AI compatibility engine",    zod: true,  tinder: false, hinge: "partial", bumble: false },
  { feature: "Photo verification",         zod: true,  tinder: false, hinge: "partial", bumble: "partial" },
  { feature: "Zero pay-to-match ads",      zod: true,  tinder: false, hinge: false,     bumble: false },
  { feature: "Ice-breaker AI suggestions", zod: true,  tinder: false, hinge: false,     bumble: false },
  { feature: "Incognito browse",           zod: true,  tinder: "paid",hinge: "paid",    bumble: false },
  { feature: "End-to-end encrypted chat",  zod: true,  tinder: false, hinge: false,     bumble: false },
  { feature: "Daily curated picks",        zod: true,  tinder: false, hinge: true,      bumble: true },
  { feature: "Free basic access",          zod: true,  tinder: true,  hinge: true,      bumble: true },
];

const APPS = [
  { name: "Zod",    highlight: true },
  { name: "Tinder", highlight: false },
  { name: "Hinge",  highlight: false },
  { name: "Bumble", highlight: false },
];

function Cell({ value }: { value: boolean | "partial" | "paid" | string }) {
  if (value === true) return (
    <span className="inline-flex items-center justify-center w-6 h-6 bg-white/10 text-white">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </span>
  );
  if (value === false) return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </span>
  );
  return (
    <span className="inline-block px-2 py-0.5 text-[10px] text-gray-500 border border-white/10">
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
            Comparison
          </span>
          <h2
            className="text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "'Product Sans', sans-serif" }}
          >
            How we stack up.
          </h2>
          <p className="text-gray-500 text-sm mt-3">Why millions switched from Tinder, Hinge, and Bumble to Zod.</p>
        </div>

        <BorderGlow backgroundColor="#0a0a0a" borderRadius={0} animated={false}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left px-6 py-4 text-xs text-gray-500 font-medium w-48">Feature</th>
                  {APPS.map((a) => (
                    <th
                      key={a.name}
                      className={`px-4 py-4 text-xs font-bold text-center ${a.highlight ? "text-white" : "text-gray-600"}`}
                      style={a.highlight ? { background: "rgba(255,255,255,0.04)" } : {}}
                    >
                      {a.name}
                      {a.highlight && (
                        <span className="ml-2 px-1.5 py-0.5 text-[10px] font-medium text-black bg-white">
                          Best
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-400">{row.feature}</td>
                    {[row.zod, row.tinder, row.hinge, row.bumble].map((val, j) => (
                      <td
                        key={j}
                        className="px-4 py-4 text-center"
                        style={j === 0 ? { background: "rgba(255,255,255,0.03)" } : {}}
                      >
                        <Cell value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}
