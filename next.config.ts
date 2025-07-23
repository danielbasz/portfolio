import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
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
