import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // Required for static export
  },
  // GitHub Pages requires assets to be served from the repo sub-path
  basePath: '/portfolio-nextjs',
  assetPrefix: '/portfolio-nextjs',
  // Enable SCSS support
  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
