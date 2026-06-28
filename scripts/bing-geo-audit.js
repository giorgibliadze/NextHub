const fs = require("fs");
const path = require("path");

const root = process.cwd();
const siteUrl = "https://next-hub.pro";
const indexNowKey = "949e3157c6ae4860a58db4d81fd0de3c";
const sourceDirs = ["app", "components", "lib", "pages"];
const extensions = new Set([".js", ".jsx", ".ts", ".tsx"]);
const deprecatedDuplicateUrls = [
  `${siteUrl}/services/seo`,
  `${siteUrl}/services/tech_support`,
  `${siteUrl}/services/web_development`,
  `${siteUrl}/webDevelopmentEN`,
  `${siteUrl}/webdevelopmenten`,
];
const requiredSitemapUrls = [
  `${siteUrl}`,
  `${siteUrl}/about`,
  `${siteUrl}/services`,
  `${siteUrl}/work`,
  `${siteUrl}/contact`,
  `${siteUrl}/webdevelopment`,
  `${siteUrl}/services/webDevelopmentEN`,
  `${siteUrl}/software-development`,
  `${siteUrl}/web-design`,
  `${siteUrl}/seo-services`,
  `${siteUrl}/google-business-profile-optimization`,
  `${siteUrl}/website-maintenance-services`,
  `${siteUrl}/faq`,
  `${siteUrl}/ai-faq`,
  `${siteUrl}/blog`,
];
const routeProviderComponents = ["SeoLandingPage", "SeoFaqPage", "BlogPostLayout"];
const renderedHtmlRoot = path.join(root, ".next", "server");
const forbiddenUrlPatterns = [
  new RegExp(["local", "host"].join(""), "i"),
  new RegExp(["next-hub-lake", "vercel", "app"].join("\\."), "i"),
];

const errors = [];
const warnings = [];

function fileExists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function walk(dir) {
  const absolute = path.join(root, dir);
  if (!fs.existsSync(absolute)) return [];

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api") return [];
      return walk(relative);
    }

    if (!extensions.has(path.extname(entry.name))) return [];
    return [relative];
  });
}

function lineFor(source, index) {
  return source.slice(0, index).split("\n").length;
}

function stripStringLiterals(source) {
  return source
    .replace(/`(?:\\[\s\S]|[^`\\])*`/g, "``")
    .replace(/"(?:\\.|[^"\\])*"/g, '""')
    .replace(/'(?:\\.|[^'\\])*'/g, "''");
}

function isRouteFile(file) {
  const base = path.basename(file);
  if (file.startsWith("pages/api/")) return false;
  if (base === "_app.js" || base === "_document.js") return false;
  if (file.startsWith("app/")) return base === "page.js" || base === "page.jsx";
  return file.startsWith("pages/");
}

function checkLanguageTags() {
  if (!fileExists("pages/_document.js")) {
    errors.push("pages/_document.js is missing");
    return;
  }

  const documentSource = read("pages/_document.js");
  if (!/<Html\b[^>]*\blang=["']ka-GE["']/.test(documentSource)) {
    errors.push("pages/_document.js must include <Html lang=\"ka-GE\">");
  }
  if (!/<meta\b[^>]*httpEquiv=["']content-language["'][^>]*content=["']ka-GE["']/.test(documentSource)) {
    errors.push("pages/_document.js must include content-language ka-GE meta");
  }

  if (fileExists("app/layout.js")) {
    const layoutSource = read("app/layout.js");
    if (!/<html\b[^>]*\blang=["']ka-GE["']/.test(layoutSource)) {
      errors.push("app/layout.js must include <html lang=\"ka-GE\">");
    }
  }
}

function checkImages(files) {
  files.forEach((file) => {
    const source = read(file);
    for (const match of source.matchAll(/<(?:Image|img)\b[\s\S]*?>/g)) {
      const tag = match[0];
      const line = lineFor(source, match.index);
      if (!/\balt\s*=/.test(tag)) {
        errors.push(`${file}:${line} image is missing alt`);
      }
      if (/\balt\s*=\s*{\s*(?:undefined|null)\s*}/.test(tag)) {
        errors.push(`${file}:${line} image alt is undefined/null`);
      }
    }
  });
}

function checkForbiddenUrlReferences(files) {
  const publicFiles = fs
    .readdirSync(path.join(root, "public"))
    .filter((file) => /\.(txt|json|xml)$/i.test(file))
    .map((file) => path.join("public", file));

  [...files, "next-sitemap.config.js", "next.config.js", ...publicFiles].forEach((file) => {
    if (!fileExists(file)) return;

    const source = read(file);
    forbiddenUrlPatterns.forEach((pattern) => {
      if (pattern.test(source)) {
        errors.push(`${file} contains forbidden URL reference: ${pattern}`);
      }
    });
  });
}

function checkRouteH1(files) {
  files.filter(isRouteFile).forEach((file) => {
    const source = read(file);
    const jsxSource = stripStringLiterals(source);
    const visibleH1Count = (jsxSource.match(/<(?:motion\.)?h1\b/g) || []).length;
    const delegatesH1 = routeProviderComponents.some((name) => source.includes(name));

    if (visibleH1Count === 0 && !delegatesH1) {
      errors.push(`${file} has no obvious visible H1`);
    }

    if (visibleH1Count > 1) {
      errors.push(`${file} appears to contain multiple visible H1 tags`);
    }
  });
}

function checkMetadata(files) {
  files.filter(isRouteFile).forEach((file) => {
    const source = read(file);
    const noindex = /noindex\s*=\s*{?true/.test(source) || /robots[^}]+noindex/.test(source);
    if (noindex) return;

    const usesMetadataProvider = routeProviderComponents.some((name) => source.includes(name));
    const hasDescription =
      /\bdescription\s*=\s*(?:"[^"]{120,160}"|'[^']{120,160}')/.test(source) ||
      /\bdescription\s*:\s*(?:"[^"]{120,160}"|'[^']{120,160}')/.test(source) ||
      /description\s*:\s*page\.description/.test(source) ||
      /description\s*:\s*category\.description/.test(source) ||
      /description\s*=\s*{description}/.test(source) ||
      /description\s*=\s*{metaDescription}/.test(source) ||
      usesMetadataProvider;
    const hasCanonical =
      /\bcanonical\s*=/.test(source) ||
      /alternates\s*:\s*{[^}]*canonical/.test(source) ||
      usesMetadataProvider;

    if (!hasDescription) {
      errors.push(`${file} is missing an obvious 120-160 character meta description`);
    }
    if (!hasCanonical) {
      errors.push(`${file} is missing an obvious canonical URL`);
    }

    for (const match of source.matchAll(/\bdescription\s*[=:]\s*(?:"([^"]+)"|'([^']+)')/g)) {
      const description = (match[1] || match[2] || "").replace(/\s+/g, " ").trim();
      if (description && (description.length < 120 || description.length > 160)) {
        warnings.push(`${file}:${lineFor(source, match.index)} meta description length is ${description.length}`);
      }
    }
  });
}

function checkSitemapAndRobots() {
  const staleSitemaps = fs
    .readdirSync(path.join(root, "public"))
    .filter((file) => /^sitemap-\d+\.xml$/.test(file));

  staleSitemaps.forEach((file) => {
    errors.push(`stale generated sitemap is publicly accessible: public/${file}`);
  });

  if (!fileExists("public/robots.txt")) {
    errors.push("public/robots.txt is missing");
  } else {
    const robots = read("public/robots.txt");
    if (!/User-agent:\s*\*/i.test(robots) || !/Allow:\s*\//i.test(robots)) {
      errors.push("robots.txt must allow public crawling");
    }
    if (/Noindex:/i.test(robots)) {
      errors.push("robots.txt contains invalid/deprecated Noindex directive");
    }
    if (!robots.includes(`${siteUrl}/sitemap.xml`)) {
      errors.push("robots.txt must reference the non-www sitemap URL");
    }
  }

  if (!fileExists("public/sitemap.xml")) {
    errors.push("public/sitemap.xml is missing; run npm run build");
    return;
  }

  const sitemap = read("public/sitemap.xml");
  const urls = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) => url.trim());
  const urlSet = new Set(urls);

  urls.forEach((url) => {
    if (!url.startsWith(siteUrl)) errors.push(`sitemap URL is not non-www canonical: ${url}`);
    if (url.includes("://www.")) errors.push(`sitemap URL contains www: ${url}`);
    if (/\/(?:api|admin|login|payment)(?:\/|$)/.test(new URL(url).pathname)) {
      errors.push(`sitemap contains blocked/private URL: ${url}`);
    }
  });

  deprecatedDuplicateUrls.forEach((url) => {
    if (urlSet.has(url)) errors.push(`sitemap contains deprecated duplicate URL: ${url}`);
  });

  requiredSitemapUrls.forEach((url) => {
    if (!urlSet.has(url)) errors.push(`sitemap is missing important URL: ${url}`);
  });

  const dailyCount = (sitemap.match(/<changefreq>daily<\/changefreq>/g) || []).length;
  if (dailyCount > 1) {
    errors.push(`sitemap marks too many URLs as daily changed (${dailyCount})`);
  }
}

function checkHreflangAndIndexNow() {
  const kaSource = fileExists("pages/webdevelopment/index.js") ? read("pages/webdevelopment/index.js") : "";
  const enSource = fileExists("pages/services/webDevelopmentEN.js") ? read("pages/services/webDevelopmentEN.js") : "";
  const required = [
    'hrefLang: "ka-GE"',
    'hrefLang: "en"',
    'hrefLang: "x-default"',
    "https://next-hub.pro/webdevelopment",
    "https://next-hub.pro/services/webDevelopmentEN",
  ];

  required.forEach((needle) => {
    if (!kaSource.includes(needle)) errors.push(`webdevelopment page missing hreflang marker: ${needle}`);
    if (!enSource.includes(needle)) errors.push(`webDevelopmentEN page missing hreflang marker: ${needle}`);
  });

  const keyPath = `public/${indexNowKey}.txt`;
  if (!fileExists(keyPath)) {
    errors.push(`IndexNow key file is missing: ${keyPath}`);
  } else if (read(keyPath).trim() !== indexNowKey) {
    errors.push("IndexNow key file content does not match configured key");
  }

  if (!fileExists("scripts/indexnow-submit.js")) {
    errors.push("IndexNow submit script is missing");
  }
}

function sitemapUrls() {
  if (!fileExists("public/sitemap.xml")) return [];

  return Array.from(
    read("public/sitemap.xml").matchAll(/<loc>([^<]+)<\/loc>/g),
    ([, url]) => url.trim()
  ).filter((url) => url.startsWith(siteUrl));
}

function htmlCandidatesForUrl(url) {
  const pathname = new URL(url).pathname;
  const cleanPath = pathname === "/" ? "index" : pathname.replace(/^\//, "");

  return [
    path.join(renderedHtmlRoot, "pages", `${cleanPath}.html`),
    path.join(renderedHtmlRoot, "pages", cleanPath, "index.html"),
    path.join(renderedHtmlRoot, "app", `${cleanPath}.html`),
    path.join(renderedHtmlRoot, "app", cleanPath, "index.html"),
  ];
}

function renderedHtmlForUrl(url) {
  const htmlPath = htmlCandidatesForUrl(url).find((candidate) =>
    fs.existsSync(candidate)
  );

  if (!htmlPath) return null;

  return {
    htmlPath,
    source: fs.readFileSync(htmlPath, "utf8"),
  };
}

function stripNonContentHtml(source) {
  return source
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<template\b[\s\S]*?<\/template>/gi, "");
}

function checkRenderedHtml() {
  if (!fs.existsSync(renderedHtmlRoot)) {
    errors.push(".next/server HTML is missing; run npm run build before npm run bing:geo-audit");
    return;
  }

  sitemapUrls().forEach((url) => {
    if (url.endsWith(".txt") || url.endsWith(".json")) {
      return;
    }

    const rendered = renderedHtmlForUrl(url);

    if (!rendered) {
      warnings.push(`${url} has no static rendered HTML file to inspect`);
      return;
    }

    const { htmlPath, source } = rendered;
    const relativeHtmlPath = path.relative(root, htmlPath);
    const contentHtml = stripNonContentHtml(source);
    const h1Count = (contentHtml.match(/<h1\b/gi) || []).length;

    if (!/<html\b[^>]*\blang=(?:"ka-GE"|'ka-GE'|ka-GE)(?:\s|>)/i.test(source)) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing <html lang="ka-GE">`);
    }

    if (
      !/<meta\b[^>]*(?:http-equiv|httpequiv)=(?:"content-language"|'content-language'|content-language)[^>]*content=(?:"ka-GE"|'ka-GE'|ka-GE)[^>]*>/i.test(
        source
      )
    ) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing content-language ka-GE meta`);
    }

    if (h1Count !== 1) {
      errors.push(`${relativeHtmlPath} rendered HTML has ${h1Count} H1 tags for ${url}`);
    }

    if (!/<link\b[^>]*rel=(?:"canonical"|'canonical'|canonical)[^>]*href=/i.test(source)) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing canonical link for ${url}`);
    }

    if (!/<meta\b[^>]*name=(?:"description"|'description'|description)[^>]*content=/i.test(source)) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing meta description for ${url}`);
    }

    if (!/<meta\b[^>]*property=(?:"og:title"|'og:title'|og:title)[^>]*content=/i.test(source)) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing OpenGraph title for ${url}`);
    }

    if (!/<meta\b[^>]*name=(?:"twitter:title"|'twitter:title'|twitter:title)[^>]*content=/i.test(source)) {
      errors.push(`${relativeHtmlPath} rendered HTML is missing Twitter title for ${url}`);
    }
  });
}

const files = sourceDirs.flatMap(walk);

checkLanguageTags();
checkForbiddenUrlReferences(files);
checkImages(files);
checkRouteH1(files);
checkMetadata(files);
checkSitemapAndRobots();
checkHreflangAndIndexNow();
checkRenderedHtml();

if (warnings.length > 0) {
  console.warn("Bing/GEO audit warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length > 0) {
  console.error("Bing/GEO audit failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Bing/GEO audit passed: crawlability, canonical URLs, rendered language tags, rendered H1s, image alts, metadata, sitemap, hreflang, and IndexNow assets look healthy.");
