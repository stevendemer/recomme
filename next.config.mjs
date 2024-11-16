/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "38cb-2a02-85f-e4d9-2778-dfe7-5276-6416-7a8.ngrok-free.app"
            },
        ],
    },
};

export default nextConfig;
