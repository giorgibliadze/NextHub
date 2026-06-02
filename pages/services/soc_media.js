import React, { useState, useEffect } from "react";
import ImageGallery from "../../components/ImageGallery";
import PriceCard from "../../components/PriceCard";
import Modal from "../../components/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const CANONICAL = "https://next-hub.pro/services/soc_media/";

const SocMedia = () => {
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
      src: "/customer-experience.webp",
      alt: "სოციალური მედიის მართვა და კონტენტის შექმნა",
    },
    {
      src: "/user-experience.webp",
      alt: "Facebook და Instagram მარკეტინგი ბიზნესისთვის",
    },
  ];

  const priceCardsData = [
    {
      title: "სტანდარტი",
      price: 499,
      product_id: 7,
      features: [
        "თვეში 4 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "სტანდარტი",
          price: 499,
          product_id: 7,
          features: [
            "თვეში 4 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
          ],
        }),
    },
    {
      title: "პრემიუმი",
      price: 799,
      product_id: 8,
      features: [
        "თვეში 8 პოსტი",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "პრემიუმი",
          price: 799,
          product_id: 8,
          features: [
            "თვეში 8 პოსტი",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
            "კონკურენტების ანალიზი",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
    {
      title: "ბიზნესი",
      price: 999,
      product_id: 9,
      features: [
        "ორენოვანი 8 პოსტი თვეში",
        "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
        "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
        "გვერდის ტექნიკური გამართვა",
        "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
        "ვებსაიტთან ინტეგრაცია",
        "ავტომოპასუხის დაყენება",
        "კონკურენტების ანალიზი",
        "Google ADS კამპანია",
        "E-MAIL მარკეტინგი",
        "ყოველთვიური ანგარიში",
      ],
      onButtonClick: () =>
        handlePurchaseClick({
          title: "ბიზნესი",
          price: 999,
          product_id: 9,
          features: [
            "ორენოვანი 8 პოსტი თვეში",
            "ბრენდის ხასიათის შექმნა სოციალურ ქსელში",
            "სოციალური პლატფორმები: Facebook, Instagram, LinkedIn",
            "გვერდის ტექნიკური გამართვა",
            "ფასიანი სარეკლამო კამპანიების დაგეგმვა და მართვა",
            "ვებსაიტთან ინტეგრაცია",
            "ავტომოპასუხის დაყენება",
            "კონკურენტების ანალიზი",
            "Google ADS კამპანია",
            "E-MAIL მარკეტინგი",
            "ყოველთვიური ანგარიში",
          ],
        }),
    },
  ];

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="სოციალური მედიის მართვა | Facebook და Instagram მარკეტინგი | Next-Hub"
        description="სოციალური მედიის მართვა, Facebook და Instagram გვერდების განვითარება, კონტენტის შექმნა, რეკლამების მართვა, ბრენდის სტრატეგია და ციფრული მარკეტინგი ბიზნესისთვის."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "სოციალური მედიის მართვა | Facebook და Instagram მარკეტინგი | Next-Hub",
          description:
            "Next-Hub გთავაზობთ სოციალური მედიის მართვას, კონტენტის შექმნას, რეკლამების მართვას, Facebook და Instagram გვერდების განვითარებას და ბრენდის ზრდის სტრატეგიას.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "სოციალური მედიის მართვა Next-Hub Solutions",
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
              "სოციალური მედიის მართვა, სოციალური მედია მენეჯმენტი, Facebook გვერდის მართვა, Instagram გვერდის მართვა, Facebook მარკეტინგი, Instagram მარკეტინგი, კონტენტის შექმნა, რეკლამების მართვა, Meta Ads მართვა, ციფრული მარკეტინგი, სოციალური ქსელების მართვა, ბრენდის სტრატეგია, social media management Georgia, Facebook ads Georgia, Instagram marketing Georgia, Next-Hub Solutions",
          },
        ]}
      />

      <Script
        id="social-media-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "სოციალური მედიის მართვა",
            serviceType: "Social Media Management",
            url: CANONICAL,
            description:
              "სოციალური მედიის მართვა, Facebook და Instagram გვერდების განვითარება, კონტენტის შექმნა, რეკლამების მართვა, ბრენდის სტრატეგია და ციფრული მარკეტინგი.",
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
              price: "499",
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
            სოციალური მედიის მართვა
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-4 max-w-3xl text-center text-sm md:text-lg leading-7 md:leading-8 text-white/80"
          >
            ვმართავთ Facebook, Instagram და LinkedIn გვერდებს, ვქმნით
            კონტენტს, ვგეგმავთ რეკლამებს და ვეხმარებით ბრენდებს სოციალურ
            ქსელებში ზრდაში.
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
                Social Media Marketing
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                Facebook და Instagram მართვა ბიზნესისთვის
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub ეხმარება ბიზნესებს სოციალური ქსელების პროფესიონალურ
                მართვაში, კონტენტის სტრატეგიის შექმნაში, რეკლამების დაგეგმვაში
                და ბრენდის ცნობადობის გაზრდაში.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  კონტენტის შექმნა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამზადებთ პოსტებს, ტექსტებს, ვიზუალურ იდეებს და კონტენტის
                  სტრატეგიას, რომელიც თქვენს ბრენდს სწორად წარმოაჩენს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  რეკლამების მართვა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვგეგმავთ და ვმართავთ Facebook და Instagram რეკლამებს,
                  აუდიტორიის შერჩევით, ბიუჯეტის კონტროლითა და შედეგების
                  ანალიზით.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ბრენდის განვითარება
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვეხმარებით ბიზნესს სოციალურ ქსელებში სტაბილური იმიჯის,
                  კომუნიკაციის სტილისა და მომხმარებელთან სწორი კავშირის შექმნაში.
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

export default SocMedia;