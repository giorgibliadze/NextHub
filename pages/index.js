/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import RotatingWords from "../components/RotatingWords";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const ParticlesContainer = dynamic(
  () => import("../components/ParticlesContainer"),
  {
    ssr: false,
    loading: () => null,
  }
);

const Home = () => {
  const [showParticles, setShowParticles] = useState(false);
  const words = ["ვებსაიტები ", "ონლაინ მაღაზიები ", "ვებ აპლიკაციები "];
  const canonical = "https://next-hub.pro";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;

    if (!isDesktop || prefersReducedMotion) return;

    const timer = window.setTimeout(() => {
      setShowParticles(true);
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "ვებსაიტის დამზადება",
      href: "/webdevelopment",
      url: "https://next-hub.pro/webdevelopment",
      description:
        "ვქმნით სწრაფ, თანამედროვე და SEO-ზე მორგებულ ვებსაიტებს ბიზნესისთვის. საიტის შექმნა მოიცავს სტრუქტურას, დიზაინს, დეველოპმენტს და კონვერსიაზე ორიენტირებულ CTA-ებს.",
    },
    {
      title: "პროგრამული უზრუნველყოფის შექმნა",
      href: "/software-development",
      url: "https://next-hub.pro/software-development",
      description:
        "ვამზადებთ ინდივიდუალურ ვებ აპლიკაციებს, პორტალებს, CRM სისტემებს და ბიზნეს პროცესებზე მორგებულ ციფრულ პროდუქტებს.",
    },
    {
      title: "ვებ დიზაინი",
      href: "/web-design",
      url: "https://next-hub.pro/web-design",
      description:
        "ვქმნით სუფთა, თანამედროვე და მომხმარებლისთვის გასაგებ დიზაინს, რომელიც ბრენდს პროფესიონალურად აჩვენებს და მოქმედებისკენ მიჰყავს ვიზიტორი.",
    },
    {
      title: "SEO ოპტიმიზაცია",
      href: "/seo-services",
      url: "https://next-hub.pro/seo-services",
      description:
        "ვამუშავებთ ტექნიკურ SEO-ს, გვერდების სტრუქტურას, საკვანძო სიტყვებს, metadata-ს და შიდა ბმულებს, რომ საიტი უკეთ გამოჩნდეს Google-ში.",
    },
    {
      title: "Google Business Profile ოპტიმიზაცია",
      href: "/google-business-profile-optimization",
      url: "https://next-hub.pro/google-business-profile-optimization",
      description:
        "ვაუმჯობესებთ Google Business Profile-სა და Google Maps ხილვადობას ლოკალური ბიზნესებისთვის, რომ მომხმარებლებმა მარტივად გიპოვონ.",
    },
    {
      title: "საიტის მოვლა",
      href: "/website-maintenance-services",
      url: "https://next-hub.pro/website-maintenance-services",
      description:
        "ვზრუნავთ საიტის ტექნიკურ მხარდაჭერაზე, უსაფრთხოების განახლებებზე, სიჩქარეზე, შეცდომების გასწორებაზე და სტაბილურ მუშაობაზე.",
    },
  ];

  const processSteps = [
    {
      title: "ანალიზი",
      text: "ვიგებთ ბიზნესის მიზანს, აუდიტორიას, კონკურენტებს და იმას, რა შედეგი უნდა მოიტანოს საიტმა.",
    },
    {
      title: "სტრუქტურა და დიზაინი",
      text: "ვაწყობთ გვერდების ლოგიკას, ნავიგაციას, კონტენტის იერარქიას და ვიზუალურ მიმართულებას.",
    },
    {
      title: "დეველოპმენტი",
      text: "ვქმნით სწრაფ, responsive და ტექნიკურად გამართულ ვებსაიტს ან ვებ აპლიკაციას.",
    },
    {
      title: "SEO ოპტიმიზაცია",
      text: "ვამზადებთ metadata-ს, schema-ს, შიდა ბმულებს, სიჩქარეს და Search Console-ის საფუძველს.",
    },
    {
      title: "გაშვება და მხარდაჭერა",
      text: "ვტესტავთ გვერდებს, ვუშვებთ პროექტს და საჭიროების მიხედვით ვაგრძელებთ ტექნიკურ მხარდაჭერას.",
    },
  ];

  const blogLinks = [
    {
      href: "/blog/website-cost-georgia-2026",
      title: "რა ღირს ვებსაიტის დამზადება საქართველოში 2026-ში",
    },
    {
      href: "/blog/nextjs-vs-wordpress",
      title: "Next.js vs WordPress: რომელი ჯობია თქვენი პროექტისთვის",
    },
    {
      href: "/blog/google-business-profile-sales",
      title: "როგორ გავხადოთ Google Business Profile გაყიდვების წყარო",
    },
    {
      href: "/blog/seo-small-business-georgia",
      title: "SEO მცირე ბიზნესისთვის საქართველოში",
    },
    {
      href: "/blog/printerman-website-case-study",
      title: "Printerman ვებსაიტის ქეისი",
    },
    {
      href: "/ai-faq",
      title: "AI FAQ Next-Hub Solutions-ის შესახებ",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${canonical}/#organization`,
        name: "Next-Hub Solutions",
        url: `${canonical}/`,
        logo: "https://next-hub.pro/favicon.ico",
        email: "info@next-hub.pro",
        telephone: "+995555137003",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonical}/#professional-service`,
        name: "Next-Hub Solutions",
        image: "https://next-hub.pro/favicon.ico",
        url: `${canonical}/`,
        telephone: "+995555137003",
        email: "info@next-hub.pro",
        description:
          "ვებსაიტის დამზადება, ვებ დეველოპმენტი, ონლაინ მაღაზიის შექმნა, ვებ დიზაინი, SEO ოპტიმიზაცია, Google Business Profile ოპტიმიზაცია და საიტის ტექნიკური მხარდაჭერა საქართველოში.",
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
        "@type": "WebSite",
        "@id": `${canonical}/#website`,
        name: "Next-Hub Solutions",
        url: `${canonical}/`,
        publisher: {
          "@id": `${canonical}/#organization`,
        },
        inLanguage: "ka-GE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "მთავარი",
            item: `${canonical}/`,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${canonical}/#offer-catalog`,
        name: "Next-Hub Solutions სერვისები",
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
        title="ვებსაიტის დამზადება და ვებ დეველოპმენტი საქართველოში | Next-Hub"
        description="Next-Hub Solutions ქმნის სწრაფ, თანამედროვე და SEO-ზე მორგებულ ვებსაიტებს, ონლაინ მაღაზიებსა და ვებ აპლიკაციებს. ვებ დიზაინი, SEO ოპტიმიზაცია, Google Business Profile და საიტის ტექნიკური მხარდაჭერა."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: canonical,
          site_name: "Next-Hub Solutions",
          title: "ვებსაიტის დამზადება, ვებ დიზაინი და SEO | Next-Hub Solutions",
          description:
            "Next-Hub Solutions ქმნის სწრაფ, თანამედროვე და SEO-ზე მორგებულ ვებსაიტებს, ონლაინ მაღაზიებსა და ვებ აპლიკაციებს.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.png",
              width: 1200,
              height: 630,
              alt: "ვებსაიტის დამზადება Next-Hub Solutions",
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
              "ვებსაიტის დამზადება, საიტის შექმნა, ვებ დეველოპმენტი, ვებ დიზაინი, ონლაინ მაღაზიის შექმნა, პროგრამული უზრუნველყოფის შექმნა, SEO ოპტიმიზაცია, Google Business Profile ოპტიმიზაცია, საიტის ტექნიკური მხარდაჭერა, Next.js, WordPress, WooCommerce, React",
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

      <div className="bg-primary/60 h-screen w-full smx:h-[640px] sm:h-[600px] lg:h-[847px] xxl:h-[990px] xll:h-[885px]">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
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
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="inline font-bold"
              >
                ვებსაიტის დამზადება <span className="text-accent">.</span>
              </motion.h1>

              <br />

              <motion.div
                variants={fadeIn("down", 0.25)}
                initial="hidden"
                animate="show"
                exit="hidden"
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
              </motion.div>

              <motion.span
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="
    inline
    font-bold
    text-[20px]
    sm:text-[34px]
    xl:text-[64px]
  "
              >
                ბიზნესისთვის
              </motion.span>
            </div>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
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
              Next-Hub გთავაზობთ თანამედროვე ვებსაიტების, ონლაინ მაღაზიებისა და
              ვებ აპლიკაციების შექმნას. ვამზადებთ სწრაფ, SEO-ზე მორგებულ და
              ბიზნესის მიზნებზე შექმნილ საიტებს.
            </motion.p>

            {/* contact button */}
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mobile-bottom-safe-space flex justify-center xl:justify-start relative z-50"
            >
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
                დაგვიკავშირდით
              </a>
            </motion.div>
          </div>

          <div className="w-full h-full absolute right-0 bottom-0">
            <Image
              src="/bg-explosion.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              aria-hidden="true"
              className="hidden xl:block object-cover object-right mix-blend-color-dodge translate-z-0"
            />

            {showParticles && <ParticlesContainer />}
          </div>
        </div>
      </div>

      <main className="bg-primary/60 px-4 md:px-8 xl:px-10 py-16 md:py-24 overflow-x-hidden">
        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              სერვისები
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              რას გთავაზობთ Next-Hub?
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              ვაერთიანებთ სტრატეგიას, დიზაინს, დეველოპმენტს და SEO-ს, რომ
              ვებსაიტი მხოლოდ ლამაზი გვერდი კი არა, ბიზნესის ზრდის არხი იყოს.
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
                  გაიგე მეტი
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10">
            <div>
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                ბიზნესის საფუძველი
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                რატომ არის პროფესიონალური ვებსაიტი მნიშვნელოვანი?
              </h2>
            </div>

            <div className="space-y-5 text-white/70 leading-7 md:leading-8 text-sm md:text-base">
              <p>
                მომხმარებელი კომპანიას ხშირად ვებსაიტით აფასებს. თუ გვერდი
                სწრაფად იტვირთება, სანდოდ გამოიყურება და მარტივად აჩვენებს
                სერვისებს, ვიზიტორს უფრო მარტივად უჩნდება ზარის, ფორმის შევსების
                ან შეკვეთის სურვილი.
              </p>
              <p>
                კარგი ვებსაიტი აერთიანებს ვებ დიზაინს, კონტენტს, მობილურ
                გამოცდილებას და ტექნიკურ სტრუქტურას. ეს ნიშნავს, რომ მომხმარებელი
                ტელეფონიდანაც კომფორტულად კითხულობს ინფორმაციას, სწრაფად პოულობს
                საკონტაქტო გზას და არ იკარგება ზედმეტ ნაბიჯებში.
              </p>
              <p>
                SEO ოპტიმიზაცია პირველივე ეტაპზე უნდა იყოს გათვალისწინებული:
                სწორი სათაურები, URL სტრუქტურა, schema markup, შიდა ბმულები,
                სიჩქარე და Search Console ეხმარება Google-ს გაიგოს, რა სერვისს
                სთავაზობთ მომხმარებელს.
              </p>
              <p>
                პროფესიონალური საიტი რეკლამასაც აძლიერებს და ორგანულ ძიებასაც.
                როცა landing page მკაფიოა, Google Business Profile მოწესრიგებულია
                და საიტი სტაბილურად მუშაობს, ბიზნესი მეტ კვალიფიციურ ლიდს იღებს.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              პროცესი
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              როგორ ვმუშაობთ?
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              პროექტს ვიწყებთ მიზნის გაგებით და ვასრულებთ გაშვების შემდეგი
              მხარდაჭერის გეგმით, რომ საიტი მომავალშიც განვითარდეს.
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
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                ტექნოლოგიები
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                ტექნოლოგიები, რომლებსაც ვიყენებთ
              </h2>
              <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                ტექნოლოგიას ვარჩევთ პროექტის მიზნის მიხედვით: ზოგჯერ საჭიროა
                მარტივად სამართავი WordPress, ზოგჯერ სწრაფი Next.js, ზოგჯერ კი
                ინდივიდუალური React აპლიკაცია.
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
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
              ცოდნის ცენტრი
            </span>
            <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
              ბლოგი და პრაქტიკული გზამკვლევები
            </h2>
            <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
              ვწერთ ვებ დეველოპმენტზე, SEO-ზე, Google Business Profile-ზე,
              ტექნოლოგიის არჩევაზე და რეალურ პროექტებზე.
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
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mobile-bottom-safe-space max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                გსურთ საიტი, რომელიც რეალურად მუშაობს ბიზნესისთვის?
              </h2>
              <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                მოგვწერეთ და დაგეხმარებით სწორი ტექნოლოგიის, დიზაინის, SEO
                სტრუქტურისა და ბიუჯეტის შერჩევაში.
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
      </main>
    </>
  );
};

export default Home;
