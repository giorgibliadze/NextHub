const fs = require('fs');
const path = require('path');

/** @type {import('next-sitemap').IConfig} */
const SITE_URL = 'https://next-hub.pro';
const AI_DISCOVERY_FILES = ['/llms.txt', '/llms-full.txt', '/company.json'];
const DEFAULT_LASTMOD = '2026-06-28T00:00:00.000Z';

function sourceForRoute(routePath) {
  if (routePath === '/') return 'pages/index.js';

  const normalized = routePath.replace(/^\//, '');
  const candidates = [
    `pages/${normalized}/index.js`,
    `pages/${normalized}.js`,
    `app/${normalized}/page.js`,
  ];

  if (routePath.startsWith('/blog/') && !routePath.match(/^\/blog\/(?:web-development|web-design|seo|case-studies)$/)) {
    candidates.push('lib/blogData.js');
  }

  return candidates.find((candidate) => fs.existsSync(path.join(__dirname, candidate)));
}

function lastmodForPath(routePath) {
  const publicFile = routePath.startsWith('/llms') || routePath === '/company.json'
    ? path.join(__dirname, 'public', routePath)
    : null;
  const sourceFile = publicFile && fs.existsSync(publicFile)
    ? publicFile
    : sourceForRoute(routePath);

  if (!sourceFile) return DEFAULT_LASTMOD;

  const absolutePath = path.isAbsolute(sourceFile)
    ? sourceFile
    : path.join(__dirname, sourceFile);

  try {
    return fs.statSync(absolutePath).mtime.toISOString();
  } catch {
    return DEFAULT_LASTMOD;
  }
}

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
      lastmod: lastmodForPath(path),
    };
  },

  additionalPaths: async () =>
    AI_DISCOVERY_FILES.map((path) => ({
      loc: path,
      changefreq: changefreqForPath(path),
      priority: priorityForPath(path),
      lastmod: lastmodForPath(path),
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
