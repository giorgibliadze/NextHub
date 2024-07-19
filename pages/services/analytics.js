import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
const Analytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const images = [
    { src: "/Data-analytics.webp", alt: "Image 2" },
    { src: "/targeting.webp", alt: "Image 3" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 500,
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
      <Head>
        <title>Next-Hub Solutions | Analytics</title>
        <meta
          name="description"
          content="Next-Hub Solutions-ის ანალიტიკის სერვისები. მიიღეთ მონაცემთა შეგროვება, შეფასება, და მოწინავე მონაცემთა ანალიზი ჩვენი ექსპერტებისგან."
        />
        <meta
          name="keywords"
          content="Next-Hub, Analytics, მონაცემთა შეგროვება, შეფასება, ანალიზი, Google Analytics, მონაცემთა ვიზუალიზაცია"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Next-Hub Solutions | Analytics" />
        <meta
          property="og:description"
          content="Next-Hub Solutions-ის ანალიტიკის სერვისები. მიიღეთ მონაცემთა შეგროვება, შეფასება, და მოწინავე მონაცემთა ანალიზი ჩვენი ექსპერტებისგან."
        />
        <meta
          property="og:url"
          content="https://www.next-hub.pro/services/analytics"
        />
        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta name="changefreq" content="always" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta name="twitter:title" content="Next-Hub Solutions | Analytics" />
        <meta
          name="twitter:description"
          content="Next-Hub Solutions-ის ანალიტიკის სერვისები. მიიღეთ მონაცემთა შეგროვება, შეფასება, და მოწინავე მონაცემთა ანალიზი ჩვენი ექსპერტებისგან."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardData={selectedCardData}
        />
      )}
      {!isModalOpen && (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44 smx:text-center overflow-hidden">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            ანალიტიკა <span className="text-accent">.</span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-16"
          >
            <ImageGallery images={images} />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-3 sm:grid-cols-1 gap-10 px-10"
          >
            {priceCardsData.map((cardData, index) => (
              <PriceCard key={index} {...cardData} />
            ))}
          </motion.div>
          {/* <Bulb /> */}
        </div>
      )}
    </>
  );
};

export default Analytics;
