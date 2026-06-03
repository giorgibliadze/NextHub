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
    {
      src: "/well-structured-3.webp",
      alt: "ვებსაიტის დამზადება და საიტის სტრუქტურა",
    },
    {
      src: "/technology.webp",
      alt: "Next.js და WordPress ვებ დეველოპმენტი",
    },
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
        title="ვებსაიტის დამზადება, საიტის შექმნა და ონლაინ მაღაზიის აწყობა | Next-Hub"
        description="ვებსაიტის დამზადება, საიტის შექმნა, ონლაინ მაღაზიის აწყობა, WordPress და Next.js დეველოპმენტი. SEO ოპტიმიზაცია, სწრაფი ვებგვერდები და ბიზნესზე მორგებული გადაწყვეტილებები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          // site_name: "Next-Hub Solutions",
          title: "ვებსაიტის დამზადება და საიტის შექმნა | Next-Hub",
          description:
            "თანამედროვე ვებსაიტების, ონლაინ მაღაზიებისა და ვებ აპლიკაციების შექმნა. SEO ოპტიმიზაცია, სწრაფი ჩატვირთვა და ბიზნესზე მორგებული გადაწყვეტილებები.",
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
          {
            name: "keywords",
            content:
              "ვებსაიტის დამზადება, საიტის შექმნა, ვებ საიტის დამზადება, ვებ გვერდის შექმნა, ვებსაიტების დამზადება, ონლაინ მაღაზიის შექმნა, ონლაინ მაღაზიის დამზადება, wordpress საიტის შექმნა, next js development, web development georgia, website development georgia, website design georgia, seo ოპტიმიზაცია, ბიზნეს საიტი, კორპორატიული ვებსაიტი, next hub",
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
        <div className="flex min-h-screen flex-col items-center justify-start px-4 md:px-8 xl:px-10 py-28 md:py-44 smx:text-center overflow-x-hidden">
          <motion.h1
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-6xl font-bold xl:mt-8 text-center"
          >
            ვებსაიტის დამზადება <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 mt-10 md:mb-16 w-full"
          >
            <ImageGallery images={images} />
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                ვებ დეველოპმენტი
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                ვებსაიტის დამზადება <br />
                (საიტის შექმნა)
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                Next-Hub ქმნის თანამედროვე, სწრაფ და SEO-ზე მორგებულ ვებსაიტებს
                ბიზნესებისთვის, რომლებიც ონლაინ სივრცეში სანდოობასა და შედეგზე
                არის ორიენტირებული.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ბიზნეს საიტები
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამზადებთ კომპანიის პრეზენტაციულ ვებსაიტებს, რომლებიც სწორად
                  წარმოაჩენს ბრენდს, სერვისებსა და საკონტაქტო ინფორმაციას.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ონლაინ მაღაზიები
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვქმნით ონლაინ მაღაზიებს პროდუქციის კატალოგით, შეკვეთებით,
                  გადახდებითა და მომხმარებლისთვის მარტივი მართვის სისტემით.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  SEO ოპტიმიზაცია
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვებგვერდის სტრუქტურას ვაწყობთ ისე, რომ Google-მა სწორად
                  წაიკითხოს გვერდები, სერვისები და მნიშვნელოვანი საძიებო
                  ფრაზები.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-10 md:mb-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  რა შედის ვებსაიტის შექმნის სერვისში?
                </h3>

                <ul className="space-y-3 text-white/75 leading-7 text-sm md:text-base">
                  <li>• ინდივიდუალური დიზაინის დაგეგმვა</li>
                  <li>• მობილურ ვერსიაზე მორგებული ვებსაიტი</li>
                  <li>• WordPress ან Next.js ტექნოლოგიით აწყობა</li>
                  <li>• Google Analytics და Search Console ინტეგრაცია</li>
                  <li>• ტექნიკური მხარდაჭერა და საიტის განვითარება</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  გჭირდებათ საიტის შექმნა?
                </h3>

                <p className="text-white/75 leading-7 md:leading-8 mb-6 text-sm md:text-base">
                  მოგვწერეთ ან დაგვირეკეთ და დაგეხმარებით სწორად შეარჩიოთ
                  ვებსაიტის ტიპი, ფუნქციონალი და ბიუჯეტი.
                </p>

                <a
                  href="tel:+995555137003"
                  className="inline-flex items-center justify-center w-full md:w-auto px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg"
                >
                  დაგვიკავშირდით
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  ვებსაიტის დამზადება საქართველოში
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  ვამზადებთ თანამედროვე ვებსაიტებს ქართული ბიზნესებისთვის,
                  რომლებსაც სურთ Google-ში უკეთ გამოჩენა, მომხმარებლის ნდობის
                  გაზრდა და ონლაინ გაყიდვების განვითარება.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  საიტის შექმნა ბიზნესისთვის
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  სწორად აწყობილი ბიზნეს საიტი ეხმარება კომპანიას სერვისების
                  წარმოჩენაში, მომხმარებელთან კომუნიკაციაში და ახალი კლიენტების
                  მოზიდვაში.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  ონლაინ მაღაზიის დამზადება
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  ვქმნით ონლაინ მაღაზიებს პროდუქციის მართვით, შეკვეთების
                  სისტემით, გადახდებით, კატალოგით და მომხმარებლისთვის მარტივი
                  გამოცდილებით.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  WordPress და Next.js ვებ დეველოპმენტი
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  პროექტის საჭიროებიდან გამომდინარე ვიყენებთ WordPress-ს,
                  Elementor-ს, WooCommerce-ს, Next.js-ს და React-ს, რათა საიტი
                  იყოს სწრაფი, მოქნილი და მარტივად განვითარებადი.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center"
          >
            <TechnologyIcons />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full"
          >
            {priceCardsData.map((cardData, index) => (
              <PriceCard key={index} {...cardData} />
            ))}
          </motion.div>
        </div>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ვებსაიტის დამზადება",
            serviceType: "Web Development",
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
            url: CANONICAL,
            description:
              "ვებსაიტის დამზადება, საიტის შექმნა, ონლაინ მაღაზიის აწყობა, WordPress და Next.js დეველოპმენტი, SEO ოპტიმიზაცია.",
            offers: {
              "@type": "Offer",
              priceCurrency: "GEL",
              price: "1000",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
};

export default WebDevelopment;
