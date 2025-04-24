/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cd83-2a02-85f-e47e-43ae-a08b-bd6f-85a5-d425.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
