import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Only enable GitHub Pages config in production
  ...(isProd && {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    trailingSlash: true,
  }),
  images: {
    unoptimized: true // Required for static export
  },
  // Enable SCSS support
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
