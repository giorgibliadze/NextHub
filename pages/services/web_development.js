import React, { useState } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import TechnologyIcons from "../../components/TechnologyIcons";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const WebDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    console.log("Button clicked with data: ", cardData);
    setSelectedCardData(cardData);
    setIsModalOpen(true);
    console.log("Modal state set to: ", true);
  };

  const images = [
    { src: "/well-structured-3.webp", alt: "Image 2" },
    { src: "/technology.webp", alt: "Image 3" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 1000,
      features: [
        "1 გვერდი",
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "სოციალური ქსელების ინტეგრაცია",
        "Slideshow - სურათების სლაიდშოუ",
        "ჩვენს შესახებ",
        "სიახლეები",
        "სერვისები",
        "პარტნიორების ლოგოები",
        "ფოტო გალერეა",
        "ონლაინ ჩატი",
        "კონტაქტი",
        "1 თვე მხარდაჭერის სერვისი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 1000,
          features: [
            "1 გვერდი",
            "მობილური ვერსია (Responsive)",
            "სტატისტიკაზე წვდომა",
            "სოციალური ქსელების ინტეგრაცია",
            "Slideshow - სურათების სლაიდშოუ",
            "ჩვენს შესახებ",
            "სიახლეები",
            "სერვისები",
            "პარტნიორების ლოგოები",
            "ფოტო გალერეა",
            "ონლაინ ჩატი",
            "კონტაქტი",
            "1 თვე მხარდაჭერის სერვისი",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 2500,
      features: [
        "5 გვერდი",
        "მარტივი სამართავი პანელი",
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "მთავარი",
        "ჩვენს შესახებ",
        "სიახლეები",
        "სერვისები",
        "კონტაქტი",
        "ფილიალები",
        "პროექტები – მიმდინარე, დასრულებული",
        "ფოტო გალერეა",
        "ვიდეო გალერეა",
        "ვიზიტორების სტატისტიკა",
        "სოციალური ქსელების ინტეგრაცია",
        "Slideshow – სურათების სლაიდშოუ",
        "ონლაინ ჩატი",
        "პოპულარული სიახლეები",
        "კლიენტების მოდული",
        "პარტნიორების ლოგოები",
        "3 თვე მხარდაჭერის სერვისი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 2500,
          features: [
            "5 გვერდი",
            "მარტივი სამართავი პანელი",
            "მობილური ვერსია (Responsive)",
            "სტატისტიკაზე წვდომა",
            "მთავარი",
            "ჩვენს შესახებ",
            "სიახლეები",
            "სერვისები",
            "კონტაქტი",
            "ფილიალები",
            "პროექტები – მიმდინარე, დასრულებული",
            "ფოტო გალერეა",
            "ვიდეო გალერეა",
            "ვიზიტორების სტატისტიკა",
            "სოციალური ქსელების ინტეგრაცია",
            "Slideshow – სურათების სლაიდშოუ",
            "ონლაინ ჩატი",
            "პოპულარული სიახლეები",
            "კლიენტების მოდული",
            "პარტნიორების ლოგოები",
            "3 თვე მხარდაჭერის სერვისი",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 7000,
      features: [
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "სამართავი პანელი",
        "პოპულარული სიახლეები",
        "Top პროდუქცია",
        "პარტნიორების ლოგოები",
        "ონლაინ ჩატი",
        "პროდუქციის ძიება",
        "პროდუქციის სორტირება და ფილტრაცია",
        "სასურველი პროდუქცია – Wish List",
        "პროდუქციის კალათაში დამატება",
        "პროდუქციის შეკვეთა",
        "ვიზიტორების სტატისტიკა",
        "სოციალური ქსელების ინტეგრაცია",
        "რეგისტრაციის ფორმა – ფიზ, იურიდ.",
        "Facebook-ით რეგისტრაცია",
        "Google-თ რეგისტრაცია",
        "პროდუქციის შეძენა Visa/Mastercard/Amex ბარათებით",
        "პროდუქციის შეძენა ონლაინ განვადებით",
        " გაყიდვების სტატისტიკა",
        " ადგილზე მიტანის მოდული",
        "B2B & B2C მოდულები",
        "6 თვე მხარდაჭერის სერვისი",
        "და სხვა",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 7000,
          features: [
            "მობილური ვერსია (Responsive)",
            "სტატისტიკაზე წვდომა",
            "სამართავი პანელი",
            "პოპულარული სიახლეები",
            "Top პროდუქცია",
            "პარტნიორების ლოგოები",
            "ონლაინ ჩატი",
            "პროდუქციის ძიება",
            "პროდუქციის სორტირება და ფილტრაცია",
            "სასურველი პროდუქცია – Wish List",
            "პროდუქციის კალათაში დამატება",
            "პროდუქციის შეკვეთა",
            "ვიზიტორების სტატისტიკა",
            "სოციალური ქსელების ინტეგრაცია",
            "რეგისტრაციის ფორმა – ფიზ, იურიდ.",
            "Facebook-ით რეგისტრაცია",
            "Google-თ რეგისტრაცია",
            "პროდუქციის შეძენა Visa/Mastercard/Amex ბარათებით",
            "პროდუქციის შეძენა ონლაინ განვადებით",
            " გაყიდვების სტატისტიკა",
            " ადგილზე მიტანის მოდული",
            "B2B & B2C მოდულები",
            "6 თვე მხარდაჭერის სერვისი",
            "და სხვა",
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
        ვებ გვერდების დამზადება <span className="text-accent">.</span>
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
        className="min-h-[200px] flex flex-col items-center justify-center"
      >
        <TechnologyIcons />
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
      <Bulb />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          console.log("Modal state set to: ", false);
          setIsModalOpen(false);
        }}
        cardData={selectedCardData}
      />
    </div>
  );
};

export default WebDevelopment;
