// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const getAllRoutes = () => {
  const staticPages = fs
    .readdirSync(path.join(__dirname, 'pages'))
    .filter((file) => {
      return (
        file.endsWith('.js') &&
        !file.startsWith('_') &&
        !file.includes('[[') &&
        !file.includes('[')
      );
    })
    .map((page) => {
      const path = page.replace('.js', '');
      return path === 'index' ? '/' : `/${path}`;
    });

  // Add dynamic routes if necessary
  const dynamicRoutes = [
    // Example dynamic routes, replace with your actual dynamic routes
    '/services/analytics',
    '/services/digital_marketing',
    '/services/graphic_design',
    '/services/seo',
    '/services/soc_media',
    '/services/tech_support',
    '/services/web_developmemt',

    // Add other dynamic routes here
  ];

  return [...staticPages, ...dynamicRoutes];
};

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.next-hub.pro',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'], // Excludes API routes only
  additionalPaths: async (config) => {
    const allRoutes = getAllRoutes();
    return allRoutes.map((route) => ({
      loc: route,
      changefreq: 'daily',
      priority: 0.7,
    }));
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.next-hub.pro/sitemap-0.xml', // Ensure correct sitemap URL
    ],
  },
};