/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import ImageGallery from "../../../components/en/ImageGallery";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

// Dynamic imports
const PriceCard = dynamic(() => import("../../../components/en/PriceCard"), {
  loading: () => null,
});

const Modal = dynamic(() => import("../../../components/en/Modal"), {
  loading: () => null,
});

const CANONICAL = "https://next-hub.pro/en/services/digital_marketing";

const DigitalMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = useCallback((cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  const images = [
    {
      src: "/seo3.webp",
      alt: "Google Ads and digital marketing.",
      loading: "lazy",
    },
    {
      src: "/seo2.webp",
      alt: "Social media advertising and marketing.",
      loading: "lazy",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard.",
      price: 700,
      product_id: 13,
      features: [
        "4 post per month",
        "creating brand identity on social media.",
        "Facebook, Instagram",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Web integration (Facebook Pixel)",
        "Set up the answering machine.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard.",
          price: 700,
          product_id: 13,
          features: [
            "4 post per month",
            "creating brand identity on social media.",
            "Facebook, Instagram",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Web integration (Facebook Pixel)",
            "Set up the answering machine.",
          ],
        }),
    },
    {
      title: "Premium.",
      price: 1000,
      product_id: 14,
      features: [
        "8 post per month",
        "creating brand identity on social media.",
        "Social platforms: Facebook, Instagram, LinkedIn",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Web integration (Facebook Pixel)",
        "Set up the answering machine.",
        "monthly reports.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium.",
          price: 1000,
          product_id: 14,
          features: [
            "8 post per month",
            "creating brand identity on social media.",
            "Social platforms: Facebook, Instagram, LinkedIn",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Web integration (Facebook Pixel)",
            "Set up the answering machine.",
            "monthly reports.",
          ],
        }),
    },
    {
      title: "Business.",
      price: 1500,
      product_id: 15,
      features: [
        "bilingual 8 post per month (Geo, Eng)",
        "creating brand identity on social media.",
        "Social platforms: Facebook, Instagram, LinkedIn",
        "technical page management.",
        "planning and running cost-effective advertising campaigns.",
        "Competitor Analysis.",
        "Web integration (Facebook Pixel)",
        "Set up the answering machine.",
        "Google Ads campaigns.",
        "E-mail Marketing",
        "monthly reports.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business.",
          price: 1500,
          product_id: 15,
          features: [
            "bilingual 8 post per month (Geo, Eng)",
            "creating brand identity on social media.",
            "Social platforms: Facebook, Instagram, LinkedIn",
            "technical page management.",
            "planning and running cost-effective advertising campaigns.",
            "Competitor Analysis.",
            "Web integration (Facebook Pixel)",
            "Set up the answering machine.",
            "Google Ads campaigns.",
            "E-mail Marketing",
            "monthly reports.",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Digital Marketing."
        description="Digital marketing for business: Google Ads, Meta Ads, online advertising, content strategy and results-oriented campaigns."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Digital Marketing.",
          description:
            "Digital marketing for business: Google Ads, Meta Ads, online advertising, content strategy and results-oriented campaigns.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Digital marketing Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Digital Marketing.",
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
              "digital marketing, online advertising, online business development, digital marketing Georgia, online advertising Tbilisi, Google Ads, Meta Ads, Facebook Ads, Instagram advertising, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="digital-marketing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital marketing.",
            serviceType: "Digital Marketing",
            url: CANONICAL,
            description:
              "Google Ads, Facebook Ads, Instagram ads, E-mail marketing, content strategy and business growth-focused advertising campaigns.",
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
              price: "700",
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
            Digital marketing.
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            We're helping businesses to get more customers through Google Ads, social media advertising and effective digital marketing strategies.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-16 mt-10 w-full"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-10"
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

export default DigitalMarketing;
