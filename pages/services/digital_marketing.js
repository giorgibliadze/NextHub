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
        canonical="https://next-hub.pro/services/digital_marketing/"
        title="ციფრული მარკეტინგი | Google Ads და სოციალური მედია | Next-Hub"
        description="Next-Hub გთავაზობთ ციფრული მარკეტინგის სერვისებს: Google Ads, სოციალური მედიის რეკლამა, კონტენტის სტრატეგია, ბრენდის ზრდა და შედეგზე ორიენტირებული კამპანიები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/services/digital_marketing/",
          site_name: "Next-Hub Solutions",
          title:
            "ციფრული მარკეტინგი | Google Ads და სოციალური მედია | Next-Hub",
          description:
            "Next-Hub გთავაზობთ ციფრული მარკეტინგის სერვისებს: Google Ads, სოციალური მედიის რეკლამა, კონტენტის სტრატეგია, ბრენდის ზრდა და შედეგზე ორიენტირებული კამპანიები.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "ციფრული მარკეტინგი Next-Hub Solutions",
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
        ]}
      />

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
