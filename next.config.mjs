/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3b5a-2a02-85f-e424-ce45-35a6-ded0-c14c-ccf5.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
