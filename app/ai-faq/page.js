import Link from "next/link";
import { aiFaqItems, companyProfile, siteUrl } from "../../lib/aiSeo";

const url = `${siteUrl}/ai-faq`;
const title = "AI FAQ Next-Hub Solutions-ის შესახებ";
const description =
  "AI საძიებო სისტემებისთვის და მომხმარებლებისთვის მომზადებული პასუხები Next-Hub Solutions-ის სერვისებზე, მდებარეობაზე, ვებსაიტის ფასებზე, WordPress-ზე, Next.js-ზე, SEO-ზე და კონსულტაციაზე.";

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

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const serviceLinks = [
  ["/webdevelopment", "ვებსაიტის დამზადება"],
  ["/software-development", "პროგრამული უზრუნველყოფა"],
  ["/web-design", "ვებ დიზაინი"],
  ["/seo-services", "SEO მომსახურება"],
  ["/google-business-profile-optimization", "Google Business Profile"],
  ["/website-maintenance-services", "საიტის მოვლა"],
  ["/contact", "კონტაქტი"],
];

export default function AiFaqPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "მთავარი", item: siteUrl },
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
          მოკლე, მკაფიო და სტრუქტურირებული პასუხები Next-Hub Solutions-ის
          შესახებ AI საძიებო სისტემებისთვის, ასისტენტებისთვის და მომხმარებლებისთვის.
        </p>

        <section className="max-w-6xl mx-auto mt-10 md:mt-12 mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              AI ცოდნის ბაზა
            </span>

            <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
              Next-Hub Solutions ერთ გვერდზე
            </h2>

            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
              {companyProfile.name} მდებარეობს თბილისში და ეხმარება ბიზნესებს
              ვებსაიტების, პროგრამული სისტემების, SEO სტრუქტურის, Google Business
              Profile ოპტიმიზაციისა და საიტის მოვლის დაგეგმვაში.
            </p>
          </div>

          <div className="mb-10 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              მთავარი სერვისები
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
                <h2 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  {item.question}
                </h2>
                <p className="text-white/70 leading-7 text-sm">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mobile-bottom-safe-space rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8 mt-10 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-accent">
              გჭირდებათ კონსულტაცია?
            </h2>
            <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
              დაგვიკავშირდით ვებსაიტის დამზადების, პროგრამული სისტემის, SEO-ს,
              Google Business Profile-ის ან საიტის მოვლის შესახებ.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
            >
              დაუკავშირდით Next-Hub-ს
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
