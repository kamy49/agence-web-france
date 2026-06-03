"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { articles } from "../data/articles";

export default function BlogList() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-gradient-to-br from-[#F8F7FF] via-[#FAFAF9] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-4">Le blog WebZynth</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] mt-4 mb-4">
              Conseils & ressources pour{" "}
              <span className="gradient-text">votre PME</span>
            </h1>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Guides pratiques, astuces SEO et stratégies digitales pour aider
              les PME et artisans français à se développer en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article à la une */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-0 card overflow-hidden">
                <div className="relative h-72 lg:h-full min-h-64">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F172A]/10" />
                  <span
                    className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: featured.categoryColor }}
                  >
                    ⭐ À la une · {featured.category}
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 group-hover:text-[#4F46E5] transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-[#94A3B8] mb-6">
                    <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime} de lecture</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="btn-primary text-sm px-6 py-3 w-fit">
                    Lire l&apos;article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Grille articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`} className="group card block overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span
                      className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: article.categoryColor }}
                    >
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-[#0F172A] text-lg mb-2 group-hover:text-[#4F46E5] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                      <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
