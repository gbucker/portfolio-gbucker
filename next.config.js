/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  // assetPrefix: isProd ? "https://apicdn.sanity.io" : undefined,
};

module.exports = nextConfig;
