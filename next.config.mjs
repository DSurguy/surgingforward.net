/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  output: 'standalone',
  transpilePackages: ['next-mdx-remote'],
};

export default nextConfig;
