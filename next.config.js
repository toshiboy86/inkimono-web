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
    ]
  },
}

module.exports = nextConfig
