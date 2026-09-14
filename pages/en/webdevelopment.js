/* eslint-disable react/no-unescaped-entities */
// components/WebDevelopment.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import PriceCard from "../../components/en/PriceCard";
import ImageGallery from "../../components/en/ImageGallery";
import Modal from "../../components/en/Modal";
import TechnologyIcons from "../../components/TechnologyIcons";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/en/webdevelopment";

const WebsitePriceCalculator = dynamic(
  () => import("../../components/en/WebsitePriceCalculator"),
  { loading: () => null }
);

const WebDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [disableCalculatorMotion, setDisableCalculatorMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 767px)").matches;
  });

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateCalculatorMotion = () => {
      setDisableCalculatorMotion(mediaQuery.matches);
    };

    updateCalculatorMotion();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateCalculatorMotion);
    } else {
      mediaQuery.addListener(updateCalculatorMotion);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateCalculatorMotion);
      } else {
        mediaQuery.removeListener(updateCalculatorMotion);
      }
    };
  }, []);

  const images = [
    {
      src: "/well-structured-3.webp",
      alt: "how to build a website and how to structure a website.",
    },
    {
      src: "/technology.webp",
      alt: "Next.js and WordPress Web developer",
    },
  ];

  const priceCardsData = [
    {
      title: "Standard.",
      price: 1000,
      product_id: 1,
      features: [
        "1 pages",
        "the mobile version (Responsive)",
        "Access to statistics.",
        "Social network integration.",
        "Slideshow.",
        "About Us.",
        "News.",
        "Services.",
        "Partner logos.",
        "Photo Gallery.",
        "Online Chat",
        "Contact.",
        "1 monthly support service",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Standard.",
          price: 1000,
          product_id: 1,
          features: [
            "1 pages",
            "the mobile version (Responsive)",
            "Access to statistics.",
            "Social network integration.",
            "Slideshow.",
            "About Us.",
            "News.",
            "Services.",
            "Partner logos.",
            "Photo Gallery.",
            "Online Chat",
            "Contact.",
            "1 monthly support service",
          ],
        }),
    },
    {
      title: "Premium.",
      price: 2500,
      product_id: 2,
      features: [
        "Everything is standard.",
        "5 pages",
        "Simple right panel.",
        "Home",
        "Branches",
        "ongoing and completed projects.",
        "Video Gallery.",
        "visitor statistics.",
        "Popular News.",
        "Buy products with Visa/Mastercard/Amex cards.",
        "Product search.",
        "Customer Module.",
        "3 monthly support service",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Premium.",
          price: 2500,
          product_id: 2,
          features: [
            "Everything is standard.",
            "5 pages",
            "Simple right panel.",
            "Home",
            "Branches",
            "ongoing and completed projects.",
            "Video Gallery.",
            "visitor statistics.",
            "Popular News.",
            "Buy products with Visa/Mastercard/Amex cards.",
            "Product search.",
            "Customer Module.",
            "3 monthly support service",
          ],
        }),
    },
    {
      title: "Business.",
      price: 7000,
      product_id: 3,
      features: [
        "all in premium.",
        "Top product",
        "Product sorting and filtering.",
        "Product desired (Wish List)",
        "adding products to the cart.",
        "ordering products.",
        "Registration form (for individuals and legal entities)",
        "Facebook-",
        "Sign in with Google",
        "Buy products online on a regular basis.",
        "Sales statistics.",
        "the delivery module.",
        "B2B & B2C modules",
        "6 monthly support service",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "Business.",
          price: 7000,
          product_id: 3,
          features: [
            "all in premium.",
            "Top product",
            "Product sorting and filtering.",
            "Product desired (Wish List)",
            "adding products to the cart.",
            "ordering products.",
            "Registration form (for individuals and legal entities)",
            "Facebook-",
            "Sign in with Google",
            "Buy products online on a regular basis.",
            "Sales statistics.",
            "the delivery module.",
            "B2B & B2C modules",
            "6 monthly support service",
          ],
        }),
    },
  ];

  const internalLinks = [
    { href: "/en/web-design", label: "Web design." },
    { href: "/en/software-development", label: "software." },
    { href: "/en/seo-services", label: "SEO Optimization" },
    {
      href: "/en/google-business-profile-optimization",
      label: "Google Business Profile",
    },
    {
      href: "/en/website-maintenance-services",
      label: "Support the site.",
    },
    { href: "/en/ai-faq", label: "AI FAQ" },
    { href: "/en/blog", label: "blog." },
    { href: "/en/contact", label: "Contact." },
  ];

  const processSteps = [
    {
      title: "analysis and strategy.",
      text: "we understand the purpose of the business, the audience, the competitors, and we decide what kind of website or online store will work best.",
    },
    {
      title: "structure and web design.",
      text: "we're building the page logic, the CTAs, navigation and visual direction to get the user to the action they need to take quickly.",
    },
    {
      title: "Web Development.",
      text: "We're creating WordPress, WooCommerce, React or Next.js solutions based on project difficulty, management needs and speed requirements.",
    },
    {
      title: "SEO and run",
      text: "we're building the metadata, the schema markup-, the technical SEO, analyzing and running the mobile version and speed.",
    },
  ];

  const websiteTypes = [
    "Business websites and services pages.",
    "Corporate website for the company.",
    "You can buy a store online for a fee.",
    "Landing page for campaigns and advertising.",
    "portfolio, catalogue and brand presentation.",
    "individual web application and portal.",
  ];

  const caseStudies = [
    {
      title: "Service Company.",
      text: "We've structured the corporate website by service, added the contact-clear CTAs and the technical basis for indexing the Google.",
    },
    {
      title: "Online store.",
      text: "we've simplified the product catalog, filters, cartons, and payment process so that the customer takes fewer steps to order.",
    },
    {
      title: "Brand presentation.",
      text: "We used the Next.js website to build fast loads, clean page structure, and easy adding future SEO content.",
    },
  ];

  const faqItems = [
    {
      question: "How much does it cost to build a website?",
      answer:
        "the price depends on the number of pages, design, functionality, CMS, online payments, and SEO requirements. The packages on this page start at 500 dollars.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "a simple site is often 1-3 a week, and an online store or individual functional project takes more time.",
    },
    {
      question: "Do you build a website in Tbilisi?",
      answer:
        "Yes. We work in Tbilisi and throughout Georgia. You can communicate online, by meeting or by phone, depending on the needs of the project.",
    },
    {
      question: "Is it WordPress to create a website or Next.js?",
      answer:
        "WordPress is good for easy management and quick content updates. Next.js is better for fast, scalable, and individual websites.",
    },
    {
      question: "Can you create an online store?",
      answer:
        "Yes. We create online stores with a catalog, a shopping cart, orders, payments, filters, customer accounts, and an administration panel.",
    },
    {
      question: "Does SEO include optimization in web development?",
      answer:
        "we're building the SEOready structure in the beginning: headers, meta descriptions, URL logic, schema markup-, speed and mobile optimization. We also have a separate SEO campaign.",
    },
    {
      question: "Will the website work properly on mobile?",
      answer:
        "Yes. We're running all the projects with the responsive principle, so that the site appears correctly on phones, tablets and desktop screens.",
    },
    {
      question: "Can you update the existing site?",
      answer:
        "Yes. We can improve the design, speed, structure, content, or technical aspects of the existing website.",
    },
    {
      question: "Do you get support after the website is launched?",
      answer:
        "Yes, the packages include a support period, and we can add site maintenance, security updates, and new features.",
    },
    {
      question: "Do we need a domain and hosting in advance?",
      answer:
        "If you already have it, we'll use the infrastructure that you already have. If you don't, we'll help you choose a domain, hosting, and technical environment.",
    },
    {
      question: "Can you help us with the content?",
      answer:
        "Yes. We can help you structure pages, fine-tune texts, SEO headings, and distribute visual material correctly.",
    },
    {
      question: "Can you build a website for a business in Georgia?",
      answer:
        "Yes. We are creating websites tailored to the Georgian market, which include local search, user behavior, contact channels and Google Business Profile link.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${CANONICAL}#service`,
        name: "making a website.",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "Next-Hub Solutions",
          url: "https://next-hub.pro/en",
          logo: "https://next-hub.pro/favicon.ico",
        },
        areaServed: {
          "@type": "Country",
          name: "Georgia",
        },
        url: CANONICAL,
        description:
          "website design, website design, online store design, WordPress and Next.js development, SEOready architecture and mobile optimization.",
        hasOfferCatalog: {
          "@id": `${CANONICAL}#offer-catalog`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://next-hub.pro/en",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "making a website.",
            item: CANONICAL,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${CANONICAL}#offer-catalog`,
        name: "Website Build Packages.",
        itemListElement: priceCardsData.map((card) => ({
          "@type": "Offer",
          name: card.title,
          price: String(card.price),
          priceCurrency: "GEL",
          availability: "https://schema.org/InStock",
          url: CANONICAL,
          itemOffered: {
            "@type": "Service",
            name: `${card.title} website development`,
            serviceType: "Web Development",
          },
        })),
      },
    ],
  };

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="Website Development | Next-Hub Solutions"
        description="Website building in Georgia: Business sites, online stores, WordPress and Next.js development with SEOready structure."
        languageAlternates={[
          { hrefLang: "ka-GE", href: "https://next-hub.pro/webdevelopment" },
          { hrefLang: "en", href: "https://next-hub.pro/en/webdevelopment" },
          { hrefLang: "x-default", href: "https://next-hub.pro/webdevelopment" },
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Website Development | Next-Hub Solutions",
          description:
            "Website building in Georgia: Business sites, online stores, WordPress and Next.js development with SEOready structure.",
          images: [
            {
              url: "https://next-hub.pro/web.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Web design.",
          },
          {
            name: "twitter:description",
            content:
              "a business website, an online store, a WordPress website and a Next.js website with a SEOready structure.",
          },
          {
            name: "twitter:image",
            content: "https://next-hub.pro/web.jpg",
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
              "website design, web application development, Next.js development, WordPress site, React developer Georgia, web development Tbilisi, business website Georgia, site design, online store design, website development Georgia",
          },
        ]}
      />

      <Script
        id="web-development-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
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
            making a website. <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 mt-10 md:mb-16 w-full"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Web Development.
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                making a website. <br />
                (Site creation)
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub creates modern, fast, SEO-compatible websites for businesses that focus on reliability and performance in the online space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Business sites.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we're creating company presentation websites that represent the brand, services and contact information correctly.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Online stores.
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  We create online stores with product catalogs, orders, payment and easy-to-use management systems.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  SEO Optimization
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  we're structuring the website so that Google can read the pages, services and key search phrases correctly.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  What is included in the website creation service?
                </h3>

                <ul className="space-y-3 text-white/75 leading-7 text-sm md:text-base">
                  <li>• Individual design planning</li>
                  <li>• A mobile version of the website</li>
                  <li>• WordPress or Next.js technology</li>
                  <li>• Google Analytics and Search Console integration</li>
                  <li>• Technical support and website development</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  Do you need to create a website?
                </h3>

                <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
                  write to us or call us and we'll help you choose the right type of website, functional and budget.
                </p>

                <a
                  href="tel:+995555137003"
                  className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Making a website in Georgia
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  We are developing modern websites for Georgian businesses who want to be better represented in Google, increase customer trust and develop online sales.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Building a website for business.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  a properly organized business site helps a company deliver services, communicate with customers, and attract new customers.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Build an online store.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  We create online stores with product management, ordering, payment, cataloging and easy customer experience.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  WordPress and Next.js Web developer
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  Based on the needs of the project, we use WordPress, Elementor-, WooCommerce, Next.js- and React- to make the site fast, flexible and easy to develop.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={disableCalculatorMotion ? undefined : fadeIn("up", 0.1)}
            initial={disableCalculatorMotion ? false : "hidden"}
            animate={disableCalculatorMotion ? false : "show"}
            exit={disableCalculatorMotion ? undefined : "hidden"}
            className="w-full max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6"
          >
            <div className="mb-8 text-center md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Calculator.
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Find out the estimated cost of the website.
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                select the type, number of pages, design level, and functional calculator to calculate your expected budget.
              </p>
            </div>

            <WebsitePriceCalculator />
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6"
          >
            <div className="rounded-[24px] md:rounded-[32px] border border-accent/30 bg-accent/10 p-6 md:p-8">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-black/25 text-accent text-xs md:text-sm font-semibold">
                AI summary
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                creating a website in Next-Hub Solutions-.
              </h2>
              <p className="text-white/75 leading-7 md:leading-8 text-sm md:text-base max-w-4xl">
                Next-Hub Solutions in Tbilisi is building SEO customized business websites, online stores, WordPress and Next.js projects. The service combines structure, web design, development, speed optimization, schema markup- and post-launch technical support.
              </p>
              <Link
                href="/en/ai-faq"
                className="inline-flex mt-5 text-accent font-semibold hover:text-white transition-colors"
              >
                Next-Hub of AI FAQ
              </Link>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-start">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  Why is it necessary?
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  A professional website for business.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  a modern consumer often finds a company with Google, social media, or advertising. If the site is fast, understandable, and reliable, it's easier for businesses to find new leads, calls, orders, and meetings. So creating a website isn't just about creating a visual page - it's about the digital basis of sales, trust, and brands.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "it's a good representation of the services and the values.",
                  "increasing trust with new customers.",
                  "preparing businesses for visibility in Google.",
                  "linking advertising, SEO and sales.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-black/20 border border-white/10 p-5"
                  >
                    <p className="text-white/75 leading-7 text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                the process.
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                How to build a website.
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                building a website starts not with code, but with a sense of purpose, so we get a web development that is beautiful, technically sound, and business-friendly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
                >
                  <div className="w-10 h-10 mb-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  Types.
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  what kind of websites do we build?
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-6">
                  Web design and technology depends on the purpose: some businesses need a simple presentation, some need a corporate website, some a complete online sales system.
                </p>
                <Link
                  href="/en/web-design"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  See Web Design Services.
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {websiteTypes.map((type) => (
                  <div
                    key={type}
                    className="rounded-2xl bg-black/20 border border-white/10 p-5"
                  >
                    <p className="text-white/75 leading-7 text-sm md:text-base">
                      {type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Technology.
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                WordPress or Next.js?
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                both technologies have their place, and we choose whether you need an easy-to-use, high-speed, individual functional or a scalable product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  WordPress
                </h3>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  WordPress is good for a company website, blog, catalog, and projects where the team wants to manage pages, text, and images independently.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  Next.js website building.
                </h3>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  Next.js works better on fast, SEO-focused, individual projects where performance, secure architecture, and future functional growth are important.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-start">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  E-commerce
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  Create an online store.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  an online store should be simple for both the customer and the administrator. We create a catalog, a cart, orders, payments, delivery logic and analytics so that the sales process is not too complicated.
                </p>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  In the case of complex integrations, CRM-, ERP- or a private cabinet, we'll link the project to our{" "}
                  <Link
                    href="/en/software-development"
                    className="text-accent font-semibold hover:text-white transition-colors"
                  >
                    Software development.
                  </Link>{" "}
                  direction.
                </p>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  What we add to the store.
                </h3>
                <ul className="space-y-3 text-white/75 leading-7 text-sm md:text-base">
                  <li>• Product categories and filters</li>
                  <li>• cart, order and online payment</li>
                  <li>• Customer account and order history</li>
                  <li>• Google Analytics and conversion measurement</li>
                  <li>• SEOready Categories and product pages</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  SEO structure.
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  The site should be ready for Google.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  SEO optimization starts with the right architecture: clear URL-s, headings, internal links, schema markup, fast pages and content that helps users and the search engine.
                </p>
                <Link
                  href="/en/seo-services"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  Learn more about SEO
                </Link>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  speed and mobile.
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  fast loading and responsive experience.
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  the user evaluates the page in seconds, so we test the images, the code volume, the Core Web Vitals-, the mobile navigation and the contact buttons to make sure the site is actually used.
                </p>
                <Link
                  href="/en/website-maintenance-services"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  Support and improve the site.
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                examples.
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Project Types Scenarios.
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                The main task of every project is to connect the business goal to design, technology and conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {caseStudies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Questions
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                FAQs.
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                Here are the short answers to the topics that we talk about most often before we build a website.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6 group"
                >
                  <summary className="cursor-pointer list-none text-base md:text-lg font-bold text-white flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-white/70 leading-7 text-sm md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 md:gap-10 items-center">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  Next step
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  Are you ready to start a business website?
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  Write us down and we'll get together, you need to create a WordPress site, you need to build a Next.js website, you need to build an online store, you need to build a corporate website. We'll help you with the functionality, the deadlines, and the budget.
                </p>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center w-full px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg mb-5"
                >
                  Ask for advice.
                </Link>
                <div className="flex flex-wrap gap-3">
                  {internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 rounded-full bg-black/20 border border-white/10 text-white/75 text-xs md:text-sm hover:text-accent hover:border-accent/40 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center"
          >
            <TechnologyIcons />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mobile-bottom-safe-space grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full"
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

export default WebDevelopment;
