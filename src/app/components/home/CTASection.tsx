"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        alt="Équipe web en plein travail"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/92 via-[#3730A3]/88 to-[#0F172A]/95" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#F59E0B]/50" />
            <span className="text-[#F59E0B] text-2xl">⚡</span>
            <div className="h-px w-16 bg-[#F59E0B]/50" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Votre site web,{" "}
            <span className="text-[#FCD34D] italic">livré en 7 jours.</span>
          </h2>
          <p className="text-[#CBD5E1] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Rejoignez les 150+ PME françaises qui nous font confiance.
            Maquette gratuite, devis sous 24h, satisfaction garantie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-amber text-base px-10 py-4 shadow-amber">
              Obtenir ma maquette gratuite
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:contact@webzynth.fr"
              className="flex items-center gap-3 text-white/80 hover:text-white font-medium transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Mail size={16} />
              </div>
              Nous contacter
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[#CBD5E1]/70 text-sm">
            {["✓ Maquette gratuite", "✓ Devis sous 24h", "✓ Livraison en 7 jours", "✓ Satisfait ou remboursé"].map(r => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
