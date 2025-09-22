const SITE_URL = "https://next-hub.pro"; // no www

module.exports = {
  siteUrl: SITE_URL,
  outDir: "public",
  generateIndexSitemap: true,
  generateRobotsTxt: true,
  changefreq: "weekly",
  autoLastmod: true,
  sitemapSize: 5000,

  exclude: ["/admin", "/admin/*", "/login", "/api/*", "/payment/*", "/404", "/500"],

  additionalPaths: async (config) => {
    const extraPaths = [
      "/about",
      "/contact",
      "/work",
      "/services/analytics",
      "/services/digital_marketing",
      "/services/graphic_design",
      "/services/seo",
      "/services/soc_media",
      "/services/tech_support",
      "/services/web_development",
    ];
    return Promise.all(extraPaths.map((p) => config.transform(config, p)));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/login", "/api/*", "/payment/*"],
      },
    ],
    additionalSitemaps: [
      "https://next-hub.pro/sitemap.xml",
    ],
  },
};