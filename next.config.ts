import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
