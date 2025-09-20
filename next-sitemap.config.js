// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.next-hub.pro";

const EXTRA_PATHS = [
  "/services/analytics",
  "/services/digital_marketing",
  "/services/graphic_design",
  "/services/seo",
  "/services/soc_media",
  "/services/tech_support",
  "/services/web_development",
];

const priorityFor = (path) => {
  if (path === "/") return 1.0;
  if (path.startsWith("/services")) return 0.8;
  return 0.8;
};

module.exports = {
  siteUrl: SITE_URL,
  outDir: "public",
  generateIndexSitemap: true,
  generateRobotsTxt: true,            // ← remove any manual robots.txt from /public
  sitemapSize: 5000,
  changefreq: "weekly",
  autoLastmod: true,

  exclude: [
    "/admin",
    "/admin/*",
    "/login",
    "/api/*",
    "/payment/*",
    "/404",
    "/500",
  ],

  transform: async (config, path) => ({
    // IMPORTANT: absolute URL for <loc>
    loc: `${SITE_URL}${path}`,
    changefreq: path === "/" ? "daily" : config.changefreq,
    priority: priorityFor(path),
    lastmod: new Date().toISOString(),
  }),

  additionalPaths: async (config) =>
    Promise.all(EXTRA_PATHS.map((p) => config.transform(config, p))),

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/login", "/api/*", "/payment/*"],
      },
    ],
  },
};