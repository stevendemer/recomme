/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "02e7-2a02-859-51-cc00-cc10-4ecb-78cc-7dd3.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
