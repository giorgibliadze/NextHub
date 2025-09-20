// components/WebDevelopment.jsx
import React, { useState, useEffect } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import TechnologyIcons from "../../components/TechnologyIcons";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextSeo } from "next-seo";
const WebDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    console.log("Button clicked with data: ", cardData);
    setSelectedCardData(cardData);
    setIsModalOpen(true);
    console.log("Modal state set to: ", true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  const images = [
    { src: "/well-structured-3.webp", alt: "Image 2" },
    { src: "/technology.webp", alt: "Image 3" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 1000,
      product_id: 1,
      features: [
        "1 გვერდი",
        "მობილური ვერსია (Responsive)",
        "სტატისტიკაზე წვდომა",
        "სოციალური ქსელების ინტეგრაცია",
        "სურათების სლაიდშოუ (Slideshow)",
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
          product_id: 1,
          features: [
            "1 გვერდი",
            "მობილური ვერსია (Responsive)",
            "სტატისტიკაზე წვდომა",
            "სოციალური ქსელების ინტეგრაცია",
            "სურათების სლაიდშოუ (Slideshow)",
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
      product_id: 2,
      features: [
        "ყველაფერი სტანდარტში",
        "5 გვერდი",
        "მარტივი სამართავი პანელი",
        "მთავარი",
        "ფილიალები",
        "მიმდინარე და დასრულებული პროექტები",
        "ვიდეო გალერეა",
        "ვიზიტორების სტატისტიკა",
        "პოპულარული სიახლეები",
        "პროდუქციის შეძენა Visa/Mastercard/Amex ბარათებით",
        "პროდუქციის ძიება",
        "კლიენტების მოდული",
        "3 თვე მხარდაჭერის სერვისი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 2500,
          product_id: 2,
          features: [
            "ყველაფერი სტანდარტში",
            "5 გვერდი",
            "მარტივი სამართავი პანელი",
            "მთავარი",
            "ფილიალები",
            "მიმდინარე და დასრულებული პროექტები",
            "ვიდეო გალერეა",
            "ვიზიტორების სტატისტიკა",
            "პოპულარული სიახლეები",
            "პროდუქციის შეძენა Visa/Mastercard/Amex ბარათებით",
            "პროდუქციის ძიება",
            "კლიენტების მოდული",
            "3 თვე მხარდაჭერის სერვისი",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 7000,
      product_id: 3,
      features: [
        "ყველაფერი პრემიუმში",
        "Top პროდუქცია",

        "პროდუქციის სორტირება და ფილტრაცია",
        "სასურველი პროდუქცია (Wish List)",
        "პროდუქციის კალათაში დამატება",
        "პროდუქციის შეკვეთა",
        "რეგისტრაციის ფორმა (ფიზიკური და იურიდიული პირებისთვის)",
        "Facebook-ით რეგისტრაცია",
        "Google-ით რეგისტრაცია",
        "პროდუქციის შეძენა ონლაინ განვადებით",
        "გაყიდვების სტატისტიკა",
        "ადგილზე მიტანის მოდული",
        "B2B & B2C მოდულები",
        "6 თვე მხარდაჭერის სერვისი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 7000,
          product_id: 3,
          features: [
            "ყველაფერი პრემიუმში",
            "Top პროდუქცია",

            "პროდუქციის სორტირება და ფილტრაცია",
            "სასურველი პროდუქცია (Wish List)",
            "პროდუქციის კალათაში დამატება",
            "პროდუქციის შეკვეთა",
            "რეგისტრაციის ფორმა (ფიზიკური და იურიდიული პირებისთვის)",
            "Facebook-ით რეგისტრაცია",
            "Google-ით რეგისტრაცია",

            "პროდუქციის შეძენა ონლაინ განვადებით",
            "გაყიდვების სტატისტიკა",
            "ადგილზე მიტანის მოდული",
            "B2B & B2C მოდულები",
            "6 თვე მხარდაჭერის სერვისი",
          ],
        }),
    },
  ];

  return (
    <>
      
      <NextSeo
        canonical= "https://www.next-hub.pro/services/web_development"
        title="Next-Hub Solutions | ვებსაიტის დამზადება"
        description="საიტის დამზადება გჭირდება? გთავაზობთ ვებსაიტის დამზადების სერვისს, ჩვენთან შეგიძლია ვებსაიტის აწყობა იაფად. თუ გაინტერესებს რა ღირს საიტის შექმნა? დაგვიკავშირდით ახლავე და დაგეხმარებით."
        keywords="Next-Hub, ვებსაიტის დამზადება, საიტის დამზადება, საიტების შექმნა, ვებსაიტების დამზადება, საიტების დამზადება, ვებ აპლიკაციები"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/services/web_development",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | ვებსაიტის დამზადება",
          description:
            "საიტის დამზადება გჭირდება? გთავაზობთ ვებსაიტის დამზადების სერვისს, ჩვენთან შეგიძლია ვებსაიტის აწყობა იაფად. თუ გაინტერესებს რა ღირს საიტის შექმნა? დაგვიკავშირდით და დაგეხმარებით.",
          images: [
            {
              url: "https://www.next-hub.pro/web.jpg",
              width: 800,
              height: 600,
              alt: "ვებსაიტის დამზადება",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
          title: "Next-Hub Solutions | ვებსაიტის დამზადება",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/web.jpg",
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
          onClose={() => {
            console.log("Modal state set to: ", false);
            setIsModalOpen(false);
          }}
          cardData={selectedCardData}
        />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44 smx:text-center overflow-x-hidden">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:mt-8"
          >
            ვებსაიტის დამზადება <span className="text-accent">.</span>
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
          {/* <Bulb /> */}
        </div>
      )}
    </>
  );
};

export default WebDevelopment;
