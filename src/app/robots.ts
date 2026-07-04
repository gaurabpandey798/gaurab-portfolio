import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/static/"],
    },
    sitemap: "https://gaurabpandey.com.np/sitemap.xml",
  };
}
