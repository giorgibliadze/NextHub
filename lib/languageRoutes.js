export const SITE_ORIGIN = "https://next-hub.pro";

export const publicGeorgianRoutes = [
  "/",
  "/about",
  "/services",
  "/services/analytics",
  "/services/digital_marketing",
  "/services/graphic_design",
  "/services/seo",
  "/services/soc_media",
  "/services/tech_support",
  "/webdevelopment",
  "/work",
  "/contact",
  "/faq",
  "/ai-faq",
  "/ai-video-creation",
  "/google-business-profile-optimization",
  "/seo-services",
  "/software-development",
  "/web-design",
  "/website-maintenance-services",
  "/blog",
  "/blog/ai-video",
  "/blog/case-studies",
  "/blog/seo",
  "/blog/web-design",
  "/blog/web-development",
  "/real-estate-websites",
  "/clinic-booking-systems",
  "/tourism-websites",
  "/payment/success",
  "/payment/fail",
];

export const languageRoutePairs = publicGeorgianRoutes.map((ka) => ({
  ka,
  en: ka === "/" ? "/en" : `/en${ka}`,
}));

const legacyEnglishAliases = {
  "/services/webDevelopmentEN": "/en/webdevelopment",
};

function normalizePath(pathname = "/") {
  const path = pathname.split("?")[0].split("#")[0] || "/";
  return path === "/" ? path : path.replace(/\/+$/, "");
}

function isBlogArticlePath(path) {
  return path.startsWith("/blog/") && !publicGeorgianRoutes.includes(path);
}

export function isEnglishRoute(pathname) {
  const path = normalizePath(pathname);
  return path === "/services/webDevelopmentEN" || path === "/en" || path.startsWith("/en/");
}

export function getGeorgianPath(pathname) {
  const path = normalizePath(pathname);
  const canonicalEnglishPath = legacyEnglishAliases[path] || path;
  const pair = languageRoutePairs.find((routePair) => routePair.en === canonicalEnglishPath);

  if (pair) return pair.ka;
  if (canonicalEnglishPath.startsWith("/en/blog/")) {
    return canonicalEnglishPath.slice(3);
  }
  return canonicalEnglishPath;
}

export function getEnglishPath(pathname) {
  const path = normalizePath(pathname);
  if (legacyEnglishAliases[path]) return legacyEnglishAliases[path];
  if (isEnglishRoute(path)) return path;

  const pair = languageRoutePairs.find((routePair) => routePair.ka === path);
  if (pair) return pair.en;
  if (isBlogArticlePath(path)) return `/en${path}`;
  return path;
}

export function getLanguageTarget(pathname, language, suffix = "") {
  const target = language === "en" ? getEnglishPath(pathname) : getGeorgianPath(pathname);
  return `${target}${suffix}`;
}

export function isEquivalentLanguageSwitch(from, to) {
  return (
    isEnglishRoute(from) !== isEnglishRoute(to) &&
    getGeorgianPath(from) === getGeorgianPath(to)
  );
}

export function getLanguageAlternates(pathname) {
  const kaPath = getGeorgianPath(pathname);
  const enPath = getEnglishPath(kaPath);
  const absolute = (path) => `${SITE_ORIGIN}${path === "/" ? "" : path}`;

  return {
    canonical: absolute(isEnglishRoute(pathname) ? enPath : kaPath),
    languages: {
      "ka-GE": absolute(kaPath),
      en: absolute(enPath),
      "x-default": absolute(kaPath),
    },
  };
}

export function getHomeLanguageAlternates() {
  const alternates = getLanguageAlternates("/");
  return Object.entries(alternates.languages).map(([hrefLang, href]) => ({
    hrefLang,
    href,
  }));
}
