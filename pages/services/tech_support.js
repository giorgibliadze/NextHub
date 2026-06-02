import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/services/tech_support/";

const TechSupport = () => {
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
      src: "/analytics.webp",
      alt: "SEO ოპტიმიზაცია და Google Analytics",
    },
    {
      src: "/customer-satisfaction3.webp",
      alt: "ვებსაიტის ტექნიკური მხარდაჭერა",
    },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
      product_id: 4,
      features: [
        "საიტის ოპტიმიზაცია",
        "საბაზისო SEO მართვა",
        "სოციალური მედიის მართვა",
        "რეგულარული ანგარიშები",
        "ტექნიკური მხარდაჭერა",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 700,
          product_id: 4,
          features: [
            "საიტის ოპტიმიზაცია",
            "საბაზისო SEO მართვა",
            "სოციალური მედიის მართვა",
            "რეგულარული ანგარიშები",
            "ტექნიკური მხარდაჭერა",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 1000,
      product_id: 5,
      features: [
        "ყველაფერი სტანდარტში",
        "გაფართოებული SEO მართვა",
        "შინაარსის სტრატეგია",
        "Google Ads მართვა",
        "სოციალური მედიის კამპანიები",
        "მორგებული მოხსენებები",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 1000,
          product_id: 5,
          features: [
            "ყველაფერი სტანდარტში",
            "გაფართოებული SEO მართვა",
            "შინაარსის სტრატეგია",
            "Google Ads მართვა",
            "სოციალური მედიის კამპანიები",
            "მორგებული მოხსენებები",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 1500,
      product_id: 6,
      features: [
        "ყველაფერი პრემიუმში",
        "მუდმივი მხარდაჭერა და კონსულტაცია",
        "ბიზნეს სტრატეგიის ანალიზი",
        "გაფართოებული ანალიტიკა",
        "A/B ტესტირება და ოპტიმიზაცია",
        "მორგებული ციფრული მარკეტინგის კამპანიები",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 1500,
          product_id: 6,
          features: [
            "ყველაფერი პრემიუმში",
            "მუდმივი მხარდაჭერა და კონსულტაცია",
            "ბიზნეს სტრატეგიის ანალიზი",
            "გაფართოებული ანალიტიკა",
            "A/B ტესტირება და ოპტიმიზაცია",
            "მორგებული ციფრული მარკეტინგის კამპანიები",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="საიტის მართვა და ტექნიკური მხარდაჭერა | SEO და Google Ads | Next-Hub"
        description="ვებსაიტის ტექნიკური მხარდაჭერა, საიტის მართვა, SEO ოპტიმიზაცია, Google Ads მართვა, უსაფრთხოების მონიტორინგი, სიჩქარის ოპტიმიზაცია და ვებსაიტის მუდმივი განვითარება."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "საიტის მართვა და ტექნიკური მხარდაჭერა | SEO და Google Ads | Next-Hub",
          description:
            "ვებსაიტის ტექნიკური მხარდაჭერა, SEO ოპტიმიზაცია, Google Ads მართვა, უსაფრთხოების მონიტორინგი, სიჩქარის ოპტიმიზაცია და საიტის გამართული მუშაობა.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "საიტის მართვა და ტექნიკური მხარდაჭერა",
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
              "საიტის მართვა, ტექნიკური მხარდაჭერა, ვებსაიტის მართვა, ვებსაიტის ტექნიკური მხარდაჭერა, SEO ოპტიმიზაცია, SEO მომსახურება, Google Ads მართვა, საიტის მოვლა, ვებსაიტის უსაფრთხოება, ვებსაიტის ოპტიმიზაცია, საიტის ადმინისტრირება, ციფრული მარკეტინგი, ტექნიკური მხარდაჭერა თბილისი, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="tech-support-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "საიტის მართვა და ტექნიკური მხარდაჭერა",
            serviceType: "Website Maintenance and Technical Support",
            url: CANONICAL,
            description:
              "ვებსაიტის ტექნიკური მხარდაჭერა, საიტის მართვა, SEO ოპტიმიზაცია, Google Ads მართვა, სიჩქარის გაუმჯობესება, უსაფრთხოების მონიტორინგი და ციფრული მარკეტინგის მომსახურება.",
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
              price: "700",
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
            ტექნიკური მხარდაჭერა და საიტის მართვა
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            ვზრუნავთ თქვენი ვებსაიტის გამართულ მუშაობაზე, სიჩქარეზე,
            უსაფრთხოებაზე, SEO ოპტიმიზაციაზე და ციფრული არხების მართვაზე.
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
                ვებსაიტის მოვლა
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                საიტის მართვა, SEO და ტექნიკური მხარდაჭერა
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub ეხმარება ბიზნესებს ვებსაიტის რეგულარულ მართვაში,
                ტექნიკურ განახლებებში, უსაფრთხოების კონტროლში, სიჩქარის
                გაუმჯობესებაში და საძიებო სისტემებისთვის ოპტიმიზაციაში.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  საიტის ტექნიკური მხარდაჭერა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვაკვირდებით ვებსაიტის გამართულ მუშაობას, ვასწორებთ ტექნიკურ
                  ხარვეზებს და ვეხმარებით საიტს სტაბილურად ფუნქციონირებაში.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  SEO და საიტის ოპტიმიზაცია
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამუშავებთ საიტის სტრუქტურას, მეტა აღწერებს, სიჩქარეს და
                  ტექნიკურ SEO-ს, რათა Google-მა უკეთ წაიკითხოს თქვენი გვერდები.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  Google Ads და ანალიტიკა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  გეხმარებით Google Ads კამპანიების მართვაში, Analytics-ის
                  ინტეგრაციაში, შედეგების მონიტორინგსა და ანგარიშგებაში.
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

export default TechSupport;
