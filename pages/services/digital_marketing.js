import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import BrandedLoader from "../../components/BrandedLoader";
import ImageGallery from "../../components/ImageGallery";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

// Dynamic imports
const PriceCard = dynamic(() => import("../../components/PriceCard"), {
  loading: () => <BrandedLoader fullscreen={false} />,
});

const Modal = dynamic(() => import("../../components/Modal"), {
  loading: () => <BrandedLoader fullscreen={false} />,
});

const CANONICAL = "https://next-hub.pro/services/digital_marketing";

const DigitalMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = useCallback((cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  const images = [
    {
      src: "/seo3.webp",
      alt: "Google Ads და ციფრული მარკეტინგი",
      loading: "lazy",
    },
    {
      src: "/seo2.webp",
      alt: "სოციალური მედიის რეკლამა და მარკეტინგი",
      loading: "lazy",
    },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 700,
      product_id: 13,
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
          product_id: 13,
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
      product_id: 14,
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
          product_id: 14,
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
      product_id: 15,
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
          product_id: 15,
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
      <NextSeo
        canonical={CANONICAL}
        title="ციფრული მარკეტინგი | Google Ads და Meta რეკლამები | Next-Hub"
        description="ციფრული მარკეტინგი ბიზნესისთვის: Google Ads, Facebook Ads, Instagram რეკლამები, E-mail მარკეტინგი, კონტენტის სტრატეგია და შედეგზე ორიენტირებული სარეკლამო კამპანიები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "ციფრული მარკეტინგი | Google Ads და Meta რეკლამები | Next-Hub",
          description:
            "Google Ads, Facebook Ads, Instagram რეკლამები, E-mail მარკეტინგი და ბიზნესის ზრდაზე ორიენტირებული ციფრული მარკეტინგის სერვისები.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "ციფრული მარკეტინგი Next-Hub Solutions",
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
          {
            name: "keywords",
            content:
              "ციფრული მარკეტინგი, Google Ads, Google რეკლამა, Facebook Ads, Instagram რეკლამა, Meta Ads, PPC რეკლამა, E-mail მარკეტინგი, კონტენტის მარკეტინგი, რეკლამის მართვა, Google Ads მართვა, Facebook რეკლამის მართვა, Instagram მარკეტინგი, ბიზნესის რეკლამირება, Digital Marketing Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="digital-marketing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ციფრული მარკეტინგი",
            serviceType: "Digital Marketing",
            url: CANONICAL,
            description:
              "Google Ads, Facebook Ads, Instagram რეკლამები, E-mail მარკეტინგი, კონტენტის სტრატეგია და ბიზნესის ზრდაზე ორიენტირებული სარეკლამო კამპანიები.",
            provider: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro",
              logo: "https://next-hub.pro/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "Georgia",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "GEL",
              price: "700",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardData={selectedCardData}
        />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-6xl font-bold xl:mt-8 text-center"
          >
            ციფრული მარკეტინგი
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            ვეხმარებით ბიზნესებს მეტი მომხმარებლის მოზიდვაში Google Ads,
            სოციალური მედიის რეკლამებისა და ციფრული მარკეტინგის ეფექტური
            სტრატეგიების მეშვეობით.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-16 mt-10 w-full"
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
        </div>
      )}
    </>
  );
};

export default DigitalMarketing;
