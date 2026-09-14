/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import ImageGallery from "../../../components/en/ImageGallery";
import PriceCard from "../../../components/en/PriceCard";
import Modal from "../../../components/en/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/en/services/soc_media";

const SocMedia = () => {
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
      src: "/customer-experience.webp",
      alt: "Social media management and content creation.",
    },
    {
      src: "/user-experience.webp",
      alt: "Facebook and Instagram Marketing for Business",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard.",
      price: 499,
      product_id: 7,
      features: [
        "4 post per month",
        "creating brand identity on social media.",
        "Social platforms: Facebook, Instagram",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Integration with the website.",
        "Set up the answering machine.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard.",
          price: 499,
          product_id: 7,
          features: [
            "4 post per month",
            "creating brand identity on social media.",
            "Social platforms: Facebook, Instagram",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Integration with the website.",
            "Set up the answering machine.",
          ],
        }),
    },
    {
      title: "Premium.",
      price: 799,
      product_id: 8,
      features: [
        "8 post per month",
        "creating brand identity on social media.",
        "Social platforms: Facebook, Instagram, LinkedIn",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Integration with the website.",
        "Set up the answering machine.",
        "Competitor Analysis.",
        "monthly reports.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium.",
          price: 799,
          product_id: 8,
          features: [
            "8 post per month",
            "creating brand identity on social media.",
            "Social platforms: Facebook, Instagram, LinkedIn",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Integration with the website.",
            "Set up the answering machine.",
            "Competitor Analysis.",
            "monthly reports.",
          ],
        }),
    },
    {
      title: "Business.",
      price: 999,
      product_id: 9,
      features: [
        "bilingual 8 post per month.",
        "creating brand identity on social media.",
        "Social platforms: Facebook, Instagram, LinkedIn",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Integration with the website.",
        "Set up the answering machine.",
        "Competitor Analysis.",
        "Google ADS campaign.",
        "E-MAIL Marketing",
        "monthly reports.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business.",
          price: 999,
          product_id: 9,
          features: [
            "bilingual 8 post per month.",
            "creating brand identity on social media.",
            "Social platforms: Facebook, Instagram, LinkedIn",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Integration with the website.",
            "Set up the answering machine.",
            "Competitor Analysis.",
            "Google ADS campaign.",
            "E-MAIL Marketing",
            "monthly reports.",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Social Media Management Next-Hub Solutions."
        description="Social media management for business: Facebook and Instagram page development, content marketing, ad management and brand strategy."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Social Media Management Next-Hub Solutions.",
          description:
            "Social media management for business: Facebook and Instagram page development, content marketing, ad management and brand strategy.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Social Media Management Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Social Media Management Next-Hub Solutions.",
          },
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
              "Social media management, Facebook page management, Instagram marketing, social media management Georgia, content marketing Tbilisi, social media management, Meta Ads management, Facebook ads Georgia, Instagram marketing Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="social-media-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Social Media Management.",
            serviceType: "Social Media Management",
            url: CANONICAL,
            description:
              "social media management, Facebook and Instagram page development, content creation, ad management, brand strategy and digital marketing.",
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
              price: "499",
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
            Social Media Management.
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            we run Facebook, Instagram and LinkedIn pages, we create content, we plan ads, and we help brands grow on social media.
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
                Social Media Marketing
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Facebook and Instagram for Business Management
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub helps businesses professionally manage social media, create content strategies, plan ads, and increase brand awareness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  creating content.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we create posts, texts, visual ideas, and content strategies that represent your brand properly.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Advertising Management.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We plan and run Facebook and Instagram ads, with audience selection, budget controls and results analysis.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Brand development.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we're helping businesses build a stable image, a style of communication and a good customer relationship on social media.
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

export default SocMedia;
