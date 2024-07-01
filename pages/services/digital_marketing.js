import React from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";

const digital_marketing = () => {
  const images = [
    { src: "/digital-marketing.webp", alt: "Image 1" },
    { src: "/seo2.webp", alt: "Image 2" },
    { src: "/seo3.webp", alt: "Image 3" },
    // { src: "/seo4.webp", alt: "Image 4" },
    // { src: "/location.webp", alt: "Image 4" },
    { src: "/targeting.webp", alt: "Image 5" },
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
      <h1 className="text-4xl font-bold text-white mb-6">ციფრული მარკეტინგი</h1>
      <ImageGallery images={images} />
      <h1 className="text-4xl font-bold text-white mb-6">
        გამოიყენეთ თქვენი სრული პოტენციალი ვებ გვერდის დახმარებით
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
        {priceCardsData.map((cardData, index) => (
          <PriceCard key={index} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default digital_marketing;
