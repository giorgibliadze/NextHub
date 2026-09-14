/* eslint-disable react/no-unescaped-entities */
// components
import React, { Suspense, lazy } from "react";
import Link from "next/link";
import Bulb from "../../../components/Bulb";
import Circles from "../../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";
import IndustrySolutions from "../../../components/IndustrySolutions";

const ServiceSlider = lazy(() => import("../../../components/en/ServiceSlider"));

const CANONICAL = "https://next-hub.pro/en/services";

const Services = () => {
  const serviceCards = [
    {
      title: "making a website.",
      href: "/en/webdevelopment",
      description:
        "We build fast and responsive websites for businesses, with a reliable presentation, conversion structure, and SEOready-based.",
    },
    {
      title: "Software development.",
      href: "/en/software-development",
      description:
        "We're building web applications, CRM systems, portals, and workflow-specific digital products to grow our business online.",
    },
    {
      title: "Web design.",
      href: "/en/web-design",
      description:
        "we're creating a clean, easy-to-use web design that makes the brand trustworthy and leads the customer to action.",
    },
    {
      title: "SEO Optimization",
      href: "/en/seo-services",
      description:
        "SEO service includes technical audit, keyword research, page optimization, content and Search Console running.",
    },
    {
      title: "Google Business Profile Optimization",
      href: "/en/google-business-profile-optimization",
      description:
        "Google Business Profile optimization helps local businesses in Google Maps, in the moment of search and customer choice.",
    },
    {
      title: "Site maintenance and technical support.",
      href: "/en/website-maintenance-services",
      description:
        "we take care of the site's stable operation, security updates, speed, bug fixes, and ongoing support.",
    },
    {
      title: "AI video creation",
      href: "/en/ai-video-creation",
      description:
        "We create promotional videos, product presentations, Reels and multi-lingual AI avatar videos from the screenplay to the final installation.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${CANONICAL}#services`,
        name: "Next-Hub Solutions Services",
        description:
          "website design, web design, SEO optimization, Google Business Profile optimization, software development and site technical support.",
        url: CANONICAL,
        itemListElement: serviceCards.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            url: `https://next-hub.pro/en${service.href}`,
          },
        })),
        provider: {
          "@type": "Organization",
          name: "Next-Hub Solutions",
          url: "https://next-hub.pro/en",
          logo: "https://next-hub.pro/favicon.ico",
        },
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
            name: "Services.",
            item: CANONICAL,
          },
        ],
      },
    ],
  };

  return (
    <Suspense fallback={null}>
      <NextSeo
        canonical={CANONICAL}
        title="Digital Services."
        description="Next-Hub Solutions offers website design, SEO optimization, Google Business Profile-, analytics and site maintenance."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "Digital Services.",
          description:
            "Next-Hub Solutions offers website design, SEO optimization, Google Business Profile-, analytics and site maintenance.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions Services",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Digital Services.",
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
              "website design, website design, SEO optimization, digital marketing, social media management, Google Analytics, website technical support, graphic design, website development Georgia, SEO services Georgia, digital marketing Georgia, website maintenance Georgia",
          },
        ]}
      />

      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="min-h-screen bg-primary/30 py-32 md:py-36 flex p-[20px] overflow-x-hidden">
        {/* <Circles /> */}

        <div className="container min-w-full items-center mx-auto">
          <div className="flex flex-col md:mt-[15px] md:flex-row xl:flex-row gap-x-8 items-center mx-auto">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mx-0"
            >
              <motion.h1
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                Services. <span className="text-accent">.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] lg:mx-0"
              >
                Next-Hub combines website design, software development, web design, SEO optimization, Google
                Business Profile optimization and site technical support. You can also visit our blog or write to us for advice.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { href: "/en/webdevelopment", label: "making a website." },
                  { href: "/en/software-development", label: "software." },
                  { href: "/en/web-design", label: "Web design." },
                  { href: "/en/seo-services", label: "SEO" },
                  {
                    href: "/en/google-business-profile-optimization",
                    label: "Google Business Profile",
                  },
                  {
                    href: "/en/website-maintenance-services",
                    label: "Support the site.",
                  },
                  { href: "/en/ai-video-creation", label: "AI video" },
                  { href: "/en/blog", label: "blog." },
                  { href: "/en/contact", label: "Contact." },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/75 text-xs md:text-sm hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full min-w-[300px] xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>

          <IndustrySolutions className="mt-8 md:mt-12" />

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mt-8 md:mt-16 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Digital growth.
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Next-Hub Digital Services for Business Growth.
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                each direction is connected: a good site needs the right design, technical structure, SEO, the right approach and, if necessary, individual software solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
              {serviceCards.map((service) => (
                <div
                  key={service.href}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6 flex flex-col"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm md:text-base mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:scale-105 transition-all shadow-lg"
                  >
                    Learn more.
                  </Link>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mobile-bottom-safe-space max-w-6xl mx-auto mt-8 md:mt-12 px-4 md:px-6 py-8 md:py-10 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  Do you know what service you need?
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  write us down and we'll help you choose the right direction, budget and technical solution.
                </p>
              </div>
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
              >
                Consultation.
              </Link>
            </div>
          </motion.section>
        </div>

        <Bulb />
      </div>
    </Suspense>
  );
};

export default Services;
