/* eslint-disable react/no-unescaped-entities */
// components
import React, { Suspense, lazy } from "react";
import Link from "next/link";
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
  const serviceCards = [
    {
      title: "ვებსაიტის დამზადება",
      href: "/webdevelopment",
      description:
        "ვამზადებთ თანამედროვე, სწრაფ და responsive ვებსაიტებს ბიზნესებისთვის, რომლებსაც სჭირდებათ სანდო ონლაინ პრეზენტაცია და კონვერსიაზე ორიენტირებული სტრუქტურა. საიტის შექმნა მოიცავს დიზაინს, დეველოპმენტს, ანალიტიკას და SEO-ready საფუძველს.",
    },
    {
      title: "პროგრამული უზრუნველყოფის შექმნა",
      href: "/software-development",
      description:
        "ვქმნით ინდივიდუალურ ვებ აპლიკაციებს, CRM სისტემებს, პორტალებს და სამუშაო პროცესებზე მორგებულ ციფრულ პროდუქტებს. ეს მიმართულება კარგია მაშინ, როცა ბიზნესს სჭირდება ფუნქციონალი, რომელიც სტანდარტულ საიტს სცდება.",
    },
    {
      title: "ვებ დიზაინი",
      href: "/web-design",
      description:
        "ვებ დიზაინს ვუყურებთ როგორც მომხმარებლის გზას, არა მხოლოდ ვიზუალს. ვქმნით სუფთა, თანამედროვე და მარტივად გამოსაყენებელ ინტერფეისებს, რომლებიც ბრენდს სწორად აჩვენებს და მოქმედებისკენ მიჰყავს მომხმარებელი.",
    },
    {
      title: "SEO ოპტიმიზაცია",
      href: "/seo-services",
      description:
        "SEO მომსახურება მოიცავს ტექნიკურ აუდიტს, საკვანძო სიტყვების კვლევას, გვერდების ოპტიმიზაციას, კონტენტის სტრუქტურას და Google Search Console-ის გამართვას. მიზანია საიტი უკეთ გამოჩნდეს Google-ში და მოიზიდოს ხარისხიანი ტრაფიკი.",
    },
    {
      title: "Google Business Profile ოპტიმიზაცია",
      href: "/google-business-profile-optimization",
      description:
        "Google Business Profile და Google Maps ოპტიმიზაცია ეხმარება ადგილობრივ ბიზნესს რუკაზე, ძიებაში და მომხმარებლის გადაწყვეტილების მომენტში უკეთ გამოჩენაში. ვასწორებთ პროფილს, კატეგორიებს, აღწერებს, ფოტოებს და ლოკალური SEO-ს საფუძველს.",
    },
    {
      title: "საიტის მოვლა და ტექნიკური მხარდაჭერა",
      href: "/website-maintenance-services",
      description:
        "ვზრუნავთ საიტის სტაბილურ მუშაობაზე, უსაფრთხოების განახლებებზე, სიჩქარის გაუმჯობესებაზე, შეცდომების გასწორებაზე და მიმდინარე ტექნიკურ მხარდაჭერაზე. ეს სერვისი განსაკუთრებით მნიშვნელოვანია გაშვების შემდეგ.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${CANONICAL}#services`,
        name: "Next-Hub Solutions სერვისები",
        description:
          "ვებსაიტის დამზადება, ვებ დიზაინი, SEO ოპტიმიზაცია, Google Business Profile ოპტიმიზაცია, პროგრამული უზრუნველყოფის შექმნა და საიტის ტექნიკური მხარდაჭერა.",
        url: CANONICAL,
        itemListElement: serviceCards.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            url: `https://next-hub.pro${service.href}`,
          },
        })),
        provider: {
          "@type": "Organization",
          name: "Next-Hub Solutions",
          url: "https://next-hub.pro",
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
            name: "მთავარი",
            item: "https://next-hub.pro",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "სერვისები",
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
        title="სერვისები | ვებსაიტის დამზადება, SEO, ვებ დიზაინი და პროგრამული უზრუნველყოფა | Next-Hub"
        description="Next-Hub Solutions გთავაზობთ ვებსაიტის დამზადებას, ვებ დიზაინს, SEO ოპტიმიზაციას, Google Business Profile ოპტიმიზაციას, პროგრამული უზრუნველყოფის შექმნას და საიტის ტექნიკურ მხარდაჭერას."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "სერვისები | ვებსაიტის დამზადება, SEO, ვებ დიზაინი და პროგრამული უზრუნველყოფა | Next-Hub",
          description:
            "Next-Hub Solutions გთავაზობთ ვებსაიტის დამზადებას, ვებ დიზაინს, SEO ოპტიმიზაციას, Google Business Profile ოპტიმიზაციას, პროგრამული უზრუნველყოფის შექმნას და საიტის ტექნიკურ მხარდაჭერას.",
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
              "ვებსაიტის დამზადება, საიტის შექმნა, ვებ დეველოპმენტი, ვებ დიზაინი, SEO ოპტიმიზაცია, SEO მომსახურება, Google Business Profile ოპტიმიზაცია, Google Maps ოპტიმიზაცია, პროგრამული უზრუნველყოფის შექმნა, საიტის მოვლა, საიტის ტექნიკური მხარდაჭერა, ონლაინ მაღაზიის შექმნა",
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
                Next-Hub აერთიანებს ვებსაიტის დამზადებას, პროგრამული
                უზრუნველყოფის შექმნას, ვებ დიზაინს, SEO ოპტიმიზაციას, Google
                Business Profile ოპტიმიზაციას და საიტის ტექნიკურ მხარდაჭერას.
                დამატებით შეგიძლიათ გაეცნოთ ჩვენს ბლოგს ან მოგვწეროთ
                კონსულტაციისთვის.
              </motion.p>

              <motion.div
                variants={fadeIn("up", 0.25)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {[
                  { href: "/webdevelopment", label: "ვებსაიტის დამზადება" },
                  { href: "/software-development", label: "პროგრამული უზრუნველყოფა" },
                  { href: "/web-design", label: "ვებ დიზაინი" },
                  { href: "/seo-services", label: "SEO" },
                  {
                    href: "/google-business-profile-optimization",
                    label: "Google Business Profile",
                  },
                  {
                    href: "/website-maintenance-services",
                    label: "საიტის მხარდაჭერა",
                  },
                  { href: "/blog", label: "ბლოგი" },
                  { href: "/contact", label: "კონტაქტი" },
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

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mt-8 md:mt-16 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                ციფრული ზრდა
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                Next-Hub-ის ციფრული სერვისები ბიზნესის ზრდისთვის
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                თითოეული მიმართულება დაკავშირებულია ერთმანეთთან: კარგი საიტი
                საჭიროებს სწორ დიზაინს, ტექნიკურ სტრუქტურას, SEO-ს, მოვლას და
                საჭიროების შემთხვევაში ინდივიდუალურ პროგრამულ გადაწყვეტას.
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
                    გაიგე მეტი
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
                  არ იცით რომელი სერვისი გჭირდებათ?
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  მოგვწერეთ და დაგეხმარებით სწორი მიმართულების, ბიუჯეტის და
                  ტექნიკური გადაწყვეტის შერჩევაში.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
              >
                კონსულტაცია
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
