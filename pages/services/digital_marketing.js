import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import ImageGallery from "../../components/ImageGallery";
import { GoogleTagManager } from "@next/third-parties/google";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import { NextSeo } from "next-seo";

// Dynamically import PriceCard and Modal to enable code splitting
const PriceCard = dynamic(() => import("../../components/PriceCard"), {
  loading: () => <p>Loading...</p>,
});
const Modal = dynamic(() => import("../../components/Modal"), {
  loading: () => <p>Loading...</p>,
});

const DigitalMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = useCallback((cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const images = [
    { src: "/seo3.webp", alt: "Image 2", loading: "lazy" },
    { src: "/seo2.webp", alt: "Image 3", loading: "lazy" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
      product_id: 13,
      features: [
        "თვეში 4 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები Facebook, Instagram",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
        "ავტომოპასუხის დაყენება",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 700,
          product_id: 13,
          features: [
            "თვეში 4 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები Facebook, Instagram",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
            "ავტომოპასუხის დაყენება",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 1000,
      product_id: 14,
      features: [
        "თვეში 8 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
        "ავტომოპასუხის დაყენება",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 1000,
          product_id: 14,
          features: [
            "თვეში 8 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
            "ავტომოპასუხის დაყენება",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 1500,
      product_id: 15,
      features: [
        "ორენოვანი 8 პოსტი თვეში (Geo, Eng)",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "კონკურენტების ანალიზი",
        "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
        "ავტომოპასუხის დაყენება",
        "Google Ads კამპანიები",
        "E-mail მარკეტინგი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 1500,
          product_id: 15,
          features: [
            "ორენოვანი 8 პოსტი თვეში (Geo, Eng)",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "კონკურენტების ანალიზი",
            "ვებსაიტთან ინტეგრაცია (Facebook Pixel)",
            "ავტომოპასუხის დაყენება",
            "Google Ads კამპანიები",
            "E-mail მარკეტინგი",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
  ];

  return (
    <>
      
      <NextSeo
        canonical="https://www.next-hub.pro/services/digital_marketing"
        title="Next-Hub Solutions | Digital Marketing"
        description="Next-Hub Solutions-ის ციფრული მარკეტინგის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში."
        keywords="Next-Hub, Digital Marketing, ციფრული მარკეტინგი, სოციალური მედია, ბრენდის ხასიათი, სარეკლამო კამპანიები"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/services/digital_marketing",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Digital Marketing",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
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
          title: "Next-Hub Solutions | Digital Marketing",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა",
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
            ციფრული მარკეტინგი <span className="text-accent">.</span>
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

export default DigitalMarketing;
