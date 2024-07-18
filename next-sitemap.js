/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.next-hub.pro",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
