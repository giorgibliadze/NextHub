/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import RotatingWords from "../../components/RotatingWords";
import IndustrySolutions from "../../components/IndustrySolutions";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { getHomeLanguageAlternates } from "../../lib/languageRoutes";
import { useLanguageState } from "../../components/LanguageStateProvider";

export const metadata = {
  metadataBase: new URL("https://next-hub.pro/en"),
  title: {
    default: "Website Development in Georgia — Prices from ₾500 | Next-Hub",
    template: "%s",
  },
  description:
    "Modern websites and online platforms for businesses. Website development from ₾500. Get a free consultation with Next-Hub Solutions.",
  keywords: [
    "Website development",
    "making a website.",
    "Web Development.",
    "creating websites.",
    "creating a website.",
    "Web developer Georgia",
    "NextHub",
    "Next-Hub Solutions",
    "website development Georgia",
    "web design Tbilisi",
    "SEO Georgia",
    "digital agency Georgia",
  ],
};

const ParticlesContainer = dynamic(
  () => import("../../components/ParticlesContainer"),
  {
    ssr: false,
    loading: () => null,
  },
);

const CalculatorSkeleton = () => (
  <div className="mx-auto mb-14 max-w-6xl rounded-[24px] border border-white/10 bg-white/5 px-4 py-8 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:px-6 md:py-12">
    <div className="h-8 w-64 max-w-full rounded-full bg-white/10" />
    <div className="mt-5 h-4 w-full max-w-2xl rounded-full bg-white/10" />
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      <div className="h-28 rounded-2xl bg-white/10" />
      <div className="h-28 rounded-2xl bg-white/10" />
      <div className="h-28 rounded-2xl bg-white/10" />
    </div>
  </div>
);

const WebsitePriceCalculator = dynamic(
  () => import("../../components/en/WebsitePriceCalculator"),
  {
    ssr: false,
    loading: CalculatorSkeleton,
  },
);

const Home = () => {
  const [showParticles, setShowParticles] = useState(false);
  const [showCalculator, setShowCalculator] = useLanguageState(
    "home-calculator-visible",
    false,
  );
  const [disableBelowFoldMotion, setDisableBelowFoldMotion] = useState(false);
  const calculatorRef = useRef(null);
  const words = ["Websites ", "Online stores ", "Web applications "];
  const canonical = "https://next-hub.pro/en";
  const metaDescription =
    "Modern websites and online platforms for businesses. Website development from ₾500. Get a free consultation with Next-Hub Solutions.";
  const homeTitle =
    "Website Development in Georgia — Prices from ₾500 | Next-Hub";

  useEffect(() => {
    const canUseParticles = () =>
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUseParticles()) return undefined;

    let timer;
    let cancelIdle;
    const loadParticles = () => {
      timer = window.setTimeout(() => {
        if (canUseParticles()) setShowParticles(true);
      }, 1500);
    };

    const scheduleParticles = () => {
      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(loadParticles, {
          timeout: 3000,
        });
        cancelIdle = () => window.cancelIdleCallback(idleId);
        return;
      }

      loadParticles();
    };

    if (document.readyState === "complete") {
      scheduleParticles();
    } else {
      window.addEventListener("load", scheduleParticles, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleParticles);
      if (timer) window.clearTimeout(timer);
      if (cancelIdle) cancelIdle();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMotionPreference = () => {
      setDisableBelowFoldMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateMotionPreference);
    } else {
      mediaQuery.addListener(updateMotionPreference);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateMotionPreference);
      } else {
        mediaQuery.removeListener(updateMotionPreference);
      }
    };
  }, []);

  useEffect(() => {
    if (showCalculator) return undefined;

    const node = calculatorRef.current;
    if (!node) return undefined;

    const loadCalculator = () => setShowCalculator(true);

    if (!("IntersectionObserver" in window)) {
      const timer = window.setTimeout(loadCalculator, 1800);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(loadCalculator, { timeout: 800 });
          return;
        }

        window.setTimeout(loadCalculator, 250);
      },
      { rootMargin: "600px 0px", threshold: 0 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [setShowCalculator, showCalculator]);

  const belowFoldMotionProps = disableBelowFoldMotion
    ? {
        variants: fadeIn("up", 0),
        initial: "show",
        animate: "show",
      }
    : {
        variants: fadeIn("up", 0.1),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
      };

  const services = [
    {
      title: "Website development",
      href: "/en/webdevelopment",
      url: "https://next-hub.pro/en/webdevelopment",
      description:
        "We build fast, modern, SEOready business websites with clear structure, polished design, and conversion-focused calls to action.",
    },
    {
      title: "Software development",
      href: "/en/software-development",
      url: "https://next-hub.pro/en/software-development",
      description:
        "We build custom web applications, portals, CRM systems, and digital products shaped around business workflows.",
    },
    {
      title: "Web design",
      href: "/en/web-design",
      url: "https://next-hub.pro/en/web-design",
      description:
        "We create clean, modern, user-friendly designs that present the brand professionally and guide visitors toward action.",
    },
    {
      title: "SEO optimization",
      href: "/en/seo-services",
      url: "https://next-hub.pro/en/seo-services",
      description:
        "We improve technical SEO, page structure, keywords, metadata, and internal links to strengthen visibility in Google.",
    },
    {
      title: "AI video creation",
      href: "/en/ai-video-creation",
      url: "https://next-hub.pro/en/ai-video-creation",
      description:
        "We create promotional videos, Reels, product presentations, and AI avatar videos from script to final edit.",
    },
    {
      title: "Google Business Profile Optimization",
      href: "/en/google-business-profile-optimization",
      url: "https://next-hub.pro/en/google-business-profile-optimization",
      description:
        "We improve local-business visibility in Google Business Profile and Google Maps so customers can find you more easily.",
    },
    {
      title: "Website maintenance",
      href: "/en/website-maintenance-services",
      url: "https://next-hub.pro/en/website-maintenance-services",
      description:
        "We handle technical support, security updates, performance, bug fixes, and stable website operation.",
    },
  ];

  const processSteps = [
    {
      title: "Analysis",
      text: "We clarify the business goal, audience, competitors, and what the website needs to achieve.",
    },
    {
      title: "Structure and design",
      text: "We plan page logic, navigation, content hierarchy, and the visual direction.",
    },
    {
      title: "Development",
      text: "We build a fast, responsive, technically sound website or web application.",
    },
    {
      title: "SEO optimization",
      text: "We prepare metadata, schema, internal links, performance, and the Search Console foundation.",
    },
    {
      title: "Launch and support",
      text: "We test the pages, launch the project, and continue technical support as needed.",
    },
  ];

  const blogLinks = [
    {
      href: "/en/blog/website-cost-georgia-2026",
      title: "How much does a website cost in Georgia in 2026?",
    },
    {
      href: "/en/blog/nextjs-vs-wordpress",
      title: "Next.js vs WordPress: which is right for your project?",
    },
    {
      href: "/en/blog/google-business-profile-sales",
      title: "How to use Google Business Profile as a source of sales.",
    },
    {
      href: "/en/blog/seo-small-business-georgia",
      title: "SEO for small businesses in Georgia",
    },
    {
      href: "/en/blog/printerman-website-case-study",
      title: "Printerman website case study",
    },
    {
      href: "/en/ai-faq",
      title: "Next-Hub Solutions AI FAQ",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${canonical}/#professional-service`,
        name: "Website Development — Next-Hub Solutions",
        image: "https://next-hub.pro/favicon.ico",
        url: canonical,
        telephone: "+995555137003",
        email: "info@next-hub.pro",
        description:
          "website creation, online store creation, web design, SEO optimization, Google Business Profile and site support in Georgia.",
        priceRange: "₾₾",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tbilisi",
          addressCountry: "GE",
        },
        areaServed: {
          "@type": "Country",
          name: "Georgia",
        },
        parentOrganization: {
          "@id": `${canonical}/#organization`,
        },
        hasOfferCatalog: {
          "@id": `${canonical}/#offer-catalog`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: canonical,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${canonical}/#offer-catalog`,
        name: "Next-Hub Solutions website development services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          name: service.title,
          url: service.url,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: service.url,
            provider: {
              "@id": `${canonical}/#organization`,
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <NextSeo
        canonical={canonical}
        title={homeTitle}
        description={metaDescription}
        languageAlternates={getHomeLanguageAlternates()}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: canonical,
          site_name: "Website Development — Next-Hub Solutions",
          title: homeTitle,
          description: metaDescription,
          images: [
            {
              url: "https://next-hub.pro/nexthub.png",
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
            content: homeTitle,
          },
          {
            name: "twitter:description",
            content: metaDescription,
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
              "website design, website design, web developer Georgia, NextHub, Next-Hub Solutions, website development Georgia, web design Tbilisi, SEO Georgia, digital agency Georgia",
          },
        ]}
      />

      <Script
        id="home-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="relative min-h-screen w-full overflow-hidden bg-primary/60 smx:min-h-[640px] sm:min-h-[600px] lg:min-h-[847px] xxl:min-h-[990px] xll:min-h-[885px]">
        <div className="relative min-h-screen w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 smx:min-h-[640px] sm:min-h-[600px] lg:min-h-[847px] xxl:min-h-[990px] xll:min-h-[885px]">
          <div className="relative z-10 text-center flex min-h-screen flex-col justify-center xl:text-left container mx-auto smx:min-h-[640px] sm:min-h-[600px] lg:min-h-[847px] xxl:min-h-[990px] xll:min-h-[885px]">
            <motion.div
              variants={fadeIn("up", 0.12)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* title */}
              <div
                className="
                mt-[60px]
                sm:mt-[80px]
                xl:mt-[100px]
                text-[34px]
                leading-tight
                sm:text-[44px]
                xl:text-[64px]
                font-bold
              "
              >
                <h1 className="inline font-bold">
                  Website development <span className="text-accent">.</span>
                </h1>

                <br />

                <div
                  className="
    inline
    text-accent
    font-bold
    text-[20px]
    sm:text-[34px]
    xl:text-[64px]
  "
                >
                  <RotatingWords words={words} />
                </div>

                <span
                  className="
    inline
    font-bold
    text-[20px]
    sm:text-[34px]
    xl:text-[64px]
  "
                >
                  for businesses.
                </span>
              </div>

              {/* subtitle */}
              <p
                className="
                max-w-sm
                text-[15px]
                leading-8
                xl:text-[18px]
                xl:max-w-xl
                mx-auto
                xl:mx-0
                mb-10
                xl:mb-16
              "
              >
                Next-Hub creates modern websites, online stores, and web
                applications. We build fast, SEOready digital products around
                real business goals.
              </p>

              {/* contact button */}
              <div className="mobile-bottom-safe-space flex justify-center xl:justify-start relative z-50">
                <a
                  href="tel:+995555137003"
                  className="
                  px-8
                  py-4
                  rounded-full
                  bg-accent
                  text-white
                  font-semibold
                  text-[14px]
                  xl:text-[16px]
                  hover:scale-105
                  transition-all
                  shadow-lg
                  whitespace-nowrap
                "
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute inset-0">
            <Image
              src="/bg-explosion.webp"
              alt="website design and web development."
              fill
              priority
              fetchPriority="high"
              quality={70}
              sizes="100vw"
              className="hidden xl:block object-cover object-right mix-blend-color-dodge translate-z-0"
            />

            {showParticles && <ParticlesContainer />}
          </div>
        </div>
      </div>

      <main className="homepage-scroll-content bg-primary/60 px-4 md:px-8 xl:px-10 pt-16 pb-0 md:py-24 overflow-x-hidden">
        <div id="website-calculator" ref={calculatorRef}>
          {showCalculator ? <WebsitePriceCalculator /> : <CalculatorSkeleton />}
        </div>

        <IndustrySolutions className="homepage-below-fold-section mb-14 md:mb-20" />

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              Services
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              What does Next-Hub offer?
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              We combine strategy, design, development, and SEO so a website
              becomes more than a polished page—it becomes a channel for
              business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {services.map((service) => (
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
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10">
            <div>
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Business fundamentals
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Why is a professional website important?
              </h2>
            </div>

            <div className="space-y-5 text-white/70 leading-7 md:leading-8 text-sm md:text-base">
              <p>
                Customers often evaluate a company through its website. When a
                page loads quickly, looks trustworthy, and explains services
                clearly, visitors can more easily call, complete a form, or
                place an order.
              </p>
              <p>
                A good website combines design, content, mobile usability, and
                sound technical structure. Users can read comfortably on a
                phone, find contact options quickly, and move forward without
                unnecessary steps.
              </p>
              <p>
                SEO should be considered from the first stage. Correct headings,
                URL structure, schema markup, internal links, performance, and
                Search Console help Google understand the services you offer.
              </p>
              <p>
                A professional website supports both advertising and organic
                search. When landing pages are clear, Google Business Profile is
                organized, and the site works reliably, the business can attract
                more qualified leads.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              Process
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              How we work
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              We begin by understanding the goal and finish with a post-launch
              support plan so the website can continue to evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
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
                <p className="text-white/70 leading-7 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Technology
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Technologies we use
              </h2>
              <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                We choose technology according to the project goal: sometimes an
                easily managed WordPress site is right, sometimes a fast Next.js
                site, and sometimes a custom React application.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "WordPress",
                "WooCommerce",
                "Tailwind CSS",
                "Google Analytics",
                "Search Console",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 rounded-full bg-black/20 border border-white/10 text-white/75 text-sm md:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              Knowledge center
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              Blog and practical guides
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              We write about web development, SEO, Google Business Profile,
              technology choices, and real projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-5">
            {blogLinks.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6 text-white/80 hover:text-accent hover:border-accent/40 transition-colors"
              >
                <span className="text-sm md:text-base font-semibold leading-7">
                  {post.title}
                </span>
              </Link>
            ))}
          </div>
        </motion.section>

        <motion.section
          {...belowFoldMotionProps}
          className="homepage-below-fold-section home-page-end-safe max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Do you want a site that actually works for business?
              </h2>
              <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                Contact us and we will help you choose the right technology,
                design, SEO structure, and budget.
              </p>
            </div>
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
            >
              Consultation
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default Home;
