import { MetadataRoute } from "next";
import { articles } from "./data/articles";

const BASE_URL = "https://webzynth.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/portfolio`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/a-propos`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const blogPages = articles.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...staticPages.map((p) => ({
      url: p.url,
      lastModified: new Date().toISOString(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...blogPages,
  ];
}
