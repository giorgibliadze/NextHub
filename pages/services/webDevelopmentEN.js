// pages/en/services/web-development.jsx
"use client";

import React, { useState, useEffect } from "react";
import PriceCardEN from "../../components/PriceCardEN";
import ImageGallery from "../../components/ImageGallery";
import ModalEN from "../../components/ModalEN";
import TechnologyIcons from "../../components/TechnologyIcons";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/services/webDevelopmentEN";

const WebDevelopmentEN = () => {
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
      src: "/well-structured-3.webp",
      alt: "Professional web development and website structure",
    },
    {
      src: "/technology.webp",
      alt: "WordPress React and Next.js web development technologies",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard",
      price: 500,
      product_id: 1,
      features: [
        "1 page",
        "Responsive (mobile-friendly)",
        "Analytics access",
        "Social media integration",
        "Image slideshow",
        "About page",
        "News / Blog section",
        "Services section",
        "Partner logos",
        "Photo gallery",
        "Live chat",
        "Contact page",
        "1 month support",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard",
          price: 500,
          product_id: 1,
          features: [
            "1 page",
            "Responsive (mobile-friendly)",
            "Analytics access",
            "Social media integration",
            "Image slideshow",
            "About page",
            "News / Blog section",
            "Services section",
            "Partner logos",
            "Photo gallery",
            "Live chat",
            "Contact page",
            "1 month support",
          ],
        }),
    },
    {
      title: "Premium",
      price: 1300,
      product_id: 2,
      features: [
        "Everything in Standard",
        "Up to 5 pages",
        "Simple admin panel (CMS)",
        "Home page",
        "Locations/Branches page",
        "Ongoing & completed projects",
        "Video gallery",
        "Visitor analytics",
        "Popular posts",
        "Online payments (Visa/Mastercard/Amex)",
        "Product search",
        "Clients module",
        "3 months support",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium",
          price: 1300,
          product_id: 2,
          features: [
            "Everything in Standard",
            "Up to 5 pages",
            "Simple admin panel (CMS)",
            "Home page",
            "Locations/Branches page",
            "Ongoing & completed projects",
            "Video gallery",
            "Visitor analytics",
            "Popular posts",
            "Online payments (Visa/Mastercard/Amex)",
            "Product search",
            "Clients module",
            "3 months support",
          ],
        }),
    },
    {
      title: "Business",
      price: 3000,
      product_id: 3,
      features: [
        "Everything in Premium",
        "Top products",
        "Product sorting & filtering",
        "Wishlist",
        "Add to cart",
        "Checkout",
        "Registration (individual & company)",
        "Login with Facebook",
        "Login with Google",
        "Installment payments",
        "Sales analytics",
        "Delivery/shipping module",
        "B2B & B2C modules",
        "6 months support",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business",
          price: 3000,
          product_id: 3,
          features: [
            "Everything in Premium",
            "Top products",
            "Product sorting & filtering",
            "Wishlist",
            "Add to cart",
            "Checkout",
            "Registration (individual & company)",
            "Login with Facebook",
            "Login with Google",
            "Installment payments",
            "Sales analytics",
            "Delivery/shipping module",
            "B2B & B2C modules",
            "6 months support",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Web Development Services | WordPress, React & Next.js | Next-Hub Solutions"
        description="Next-Hub Solutions builds SEO-friendly business websites, WordPress platforms, React and Next.js apps, ecommerce stores and custom web projects."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "Web Development Services | WordPress, React & Next.js | Next-Hub Solutions",
          description:
            "Next-Hub builds fast, SEO-friendly websites, WordPress platforms, React and Next.js applications, e-commerce stores and custom business websites.",
          images: [
            {
              url: "https://next-hub.pro/web.jpg",
              width: 1200,
              height: 630,
              alt: "Web development services by Next-Hub Solutions",
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
              "web development services, website development, website design, WordPress development, React development, Next.js development, ecommerce website development, custom website development, SEO friendly websites, business website development, web development Georgia, website development Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="web-development-en-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development Services",
            serviceType: "Web Development",
            url: CANONICAL,
            description:
              "Next-Hub Solutions builds SEO-friendly business websites, WordPress platforms, React and Next.js apps, ecommerce stores and custom web projects.",
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro",
              logo: "https://next-hub.pro/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "Georgia",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "500",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {isModalOpen ? (
        <ModalEN
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
            Web Development <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            Professional WordPress, React and Next.js development for modern
            business websites, e-commerce stores and web applications.
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
                Web Development
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Websites, Online Stores <br />
                and Web Applications
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub creates fast, responsive and SEO-friendly websites
                tailored to business goals. We help brands launch professional
                digital platforms that are easy to manage and ready to grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Business Websites
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We build professional company websites that clearly present
                  your brand, services, contact details and value proposition.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  E-commerce Stores
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We create online stores with product catalogs, checkout,
                  payment integrations, search, filtering and easy management.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  SEO Optimization
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We structure pages, metadata and content so search engines can
                  better understand your services and important keywords.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  WordPress Development
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  We build flexible WordPress websites with CMS management,
                  Elementor, WooCommerce and integrations that make everyday
                  updates simple.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  React and Next.js Development
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  For custom projects, we use React and Next.js to build fast,
                  scalable and modern web applications with strong performance.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center"
          >
            <TechnologyIcons />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full max-w-6xl"
          >
            {priceCardsData.map((cardData, index) => (
              <PriceCardEN key={index} {...cardData} />
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WebDevelopmentEN;
