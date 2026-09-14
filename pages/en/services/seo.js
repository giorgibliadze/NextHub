/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import PriceCard from "../../../components/en/PriceCard";
import ImageGallery from "../../../components/en/ImageGallery";
import Modal from "../../../components/en/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/en/services/seo";

const Seo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  const images = [
    {
      src: "/seo.webp",
      alt: "SEO optimization and Google Search Console",
    },
    {
      src: "/location.webp",
      alt: "local SEO and Google Business Profile",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard.",
      price: 400,
      product_id: 10,
      features: [
        "keyword research.",
        "On-Page SEO",
        "SEO Technical Audit",
        "Meta tag optimization.",
        "Speed Optimization.",
        "Basic Performance Monitoring.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard.",
          price: 400,
          product_id: 10,
          features: [
            "keyword research.",
            "On-Page SEO",
            "SEO Technical Audit",
            "Meta tag optimization.",
            "Speed Optimization.",
            "Basic Performance Monitoring.",
          ],
        }),
    },
    {
      title: "Premium.",
      price: 700,
      product_id: 11,
      features: [
        "Everything is standard.",
        "link building.",
        "Content Optimization.",
        "Competition Analysis.",
        "local SEO",
        "Social media integration.",
        "Mobile Optimization.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium.",
          price: 700,
          product_id: 11,
          features: [
            "Everything is standard.",
            "link building.",
            "Content Optimization.",
            "Competition Analysis.",
            "local SEO",
            "Social media integration.",
            "Mobile Optimization.",
          ],
        }),
    },
    {
      title: "Business.",
      price: 1200,
      product_id: 12,
      features: [
        "all in premium.",
        "Advanced Analytics.",
        "Dedicated Support.",
        "a strategy for continuous optimization.",
        "Advanced Keyword Research.",
        "A/B testing",
        "exclusive client accounts.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business.",
          price: 1200,
          product_id: 12,
          features: [
            "all in premium.",
            "Advanced Analytics.",
            "Dedicated Support.",
            "a strategy for continuous optimization.",
            "Advanced Keyword Research.",
            "A/B testing",
            "exclusive client accounts.",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="SEO service."
        description="SEO Business Optimization: Technical Audit, keyword research, on-page SEO, running the local SEO and Search Console."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "SEO service.",
          description:
            "SEO Business Optimization: Technical Audit, keyword research, on-page SEO, running the local SEO and Search Console.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "SEO Optimization Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "robots",
            content: "index,follow,max-image-preview:large",
          },
          {
            name: "keywords",
            content:
              "SEO optimization, Google appearance, search engine optimization, Google ranking Georgia, SEO services Georgia, local SEO Tbilisi, technical SEO, Google Search Console, SEO Tbilisi, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="seo-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO Optimization",
            serviceType: "Search Engine Optimization",
            url: CANONICAL,
            description:
              "SEO optimization, technical SEO, running Google Search Console, local SEO, keyword research and improving positions in Google.",
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro/en",
              logo: "https://next-hub.pro/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "Georgia",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "GEL",
              price: "400",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardData={selectedCardData}
        />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-6xl font-bold xl:mt-8 text-center"
          >
            SEO Optimization
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            We're helping businesses in Google to get better results, increase organic traffic, and get more potential customers.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-10 md:my-12 w-full"
          >
            <ImageGallery images={images} />
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
                Search Engine Optimization
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Google increased visibility.
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub performs SEO optimization, technical audit, keyword research, and improving the structure of the website to make your business stand out in the Google.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  technical SEO
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we check the technical status, speed, indexing of the site and fix the SEO problems.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  keyword research.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we find the keywords that your potential users are actually looking for in Google.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  local SEO
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We're improving the visibility of your business in Google Business Profile- and local results.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full max-w-6xl"
          >
            {priceCardsData.map((cardData, index) => (
              <PriceCard key={index} {...cardData} />
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Seo;
