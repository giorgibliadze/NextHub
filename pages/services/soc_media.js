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
const SocMedia = () => {
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
    { src: "/customer-experience.webp", alt: "Image 2" },
    { src: "/user-experience.webp", alt: "Image 4" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 499,
      features: [
        "თვეში 4 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 499,
          features: [
            "თვეში 4 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 799,
      features: [
        "თვეში 8 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 799,
          features: [
            "თვეში 8 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
            "კონკურენტების ანალიზი",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 999,
      features: [
        "ორენოვანი 8 პოსტი თვეში",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "Google ADS კამპანია",
        "E-MAIL მარკეტინგი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 999,
          features: [
            "ორენოვანი 8 პოსტი თვეში",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
            "კონკურენტების ანალიზი",
            "Google ADS კამპანია",
            "E-MAIL მარკეტინგი",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
  ];

  return (
    <>
    <Head>
          <meta name="robots" content="index, follow" />
        </Head>
      <NextSeo
        title="Next-Hub Solutions | Social Media Management"
        description="Next-Hub Solutions-ის სოციალური მედია მენეჯმენტის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/services/soc_media",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Social Media Management",
          description:
            "Next-Hub Solutions-ის სოციალური მედია მენეჯმენტის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში.",
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
          title: "Next-Hub Solutions | Social Media Management",
          description:
            "Next-Hub Solutions-ის სოციალური მედია მენეჯმენტის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, Social Media Management, სოციალური მედია, ბრენდის ხასიათი, სარეკლამო კამპანიები, Facebook, Instagram, LinkedIn",
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
            სოციალური მედია მენეჯმენტი <span className="text-accent">.</span>
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

export default SocMedia;
