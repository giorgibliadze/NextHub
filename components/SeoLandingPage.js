"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";
import { fadeIn } from "../variants";

const cardClass =
  "rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function PricingCard({ plan }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center p-6 border-4 border-glow bg-gradient-to-r from-primary/10 via-black/30 to-black/10 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow z-0"
    >
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">
        {plan.name}
      </h3>
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 animate-price-glow">
        {plan.price}
      </div>
      <ul className="text-gray-200 mb-6 space-y-2">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="relative w-[150px] lg:w-[200px] py-3 rounded-full bg-gradient-to-r from-purple-800 to-purple-500 text-white hover:from-purple-900 hover:to-purple-500 transition-colors duration-300 z-10 text-center"
      >
        შეთავაზების მოთხოვნა
      </Link>
    </motion.div>
  );
}

export default function SeoLandingPage({ page, schemas }) {
  return (
    <>
      {schemas.map((schema) => (
        <JsonLd key={schema["@type"] + schema.name} data={schema} />
      ))}

      <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl md:text-6xl font-bold xl:mt-8 text-center"
        >
          {page.h1} <span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
        >
          {page.intro}
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="my-10 md:my-12 w-full"
        >
          <ImageGallery images={page.images} />
        </motion.div>

        <motion.section
          variants={fadeIn("up", 0.22)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              {page.badge}
            </span>

            <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
              {page.heroHeading}
            </h2>

            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
              {page.heroText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            {page.featureCards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  {card.title}
                </h3>
                <p className="text-white/70 leading-7 text-sm">{card.text}</p>
              </div>
            ))}
          </div>

          {page.sections.map((section) => (
            <div key={section.title} className="mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {section.items.map((item) => (
                  <div key={item.title} className={cardClass}>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {page.deepDive?.map((section) => (
            <div key={section.title} className="mb-10 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-white/70 leading-7 md:leading-8 text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {page.process.title}
              </h2>
              <ol className="space-y-3 text-white/75 leading-7 text-sm md:text-base">
                {page.process.steps.map((step) => (
                  <li key={step}>• {step}</li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                {page.cta.title}
              </h2>
              <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
                {page.cta.text}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
              >
                დაუკავშირდით Next-Hub-ს
              </Link>
            </div>
          </div>

          <div className="mb-10 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {page.caseStudy.title}
            </h2>
            <div className={cardClass}>
              <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                {page.caseStudy.text}
              </p>
            </div>
          </div>

          <div className="mb-10 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              დაკავშირებული სერვისები
            </h2>
            <div className="flex flex-wrap gap-3">
              {page.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm hover:bg-accent/80 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              ხშირად დასმული კითხვები
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {page.faqs.map((faq) => (
                <div key={faq.question} className={cardClass}>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                    {faq.question}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mobile-bottom-safe-space grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full max-w-6xl"
        >
          {page.pricing.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </div>
    </>
  );
}
