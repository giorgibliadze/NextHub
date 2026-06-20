/* eslint-disable react/no-unescaped-entities */
// components
import React, { Suspense, lazy } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const ServiceSlider = lazy(() => import("../../components/ServiceSlider"));

const CANONICAL = "https://next-hub.pro/services";

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextSeo
        canonical={CANONICAL}
        title="ვებსაიტების დამზადება, SEO და ციფრული მარკეტინგი | Next-Hub"
        description="Next-Hub გთავაზობთ ვებსაიტების დამზადებას, საიტის შექმნას, SEO ოპტიმიზაციას, სოციალური მედიის მართვას, ტექნიკურ მხარდაჭერას და ბიზნესზე მორგებულ ციფრულ სერვისებს."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "ვებსაიტების დამზადება, SEO და ციფრული მარკეტინგი | Next-Hub",
          description:
            "Next-Hub გთავაზობთ ვებსაიტების დამზადებას, SEO ოპტიმიზაციას, სოციალური მედიის მართვას, ტექნიკურ მხარდაჭერას და ბიზნესზე მორგებულ ციფრულ სერვისებს.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions სერვისები",
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
              "ვებსაიტების დამზადება, საიტის შექმნა, ვებ გვერდის შექმნა, ონლაინ მაღაზიის დამზადება, SEO ოპტიმიზაცია, სოციალური მედიის მართვა, ტექნიკური მხარდაჭერა, საიტის მართვა, ციფრული მარკეტინგი, Google Ads მართვა, Facebook მარკეტინგი, Instagram მარკეტინგი, WordPress საიტის შექმნა, Next.js დეველოპმენტი, ვებ დეველოპმენტი, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="services-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Next-Hub Solutions სერვისები",
            description:
              "ვებსაიტების დამზადება, SEO ოპტიმიზაცია, სოციალური მედიის მართვა, ტექნიკური მხარდაჭერა და ციფრული მარკეტინგის სერვისები.",
            url: CANONICAL,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "ვებსაიტის დამზადება",
                  serviceType: "Web Development",
                  url: "https://next-hub.pro/webdevelopment",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "SEO ოპტიმიზაცია",
                  serviceType: "Search Engine Optimization",
                  url: "https://next-hub.pro/services/seo/",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "სოციალური მედიის მართვა",
                  serviceType: "Social Media Management",
                  url: "https://next-hub.pro/services/soc_media/",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "საიტის მართვა და ტექნიკური მხარდაჭერა",
                  serviceType: "Website Maintenance",
                  url: "https://next-hub.pro/services/tech_support/",
                },
              },
            ],
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro",
              logo: "https://next-hub.pro/logo.png",
            },
          }),
        }}
      />

      <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[970px] bg-primary/30 py-36 flex p-[20px] overflow-x-hidden">
        <Circles />

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
                სერვისები <span className="text-accent">.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] lg:mx-0"
              >
                Next-Hub გთავაზობთ ვებსაიტების დამზადებას, საიტის შექმნას, SEO
                ოპტიმიზაციას, სოციალური მედიის მართვას, ტექნიკურ მხარდაჭერას და
                ციფრული მარკეტინგის სერვისებს, რომლებიც ბიზნესის ზრდაზეა
                მორგებული.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mobile-bottom-safe-space w-full min-w-[300px] xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>

        <Bulb />
      </div>
    </Suspense>
  );
};

export default Services;
