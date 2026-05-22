/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://next-hub.pro';

module.exports = {
  siteUrl: SITE_URL,
  outDir: 'public',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  autoLastmod: true,

  exclude: [
    '/admin',
    '/admin/*',
    '/login',
    '/api/*',
    '/payment/*',
    '/404',
    '/500',
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'daily',
      priority: path === '/' ? 1.0 : path.startsWith('/services') ? 0.9 : 1.0,
      lastmod: new Date().toISOString(),
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login', '/api/*', '/payment/*'],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/sitemap.xml`,
    ],
  },
};