/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "9067-2a02-85f-e4ed-7aed-eb0b-2ef5-7a67-9454.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
