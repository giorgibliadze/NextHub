import SeoLandingPage from "../../components/SeoLandingPage";
import { buildSchemas, seoPages } from "../../lib/seoPages";

const page = seoPages["software-development"];

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
    images: [{ url: "/technology.webp", width: 1200, height: 630, alt: page.h1 }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["/technology.webp"],
  },
};

export default function SoftwareDevelopmentPage() {
  return <SeoLandingPage page={page} schemas={buildSchemas(page)} />;
}
