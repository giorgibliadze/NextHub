// components/WebDevelopment.jsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import PriceCard from "../../components/PriceCard";
import ImageGallery from "../../components/ImageGallery";
import Modal from "../../components/Modal";
import TechnologyIcons from "../../components/TechnologyIcons";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

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

  const internalLinks = [
    { href: "/web-design", label: "ვებ დიზაინი" },
    { href: "/software-development", label: "პროგრამული უზრუნველყოფა" },
    { href: "/seo-services", label: "SEO ოპტიმიზაცია" },
    {
      href: "/google-business-profile-optimization",
      label: "Google Business Profile",
    },
    {
      href: "/website-maintenance-services",
      label: "საიტის მხარდაჭერა",
    },
    { href: "/ai-faq", label: "AI FAQ" },
    { href: "/blog", label: "ბლოგი" },
    { href: "/contact", label: "კონტაქტი" },
  ];

  const processSteps = [
    {
      title: "ანალიზი და სტრატეგია",
      text: "ვიგებთ ბიზნესის მიზანს, აუდიტორიას, კონკურენტებს და ვწყვეტთ, რა ტიპის ვებსაიტი ან ონლაინ მაღაზია იმუშავებს ყველაზე კარგად.",
    },
    {
      title: "სტრუქტურა და ვებ დიზაინი",
      text: "ვაწყობთ გვერდების ლოგიკას, CTA-ებს, ნავიგაციას და ვიზუალურ მიმართულებას, რომ მომხმარებელი სწრაფად მივიდეს საჭირო მოქმედებამდე.",
    },
    {
      title: "ვებ დეველოპმენტი",
      text: "ვქმნით WordPress, WooCommerce, React ან Next.js გადაწყვეტას პროექტის სირთულის, მართვის საჭიროებისა და სიჩქარის მოთხოვნების მიხედვით.",
    },
    {
      title: "SEO და გაშვება",
      text: "ვამზადებთ მეტა მონაცემებს, schema markup-ს, ტექნიკურ SEO-ს, ანალიტიკას და გაშვების შემდეგ ვამოწმებთ მობილურ ვერსიასა და სიჩქარეს.",
    },
  ];

  const websiteTypes = [
    "ბიზნეს ვებსაიტი და სერვისების გვერდები",
    "კორპორატიული ვებსაიტი კომპანიისთვის",
    "ონლაინ მაღაზიის შექმნა გადახდებით",
    "Landing page კამპანიებისა და რეკლამისთვის",
    "პორტფოლიო, კატალოგი და ბრენდის პრეზენტაცია",
    "ინდივიდუალური ვებ აპლიკაცია და პორტალი",
  ];

  const caseStudies = [
    {
      title: "სერვისული კომპანია",
      text: "კორპორატიული ვებსაიტის სტრუქტურა დავგეგმეთ სერვისების მიხედვით, დავამატეთ კონტაქტის მკაფიო CTA-ები და Google-ში ინდექსაციისთვის საჭირო ტექნიკური საფუძველი.",
    },
    {
      title: "ონლაინ მაღაზია",
      text: "პროდუქციის კატალოგი, ფილტრები, კალათა და გადახდის პროცესი ავაწყვეთ ისე, რომ მომხმარებელს ნაკლები ნაბიჯი დასჭირდეს შეკვეთამდე.",
    },
    {
      title: "ბრენდის პრეზენტაცია",
      text: "Next.js ვებსაიტის დამზადება გამოვიყენეთ სწრაფი ჩატვირთვისთვის, სუფთა გვერდების სტრუქტურისთვის და მომავალი SEO კონტენტის მარტივად დასამატებლად.",
    },
  ];

  const faqItems = [
    {
      question: "რა ღირს ვებსაიტის დამზადება?",
      answer:
        "ფასი დამოკიდებულია გვერდების რაოდენობაზე, დიზაინზე, ფუნქციონალზე, CMS-ზე, ონლაინ გადახდებზე და SEO მოთხოვნებზე. ამ გვერდზე არსებული პაკეტები იწყება 1000 ლარიდან.",
    },
    {
      question: "რამდენი დრო სჭირდება საიტის შექმნას?",
      answer:
        "მარტივი საიტი ხშირად 1-3 კვირაში მზადდება, ხოლო ონლაინ მაღაზია ან ინდივიდუალური ფუნქციონალის მქონე პროექტი მეტ დროს მოითხოვს. ვადებს ვადგენთ მოთხოვნების განხილვის შემდეგ.",
    },
    {
      question: "აკეთებთ ვებსაიტის დამზადებას თბილისში?",
      answer:
        "დიახ. ვმუშაობთ თბილისშიც და მთელ საქართველოში. კომუნიკაცია შესაძლებელია ონლაინ, შეხვედრით ან ზარით, პროექტის საჭიროებიდან გამომდინარე.",
    },
    {
      question: "WordPress საიტის შექმნა ჯობია თუ Next.js?",
      answer:
        "WordPress კარგია, როცა საჭიროა მარტივი მართვა და სწრაფი კონტენტის განახლება. Next.js უკეთესია სწრაფი, მასშტაბირებადი და ინდივიდუალური ვებსაიტებისთვის.",
    },
    {
      question: "შეგიძლიათ ონლაინ მაღაზიის შექმნა?",
      answer:
        "დიახ. ვქმნით ონლაინ მაღაზიებს კატალოგით, კალათით, შეკვეთებით, გადახდებით, ფილტრებით, მომხმარებლის ანგარიშებით და ადმინისტრირების პანელით.",
    },
    {
      question: "შედის SEO ოპტიმიზაცია ვებ დეველოპმენტში?",
      answer:
        "საწყის ეტაპზე ვამზადებთ SEO-ready სტრუქტურას: სათაურებს, მეტა აღწერებს, URL ლოგიკას, schema markup-ს, სიჩქარეს და მობილურ ოპტიმიზაციას. სრული SEO კამპანია ცალკე სერვისადაც გვაქვს.",
    },
    {
      question: "ვებსაიტი მობილურზე სწორად იმუშავებს?",
      answer:
        "დიახ. ყველა პროექტს ვაწყობთ responsive პრინციპით, რომ საიტი სწორად გამოჩნდეს ტელეფონზე, ტაბლეტსა და desktop ეკრანებზე.",
    },
    {
      question: "შეგიძლიათ არსებული საიტის განახლება?",
      answer:
        "დიახ. შეგვიძლია არსებული ვებსაიტის დიზაინის, სიჩქარის, SEO სტრუქტურის, კონტენტის ან ტექნიკური ნაწილის გაუმჯობესება.",
    },
    {
      question: "ვებსაიტის გაშვების შემდეგ მხარდაჭერას იღებთ?",
      answer:
        "დიახ. პაკეტებში შედის მხარდაჭერის პერიოდი, ხოლო დამატებით შეგვიძლია საიტის მოვლა, უსაფრთხოების განახლებები და ახალი ფუნქციების დამატება.",
    },
    {
      question: "გვჭირდება დომენი და ჰოსტინგი წინასწარ?",
      answer:
        "თუ უკვე გაქვთ, გამოვიყენებთ არსებულ ინფრასტრუქტურას. თუ არ გაქვთ, დაგეხმარებით დომენის, ჰოსტინგის და ტექნიკური გარემოს შერჩევაში.",
    },
    {
      question: "გვეხმარებით კონტენტის მომზადებაში?",
      answer:
        "დიახ. შეგვიძლია დაგეხმაროთ გვერდების სტრუქტურაში, ტექსტების დახვეწაში, SEO სათაურებში და ვიზუალური მასალის სწორად განაწილებაში.",
    },
    {
      question: "შეგიძლიათ ვებსაიტის დამზადება საქართველოში მოქმედი ბიზნესისთვის?",
      answer:
        "დიახ. ვქმნით ქართულ ბაზარზე მორგებულ ვებსაიტებს, სადაც გათვალისწინებულია ადგილობრივი ძიება, მომხმარებლის ქცევა, საკონტაქტო არხები და Google Business Profile კავშირი.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${CANONICAL}#service`,
        name: "ვებსაიტის დამზადება",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "Next-Hub Solutions",
          url: "https://next-hub.pro",
          logo: "https://next-hub.pro/favicon.ico",
        },
        areaServed: {
          "@type": "Country",
          name: "Georgia",
        },
        url: CANONICAL,
        description:
          "ვებსაიტის დამზადება, საიტის შექმნა, ონლაინ მაღაზიის შექმნა, WordPress და Next.js დეველოპმენტი, SEO-ready სტრუქტურა და მობილური ოპტიმიზაცია.",
        hasOfferCatalog: {
          "@id": `${CANONICAL}#offer-catalog`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "მთავარი",
            item: "https://next-hub.pro",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ვებსაიტის დამზადება",
            item: CANONICAL,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${CANONICAL}#offer-catalog`,
        name: "ვებსაიტის დამზადების პაკეტები",
        itemListElement: priceCardsData.map((card) => ({
          "@type": "Offer",
          name: card.title,
          price: String(card.price),
          priceCurrency: "GEL",
          availability: "https://schema.org/InStock",
          url: CANONICAL,
          itemOffered: {
            "@type": "Service",
            name: `${card.title} ვებსაიტის დამზადება`,
            serviceType: "Web Development",
          },
        })),
      },
    ],
  };

  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="ვებსაიტის დამზადება საქართველოში | საიტის შექმნა | Next-Hub"
        description="ვებსაიტის დამზადება თბილისში და საქართველოში: ბიზნეს ვებსაიტი, კორპორატიული ვებსაიტი, ონლაინ მაღაზიის შექმნა, WordPress და Next.js დეველოპმენტი SEO-ready სტრუქტურით."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "ვებსაიტის დამზადება საქართველოში | WordPress, Next.js და ონლაინ მაღაზია",
          description:
            "Next-Hub ქმნის სწრაფ, responsive და SEO-ready ვებსაიტებს: ბიზნეს საიტები, კორპორატიული ვებსაიტები, ონლაინ მაღაზიები, WordPress და Next.js პროექტები.",
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
            name: "twitter:title",
            content:
              "ვებსაიტის დამზადება საქართველოში | საიტის შექმნა | Next-Hub",
          },
          {
            name: "twitter:description",
            content:
              "ბიზნეს ვებსაიტი, ონლაინ მაღაზია, WordPress საიტი და Next.js ვებსაიტი SEO-ready სტრუქტურით.",
          },
          {
            name: "twitter:image",
            content: "https://next-hub.pro/web.jpg",
          },
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
              "ვებსაიტის დამზადება, საიტის შექმნა, ვებ დეველოპმენტი, ვებ დიზაინი, ონლაინ მაღაზიის შექმნა, WordPress საიტის შექმნა, Next.js ვებსაიტის დამზადება, SEO ოპტიმიზაცია, ბიზნეს ვებსაიტი, კორპორატიული ვებსაიტი, ვებსაიტის დამზადება თბილისში, ვებსაიტის დამზადება საქართველოში",
          },
        ]}
      />

      <Script
        id="web-development-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
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

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6"
          >
            <div className="rounded-[24px] md:rounded-[32px] border border-accent/30 bg-accent/10 p-6 md:p-8">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-black/25 text-accent text-xs md:text-sm font-semibold">
                AI შეჯამება
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                ვებსაიტის დამზადება Next-Hub Solutions-ში
              </h2>
              <p className="text-white/75 leading-7 md:leading-8 text-sm md:text-base max-w-4xl">
                Next-Hub Solutions თბილისში ქმნის SEO-ზე მორგებულ ბიზნეს
                ვებსაიტებს, ონლაინ მაღაზიებს, WordPress და Next.js პროექტებს.
                სერვისი აერთიანებს სტრუქტურას, ვებ დიზაინს, დეველოპმენტს,
                სიჩქარის ოპტიმიზაციას, schema markup-ს და გაშვების შემდეგ
                ტექნიკურ მხარდაჭერას.
              </p>
              <Link
                href="/ai-faq"
                className="inline-flex mt-5 text-accent font-semibold hover:text-white transition-colors"
              >
                Next-Hub-ის AI FAQ
              </Link>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-start">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  რატომ არის საჭირო
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  პროფესიონალური ვებსაიტი ბიზნესისთვის
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  თანამედროვე მომხმარებელი კომპანიას ხშირად Google-ით, სოციალური
                  ქსელით ან რეკლამიდან პოულობს. თუ საიტი სწრაფი, გასაგები და
                  სანდოა, ბიზნესს უფრო მარტივად უჩნდება ახალი ლიდები,
                  ზარები, შეკვეთები და შეხვედრები. ამიტომ ვებსაიტის დამზადება
                  მხოლოდ ვიზუალური გვერდის შექმნა არ არის - ეს არის გაყიდვების,
                  ნდობისა და ბრენდის ციფრული საფუძველი.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "სწორად აჩვენებს სერვისებს და ფასეულობას",
                  "ზრდის ნდობას ახალ მომხმარებელთან",
                  "ამზადებს ბიზნესს Google-ში ხილვადობისთვის",
                  "აკავშირებს რეკლამას, SEO-ს და გაყიდვებს",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-black/20 border border-white/10 p-5"
                  >
                    <p className="text-white/75 leading-7 text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                პროცესი
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                როგორ ვქმნით ვებსაიტს
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                საიტის შექმნა იწყება არა კოდით, არამედ მიზნის გაგებით. ასე
                ვიღებთ ვებ დეველოპმენტს, რომელიც ლამაზიც არის, ტექნიკურად
                გამართულიც და ბიზნესისთვის გასაგები შედეგის მომტანიც.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
                >
                  <div className="w-10 h-10 mb-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  ტიპები
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  რა ტიპის ვებსაიტებს ვამზადებთ
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-6">
                  ვებ დიზაინი და ტექნოლოგია დამოკიდებულია მიზანზე: ზოგ ბიზნესს
                  სჭირდება მარტივი პრეზენტაცია, ზოგს - კორპორატიული ვებსაიტი,
                  ზოგს კი სრული ონლაინ გაყიდვების სისტემა.
                </p>
                <Link
                  href="/web-design"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  ნახეთ ვებ დიზაინის სერვისი
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {websiteTypes.map((type) => (
                  <div
                    key={type}
                    className="rounded-2xl bg-black/20 border border-white/10 p-5"
                  >
                    <p className="text-white/75 leading-7 text-sm md:text-base">
                      {type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                ტექნოლოგია
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                WordPress თუ Next.js?
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                ორივე ტექნოლოგიას აქვს თავისი ადგილი. არჩევანს ვაკეთებთ იმის
                მიხედვით, გჭირდებათ მარტივი მართვა, მაღალი სიჩქარე, ინდივიდუალური
                ფუნქციონალი თუ მასშტაბირებადი პროდუქტი.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  WordPress საიტის შექმნა
                </h3>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  WordPress კარგია კომპანიის ვებსაიტისთვის, ბლოგისთვის,
                  კატალოგისთვის და ისეთი პროექტებისთვის, სადაც გუნდს სურს
                  გვერდების, ტექსტებისა და სურათების დამოუკიდებლად მართვა.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  Next.js ვებსაიტის დამზადება
                </h3>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  Next.js უკეთ მუშაობს სწრაფ, SEO-ზე ორიენტირებულ და
                  ინდივიდუალურ პროექტებზე, სადაც მნიშვნელოვანია წარმადობა,
                  უსაფრთხო არქიტექტურა და მომავალში ფუნქციონალის გაზრდა.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-start">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  E-commerce
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  ონლაინ მაღაზიის შექმნა
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  ონლაინ მაღაზია უნდა იყოს მარტივი როგორც მომხმარებლისთვის, ისე
                  ადმინისტრატორისთვის. ვქმნით კატალოგს, კალათას, შეკვეთებს,
                  გადახდებს, მიწოდების ლოგიკას და ანალიტიკას ისე, რომ გაყიდვების
                  პროცესი ზედმეტად არ გართულდეს.
                </p>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  რთული ინტეგრაციების, CRM-ის, ERP-ის ან პირადი კაბინეტის
                  შემთხვევაში პროექტს ვუკავშირებთ ჩვენს{" "}
                  <Link
                    href="/software-development"
                    className="text-accent font-semibold hover:text-white transition-colors"
                  >
                    პროგრამული უზრუნველყოფის შექმნის
                  </Link>{" "}
                  მიმართულებას.
                </p>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                  რას ვამატებთ მაღაზიას
                </h3>
                <ul className="space-y-3 text-white/75 leading-7 text-sm md:text-base">
                  <li>• პროდუქციის კატეგორიები და ფილტრები</li>
                  <li>• კალათა, შეკვეთა და ონლაინ გადახდა</li>
                  <li>• მომხმარებლის ანგარიში და შეკვეთების ისტორია</li>
                  <li>• Google Analytics და კონვერსიის გაზომვა</li>
                  <li>• SEO-ready კატეგორიები და პროდუქტის გვერდები</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  SEO სტრუქტურა
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  საიტი მზად უნდა იყოს Google-ისთვის
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  SEO ოპტიმიზაცია იწყება სწორი არქიტექტურით: გასაგები URL-ები,
                  სათაურები, შიდა ბმულები, schema markup, სწრაფი გვერდები და
                  კონტენტი, რომელიც მომხმარებელსაც ეხმარება და საძიებო სისტემასაც.
                </p>
                <Link
                  href="/seo-services"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  გაიგეთ მეტი SEO სერვისებზე
                </Link>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-7">
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  სიჩქარე და მობილური
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  სწრაფი ჩატვირთვა და responsive გამოცდილება
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base mb-5">
                  მომხმარებელი გვერდს წამებში აფასებს. ამიტომ ვამოწმებთ
                  სურათებს, კოდის მოცულობას, Core Web Vitals-ს, მობილურ
                  ნავიგაციას და კონტაქტის ღილაკებს, რომ საიტი რეალურად გამოიყენებოდეს.
                </p>
                <Link
                  href="/website-maintenance-services"
                  className="text-accent font-semibold hover:text-white transition-colors"
                >
                  საიტის მხარდაჭერა და გაუმჯობესება
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                მაგალითები
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                პროექტების ტიპური სცენარები
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                თითოეულ პროექტში მთავარი ამოცანაა ბიზნესის მიზნის დაკავშირება
                დიზაინთან, ტექნოლოგიასთან და კონვერსიასთან.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {caseStudies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6"
                >
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-7 text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                კითხვები
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                ხშირად დასმული კითხვები
              </h2>
              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-base leading-7 md:leading-8">
                აქ არის მოკლე პასუხები იმ თემებზე, რომლებსაც ვებსაიტის
                დამზადებამდე ყველაზე ხშირად განვიხილავთ.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6 group"
                >
                  <summary className="cursor-pointer list-none text-base md:text-lg font-bold text-white flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-white/70 leading-7 text-sm md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-6xl mx-auto mb-14 md:mb-20 px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-8 md:gap-10 items-center">
              <div>
                <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                  შემდეგი ნაბიჯი
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-5 leading-tight">
                  მზად ხართ ბიზნეს ვებსაიტის დასაგეგმად?
                </h2>
                <p className="text-white/70 leading-7 md:leading-8 text-sm md:text-base">
                  მოგვწერეთ და ერთად შევარჩიოთ, გჭირდებათ WordPress საიტის
                  შექმნა, Next.js ვებსაიტის დამზადება, ონლაინ მაღაზია თუ
                  კორპორატიული ვებსაიტი. კონსულტაციისას დაგეხმარებით
                  ფუნქციონალის, ვადებისა და ბიუჯეტის დალაგებაში.
                </p>
              </div>

              <div className="rounded-3xl bg-accent/10 border border-accent/30 p-5 md:p-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-7 py-4 rounded-full bg-accent text-white font-semibold hover:scale-105 transition-all shadow-lg mb-5"
                >
                  მოითხოვეთ კონსულტაცია
                </Link>
                <div className="flex flex-wrap gap-3">
                  {internalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 rounded-full bg-black/20 border border-white/10 text-white/75 text-xs md:text-sm hover:text-accent hover:border-accent/40 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
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
            className="mobile-bottom-safe-space grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-10 w-full"
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

export default WebDevelopment;
