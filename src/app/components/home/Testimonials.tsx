"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Marchand",
    role: "Restauratrice — Paris 11e",
    avatar: "SM",
    color: "#4F46E5",
    rating: 5,
    text: "J'avais peur que ça prenne des mois. Mon site a été livré en 6 jours, exactement comme promis. Le design est magnifique et depuis la mise en ligne, j'ai 3 fois plus de réservations en ligne. Investissement largement rentabilisé dès le premier mois.",
  },
  {
    name: "Marc Lefevre",
    role: "Plombier — Lyon",
    avatar: "ML",
    color: "#F97316",
    rating: 5,
    text: "Je n'y connaissais rien au web. L'équipe m'a tout expliqué simplement. Aujourd'hui je suis en première page Google pour 'plombier Lyon' — avant je n'existais pas sur internet. Mon téléphone n'arrête plus de sonner.",
  },
  {
    name: "Isabelle Chen",
    role: "Créatrice de bijoux — Bordeaux",
    avatar: "IC",
    color: "#10B981",
    rating: 5,
    text: "Ma boutique en ligne a été créée en 8 jours. L'intégration Stripe fonctionne parfaitement, la gestion des commandes est simple même pour moi. En 2 mois j'ai déjà récupéré 4 fois le coût du site en ventes en ligne.",
  },
  {
    name: "Dr. Thomas Roux",
    role: "Médecin généraliste — Nantes",
    avatar: "TR",
    color: "#F59E0B",
    rating: 5,
    text: "Site parfaitement conforme RGPD, ce qui était ma principale préoccupation. La prise de rendez-vous en ligne a transformé mon cabinet — 40% moins d'appels téléphoniques et mes patients adorent. Je recommande sans hésitation.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = useCallback(() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length), []);
  const next = useCallback(() => setIdx(i => (i + 1) % testimonials.length), []);
  const t = testimonials[idx];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8F7FF] via-[#FAFAF9] to-[#FFF8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge mb-4">Témoignages clients</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] mt-4 mb-4">
            Ce que disent{" "}
            <span className="gradient-text">nos clients</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-[#0F172A]">4.9/5</span>
            <span className="text-[#64748B] text-sm">· 120+ avis vérifiés</span>
          </div>
        </motion.div>

        {/* Carrousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-warm-lg border border-[#4F46E5]/8"
            >
              <Quote size={36} className="text-[#4F46E5] mb-6 opacity-60" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <p className="text-[#334155] text-lg leading-relaxed italic mb-8">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#0F172A] text-lg">{t.name}</p>
                  <p className="text-[#64748B] text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#4F46E5] hover:text-white rounded-full flex items-center justify-center text-[#334155] transition-all shadow-warm border border-gray-100">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white hover:bg-[#4F46E5] hover:text-white rounded-full flex items-center justify-center text-[#334155] transition-all shadow-warm border border-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`transition-all duration-300 rounded-full ${i === idx ? "w-8 h-2 bg-[#4F46E5]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
