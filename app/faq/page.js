import SeoFaqPage from "../../components/SeoFaqPage";
import { buildFaqSchemas, faqGroups } from "../../lib/seoPages";

const url = "https://next-hub.pro/faq";
const title =
  "ხშირად დასმული კითხვები ვებსაიტის დამზადებაზე, SEO-ზე და საიტის მოვლაზე";
const description =
  "ხშირად დასმული კითხვები ვებსაიტის დამზადებაზე, პროგრამულ სისტემებზე, ვებ დიზაინზე, SEO-ზე, Google Business Profile-ზე და მოვლაზე.";

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
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
