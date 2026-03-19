import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyPageProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  effectiveDate: string;
  sections: PolicySection[];
}

export default function PolicyPage({
  badge,
  title,
  subtitle,
  lastUpdated,
  effectiveDate,
  sections,
}: PolicyPageProps) {
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
          <div className="relative max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-7">
              {badge}
            </span>
            <h1
              className="text-4xl sm:text-6xl font-black leading-[1.02] tracking-tight mb-5"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              {title}
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              {subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs text-gray-600">
                <span className="text-gray-500 font-medium">Last updated:</span> {lastUpdated}
              </span>
              <span className="hidden sm:block w-px h-3 bg-white/10" />
              <span className="text-xs text-gray-600">
                <span className="text-gray-500 font-medium">Effective:</span> {effectiveDate}
              </span>
            </div>
          </div>
        </section>

        {/* Content + TOC */}
        <section className="border-t border-white/6 px-6 pb-24">
          <div className="max-w-6xl mx-auto pt-14 flex flex-col lg:flex-row gap-12">

            {/* Table of Contents — sticky sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-28">
                <p className="text-[10px] font-bold text-white uppercase tracking-[0.12em] mb-4">Contents</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-start gap-3 py-1.5 text-xs text-gray-600 hover:text-gray-300 transition-colors"
                    >
                      <span className="mt-0.5 text-[10px] font-mono text-gray-700 group-hover:text-gray-500 transition-colors w-4 shrink-0 text-right">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{s.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy content */}
            <div className="flex-1 min-w-0 space-y-14">
              {sections.map((s, i) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="text-[10px] font-mono text-gray-700 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className="text-xl font-black tracking-tight text-white"
                      style={{ fontFamily: "'Product Sans', sans-serif" }}
                    >
                      {s.title}
                    </h2>
                  </div>
                  <div className="ml-8 policy-content">
                    {s.content}
                  </div>
                  {i < sections.length - 1 && (
                    <div className="mt-14 border-b border-white/6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

/* Reusable typography helpers for policy content */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-400 leading-relaxed mb-4 last:mb-0">{children}</p>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-sm font-bold text-white mt-6 mb-3 first:mt-0"
      style={{ fontFamily: "'Product Sans', sans-serif" }}
    >
      {children}
    </h3>
  );
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
          <span className="mt-1.5 w-1 h-1 bg-gray-600 rounded-full shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-white/10 bg-white/[0.02] p-5 mb-4">
      <p className="text-sm text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}

export function ContactBlock({
  email,
  address,
}: {
  email: string;
  address: string;
}) {
  return (
    <div className="border border-white/10 p-5 space-y-1 text-xs text-gray-500 font-mono mt-4">
      <p className="text-gray-300 font-sans font-bold text-sm mb-3" style={{ fontFamily: "'Product Sans', sans-serif" }}>
        Zevello, Inc.
      </p>
      <p>{address}</p>
      <p>
        Email:{" "}
        <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors underline">
          {email}
        </a>
      </p>
    </div>
  );
}
