import SeoLandingPage from "../../../components/en/SeoLandingPage";
import { buildSchemas, seoPages } from "../../../lib/englishSeoPages";
import { getLanguageAlternates } from "../../../lib/languageRoutes";

const page = seoPages["google-business-profile-optimization"];

export const metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: getLanguageAlternates("/en/google-business-profile-optimization"),
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/location.webp", width: 1200, height: 630, alt: page.h1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["/location.webp"],
  },
};

export default function GoogleBusinessProfileOptimizationPage() {
  return <SeoLandingPage page={page} schemas={buildSchemas(page)} />;
}
