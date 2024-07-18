// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.next-hub.pro",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.next-hub.pro/sitemap.xml",
      "https://www.next-hub.pro/sitemap-0.xml",
    ],
  },
};
