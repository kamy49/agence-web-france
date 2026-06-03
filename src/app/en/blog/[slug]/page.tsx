import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { articles } from "@/app/data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return null;
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-creme to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link
              href="/en/blog"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              ← Back to blog
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">
            {article.title}
          </h1>
          <p className="text-gray-600 mb-8">{article.excerpt}</p>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              This article contains detailed analysis on the subject. 
              For more information, please contact us directly.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
