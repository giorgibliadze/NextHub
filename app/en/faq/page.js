import SeoFaqPage from "../../../components/en/SeoFaqPage";
import { getLanguageAlternates } from "../../../lib/languageRoutes";
import { buildFaqSchemas, faqGroups } from "../../../lib/englishSeoPages";

const url = "https://next-hub.pro/en/faq";
const title =
  "Frequently Asked Questions.";
const description =
  "answers to frequently asked questions about website design, software systems, web design, SEO optimization, Google Business Profile-, and site maintenance.";
const keywords = [
  "FAQ",
  "creating a website.",
  "SEO tips",
  "Web support.",
  "website development Georgia",
  "SEO services Georgia",
  "website maintenance Georgia",
  "Next-Hub Solutions FAQ",
];

export const metadata = {
  title,
  description,
  keywords,
  alternates: getLanguageAlternates("/en/faq"),
  openGraph: {
    title,
    description,
    url,
    siteName: "Next-Hub Solutions",
    type: "website",
    images: [{ url: "/nexthub.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/nexthub.png"],
  },
};

export default function FaqPage() {
  return <SeoFaqPage groups={faqGroups} schemas={buildFaqSchemas()} />;
}
