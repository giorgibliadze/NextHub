import React, { useState, useEffect } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/services/seo";

const Seo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handlePurchaseClick = (cardData) => {
    setSelectedCardData(cardData);
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", isModalOpen);
  }, [isModalOpen]);

  const images = [
    {
      src: "/seo.webp",
      alt: "SEO ოპტიმიზაცია და Google Search Console",
    },
    {
      src: "/location.webp",
      alt: "ლოკალური SEO და Google Business Profile",
    },
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
        canonical={CANONICAL}
        title="SEO ოპტიმიზაცია | Google-ში პირველ გვერდზე გამოსვლა | Next-Hub"
        description="SEO ოპტიმიზაცია ბიზნესისთვის: ტექნიკური აუდიტი, საკვანძო სიტყვები, on-page SEO, ლოკალური SEO და Search Console-ის გამართვა."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "SEO ოპტიმიზაცია | Google-ში პირველ გვერდზე გამოსვლა | Next-Hub",
          description:
            "SEO ოპტიმიზაცია, ტექნიკური SEO, საკვანძო სიტყვების კვლევა, Google Search Console-ის გამართვა და პოზიციების გაუმჯობესება Google-ში.",
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
          {
            name: "keywords",
            content:
              "SEO ოპტიმიზაცია, SEO მომსახურება, ტექნიკური SEO, Google SEO, საძიებო სისტემების ოპტიმიზაცია, საკვანძო სიტყვების კვლევა, Google Search Console, Google Business Profile, ლოკალური SEO, On Page SEO, Off Page SEO, ვებსაიტის ოპტიმიზაცია, Google-ში პირველ გვერდზე გამოსვლა, SEO სააგენტო, SEO თბილისი, SEO Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="seo-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SEO ოპტიმიზაცია",
            serviceType: "Search Engine Optimization",
            url: CANONICAL,
            description:
              "SEO ოპტიმიზაცია, ტექნიკური SEO, Google Search Console-ის გამართვა, ლოკალური SEO, საკვანძო სიტყვების კვლევა და Google-ში პოზიციების გაუმჯობესება.",
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
              price: "400",
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
            SEO ოპტიმიზაცია
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            ვეხმარებით ბიზნესებს Google-ში უკეთ გამოჩენაში, ორგანული ტრაფიკის
            ზრდაში და მეტი პოტენციური კლიენტის მიღებაში.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="my-10 md:my-12 w-full"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.22)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Search Engine Optimization
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Google-ში ხილვადობის გაზრდა
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub ახორციელებს SEO ოპტიმიზაციას, ტექნიკურ აუდიტს, საკვანძო
                სიტყვების კვლევას და ვებსაიტის სტრუქტურის გაუმჯობესებას, რათა
                თქვენი ბიზნესი Google-ში უფრო მაღალ პოზიციებზე გამოჩნდეს.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ტექნიკური SEO
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამოწმებთ საიტის ტექნიკურ მდგომარეობას, სიჩქარეს, ინდექსაციას
                  და ვასწორებთ SEO პრობლემებს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  საკვანძო სიტყვების კვლევა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვპოულობთ იმ საძიებო სიტყვებს, რომლებსაც თქვენი პოტენციური
                  მომხმარებლები რეალურად ეძებენ Google-ში.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ლოკალური SEO
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვაუმჯობესებთ Google Business Profile-ს და ადგილობრივ შედეგებში
                  თქვენი ბიზნესის ხილვადობას.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full max-w-6xl"
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

export default Seo;
