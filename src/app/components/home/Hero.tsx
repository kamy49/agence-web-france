"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import CountUp from "../CountUp";

const stats = [
  { value: 150, suffix: "+", label: "Sites livrés" },
  { value: 98, suffix: "%", label: "Clients satisfaits" },
  { value: 7, suffix: "j", label: "Délai moyen" },
  { value: 5, suffix: "★", label: "Note moyenne" },
];

const badges = [
  "Sites livrés en 7 jours",
  "SEO inclus",
  "Support 6 mois",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Fond image */}
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=85"
        alt="Développeur web professionnel travaillant sur un site web"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/92 via-[#1E1B4B]/85 to-[#0F172A]/90" />
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Halo lumineux */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F97316]/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#4F46E5]/20 border border-[#6366F1]/30 text-[#A5B4FC] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide"
            >
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
              Agence web disponible — Devis sous 24h
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5"
            >
              Votre site web{" "}
              <span className="gradient-text italic">professionnel</span>{" "}
              en 7 jours.
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-[#CBD5E1] text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Nous créons des sites web modernes, rapides et optimisés Google
              pour les <strong className="text-white">PME et artisans français</strong>.
              À partir de <strong className="text-[#F59E0B]">990€</strong>.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {badges.map(b => (
                <span key={b} className="flex items-center gap-1.5 text-[#A5B4FC] text-sm">
                  <CheckCircle2 size={15} className="text-[#10B981]" />
                  {b}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="btn-amber text-base px-8 py-4 w-full sm:w-auto justify-center">
                Obtenir mon devis gratuit
                <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2 text-white/80 hover:text-white text-base font-medium transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Play size={14} fill="currentColor" />
                </div>
                Voir nos réalisations
              </Link>
            </motion.div>

            {/* Avis Google */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10"
            >
              <div className="flex -space-x-2">
                {["photo-1507003211169-0a1dd7228f2d", "photo-1494790108377-be9c29b29330", "photo-1472099645785-5658abf4ff4e"].map(id => (
                  <div key={id} className="w-9 h-9 rounded-full border-2 border-[#1E1B4B] overflow-hidden relative">
                    <Image
                      src={`https://images.unsplash.com/${id}?w=80&q=80`}
                      alt="Client satisfait"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9/5</span>
                </div>
                <p className="text-[#94A3B8] text-xs">+120 clients nous font confiance</p>
              </div>
            </motion.div>
          </div>

          {/* Carte flottante */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-6 text-center hover:bg-white/12 transition-colors"
                >
                  <div className="font-display text-4xl font-bold text-white mb-1">
                    <CountUp to={s.value} />{s.suffix}
                  </div>
                  <div className="text-[#94A3B8] text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Carte réassurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-4 bg-gradient-to-br from-[#4F46E5]/20 to-[#F97316]/10 backdrop-blur border border-white/15 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Satisfait ou remboursé</p>
                  <p className="text-[#94A3B8] text-xs">Garantie 30 jours sans conditions</p>
                </div>
              </div>
              <p className="text-[#CBD5E1] text-xs leading-relaxed">
                Si votre site ne vous convient pas à la livraison, nous remboursons intégralement votre acompte.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Logos partenaires */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-8 flex-wrap">
          <span className="text-[#64748B] text-xs uppercase tracking-widest">Ils nous font confiance :</span>
          {["Restaurant Le Bistrot", "Plomberie Martin", "Cabinet Dr. Leroy", "Boulangerie Paulette", "Auto École Martin"].map(name => (
            <span key={name} className="text-[#94A3B8] text-sm font-medium">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
