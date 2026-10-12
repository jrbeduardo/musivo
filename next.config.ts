import type { NextConfig } from "next";

// Mirrors `siteBasePath` in app/site.ts. Set NEXT_PUBLIC_BASE_PATH= (empty) for local dev at /.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/musivo";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
