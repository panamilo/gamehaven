import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${SITE_URL}/schedule`, lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    { url: `${SITE_URL}/games`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${SITE_URL}/space`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.6, changeFrequency: "yearly" },
  ];
}
