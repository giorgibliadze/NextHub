import React from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const tech_support = () => {
  const images = [
    { src: "/analytics.webp", alt: "Image 1" },
    { src: "/customer-satisfaction3.webp", alt: "Image 2" },
    // { src: "/Data-analytics.webp", alt: "Image 3" },
    // { src: "/device-analytics.webp", alt: "Image 4" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audit"],
      onButtonClick: () => handlePurchaseClick("ბაზის პაკეტი"),
    },
    {
      title: "პრემიუმი",
      price: 1000,
      features: [
        "Everything in Basic",
        "Link Building",
        "Content Optimization",
      ],
      onButtonClick: () => handlePurchaseClick("სტანდარტული პაკეტი"),
    },
    {
      title: "ბიზნესი",
      price: 1500,
      features: [
        "Everything in Standard",
        "Advanced Analytics",
        "Dedicated Support",
      ],
      onButtonClick: () => handlePurchaseClick("პრემიუმ პაკეტი"),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
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
        ClassName="mb-16"
      >
        {" "}
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
    </div>
  );
};

export default tech_support;
