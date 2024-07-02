// pages/seo.jsx
import React from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";

import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
const seo = () => {
  const handlePurchaseClick = (packageName) => {
    alert(`Purchasing package: ${packageName}`);
  };

  const images = [
    { src: "/seo.webp", alt: "Image 1" },
    // { src: "/seo2.webp", alt: "Image 2" },
    // { src: "/seo3.webp", alt: "Image 3" },
    // { src: "/seo4.webp", alt: "Image 4" },
    { src: "/location.webp", alt: "Image 4" },
    // { src: "/targeting.webp", alt: "Image 5" },
  ];

  const priceCardsData = [
    {
      title: "ბაზის პაკეტი",
      price: 299,
      features: ["Keyword Research", "On-Page SEO", "Technical SEO Audit"],
      onButtonClick: () => handlePurchaseClick("ბაზის პაკეტი"),
    },
    {
      title: "სტანდარტული პაკეტი",
      price: 599,
      features: [
        "Everything in Basic",
        "Link Building",
        "Content Optimization",
      ],
      onButtonClick: () => handlePurchaseClick("სტანდარტული პაკეტი"),
    },
    {
      title: "პრემიუმ პაკეტი",
      price: 999,
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
      SEO- საძიებო სისტემების ოპტიმიზაცია <span className="text-accent">.</span>
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

export default seo;
{
  /* <header className="text-center mb-12 max-w-[800px]">
        <h1 className="text-4xl font-bold text-white mb-6">
          გამოიყენეთ თქვენი სრული პოტენციალი SEO-ს დახმარებით
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          საძიებო სისტემის ოპტიმიზაცია (SEO) გადამწყვეტია თქვენი ბიზნესის
          განვითარებისთვის. ეს ხდის თქვენს კომპანიას ადვილად აღმოჩენადს ონლაინ,
          რაც უზრუნველყოფს, რომ გამოირჩეოდეთ ციფრულ ბაზარზე.
        </p>
        <p className="text-xl text-gray-300">
          ეფექტური SEO ხელს უწყობს პოტენციური მომხმარებლებისთვის პოზიტიური
          საწყისი გამოცდილების შექმნას, რაც იწვევს ჩართულობისა და კმაყოფილების
          ზრდას.
        </p>
      </header> */
}
