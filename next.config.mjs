/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eb7e-2a02-85f-e443-f7c6-5998-79d7-ffea-484e.ngrok-free.app",
      },
    ],
  },
};

export default nextConfig;
