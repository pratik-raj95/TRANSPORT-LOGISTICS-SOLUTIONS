import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Using relative or default site URL placeholder that can be configured by domain
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tlslogistics.example.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
