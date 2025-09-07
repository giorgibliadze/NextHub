// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const SITE_URL =
  (process.env.SITE_URL || "https://www.next-hub.pro").replace(/\/$/, "");

const priorityFor = (path) => {
  if (path === "/") return 1.0;
  if (path.startsWith("/services")) return 0.8;
  if (["/work", "/about", "/contact"].includes(path)) return 0.8;
  return 0.7;
};

const EXTRA_PATHS = [
  "/work",
  "/about",
  "/contact",
  "/services",
  "/services/analytics",
  "/services/digital_marketing",
  "/services/web_development",
  "/services/seo",
  "/services/soc_media",
  "/services/tech_support",
  "/services/graphic_design",
];

module.exports = {
  siteUrl: SITE_URL,
  outDir: "public",
  generateIndexSitemap: true,
  generateRobotsTxt: true,
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
    loc: path,
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
    // remove any Host: line if present
    transformRobotsTxt: async (_cfg, robotsTxt) =>
      robotsTxt
        .split("\n")
        .filter(
          (line) =>
            line.trim() &&
            !/^#\s*Host/i.test(line) &&
            !/^Host:/i.test(line)
        )
        .join("\n")+ '\n',
  },
};