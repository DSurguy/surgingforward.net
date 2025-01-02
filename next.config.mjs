/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  transpilePackages: ['next-mdx-remote'],
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.externals.push('bun:sqlite');
    if (config.cache && !dev) {
      config.cache = Object.freeze({
        type: 'memory',
      })
    }
    return config;
  },
  experimental: {
    webpackBuildWorker: true
  }
};

export default nextConfig;