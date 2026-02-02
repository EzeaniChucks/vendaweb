import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "@": path.resolve(__dirname),
  //     "@components": path.resolve(__dirname, "components"),
  //   };
  //   return config;
  // },
  // // Add Turbopack configuration
  // turbopack: {
  //   resolveAlias: {
  //     "@": path.resolve(__dirname),
  //     "@components": path.resolve(__dirname, "components"),
  //   },
  // },
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;