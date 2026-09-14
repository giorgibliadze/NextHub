import SeoLandingPage from "../../components/SeoLandingPage";
import { buildSchemas, seoPages } from "../../lib/seoPages";
import { getLanguageAlternates } from "../../lib/languageRoutes";

const page = seoPages["web-design"];

export const metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: getLanguageAlternates("/web-design"),
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/user-experience.webp", width: 1200, height: 630, alt: page.h1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["/user-experience.webp"],
  },
};

export default function WebDesignPage() {
  return <SeoLandingPage page={page} schemas={buildSchemas(page)} />;
}
