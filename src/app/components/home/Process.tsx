"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { num: "01", emoji: "💬", title: "Échange gratuit", desc: "On discute de votre projet, vos objectifs et votre budget. 15 minutes suffisent. Zéro engagement.", color: "#4F46E5" },
  { num: "02", emoji: "🎨", title: "Maquette offerte", desc: "Nous vous créons une maquette personnalisée de votre site en 24h. Vous visualisez avant de vous engager.", color: "#F97316" },
  { num: "03", emoji: "⚡", title: "Développement", desc: "Notre équipe développe votre site en 5 à 7 jours ouvrés avec les dernières technologies web.", color: "#10B981" },
  { num: "04", emoji: "🚀", title: "Mise en ligne", desc: "Votre site est mis en ligne, optimisé SEO, et vous recevez une formation pour le gérer vous-même.", color: "#F59E0B" },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5]/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-[#4F46E5]/15 text-[#A5B4FC] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#4F46E5]/20 mb-4">
            Notre méthode
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4 mb-5">
            De l&apos;idée à la mise{" "}
            <span className="gradient-text">en ligne en 7 jours</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Un processus simple, transparent et efficace.
            Vous savez exactement où vous en êtes à chaque étape.
          </p>
        </motion.div>

        {/* Étapes desktop */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative mb-14">
          {/* Ligne de connexion */}
          <div className="absolute top-12 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-[#4F46E5] via-[#F97316] via-[#10B981] to-[#F59E0B] opacity-40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center relative"
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 z-10 border-4 border-[#0F172A]"
                style={{ backgroundColor: step.color, boxShadow: `0 0 0 6px ${step.color}25` }}
              >
                {step.emoji}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                Étape {step.num}
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Étapes mobile */}
        <div className="md:hidden space-y-0 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-5 relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-current to-transparent opacity-30" style={{ color: step.color }} />
              )}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0 z-10 border-2 border-[#0F172A]"
                style={{ backgroundColor: step.color }}
              >
                {step.emoji}
              </div>
              <div className="pb-8">
                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                  Étape {step.num}
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/contact" className="btn-amber text-base px-10 py-4">
            Commencer mon projet →
          </Link>
          <p className="text-[#64748B] text-sm mt-3">
            Maquette gratuite · Devis sous 24h · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
