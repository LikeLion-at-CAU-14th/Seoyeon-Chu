import type { MetadataRoute } from "next";
import { albums } from "@/data/albums";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    ...albums.map((album) => ({
      url: `${baseUrl}/albums/${album.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}