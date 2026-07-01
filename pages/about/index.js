import Link from "next/link";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { fadeIn } from "../../variants";

const CANONICAL = "https://next-hub.pro/about";

const title =
  "ჩვენს შესახებ | Next-Hub Solutions";
const description =
  "გაიგეთ ვინ არის Next-Hub Solutions: ვებსაიტების დამზადების, SEO ოპტიმიზაციის, ვებ დიზაინისა და ციფრული განვითარების გუნდი საქართველოში.";

const services = [
  {
    title: "ვებსაიტის დამზადება",
    href: "/webdevelopment",
    text: "ვამზადებთ სწრაფ, მობილურზე მორგებულ და SEO-სთვის სწორად სტრუქტურირებულ ვებსაიტებს. მთავარი მიზანია საიტმა გააჩინოს ნდობა, მკაფიოდ აჩვენოს სერვისები და ვიზიტორი კონტაქტამდე მიიყვანოს.",
  },
  {
    title: "ონლაინ მაღაზიის შექმნა",
    href: "/webdevelopment",
    text: "ვქმნით ecommerce პლატფორმებს პროდუქციის კატალოგით, გადახდებით, შეკვეთის ლოგიკით და მართვის კომფორტული სისტემით. ონლაინ მაღაზია იგეგმება გაყიდვების, სიჩქარისა და მომხმარებლის მარტივი გზის მიხედვით.",
  },
  {
    title: "პროგრამული უზრუნველყოფის შექმნა",
    href: "/software-development",
    text: "ვქმნით ინდივიდუალურ ვებ აპლიკაციებს, პორტალებს, CRM ტიპის სისტემებს და ბიზნეს პროცესებზე მორგებულ ხელსაწყოებს. გადაწყვეტილება იგეგმება ისე, რომ რეალურად გაამარტივოს ოპერაციები.",
  },
  {
    title: "ვებ დიზაინი",
    href: "/web-design",
    text: "ვქმნით თანამედროვე UI/UX დიზაინს, რომელიც ბრენდს პრემიუმად და სანდოდ აჩვენებს. განსაკუთრებულ ყურადღებას ვაქცევთ მობილურ გამოცდილებას, კონტენტის იერარქიას და CTA-ებს.",
  },
  {
    title: "SEO ოპტიმიზაცია",
    href: "/seo-services",
    text: "ვამუშავებთ ტექნიკურ SEO-ს, metadata-ს, გვერდების სტრუქტურას, შიდა ბმულებს და კონტენტის ლოგიკას. მიზანია Google-მა უკეთ გაიგოს თქვენი სერვისები და მომხმარებელმა მარტივად გიპოვოთ.",
  },
  {
    title: "Google Business Profile ოპტიმიზაცია",
    href: "/google-business-profile-optimization",
    text: "ვამზადებთ და ვაუმჯობესებთ Google Business Profile-ს ლოკალური ძიებისა და Google Maps ხილვადობისთვის. ეს განსაკუთრებით მნიშვნელოვანია სერვისულ და ლოკალურ ბიზნესებში.",
  },
  {
    title: "საიტის მოვლა და ტექნიკური მხარდაჭერა",
    href: "/website-maintenance-services",
    text: "ვზრუნავთ საიტის უსაფრთხოებაზე, განახლებებზე, შეცდომების გასწორებაზე, სიჩქარეზე და სტაბილურ მუშაობაზე. მხარდაჭერა ეხმარება ბიზნესს საიტი მუდმივად აქტიური და გამართული ჰქონდეს.",
  },
  {
    title: "ანალიტიკა და Conversion Tracking",
    href: "/services/analytics",
    text: "ვაყენებთ Google Analytics-ს, Search Console-ს, Microsoft Clarity-ს და კონვერსიების გაზომვის სისტემებს. მონაცემები გეხმარებათ გაიგოთ, საიდან მოდიან მომხმარებლები და რა მუშაობს უკეთ.",
  },
];

const benefits = [
  {
    title: "ბიზნესზე მორგებული მიდგომა",
    text: "პროექტს ვგეგმავთ ბიზნეს მიზნებიდან, აუდიტორიიდან და გაყიდვების პროცესიდან გამომდინარე.",
  },
  {
    title: "SEO პირველივე დღიდან",
    text: "სტრუქტურა, სათაურები, URL-ები და ტექნიკური საფუძველი თავიდანვე Google-ისთვის სწორად ეწყობა.",
  },
  {
    title: "სწრაფი და თანამედროვე ტექნოლოგიები",
    text: "ვიყენებთ Next.js-ს, React-ს, WordPress-ს და სხვა ტექნოლოგიებს პროექტის საჭიროების მიხედვით.",
  },
  {
    title: "მობილურზე იდეალური გამოცდილება",
    text: "გვერდები იგეგმება ისე, რომ ტელეფონიდან კითხვა, ნავიგაცია და კონტაქტი მარტივი იყოს.",
  },
  {
    title: "უსაფრთხოება და სტაბილურობა",
    text: "ყურადღებას ვაქცევთ დაცვას, განახლებებს, სარეზერვო მიდგომებს და საიტის საიმედო მუშაობას.",
  },
  {
    title: "მხარდაჭერა გაშვების შემდეგ",
    text: "გაშვების შემდეგაც ვეხმარებით ბიზნესს ტექნიკურ მოვლაში, გაუმჯობესებასა და განვითარებაში.",
  },
];

const processSteps = [
  ["01", "კონსულტაცია", "ვიგებთ იდეას, მიზანს, ვადებს, ბიუჯეტს და ვარჩევთ პროექტისთვის სწორ მიმართულებას."],
  ["02", "ბიზნესის ანალიზი", "ვაფასებთ აუდიტორიას, კონკურენტებს, სერვისებს, გაყიდვების გზას და ციფრულ შესაძლებლობებს."],
  ["03", "სტრუქტურა და UI/UX დიზაინი", "ვაწყობთ გვერდების ლოგიკას, კონტენტის იერარქიას, CTA-ებს და ვიზუალურ სისტემას."],
  ["04", "დეველოპმენტი", "ვქმნით სწრაფ, responsive და მართვად ვებსაიტს, მაღაზიას ან ინდივიდუალურ ვებ აპლიკაციას."],
  ["05", "SEO და ტექნიკური ოპტიმიზაცია", "ვამზადებთ metadata-ს, schema-ს, სიჩქარეს, ანალიტიკას და Search Console-ის საფუძველს."],
  ["06", "გაშვება", "ვტესტავთ მობილურს, ფორმებს, ბმულებს, სიჩქარეს, უსაფრთხოებას და პროექტს ვუშვებთ რეალურ გარემოში."],
  ["07", "მხარდაჭერა და განვითარება", "ვაგრძელებთ ტექნიკურ მხარდაჭერას, გაუმჯობესებებს, კონტენტის განახლებას და შედეგების ანალიზს."],
];

const stats = [
  ["40+", "დასრულებული პროექტი"],
  ["95%", "კმაყოფილი მომხმარებელი"],
  ["99%", "ტექნიკური სტაბილურობის მიზანი"],
  ["24/7", "მხარდაჭერის შესაძლებლობა"],
];

const technologies = [
  "Next.js",
  "React",
  "WordPress",
  "WooCommerce",
  "Tailwind CSS",
  "Google Analytics",
  "Search Console",
  "Microsoft Clarity",
  "Vercel",
  "Prisma",
];

const faqs = [
  {
    question: "რას აკეთებს Next-Hub Solutions?",
    answer:
      "Next-Hub Solutions ქმნის ვებსაიტებს, ონლაინ მაღაზიებს, ვებ აპლიკაციებს, SEO სტრუქტურას, Google Business Profile ოპტიმიზაციას და საიტის ტექნიკურ მხარდაჭერას ბიზნესებისთვის საქართველოში.",
  },
  {
    question: "რა ტიპის ვებსაიტებს ქმნით?",
    answer:
      "ვამზადებთ ბიზნეს ვებსაიტებს, landing page-ებს, კორპორატიულ გვერდებს, ecommerce მაღაზიებს, სერვისის საიტებს, კატალოგებს და ინდივიდუალურ ვებ აპლიკაციებს.",
  },
  {
    question: "მუშაობთ თუ არა WordPress-ზე?",
    answer:
      "დიახ. WordPress-ს ვიყენებთ მაშინ, როცა ბიზნესს სჭირდება მარტივად სამართავი საიტი, ბლოგი, მომსახურებების გვერდები ან WooCommerce ონლაინ მაღაზია.",
  },
  {
    question: "მუშაობთ თუ არა Next.js-ზე?",
    answer:
      "დიახ. Next.js-ს ვიყენებთ სწრაფი, SEO-ზე მორგებული და მასშტაბირებადი ვებსაიტებისა და ვებ აპლიკაციებისთვის, სადაც მნიშვნელოვანია სიჩქარე და მოქნილი არქიტექტურა.",
  },
  {
    question: "აკეთებთ თუ არა SEO ოპტიმიზაციას?",
    answer:
      "დიახ. ვამზადებთ ტექნიკურ SEO-ს, metadata-ს, schema markup-ს, შიდა ბმულებს, გვერდების სტრუქტურას და Search Console-ის საფუძველს.",
  },
  {
    question: "რამდენ ხანში მზადდება ვებსაიტი?",
    answer:
      "ვადა დამოკიდებულია პროექტის ზომასა და ფუნქციონალზე. მარტივი ვებსაიტი ხშირად მზადდება რამდენიმე კვირაში, ხოლო ონლაინ მაღაზია ან ინდივიდუალური სისტემა საჭიროებს უფრო დეტალურ დაგეგმვას.",
  },
  {
    question: "გთავაზობთ თუ არა ტექნიკურ მხარდაჭერას?",
    answer:
      "დიახ. გთავაზობთ საიტის მოვლას, უსაფრთხოების განახლებებს, შეცდომების გასწორებას, სიჩქარის გაუმჯობესებას, ანალიტიკის მონიტორინგს და განვითარების მხარდაჭერას.",
  },
  {
    question: "როგორ მივიღო კონსულტაცია?",
    answer:
      "კონსულტაციის მისაღებად გადადით კონტაქტის გვერდზე, მოგვწერეთ პროექტის შესახებ ან დაგვიკავშირდით მითითებულ საკონტაქტო არხებზე.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://next-hub.pro/#organization",
      name: "Next-Hub Solutions",
      url: "https://next-hub.pro",
      logo: "https://next-hub.pro/favicon.jpg",
      image: "https://next-hub.pro/nexthub.jpg",
      email: "info@next-hub.pro",
      telephone: "+995555137003",
      description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tbilisi",
        addressCountry: "GE",
      },
      areaServed: {
        "@type": "Country",
        name: "Georgia",
      },
      knowsAbout: technologies,
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `https://next-hub.pro${service.href}`,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "მთავარი",
          item: "https://next-hub.pro/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "ჩვენ შესახებ",
          item: CANONICAL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${CANONICAL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const SectionLabel = ({ children }) => (
  <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
    {children}
  </span>
);

const About = () => {
  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title={title}
        description={description}
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title,
          description,
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions ჩვენ შესახებ",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
          { name: "author", content: "Next-Hub Solutions" },
          { name: "robots", content: "index,follow,max-image-preview:large" },
          {
            name: "keywords",
            content:
              "NextHub, Next-Hub Solutions, ვებსაიტების დამზადება, საიტის შექმნა, ვებ დეველოპერი საქართველო, ციფრული სააგენტო საქართველო, website development Georgia, digital agency Georgia, web design Tbilisi, SEO Georgia",
          },
        ]}
      />

      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen overflow-x-hidden bg-primary/40 px-4 py-28 text-white md:px-8 md:py-32 xl:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-14 text-center md:mb-20"
          >
            <SectionLabel>Next-Hub Solutions</SectionLabel>
            <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight md:text-5xl xl:text-6xl">
              ვებსაიტის დამზადება და ბიზნესის ციფრული განვითარება საქართველოში
              <span className="text-accent">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-white/78 md:text-lg md:leading-9">
              Next-Hub Solutions ქმნის თანამედროვე ვებსაიტებს, ონლაინ მაღაზიებსა
              და ვებ აპლიკაციებს, რომლებიც მხოლოდ ლამაზად არ გამოიყურება — ისინი
              ზრდიან გაყიდვებს, აუმჯობესებენ Google-ში ხილვადობას და ეხმარებიან
              ბიზნესს განვითარებაში.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-white hover:text-accent"
            >
              კონსულტაცია
            </Link>
          </motion.section>

          <section className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <SectionLabel>ჩვენი ისტორია</SectionLabel>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  რატომ შეიქმნა Next-Hub?
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-7 text-white/72 md:text-base md:leading-8">
                <p>
                  Next-Hub შეიქმნა იმისთვის, რომ ქართულ ბიზნესებს ჰქონდეთ
                  თანამედროვე, სწრაფი და სანდო ციფრული პლატფორმები. ბევრ კომპანიას
                  აქვს ხარისხიანი პროდუქტი ან სერვისი, მაგრამ ონლაინ სივრცეში ვერ
                  აჩვენებს საკუთარ ღირებულებას ისე, როგორც ბაზარი მოითხოვს.
                </p>
                <p>
                  ჩვენი მიდგომა მხოლოდ დიზაინით არ იწყება და არც დიზაინით
                  მთავრდება. ვებსაიტი უნდა პასუხობდეს ბიზნეს მიზნებს, ზრდიდეს
                  ნდობას, ქმნიდეს ლიდებს, ეხმარებოდეს გაყიდვებს და მომხმარებელს
                  სწრაფად აძლევდეს საჭირო ინფორმაციას.
                </p>
                <p>
                  ყოველ პროექტში ვაერთიანებთ UX-ს, SEO-ს, სიჩქარეს, უსაფრთხოებას
                  და მობილურ გამოცდილებას. ასე ვქმნით პლატფორმას, რომელიც კარგად
                  გამოიყურება, სწრაფად მუშაობს და Google-ისთვისაც გასაგები
                  სტრუქტურით არის აწყობილი.
                </p>
                <p>
                  ჩვენი მიზანია ბიზნესს არ ჰქონდეს უბრალოდ ონლაინ სავიზიტო ბარათი.
                  ვქმნით ვებსაიტებს, რომლებიც აძლიერებს რეპუტაციას, ამარტივებს
                  კონტაქტს და კომპანიას ციფრულ გარემოში უფრო კონკურენტუნარიანს
                  ხდის.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-14 md:mb-20">
            <div className="mb-8 text-center md:mb-10">
              <SectionLabel>სერვისები</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">რას ვაკეთებთ</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <Link
                  key={`${service.href}-${service.title}`}
                  href={service.href}
                  prefetch={false}
                  className="group flex min-h-[250px] flex-col rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 md:p-6"
                >
                  <h3 className="mb-3 text-lg font-bold leading-7 text-accent">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/70">{service.text}</p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-white/75 group-hover:text-white">
                    გაიგე მეტი
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:rounded-[32px] md:p-8">
              <SectionLabel>უპირატესობები</SectionLabel>
              <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                რატომ Next-Hub?
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                ვმუშაობთ ისე, რომ თითოეული გადაწყვეტილება იყოს გასაგები,
                გაზომვადი და მომავალ განვითარებაზე მზად.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <h3 className="mb-3 text-base font-bold leading-7 text-white md:text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/65">{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10">
            <div className="mb-8 text-center md:mb-10">
              <SectionLabel>პროცესი</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">როგორ ვმუშაობთ</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map(([number, stepTitle, text]) => (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6"
                >
                  <div className="mb-4 text-sm font-bold text-accent">{number}</div>
                  <h3 className="mb-3 text-lg font-bold text-white">{stepTitle}</h3>
                  <p className="text-sm leading-7 text-white/68">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14 grid gap-4 md:mb-20 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-[24px] border border-accent/25 bg-accent/10 p-6 text-center shadow-[0_24px_80px_rgba(241,48,36,0.12)] backdrop-blur-md"
              >
                <div className="text-3xl font-bold text-white md:text-4xl">
                  {value}
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{label}</p>
              </div>
            ))}
          </section>

          <section className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <SectionLabel>ტექნოლოგიები</SectionLabel>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  ტექნოლოგიას ვარჩევთ ბიზნეს ამოცანის მიხედვით
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                  Next.js და React გვაძლევს სწრაფ, მასშტაბირებად და SEO-ზე
                  მორგებულ გადაწყვეტებს. WordPress და WooCommerce კარგია მარტივად
                  სამართავი საიტებისა და ონლაინ მაღაზიებისთვის, ხოლო ანალიტიკის
                  ხელსაწყოები შედეგების გაზომვაში გვეხმარება.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-white/75 md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10">
            <SectionLabel>მისია</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight md:text-4xl">
              ჩვენი მისია
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-white/72 md:text-base md:leading-8">
              ჩვენი მიზანია, ქართულ ბიზნესებს ჰქონდეთ სწრაფი, უსაფრთხო და
              თანამედროვე ვებსაიტები, რომლებიც არა მხოლოდ კომპანიის სავიზიტო
              ბარათია, არამედ რეალურად ქმნის ახალ შესაძლებლობებს, ზრდის ნდობას
              და ეხმარება გაყიდვების ზრდას.
            </p>
          </section>

          <section className="mb-14 md:mb-20">
            <div className="mb-8 text-center md:mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">
                ხშირად დასმული კითხვები
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md md:p-6"
                >
                  <h3 className="mb-3 text-base font-bold leading-7 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-7 text-white/68">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mobile-bottom-safe-space rounded-[24px] border border-accent/30 bg-accent/10 p-6 text-center shadow-[0_24px_80px_rgba(241,48,36,0.14)] backdrop-blur-md md:rounded-[32px] md:p-10">
            <h2 className="mx-auto max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
              მზად ხართ თქვენი ბიზნესის შემდეგ ეტაპზე გადასასვლელად?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
              მოგვწერეთ და ერთად შევარჩიოთ სწორი ტექნოლოგია, დიზაინი, SEO
              სტრუქტურა და ბიუჯეტი თქვენი პროექტისთვის.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-7 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-accent shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-accent hover:text-white"
            >
              უფასო კონსულტაცია
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
