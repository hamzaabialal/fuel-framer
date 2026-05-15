/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
      { source: '/about', destination: '/about.html' },
      { source: '/contact', destination: '/contact.html' },
      { source: '/work/portfolio', destination: '/work/portfolio.html' },
      { source: '/work/portfolio/:slug', destination: '/work/portfolio/:slug.html' },
      { source: '/blog/:slug', destination: '/blog/:slug.html' },
    ];
  },
};

module.exports = nextConfig;
