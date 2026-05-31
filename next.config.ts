import type { NextConfig } from "next";

const repoName = "portfolio";
const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? `/${repoName}` : "";

const nextConfig: NextConfig = {
    basePath,
    assetPrefix: isProd ? `${basePath}/` : "",
  
    images: {
      unoptimized: true,
    },
  
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
    
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
