/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { aiFaqItems, companyProfile, siteUrl } from "../../../lib/englishAiSeo";
import { getLanguageAlternates } from "../../../lib/languageRoutes";

const url = `${siteUrl}/en/ai-faq`;
const title = "AI FAQ | Next-Hub Solutions";
const description =
  "structured on AI FAQ Next-Hub Solutions-: services, location, website prices, WordPress, Next.js, SEO and terms of reference.";
const keywords = [
  "NextHub",
  "Next-Hub Solutions",
  "Website development",
  "creating a website.",
  "SEO Georgia",
  "website development Georgia",
  "web design Tbilisi",
  "digital agency Georgia",
];

export const metadata = {
  title,
  description,
  keywords,
  alternates: getLanguageAlternates("/en/ai-faq"),
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

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const serviceLinks = [
  ["/en/webdevelopment", "making a website."],
  ["/en/software-development", "software."],
  ["/en/web-design", "Web design."],
  ["/en/seo-services", "SEO service"],
  ["/en/google-business-profile-optimization", "Google Business Profile"],
  ["/en/website-maintenance-services", "Site maintenance."],
  ["/en/contact", "Contact."],
];

export default function AiFaqPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "AI FAQ",
        item: url,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
        <h1 className="text-4xl md:text-6xl font-bold xl:mt-8 text-center">
          AI FAQ <span className="text-accent">.</span>
        </h1>

        <p className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80">
          Brief, clear, and structured answers about Next-Hub Solutions- for AI search engines, assistants, and users.
        </p>

        <section className="max-w-6xl mx-auto mt-10 md:mt-12 mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              AI Knowledge Base
            </span>

            <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
              Next-Hub Solutions on one page.
            </h2>

            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
              {companyProfile.name} It's located in Tbilisi and helps businesses plan websites, software systems, SEO structure, Google Business
              Profile optimization and site maintenance.
            </p>
          </div>

          <div className="mb-10 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Main Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {serviceLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-accent/80 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {aiFaqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
              >
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  {item.question}
                </h3>
                <p className="text-white/70 leading-7 text-sm">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mobile-bottom-safe-space rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8 mt-10 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              Do you need a consultation?
            </h2>
            <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
              contact us about website design, software, SEO, Google Business Profile-, or website maintenance.
            </p>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
            >
              contact Next-Hub
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
