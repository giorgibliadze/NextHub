import SeoLandingPage from "../../components/SeoLandingPage";
import { buildSchemas, seoPages } from "../../lib/seoPages";

const page = seoPages["seo-services"];

export const metadata = {
  title: page.title,
  description: page.description,
  keywords: page.keywords,
  alternates: { canonical: page.url },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/seo.webp", width: 1200, height: 630, alt: page.h1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["/seo.webp"],
  },
};

export default function SeoServicesPage() {
  return <SeoLandingPage page={page} schemas={buildSchemas(page)} />;
}
