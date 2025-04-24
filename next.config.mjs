/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3ee0-31-152-207-187.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
