// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-images.dzcdn.net"], // Spotify album images
  },
  experimental: {
    serverActions: {}, // optional if using server actions
  },
};

export default nextConfig;
