"use client";
import { useState, useEffect } from "react";
import { ZodLogo, Ic } from "./shared";

const NAV = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Safety", href: "#safety" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center h-[66px] gap-8">
        <a href="/" className="flex items-center gap-2.5 text-white flex-shrink-0">
          <ZodLogo size={52} />
        </a>

        <nav className="hidden md:flex items-center gap-1 flex-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3.5 py-1.5 text-sm text-gray-400 hover:text-white transition-colors hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 ml-auto">
          <a
            href="#download"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white transition-all hover:bg-gray-100"
            style={{ letterSpacing: "-0.01em" }}
          >
            <Ic.Apple s={13} />
            Download Free
          </a>
        </div>

        <button
          className="md:hidden ml-auto text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <Ic.X s={20} /> : <Ic.Menu s={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-white/8 px-6 py-4 flex flex-col gap-2"
          style={{ background: "rgba(0,0,0,0.95)" }}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#download"
            className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-medium text-black bg-white"
          >
            <Ic.Apple s={13} />
            Download Free
          </a>
        </div>
      )}
    </header>
  );
}
