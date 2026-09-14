"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { fadeIn } from "../variants";
import { buildEnglishSchemas } from "../lib/englishPages";

const cardClass =
  "rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ActionLink({ action, secondary = false }) {
  const className = secondary
    ? "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/50 hover:text-accent"
    : "inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105";

  if (action.href.startsWith("mailto:")) {
    return (
      <a href={action.href} className={className}>
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}

export default function EnglishSolutionPage({
  page,
  locale = "en",
  buildSchemas = buildEnglishSchemas,
}) {
  const isEnglish = locale === "en";
  const copy = isEnglish
    ? {
        explore: "Explore solution →",
        processEyebrow: "Development process",
        processTitle: "A practical process with clear review points",
        faqEyebrow: "Frequently asked questions",
        faqTitle: "Questions to clarify before development",
        relatedTitle: "Explore related solutions",
        quote: "Request a quote",
        contact: "Contact page",
        pricingNote:
          "Final scope and pricing depend on the required pages, workflows, integrations, content, and project complexity.",
      }
    : {
        explore: "იხილეთ გადაწყვეტა →",
        processEyebrow: "დეველოპმენტის პროცესი",
        processTitle: "პრაქტიკული პროცესი მკაფიო განხილვის ეტაპებით",
        faqEyebrow: "ხშირად დასმული კითხვები",
        faqTitle: "კითხვები, რომლებიც დეველოპმენტამდე უნდა დაზუსტდეს",
        relatedTitle: "მსგავსი გადაწყვეტები",
        quote: "შეთავაზების მოთხოვნა",
        contact: "კონტაქტის გვერდი",
        pricingNote:
          "საბოლოო მოცულობა და ფასი დამოკიდებულია საჭირო გვერდებზე, სამუშაო პროცესებზე, ინტეგრაციებზე, კონტენტსა და პროექტის სირთულეზე.",
      };
  const schemas = buildSchemas(page);

  return (
    <>
      <NextSeo
        canonical={page.url}
        title={page.title}
        description={page.description}
        languageAlternates={page.languageAlternates}
        openGraph={{
          type: "website",
          locale: isEnglish ? "en_US" : "ka_GE",
          url: page.url,
          site_name: "Next-Hub Solutions",
          title: page.title,
          description: page.description,
          images: [
            {
              url: "https://next-hub.pro/nexthub.png",
              width: 1200,
              height: 630,
              alt: page.h1,
            },
          ],
        }}
        twitter={{ cardType: "summary_large_image" }}
        additionalMetaTags={[
          { name: "twitter:title", content: page.title },
          { name: "twitter:description", content: page.description },
          { name: "author", content: "Next-Hub Solutions" },
          { name: "robots", content: "index,follow,max-image-preview:large" },
          { name: "keywords", content: page.keywords },
        ]}
      />

      {schemas.map((schema) => (
        <JsonLd key={schema["@id"]} data={schema} />
      ))}

      <main className="flex min-h-screen flex-col items-center overflow-x-clip px-4 py-28 md:px-8 md:py-40 xl:px-10">
        <motion.header
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          className="mx-auto mb-12 flex w-full max-w-6xl flex-col items-center rounded-[30px] border border-white/10 bg-white/[0.045] px-6 py-12 text-center shadow-2xl backdrop-blur-md md:px-10 md:py-16"
        >
          <span className="mb-5 inline-flex rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent md:text-sm">
            {page.eyebrow}
          </span>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            {page.h1} <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 md:text-lg md:leading-8">
            {page.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink action={page.primaryCta} />
            <ActionLink action={page.secondaryCta} secondary />
          </div>
        </motion.header>

        <div className="mx-auto w-full max-w-6xl space-y-12 md:space-y-16">
          {page.sections.map((section) => (
            <motion.section
              key={section.title}
              id={section.id}
              variants={fadeIn("up", 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              className="scroll-mt-24 rounded-[26px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-md md:p-9"
            >
              {section.eyebrow && (
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {section.eyebrow}
                </span>
              )}
              <h2 className="max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
                {section.title}
              </h2>
              {section.intro && (
                <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
                  {section.intro}
                </p>
              )}
              <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card) => {
                  const content = (
                    <>
                      <h3 className="text-lg font-bold text-accent md:text-xl">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {card.text}
                      </p>
                      {card.href && (
                        <span className="mt-5 inline-block text-sm font-semibold text-white">
                          {copy.explore}
                        </span>
                      )}
                    </>
                  );

                  return card.href ? (
                    <Link
                      key={card.title}
                      href={card.href}
                      className={`${cardClass} transition-colors hover:border-accent/35`}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={card.title} className={cardClass}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}

          <motion.section
            variants={fadeIn("up", 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-md md:p-9"
          >
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {page.showcase.eyebrow}
            </span>
            <h2 className="text-2xl font-bold md:text-4xl">
              {page.showcase.title}
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              {page.showcase.intro}
            </p>
            {page.showcase.items.length > 0 && (
              <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
                {page.showcase.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} group transition-colors hover:border-accent/35`}
                  >
                    <div className="relative mb-5 aspect-video overflow-hidden rounded-xl bg-white">
                      <Image
                        src={item.image}
                        alt={`${item.title} ${item.label.toLowerCase()}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-3"
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                      {item.label}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {item.text}
                    </p>
                  </a>
                ))}
              </div>
            )}
          </motion.section>

          <section className="rounded-[26px] border border-white/10 bg-black/20 p-5 md:p-9">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {copy.processEyebrow}
            </span>
            <h2 className="text-2xl font-bold md:text-4xl">
              {copy.processTitle}
            </h2>
            <ol className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {page.process.map((step, index) => (
                <li key={step.title} className={cardClass}>
                  <span className="text-xs font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {page.faqs?.length > 0 && (
            <section className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5 md:p-9">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.16em] text-accent">
                {copy.faqEyebrow}
              </span>
              <h2 className="text-2xl font-bold md:text-4xl">
                {copy.faqTitle}
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
                {page.faqs.map((faq) => (
                  <div key={faq.question} className={cardClass}>
                    <h3 className="text-lg font-bold text-accent">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5 md:p-9">
            <h2 className="text-2xl font-bold md:text-4xl">
              {copy.relatedTitle}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.relatedPages.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${cardClass} transition-colors hover:border-accent/35`}
                >
                  <h3 className="text-lg font-bold text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-[26px] border border-accent/30 bg-accent/10 p-6 text-center shadow-2xl md:p-10">
            <h2 className="text-2xl font-bold md:text-4xl">
              {page.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
              {page.finalCta.text}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:info@next-hub.pro"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 font-semibold text-white transition-transform hover:scale-105"
              >
                {copy.quote}
              </a>
              <Link
                href={isEnglish ? "/en/contact" : "/contact"}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/20 px-7 py-4 font-semibold text-white transition-colors hover:border-accent/50"
              >
                {copy.contact}
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/55">
              {copy.pricingNote}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
