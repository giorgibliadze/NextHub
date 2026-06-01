import React, { useState, useEffect } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { GoogleTagManager } from "@next/third-parties/google";
const Seo = () => {
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
    { src: "/seo.webp", alt: "Image 1" },
    { src: "/location.webp", alt: "Image 4" },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 400,
      product_id: 10,
      features: [
        "საკვანძო სიტყვების კვლევა",
        "On-Page SEO",
        "ტექნიკური SEO აუდიტი",
        "მეტა თეგების ოპტიმიზაცია",
        "სიჩქარის ოპტიმიზაცია",
        "ბაზისურ შესრულებაზე მონიტორინგი",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 400,
          product_id: 10,
          features: [
            "საკვანძო სიტყვების კვლევა",
            "On-Page SEO",
            "ტექნიკური SEO აუდიტი",
            "მეტა თეგების ოპტიმიზაცია",
            "სიჩქარის ოპტიმიზაცია",
            "ბაზისურ შესრულებაზე მონიტორინგი",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 700,
      product_id: 11,
      features: [
        "ყველაფერი სტანდარტში",
        "ბმულების შენება",
        "კონტენტის ოპტიმიზაცია",
        "კონკურენციის ანალიზი",
        "ადგილობრივი SEO",
        "სოციალური მედიის ინტეგრაცია",
        "მობილური ოპტიმიზაცია",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 700,
          product_id: 11,
          features: [
            "ყველაფერი სტანდარტში",
            "ბმულების შენება",
            "კონტენტის ოპტიმიზაცია",
            "კონკურენციის ანალიზი",
            "ადგილობრივი SEO",
            "სოციალური მედიის ინტეგრაცია",
            "მობილური ოპტიმიზაცია",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 1200,
      product_id: 12,
      features: [
        "ყველაფერი პრემიუმში",
        "გაფართოებული ანალიტიკა",
        "მიძღვნილი მხარდაჭერა",
        "მუდმივი ოპტიმიზაციის სტრატეგია",
        "მოწინავე საკვანძო სიტყვების კვლევა",
        "A/B ტესტირება",
        "კლიენტის ექსკლუზიური ანგარიშები",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 1200,
          product_id: 12,
          features: [
            "ყველაფერი პრემიუმში",
            "გაფართოებული ანალიტიკა",
            "მიძღვნილი მხარდაჭერა",
            "მუდმივი ოპტიმიზაციის სტრატეგია",
            "მოწინავე საკვანძო სიტყვების კვლევა",
            "A/B ტესტირება",
            "კლიენტის ექსკლუზიური ანგარიშები",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/services/seo/"
        title="SEO ოპტიმიზაცია | Google-ში ხილვადობის გაზრდა | Next-Hub"
        description="Next-Hub გთავაზობთ SEO ოპტიმიზაციას, ტექნიკურ SEO-ს, საკვანძო სიტყვების კვლევას, Google Search Console-ის გამართვას და საძიებო სისტემებში პოზიციების გაუმჯობესებას."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/services/seo/",
          site_name: "Next-Hub Solutions",
          title: "SEO ოპტიმიზაცია | Google-ში ხილვადობის გაზრდა | Next-Hub",
          description:
            "Next-Hub გთავაზობთ SEO ოპტიმიზაციას, ტექნიკურ SEO-ს, საკვანძო სიტყვების კვლევას, Google Search Console-ის გამართვას და საძიებო სისტემებში პოზიციების გაუმჯობესებას.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "SEO ოპტიმიზაცია Next-Hub Solutions",
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

export default Seo;
