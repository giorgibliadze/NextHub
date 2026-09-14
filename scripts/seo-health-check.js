const fs = require("fs");
const path = require("path");

const root = process.cwd();
const scanDirs = ["app", "components", "pages"];
const extensions = new Set([".js", ".jsx", ".ts", ".tsx"]);
const ignoredPageFiles = new Set(["_app.js", "_document.js"]);
const componentPageProviders = [
  "SeoLandingPage",
  "SeoFaqPage",
  "BlogPostLayout",
  "EnglishSolutionPage",
];

const errors = [];

function walk(dir) {
  const absolute = path.join(root, dir);

  if (!fs.existsSync(absolute)) {
    return [];
  }

  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "api") {
        return [];
      }

      return walk(entryPath);
    }

    if (!extensions.has(path.extname(entry.name))) {
      return [];
    }

    return [entryPath];
  });
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function checkLanguageTags() {
  const documentPath = "pages/_document.js";
  const layoutPath = "app/layout.js";

  if (fs.existsSync(path.join(root, documentPath))) {
    const source = read(documentPath);
    const hasStaticGeorgianLanguage =
      /<Html\b[^>]*\blang=["']ka-GE["']/.test(source) &&
      /<meta\b[^>]*httpEquiv=["']content-language["'][^>]*content=["']ka-GE["']/.test(
        source
      );
    const hasRouteAwareLanguage =
      /<Html\b[^>]*\blang=\{pageLang\}/.test(source) &&
      /content=\{pageLang\}/.test(source) &&
      /ctx\.pathname\s*===\s*["']\/services\/webDevelopmentEN["']/.test(source) &&
      /ctx\.pathname\.startsWith\(["']\/en["']\)/.test(source) &&
      /\?\s*["']en["']\s*:\s*["']ka-GE["']/.test(source);

    if (!hasStaticGeorgianLanguage && !hasRouteAwareLanguage) {
      errors.push(
        `${documentPath}: missing valid Georgian default and English route language handling`
      );
    }
  }

  if (fs.existsSync(path.join(root, layoutPath))) {
    const source = read(layoutPath);
    const hasStaticGeorgianLanguage = /<html\b[^>]*\blang=["']ka-GE["']/.test(
      source
    );
    const hasRouteAwareLanguage =
      /<html\b[^>]*\blang=\{pageLanguage\}/.test(source) &&
      /content=\{pageLanguage\}/.test(source) &&
      /pathname\.startsWith\(["']\/en\/["']\)/.test(source) &&
      /isEnglish\s*\?\s*["']en["']\s*:\s*["']ka-GE["']/.test(source);

    if (!hasStaticGeorgianLanguage && !hasRouteAwareLanguage) {
      errors.push(
        `${layoutPath}: missing valid Georgian default and English route language handling`
      );
    }
  }
}

function checkImageAlts(files) {
  files.forEach((file) => {
    const source = read(file);
    const imageTags = source.matchAll(/<(?:Image|img)\b[\s\S]*?>/g);

    for (const match of imageTags) {
      const tag = match[0];
      const line = source.slice(0, match.index).split("\n").length;

      if (!/\balt\s*=/.test(tag)) {
        errors.push(`${file}:${line}: image tag missing alt attribute`);
        continue;
      }

      if (/\balt\s*=\s*{\s*(?:undefined|null)\s*}/.test(tag)) {
        errors.push(`${file}:${line}: image alt is undefined/null`);
      }
    }
  });
}

function isRouteFile(file) {
  const basename = path.basename(file);

  if (ignoredPageFiles.has(basename)) {
    return false;
  }

  if (file.startsWith("pages/api/")) {
    return false;
  }

  if (file.startsWith("app/")) {
    return basename === "page.js" || basename === "page.jsx";
  }

  if (!file.startsWith("pages/")) {
    return false;
  }

  return extensions.has(path.extname(file));
}

function checkRouteH1(files) {
  files.filter(isRouteFile).forEach((file) => {
    const source = read(file);
    const hasVisibleH1 = /<(?:motion\.)?h1\b/.test(source);
    const delegatesToPageProvider = componentPageProviders.some((name) =>
      source.includes(name)
    );

    if (!hasVisibleH1 && !delegatesToPageProvider) {
      errors.push(`${file}: route has no obvious visible H1`);
    }
  });
}

const files = scanDirs.flatMap(walk);

checkLanguageTags();
checkImageAlts(files);
checkRouteH1(files);

if (errors.length > 0) {
  console.error("SEO health check failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("SEO health check passed: language tags, image alts, and route H1s look healthy.");
