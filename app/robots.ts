import type { MetadataRoute } from "next";
import { siteBasePath, siteUrl } from "./site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [`${siteBasePath}/privacidad`, `${siteBasePath}/terminos`],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}