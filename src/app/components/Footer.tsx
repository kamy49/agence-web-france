import Link from "next/link";
import { Mail, MapPin, Zap } from "lucide-react";

function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const footerLinks = {
  services: [
    { href: "/services#vitrine", label: "Site Vitrine" },
    { href: "/services#ecommerce", label: "E-commerce" },
    { href: "/services#seo", label: "Référencement SEO" },
    { href: "/services#maintenance", label: "Maintenance" },
    { href: "/services#refonte", label: "Refonte de site" },
  ],
  company: [
    { href: "/a-propos", label: "À Propos" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" },
    { href: "/cgv", label: "CGV" },
    { href: "/politique-confidentialite#cookies", label: "Gestion des cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#94A3B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Logo + desc */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                WebZynth
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Agence web spécialisée dans la création de sites web professionnels
              pour PME et artisans en France. Des sites qui convertissent.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href="mailto:contact@webzynth.fr" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors">
                <Mail size={15} className="text-[#4F46E5]" /> contact@webzynth.fr
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin size={15} className="text-[#4F46E5]" /> Belgique, Canada, France, Luxembourg, Suisse (télétravail)
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: IconLinkedIn, label: "LinkedIn", href: "#" },
                { Icon: IconInstagram, label: "Instagram", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#4F46E5] hover:border-[#4F46E5] transition-colors text-[#94A3B8] hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-[#6366F1] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agence */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Agence</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-[#6366F1] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Légal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm hover:text-[#6366F1] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-[#4F46E5]/10 border border-[#4F46E5]/20 rounded-xl p-4">
              <p className="text-[#6366F1] font-semibold text-xs mb-1">🇫🇷 Conforme RGPD</p>
              <p className="text-xs leading-relaxed">
                Site conforme au Règlement Général sur la Protection des Données (UE) 2016/679.
              </p>
            </div>
          </div>
        </div>

        {/* Bas */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>© {new Date().getFullYear()} WebZynth — Tous droits réservés</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-[#6366F1] transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-[#6366F1] transition-colors">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-[#6366F1] transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
