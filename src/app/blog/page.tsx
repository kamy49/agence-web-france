import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

export const metadata: Metadata = {
  title: "Blog — Conseils Web, SEO et Digital pour PME",
  description:
    "Conseils pratiques pour les PME et artisans français : créer un site web, améliorer son SEO local, attirer plus de clients en ligne.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | PixelPro Agency",
    description: "Guides, conseils SEO et astuces digitales pour les PME françaises.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
