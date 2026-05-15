/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/about.html',
        permanent: false,
      },
      {
        source: '/index.html',
        destination: '/about.html',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      { source: '/about', destination: '/about.html' },
      { source: '/contact', destination: '/contact.html' },
      { source: '/work/portfolio', destination: '/work/portfolio.html' },
      { source: '/work/portfolio/:slug', destination: '/work/portfolio/:slug.html' },
      { source: '/blog/:slug', destination: '/blog/:slug.html' },
    ];
  },
};

module.exports = nextConfig;
