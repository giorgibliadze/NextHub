/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://next-hub.pro';
const AI_DISCOVERY_FILES = ['/llms.txt', '/llms-full.txt', '/company.json'];

function getFixedAppRoutes() {
  const manifestPath = path.join(process.cwd(), '.next/app-path-routes-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  return [...new Set(Object.values(manifest))].filter(
    (routePath) => routePath !== '/_not-found' && !routePath.includes('['),
  );
}

async function getBlogArticleRoutes() {
  const bundlePath = path.join(
    process.cwd(),
    '.next/server/app/blog/[slug]/page.js',
  );
  const bundle = require(bundlePath);
  const loaderTree = bundle.routeModule.userland.loaderTree;
  const pageLoader =
    loaderTree[1].children[1].children[1].children[2].page[0];
  const pageModule = await pageLoader();
  const params = await pageModule.generateStaticParams();

  return params.flatMap(({ slug }) => [`/blog/${slug}`, `/en/blog/${slug}`]);
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
    '/en/payment/*',
    '/404',
    '/500',
    '/services/web_development',
    '/services/webDevelopmentEN',
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: changefreqForPath(path),
      priority: priorityForPath(path),
    };
  },

  additionalPaths: async () => {
    const paths = [
      ...AI_DISCOVERY_FILES,
      ...getFixedAppRoutes(),
      ...(await getBlogArticleRoutes()),
    ];

    return [...new Set(paths)].map((routePath) => ({
      loc: routePath,
      changefreq: changefreqForPath(routePath),
      priority: priorityForPath(routePath),
    }));
  },

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
