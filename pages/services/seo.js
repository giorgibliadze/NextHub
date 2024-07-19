import React, { useState, useEffect } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import Bulb from "../../components/Bulb";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
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
      price: 299,
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
          price: 299,
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
      price: 599,
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
          price: 599,
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
      price: 999,
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
          price: 999,
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
      ;
      <Head>
        <title>Next-Hub Solutions | SEO</title>
        <meta
          name="description"
          content="Next-Hub Solutions-ის SEO სერვისები. მიიღეთ საძიებო სისტემების ოპტიმიზაცია, საკვანძო სიტყვების კვლევა, ბმულების შენება და კონტენტის ოპტიმიზაცია."
        />
        <meta
          name="keywords"
          content="Next-Hub, SEO, საძიებო სისტემების ოპტიმიზაცია, საკვანძო სიტყვების კვლევა, ბმულების შენება, კონტენტის ოპტიმიზაცია, Google Analytics, ადგილობრივი SEO"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Next-Hub Solutions | SEO" />
        <meta
          property="og:description"
          content="Next-Hub Solutions-ის SEO სერვისები. მიიღეთ საძიებო სისტემების ოპტიმიზაცია, საკვანძო სიტყვების კვლევა, ბმულების შენება და კონტენტის ოპტიმიზაცია."
        />
        <meta
          property="og:url"
          content="https://www.next-hub.pro/services/seo"
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
        <meta name="twitter:title" content="Next-Hub Solutions | SEO" />
        <meta
          name="twitter:description"
          content="Next-Hub Solutions-ის SEO სერვისები. მიიღეთ საძიებო სისტემების ოპტიმიზაცია, საკვანძო სიტყვების კვლევა, ბმულების შენება და კონტენტის ოპტიმიზაცია."
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
