"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-white/95 backdrop-blur-md shadow-warm border-b border-[#4F46E5]/8";

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-warm group-hover:scale-105 transition-transform">
              <Zap size={18} className="text-white" />
            </div>
            <div>
              <span className={`font-display font-bold text-lg leading-none ${isHome && !scrolled ? "text-white" : "text-[#0F172A]"}`}>
                WebZynth
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    active
                      ? "text-[#4F46E5] bg-[#4F46E5]/8"
                      : isHome && !scrolled
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-[#334155] hover:text-[#4F46E5] hover:bg-[#4F46E5]/6"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-amber text-sm py-2.5 px-5">
              Devis gratuit
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHome && !scrolled ? "text-white hover:bg-white/10" : "text-[#0F172A] hover:bg-[#4F46E5]/8"
            }`}
            aria-label={open ? "Fermer" : "Menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 space-y-1 shadow-warm-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-[#4F46E5]/8 text-[#4F46E5]"
                  : "text-[#334155] hover:bg-gray-50"
              }`}
            >
              {label}
              <ChevronRight size={15} className="opacity-40" />
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-amber w-full justify-center text-sm"
            >
              Devis gratuit →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
