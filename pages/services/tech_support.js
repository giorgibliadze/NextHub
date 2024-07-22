import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextSeo } from "next-seo";
const TechSupport = () => {
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
    { src: "/analytics.webp", alt: "Image 1" },
    { src: "/customer-satisfaction3.webp", alt: "Image 2" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
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
        title="Next-Hub Solutions | Tech Support"
        description="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        keywords="Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/services/tech_support",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Tech Support",
          description:
            "Next-Hub Solutions-ის საიტის მართვის სერვისები. მიიღეთ საიტის ოპტიმიზაცია, SEO მართვა, სოციალური მედიის მართვა და ტექნიკური მხარდაჭერა.",
          images: [
            {
              url: "https://www.next-hub.pro/nexthub.jpg",
              width: 800,
              height: 600,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
          title: "Next-Hub Solutions | Tech Support",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, Tech Support, საიტის მართვა, SEO მართვა, სოციალური მედიის მართვა, Google Ads, ციფრული მარკეტინგი, ტექნიკური მხარდაჭერა",
          },
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "changefreq",
            content: "always",
          },
        ]}
      />
      <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardData={selectedCardData}
        />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44 smx:text-center">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            საიტის მართვა <span className="text-accent">.</span>
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

export default TechSupport;
