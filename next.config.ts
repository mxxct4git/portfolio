import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    domains: [
      "lf3-starry.byteimg.com",
      "lf3-static.bytednsdoc.com",
      "static.wikia.nocookie.net",
      "img.alicdn.com",
    ],
  },
};

export default nextConfig;
