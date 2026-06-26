const fs = require("fs");
const path = require("path");

const HOST = "next-hub.pro";
const DOMAIN = `https://${HOST}`;
const KEY = "949e3157c6ae4860a58db4d81fd0de3c";
const KEY_LOCATION = `${DOMAIN}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";
const SITEMAP_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const BLOCKED_PATHS = ["/api", "/admin", "/login", "/payment"];

function extractUrls(sitemap) {
  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), ([, url]) =>
    url.trim()
  );
}

function isValidUrl(url) {
  if (!url.startsWith(DOMAIN) || url.includes("://www.")) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);

    return (
      parsedUrl.hostname === HOST &&
      BLOCKED_PATHS.every((blockedPath) => !parsedUrl.pathname.startsWith(blockedPath))
    );
  } catch {
    return false;
  }
}

async function submitIndexNow() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error(`Sitemap not found at ${SITEMAP_PATH}. Run npm run build first.`);
  }

  const sitemap = fs.readFileSync(SITEMAP_PATH, "utf8");
  const urlList = [...new Set(extractUrls(sitemap).filter(isValidUrl))];

  if (urlList.length === 0) {
    throw new Error("No valid URLs found in sitemap.");
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`IndexNow: submitting ${urlList.length} URLs to ${INDEXNOW_ENDPOINT}`);

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await response.text();

  console.log(`IndexNow: response status ${response.status}`);

  if (!response.ok) {
    throw new Error(
      `IndexNow submission failed${responseText ? `: ${responseText}` : "."}`
    );
  }

  console.log("IndexNow: submission successful.");
}

submitIndexNow().catch((error) => {
  console.error(`IndexNow: error - ${error.message}`);
  process.exitCode = 1;
});
