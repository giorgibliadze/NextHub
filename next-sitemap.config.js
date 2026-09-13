/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://next-hub.pro';
const AI_DISCOVERY_FILES = ['/llms.txt', '/llms-full.txt', '/company.json'];

function changefreqForPath(routePath) {
  if (routePath === '/') return 'weekly';
  if (routePath.startsWith('/blog/')) return 'monthly';
  if (routePath === '/blog') return 'weekly';
  if (routePath.startsWith('/services') || routePath.includes('development') || routePath.includes('design') || routePath.includes('seo')) {
    return 'weekly';
  }
  if (AI_DISCOVERY_FILES.includes(routePath)) return 'weekly';
  return 'monthly';
}

function priorityForPath(routePath) {
  if (routePath === '/') return 1.0;
  if (routePath === '/webdevelopment') return 1.0;
  if (routePath.startsWith('/services') || routePath.startsWith('/blog')) return 0.8;
  if (AI_DISCOVERY_FILES.includes(routePath)) return routePath === '/company.json' ? 0.6 : 0.7;
  return 0.9;
}

module.exports = {
  siteUrl: SITE_URL,
  outDir: 'public',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  autoLastmod: false,

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
      changefreq: changefreqForPath(path),
      priority: priorityForPath(path),
    };
  },

  additionalPaths: async () =>
    AI_DISCOVERY_FILES.map((path) => ({
      loc: path,
      changefreq: changefreqForPath(path),
      priority: priorityForPath(path),
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
