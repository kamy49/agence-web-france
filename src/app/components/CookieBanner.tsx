"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-[#0F172A] text-white rounded-2xl shadow-[0_-4px_40px_rgba(0,0,0,0.3)] p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 bg-[#4F46E5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-[#6366F1]" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-white mb-1">
              🍪 Nous utilisons des cookies
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
              En cliquant sur &ldquo;Accepter&rdquo;, vous consentez à notre utilisation des cookies conformément au{" "}
              <Link href="/politique-confidentialite" className="text-[#6366F1] hover:underline">
                RGPD
              </Link>{" "}
              et à notre{" "}
              <Link href="/politique-confidentialite" className="text-[#6366F1] hover:underline">
                politique de confidentialité
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className="flex items-center gap-1.5 text-[#94A3B8] hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-white/40"
            >
              <X size={15} /> Refuser
            </button>
            <button
              onClick={accept}
              className="flex items-center gap-1.5 bg-[#4F46E5] hover:bg-[#6366F1] text-white text-sm font-semibold transition-colors px-5 py-2 rounded-full"
            >
              <Check size={15} /> Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
