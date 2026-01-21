import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**', // อนุญาตทุก Path ภายใต้ Domain นี้
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // อนุญาตทุก Path ภายใต้ Domain นี้
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**', // อนุญาตทุก Path ภายใต้ Domain นี้
      },
    ],
  },
};

export default nextConfig;
