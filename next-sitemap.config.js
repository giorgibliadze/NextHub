/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://next-hub.pro';
const AI_DISCOVERY_FILES = ['/llms.txt', '/llms-full.txt', '/company.json'];

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
    '/services/seo',
    '/services/tech_support',
    '/services/web_development',
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'daily',
      priority: path === '/' ? 1.0 : path.startsWith('/services') ? 0.9 : 1.0,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async () =>
    AI_DISCOVERY_FILES.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/company.json' ? 0.6 : 0.7,
      lastmod: new Date().toISOString(),
    })),

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/login", "/api/*", "/payment/*"],
      },
    ],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
    transformRobotsTxt: async () =>
      [
        "User-agent: *",
        "Allow: /",
        "Disallow: /admin",
        "Disallow: /login",
        "Disallow: /api/*",
        "Disallow: /payment/*",
        "",
        `Sitemap: ${SITE_URL}/sitemap.xml`,
        "",
      ].join("\n"),
  },
};
