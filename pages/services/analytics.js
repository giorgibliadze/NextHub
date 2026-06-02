import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/services/analytics/";

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
      alt: "Google Analytics 4 და ვებ ანალიტიკა",
    },
    {
      src: "/targeting.webp",
      alt: "მონაცემთა ანალიზი და აუდიტორიის მონიტორინგი",
    },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 500,
      product_id: 16,
      features: [
        "მონაცემთა შეგროვება და შეფასება",
        "საბაზისო ანალიტიკური დეშბორდი",
        "ძირითადი შესრულების მაჩვენებლების მონიტორინგი",
        "Google Analytics ინტეგრაცია",
        "რეგულარული ანგარიშები",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 500,
          product_id: 16,
          features: [
            "მონაცემთა შეგროვება და შეფასება",
            "საბაზისო ანალიტიკური დეშბორდი",
            "ძირითადი შესრულების მაჩვენებლების მონიტორინგი",
            "Google Analytics ინტეგრაცია",
            "რეგულარული ანგარიშები",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 900,
      product_id: 17,
      features: [
        "ყველაფერი სტანდარტში",
        "მოწინავე მონაცემთა ვიზუალიზაცია",
        "კლიენტის ქცევის ანალიზი",
        "მორგებული მოხსენებები",
        "მრავალარხიანი თვალთვალი",
        "მომხმარებლის სეგმენტაცია",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 900,
          product_id: 17,
          features: [
            "ყველაფერი სტანდარტში",
            "მოწინავე მონაცემთა ვიზუალიზაცია",
            "კლიენტის ქცევის ანალიზი",
            "მორგებული მოხსენებები",
            "მრავალარხიანი თვალთვალი",
            "მომხმარებლის სეგმენტაცია",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 1500,
      product_id: 18,
      features: [
        "ყველაფერი პრემიუმში",
        "გაფართოებული მონაცემთა ანალიზი",
        "რეალურ დროში მონიტორინგი",
        "მორგებული A/B ტესტირება",
        "მუდმივი მხარდაჭერა და კონსულტაცია",
        "ბიზნეს სტრატეგიის ანალიზი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 1500,
          product_id: 18,
          features: [
            "ყველაფერი პრემიუმში",
            "გაფართოებული მონაცემთა ანალიზი",
            "რეალურ დროში მონიტორინგი",
            "მორგებული A/B ტესტირება",
            "მუდმივი მხარდაჭერა და კონსულტაცია",
            "ბიზნეს სტრატეგიის ანალიზი",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="ვებ ანალიტიკა | Google Analytics 4 და მონაცემთა ანალიზი | Next-Hub"
        description="ვებ ანალიტიკა, Google Analytics 4-ის გამართვა, Google Search Console, მონაცემთა ანალიზი, კონვერსიების მონიტორინგი, აუდიტორიის ქცევის ანალიზი და ბიზნესის ზრდისთვის საჭირო ანგარიშები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "ვებ ანალიტიკა | Google Analytics 4 და მონაცემთა ანალიზი | Next-Hub",
          description:
            "Google Analytics 4-ის გამართვა, მონაცემთა ანალიზი, კონვერსიების მონიტორინგი და მომხმარებლის ქცევის ანალიზი ბიზნესის ზრდისთვის.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "ვებ ანალიტიკა და მონაცემთა ანალიზი Next-Hub Solutions",
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
              "ვებ ანალიტიკა, Google Analytics, Google Analytics 4, GA4 გამართვა, Google Search Console, მონაცემთა ანალიზი, კონვერსიების მონიტორინგი, ვებსაიტის ანალიტიკა, მომხმარებლის ქცევის ანალიზი, ანალიტიკის დეშბორდი, ბიზნეს ანალიტიკა, Google Tag Manager, GTM, digital analytics Georgia, web analytics Georgia, Next-Hub Solutions",
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
            name: "ვებ ანალიტიკა",
            serviceType: "Web Analytics",
            url: CANONICAL,
            description:
              "Google Analytics 4-ის გამართვა, Google Search Console, მონაცემთა ანალიზი, კონვერსიების მონიტორინგი, მომხმარებლის ქცევის ანალიზი და რეგულარული ანგარიშები.",
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
            ვებ ანალიტიკა
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            ვეხმარებით ბიზნესებს სწორად გაზომონ ვებსაიტის შედეგები, მომხმარებლის
            ქცევა, კონვერსიები და სარეკლამო კამპანიების ეფექტურობა.
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
                მონაცემებზე დაფუძნებული გადაწყვეტილებები
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub გეხმარებათ Google Analytics 4-ის, Google Search
                Console-ისა და Tag Manager-ის სწორად გამართვაში, რათა მიიღოთ
                ზუსტი მონაცემები მომხმარებლების ქცევაზე, წყაროებზე, კონვერსიებზე
                და გაყიდვებზე.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  GA4 და GTM გამართვა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვაყენებთ Google Analytics 4-ს, Google Tag Manager-ს და საჭირო
                  თეგებს, რათა ვებსაიტის მონაცემები სწორად ჩაიწეროს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  კონვერსიების მონიტორინგი
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვზომავთ ფორმის გაგზავნას, ზარებს, WhatsApp ღილაკებს, შეკვეთებს
                  და სხვა მნიშვნელოვან ქმედებებს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ანგარიშები და ანალიზი
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  გიმზადებთ გასაგებ ანგარიშებს, რომლებიც აჩვენებს საიდან მოდის
                  მომხმარებელი და რომელი არხი მუშაობს უკეთესად.
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
