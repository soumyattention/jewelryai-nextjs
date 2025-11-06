import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern image formats (AVIF is 50% smaller than WebP)
    formats: ['image/avif', 'image/webp'],

    // Responsive image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Remote image patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/soumya3301/**',
      },
      {
        protocol: 'https',
        hostname: 'customer-ceouac30q8dlws1c.cloudflarestream.com',
        pathname: '/**',
      },
    ],
  },

  // Performance optimizations
  compress: true,

  // Production optimizations
  poweredByHeader: false,

  // Strict mode for better error detection
  reactStrictMode: true,
};

export default nextConfig;
