import React, { useState } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Seo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  const images = [
    { src: "/seo.webp", alt: "Image 1" },
    { src: "/location.webp", alt: "Image 4" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 299,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audit"],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 299,
          features: ["Keyword Research", "On-Page SEO", "Technical SEO Audit"],
        }),
    },
    {
      title: "პრემიუმი",
      price: 599,
      features: [
        "Everything in Basic",
        "Link Building",
        "Content Optimization",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 599,
          features: [
            "Everything in Basic",
            "Link Building",
            "Content Optimization",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 999,
      features: [
        "Everything in Standard",
        "Advanced Analytics",
        "Dedicated Support",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 999,
          features: [
            "Everything in Standard",
            "Advanced Analytics",
            "Dedicated Support",
          ],
        }),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44 smx:text-center">
      <motion.h1
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2 xl:mt-8"
      >
        SEO- საძიებო სისტემების ოპტიმიზაცია{" "}
        <span className="text-accent">.</span>
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
        className="grid md:grid-cols-3 sm:grid-cols-1 gap-10"
      >
        {priceCardsData.map((cardData, index) => (
          <PriceCard key={index} {...cardData} />
        ))}
      </motion.div>
      <Bulb />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardData={selectedCardData}
      />
    </div>
  );
};

export default Seo;
