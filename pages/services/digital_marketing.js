import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
const DigitalMarketing = () => {
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
    { src: "/seo3.webp", alt: "Image 2" },
    { src: "/seo2.webp", alt: "Image 3" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
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
      <Head>
        <title>Next-Hub Solutions | Digital Marketing</title>
        <meta
          name="description"
          content="Next-Hub Solutions-ის ციფრული მარკეტინგის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში."
        />
        <meta
          name="keywords"
          content="Next-Hub, Digital Marketing, ციფრული მარკეტინგი, სოციალური მედია, ბრენდის ხასიათი, სარეკლამო კამპანიები"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Next-Hub Solutions | Digital Marketing"
        />
        <meta
          property="og:description"
          content="Next-Hub Solutions-ის ციფრული მარკეტინგის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში."
        />
        <meta
          property="og:url"
          content="https://www.next-hub.pro/services/digital_marketing"
        />
        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta
          name="twitter:title"
          content="Next-Hub Solutions | Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Next-Hub Solutions-ის ციფრული მარკეტინგის სერვისები. მიიღეთ პროფესიონალური მხარდაჭერა ბრენდის ხასიათის შექმნაში, სოციალური მედიის მართვაში და სარეკლამო კამპანიების დაგეგმვაში."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
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
