// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.next-hub.pro",
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 5000, // Max number of URLs per sitemap file
  changefreq: "daily", // Change frequency of the URLs
  priority: 0.7, // Priority of the URLs
  exclude: ["/admin/*", "/login"], // Paths to exclude from the sitemap
  alternateRefs: [
    {
      href: "https://es.next-hub.pro",
      hreflang: "es",
    },
  ], // List of alternate URLs for different languages
  transform: async (config, path) => {
    return {
      loc: path, // Use the default location
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  }, // Function to modify sitemap fields
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
  ], // Additional paths to include in the sitemap
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
    ], // Policies for robots.txt
    additionalSitemaps: [
      "https://www.next-hub.pro/my-custom-sitemap-1.xml",
      "https://www.next-hub.pro/my-custom-sitemap-2.xml",
    ], // Additional sitemaps
  },
  autoLastmod: true, // Automatically set last modified date
};
