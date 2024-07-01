import React from "react";
import dynamic from "next/dynamic";
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
const location = () => {
  const images = [
    { src: "/location.webp", alt: "Image 1" },
    { src: "/loyalty.webp", alt: "Image 2" },
    // { src: "/speed-optimization.webp", alt: "Image 2" },
    { src: "/digital-marketing.webp", alt: "Image 3" },
    { src: "/user-experience.webp", alt: "Image 4" },
  ];
  const priceCardsData = [
    {
      title: "ბაზის პაკეტი",
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
      onButtonClick: () => handlePurchaseClick("ბაზის პაკეტი"),
    },
    {
      title: "სტანდარტული პაკეტი",
      price: 799,
      features: [
        "თვეში 8 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, Linkdin",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () => handlePurchaseClick("სტანდარტული პაკეტი"),
    },
    {
      title: "პრემიუმ პაკეტი",
      price: 999,
      features: [
        "ორენოვანი 8 პოსტი თვეში",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, Linkdin",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "Google ADS კამპანია",
        "E-MAIL მარკეტინგი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () => handlePurchaseClick("პრემიუმ პაკეტი"),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
      <h1 className="text-4xl font-bold text-white mb-6">
        სოციალური მედია მენეჯმენტი
      </h1>
      <ImageGallery images={images} />
      <h1 className="text-4xl font-bold text-white mb-6">
        გამოიყენეთ თქვენი სრული პოტენციალი Analytics-ს დახმარებით
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
        {priceCardsData.map((cardData, index) => (
          <PriceCard key={index} {...cardData} />
        ))}
      </div>
    </div>
  );
};

export default location;
