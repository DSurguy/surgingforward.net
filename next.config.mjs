/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  transpilePackages: ['next-mdx-remote'],
  webpack: (config) => {
    config.externals.push('bun:sqlite');
    return config;
  },
};

export default nextConfig;