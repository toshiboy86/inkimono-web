const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Rewrite /en/* to /*
    return [
      {
        source: '/',
        destination: '/en',
      },
      {
        source: '/service',
        destination: '/en/service',
      },
      {
        source: '/portfolio',
        destination: '/en/portfolio',
      },
      {
        source: '/location',
        destination: '/en/location',
      },
      {
        source: '/inquiry',
        destination: '/en/inquiry',
      },
      {
        source: '/faq',
        destination: '/en/faq',
      },
      {
        source: '/workshop',
        destination: '/en/workshop',
      },
      // TODO: remove it after fixing redirect issue
      {
        source: '/redirect',
        destination: '/en/redirect',
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
