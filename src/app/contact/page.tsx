import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Zod team for support, press, partnerships, investor relations, or legal enquiries. Real people, real responses.",
  keywords: ["Zod contact", "Zod support", "contact Zod app", "Zod customer service", "Zod email"],
  alternates: { canonical: "https://zod.app/contact" },
  openGraph: {
    title: "Contact Zod — Get in Touch",
    description: "Find the right team and reach out. We respond to everything personally.",
    url: "https://zod.app/contact",
    type: "website",
  },
};

const TEAMS = [
  {
    label: "General Support",
    email: "support@dhabli.com",
    desc: "Account issues, app bugs, billing questions, and everything else.",
    responseTime: "Within 24 hours",
  },
  {
    label: "Press & Media",
    email: "press@dhabli.com",
    desc: "Interview requests, media enquiries, and press kit access.",
    responseTime: "Within 1 business day",
  },
  {
    label: "Partnerships",
    email: "partnerships@dhabli.com",
    desc: "Brand partnerships, technology integrations, and distribution deals.",
    responseTime: "Within 2 business days",
  },
  {
    label: "Investor Relations",
    email: "investors@dhabli.com",
    desc: "Financial information, investor enquiries, and institutional questions.",
    responseTime: "Within 3 business days",
  },
  {
    label: "Safety & Trust",
    email: "safety@dhabli.com",
    desc: "Reporting abuse, harassment, or safety concerns. Treated as urgent.",
    responseTime: "Within 4 hours",
    urgent: true,
  },
  {
    label: "Legal & Privacy",
    email: "legal@dhabli.com",
    desc: "Data subject requests, GDPR / CCPA enquiries, and legal notices.",
    responseTime: "Within 5 business days",
  },
];

const OFFICES = [
  {
    city: "London",
    role: "Headquarters",
    address: "15 Finsbury Square\nLondon, EC2A 1BT\nUnited Kingdom",
  },
  {
    city: "Dubai",
    role: "MENA & Growth",
    address: "Dubai International Financial Centre\nGate Village, Building 3\nDubai, UAE",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-20 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              Get in Touch
            </span>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                We&apos;re real<br />people. Promise.
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                Find the right team below and reach out directly. We aim to respond quickly and helpfully — no automated replies, no ticketing hell.
              </p>
            </div>
          </div>
        </section>

        {/* Contact teams */}
        <section className="py-16 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Contact by topic</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
              {TEAMS.map((team) => (
                <div key={team.label} className="bg-black p-8 flex flex-col gap-4 group">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-bold text-white">{team.label}</h3>
                    {team.urgent && (
                      <span className="text-[9px] px-2 py-0.5 bg-amber-950 text-amber-500 border border-amber-900/60 uppercase tracking-wide">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed flex-1">{team.desc}</p>
                  <div className="border-t border-white/6 pt-4 flex flex-col gap-2">
                    <a
                      href={`mailto:${team.email}`}
                      className="text-xs text-white hover:text-gray-300 transition-colors"
                    >
                      {team.email}
                    </a>
                    <span className="text-[10px] text-gray-700">Response: {team.responseTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick contact form */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">Send a message</p>
              <h2
                className="text-4xl font-black tracking-tight leading-tight mb-4"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Not sure who to contact?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Fill in the form and we&apos;ll route your message to the right team. We read every submission.
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-600">Topic</label>
                <select className="bg-black border border-white/10 px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer">
                  <option value="">Select a topic</option>
                  <option>General Support</option>
                  <option>Press & Media</option>
                  <option>Partnerships</option>
                  <option>Investor Relations</option>
                  <option>Safety & Trust</option>
                  <option>Legal & Privacy</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-600">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="bg-transparent border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="self-start px-8 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        {/* Offices */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-10">Our Offices</p>
            <div className="grid sm:grid-cols-2 gap-px bg-white/6 max-w-2xl">
              {OFFICES.map((office) => (
                <div key={office.city} className="bg-black p-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-bold text-white">{office.city}</h3>
                    <span className="text-[9px] px-2 py-0.5 border border-white/10 text-gray-600 uppercase tracking-wider">
                      {office.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
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
