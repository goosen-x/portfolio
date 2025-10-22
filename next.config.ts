import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        "@vercel/turbopack-next/internal/font/google/font":
          "./node_modules/next/dist/build/webpack/loaders/next-font-loader/index.js",
      },
    },
  },
};

export default nextConfig;
