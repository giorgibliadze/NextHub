/* eslint-disable react/no-unescaped-entities */
// components
import WorkSlider from "../../components/en/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const Work = () => {
  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/en/work"
        title="our work."
        description="See the Next-Hub Solutions- website portfolio: online stores, WordPress, Next.js and business-specific projects."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://next-hub.pro/en/work",
          site_name: "Next-Hub Solutions",
          title: "our work.",
          description:
            "See the Next-Hub Solutions- website portfolio: online stores, WordPress, Next.js and business-specific projects.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions website portfolio.",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "our work.",
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
              "our work, our portfolio of websites, our projects, website design, website design, Next.js projects, WordPress projects, online store design, web development portfolio Georgia, website portfolio Georgia, web design portfolio Tbilisi, NextHub portfolio",
          },
        ]}
      />

      <Script
        id="portfolio-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Next-Hub Solutions Portfolio",
            headline: "our work and the portfolio of websites.",
            description:
              "Next-Hub Solutions-'s running websites, online stores, WordPress projects, Next.js apps and business-specific digital solutions.",
            url: "https://next-hub.pro/en/work/",
            image: "https://next-hub.pro/nexthub.jpg",
            inLanguage: "en",
            creator: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro/en",
              logo: "https://next-hub.pro/logo.png",
            },
            about: [
              "Website portfolio",
              "WordPress projects",
              "Next.js projects",
              "Online stores.",
              "Web Development.",
            ],
          }),
        }}
      />

      <div className="h-full bg-primary/30">
        {/* <Circles /> */}

        <div className="container mx-auto mb-4">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 lg:mt-[100px]">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12 mt-[120px]"
              >
                our work. <span className="text-accent">.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                See the Next-Hub Solutions- performed websites, online stores, Next.js applications, and WordPress projects. Each work is designed with a modern design, customized structure, and business objectives.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mobile-bottom-safe-space w-full xl:max-w-[65%] lg:mt-[100px]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>

        <Bulb />
      </div>
    </>
  );
};

export default Work;
