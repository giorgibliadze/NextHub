/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import ImageGallery from "../../../components/en/ImageGallery";
import PriceCard from "../../../components/en/PriceCard";
import Modal from "../../../components/en/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/en/services/analytics";

const Analytics = () => {
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
      src: "/Data-analytics.webp",
      alt: "Google Analytics 4 and Web Analytics.",
    },
    {
      src: "/targeting.webp",
      alt: "data analysis and audience monitoring.",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard.",
      price: 500,
      product_id: 16,
      features: [
        "data collection and evaluation.",
        "Basic Analytics Dashboard.",
        "basic performance monitoring.",
        "Google Analytics integration.",
        "regular reports.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard.",
          price: 500,
          product_id: 16,
          features: [
            "data collection and evaluation.",
            "Basic Analytics Dashboard.",
            "basic performance monitoring.",
            "Google Analytics integration.",
            "regular reports.",
          ],
        }),
    },
    {
      title: "Premium.",
      price: 900,
      product_id: 17,
      features: [
        "Everything is standard.",
        "Advanced Data Visualization.",
        "Customer behavior analysis.",
        "custom reports.",
        "Multilevel Monitoring.",
        "user segmentation.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium.",
          price: 900,
          product_id: 17,
          features: [
            "Everything is standard.",
            "Advanced Data Visualization.",
            "Customer behavior analysis.",
            "custom reports.",
            "Multilevel Monitoring.",
            "user segmentation.",
          ],
        }),
    },
    {
      title: "Business.",
      price: 1500,
      product_id: 18,
      features: [
        "all in premium.",
        "Extended Data Analysis.",
        "real-time monitoring.",
        "customized A/B testing",
        "ongoing support and consultation.",
        "Business Strategy Analysis.",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business.",
          price: 1500,
          product_id: 18,
          features: [
            "all in premium.",
            "Extended Data Analysis.",
            "real-time monitoring.",
            "customized A/B testing",
            "ongoing support and consultation.",
            "Business Strategy Analysis.",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Web analytics."
        description="Website analytics for business: GA4 setup, Google Analytics, Search Console, conversion monitoring and customer behavior analysis."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Web analytics.",
          description:
            "Website analytics for business: GA4 setup, Google Analytics, Search Console, conversion monitoring and customer behavior analysis.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Web analytics and data analysis Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Web analytics.",
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
              "Google Analytics, data analysis, website analytics, business analytics Georgia, GA4 setup Georgia, Google Analytics 4, Google Search Console, Google Tag Manager, web analytics Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="analytics-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Analytics.",
            serviceType: "Web Analytics",
            url: CANONICAL,
            description:
              "Google Analytics 4- running, Google Search Console, data analysis, conversion monitoring, customer behavior analysis and regular reports.",
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
              price: "500",
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
            Web Analytics.
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            we're helping businesses measure the results of the website, customer behavior, conversions, and the effectiveness of their advertising campaigns.
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
                Google Analytics 4
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Data-driven solutions.
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub helps you run Google Analytics 4-, Google Search
                Console- and Tag Manager- correctly to get accurate data on customer behavior, sourcing, conversions and sales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  GA4 and GTM setup
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we use Google Analytics 4-, Google Tag Manager- and the necessary tags to record the website data correctly.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Conversion Monitoring.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we measure form mail, calls, WhatsApp buttons, orders, and other important actions.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  reports and analysis.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  you're creating a comprehensive report that shows where the user is coming from and which channel works best.
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

export default Analytics;
