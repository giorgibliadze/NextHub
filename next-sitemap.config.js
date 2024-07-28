/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.next-hub.pro",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/login"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/work"),
    await config.transform(config, "/about"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/services"),
    await config.transform(config, "/services/analytics"),
    await config.transform(config, "/services/digital_marketing"),
    await config.transform(config, "/services/web_development"),
    await config.transform(config, "/services/seo"),
    await config.transform(config, "/services/soc_media"),
    await config.transform(config, "/services/tech_support"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/admin",
      },
    ],
  },
  autoLastmod: true,
};
