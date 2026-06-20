const faviconUrl = "/favicon.ico?v=20260621";

export const faviconIcons = {
  icon: [{ url: faviconUrl, sizes: "any", type: "image/x-icon" }],
  shortcut: faviconUrl,
  apple: faviconUrl,
};

export const faviconLinks = [
  { rel: "icon", href: faviconUrl, sizes: "any", type: "image/x-icon" },
  { rel: "shortcut icon", href: faviconUrl },
  { rel: "apple-touch-icon", href: faviconUrl },
];
