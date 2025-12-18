import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages with custom domain
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  // Enable SCSS support
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
