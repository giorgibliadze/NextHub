// components/WebDevelopment.jsx
import React, { useState, useEffect } from "react";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import TechnologyIcons from "../../components/TechnologyIcons";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";

const CANONICAL = "https://next-hub.pro/webdevelopment";

const WebDevelopment = () => {
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
    { src: "/well-structured-3.webp", alt: "Well structured layout" },
    { src: "/technology.webp", alt: "Technology" },
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
        canonical={CANONICAL}
        title="ვებსაიტის დამზადება | Next-Hub Solutions"
        description="Next-Hub გთავაზობთ თანამედროვე ვებსაიტების, ონლაინ მაღაზიებისა და ვებ აპლიკაციების შექმნას. SEO ოპტიმიზაცია, სწრაფი ჩატვირთვა და ბიზნესზე მორგებული გადაწყვეტილებები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",

          title: "ვებსაიტის დამზადება | Next-Hub Solutions",

          description:
            "Next-Hub გთავაზობთ თანამედროვე ვებსაიტების, ონლაინ მაღაზიებისა და ვებ აპლიკაციების შექმნას. SEO ოპტიმიზაცია, სწრაფი ჩატვირთვა და ბიზნესზე მორგებული გადაწყვეტილებები.",

          images: [
            {
              url: "https://next-hub.pro/web.jpg",
              width: 1200,
              height: 630,
              alt: "ვებსაიტის დამზადება Next-Hub Solutions",
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
          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="
    max-w-6xl
    mx-auto
    mb-20
    px-6
    py-12
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-md
    shadow-2xl
  "
          >
            <div className="text-center mb-10">
              <span className="inline-block mb-4 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                ვებ დეველოპმენტი
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                ვებსაიტის დამზადება <br />
                (საიტის შექმნა)
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-base md:text-lg leading-8">
                Next-Hub ქმნის თანამედროვე, სწრაფ და SEO-ზე მორგებულ ვებსაიტებს
                ბიზნესებისთვის, რომლებიც ონლაინ სივრცეში სანდოობასა და შედეგზე
                არის ორიენტირებული.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-3 text-accent">
                  ბიზნეს საიტები
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამზადებთ კომპანიის პრეზენტაციულ ვებსაიტებს, რომლებიც სწორად
                  წარმოაჩენს ბრენდს, სერვისებსა და საკონტაქტო ინფორმაციას.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-3 text-accent">
                  ონლაინ მაღაზიები
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვქმნით ონლაინ მაღაზიებს პროდუქციის კატალოგით, შეკვეთებით,
                  გადახდებითა და მომხმარებლისთვის მარტივი მართვის სისტემით.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-3 text-accent">
                  SEO ოპტიმიზაცია
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვებგვერდის სტრუქტურას ვაწყობთ ისე, რომ Google-მა სწორად
                  წაიკითხოს გვერდები, სერვისები და მნიშვნელოვანი საძიებო
                  ფრაზები.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  რა შედის ვებსაიტის შექმნის სერვისში?
                </h3>

                <ul className="space-y-3 text-white/75 leading-7">
                  <li>• ინდივიდუალური დიზაინის დაგეგმვა</li>
                  <li>• მობილურ ვერსიაზე მორგებული ვებსაიტი</li>
                  <li>• WordPress ან Next.js ტექნოლოგიით აწყობა</li>
                  <li>• Google Analytics და Search Console ინტეგრაცია</li>
                  <li>• ტექნიკური მხარდაჭერა და საიტის განვითარება</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  გჭირდებათ საიტის შექმნა?
                </h3>

                <p className="text-white/75 leading-8 mb-6">
                  მოგვწერეთ ან დაგვირეკეთ და დაგეხმარებით სწორად შეარჩიოთ
                  ვებსაიტის ტიპი, ფუნქციონალი და ბიუჯეტი.
                </p>

                <a
                  href="tel:+995555137003"
                  className="
          inline-flex
          items-center
          justify-center
          px-7
          py-4
          rounded-full
          bg-accent
          text-white
          font-semibold
          hover:scale-105
          transition-all
          shadow-lg
        "
                >
                  დაგვიკავშირდით
                </a>
              </div>
            </div>
          </motion.section>
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
        </div>
      )}

      {/* Service schema (uses the defined constant) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development — Next Hub Solutions",
            provider: {
              "@type": "Organization",
              name: "Next Hub Solutions",
              url: "https://next-hub.pro",
            },
            areaServed: "Georgia",
            url: CANONICAL,
          }),
        }}
      />
    </>
  );
};

export default WebDevelopment;
