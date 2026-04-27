/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Allow images from external sources if needed
  images: {
    remotePatterns: [],
  },

  // Environment variables exposed to the browser (prefix with NEXT_PUBLIC_)
  // env: {
  //   NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
};

module.exports = nextConfig;
