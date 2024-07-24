// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.next-hub.pro",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/login"],
  alternateRefs: [
    {
      href: "https://es.next-hub.pro",
      hreflang: "es",
    },
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
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
    additionalSitemaps: [
      "https://www.next-hub.pro/my-custom-sitemap-1.xml",
      "https://www.next-hub.pro/my-custom-sitemap-2.xml",
    ],
  },
  autoLastmod: true,
};
