import Link from "next/link";
import TeamMember from "../../components/TeamMember";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { fadeIn } from "../../variants";

const CANONICAL = "https://next-hub.pro/about";

const serviceCards = [
  {
    title: "ვებსაიტის დამზადება",
    href: "/webdevelopment",
    text: "ვქმნით სწრაფ, მობილურზე მორგებულ და SEO-ზე დაფუძნებულ ვებსაიტებს ქართული ბიზნესებისთვის.",
  },
  {
    title: "ვებ დიზაინი",
    href: "/web-design",
    text: "ვაწყობთ ვიზუალურ სისტემას, რომელიც ბრენდს სანდოდ აჩვენებს და მომხმარებელს მარტივად ატარებს მოქმედებამდე.",
  },
  {
    title: "SEO ოპტიმიზაცია",
    href: "/seo-services",
    text: "ვამუშავებთ ტექნიკურ SEO-ს, კონტენტს, metadata-ს, შიდა ბმულებს და სტრუქტურას Google-ში უკეთესი ხილვადობისთვის.",
  },
  {
    title: "Google Business Profile ოპტიმიზაცია",
    href: "/google-business-profile-optimization",
    text: "ვაუმჯობესებთ ლოკალურ ძიებას, Google Maps ხილვადობას და მომხმარებლისთვის საჭირო ბიზნეს ინფორმაციას.",
  },
  {
    title: "პროგრამული უზრუნველყოფის შექმნა",
    href: "/software-development",
    text: "ვამზადებთ ინდივიდუალურ ვებ აპლიკაციებს, პორტალებს და ბიზნეს პროცესებზე მორგებულ ციფრულ სისტემებს.",
  },
  {
    title: "საიტის მოვლა",
    href: "/website-maintenance-services",
    text: "ვზრუნავთ უსაფრთხოებაზე, განახლებებზე, სიჩქარეზე, შეცდომების გასწორებაზე და სტაბილურ მუშაობაზე.",
  },
];

const reasons = [
  "ბიზნესზე მორგებული მიდგომა",
  "SEO-ზე ორიენტირებული სტრუქტურა",
  "სწრაფი და თანამედროვე ტექნოლოგიები",
  "რეალური პროექტების გამოცდილება",
  "მხარდაჭერა გაშვების შემდეგ",
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
];

const trustSignals = [
  "ბიზნეს ვებსაიტები",
  "ონლაინ მაღაზიები",
  "სერვისის ვებსაიტები",
  "ლოკალური SEO",
  "Google Business Profile",
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
      description:
        "Next-Hub Solutions ქმნის ვებსაიტებს, SEO სტრუქტურას, Google Business Profile ოპტიმიზაციას და ციფრულ გადაწყვეტილებებს ბიზნესებისთვის საქართველოში.",
      email: "info@next-hub.pro",
      telephone: "+995555137003",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tbilisi",
        addressCountry: "GE",
      },
      areaServed: {
        "@type": "Country",
        name: "Georgia",
      },
      founder: [
        {
          "@type": "Person",
          name: "თეო ოთხოზორია",
          jobTitle: "CEO",
        },
        {
          "@type": "Person",
          name: "გიორგი ბლიაძე",
          jobTitle: "CTO",
        },
      ],
      knowsAbout: [
        "Website Development",
        "Web Design",
        "SEO Optimization",
        "Google Business Profile Optimization",
        "Software Development",
        "Website Maintenance",
        "Local SEO Georgia",
      ],
      makesOffer: serviceCards.map((service) => ({
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
  ],
};

const About = () => {
  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="ჩვენ შესახებ | Next-Hub Solutions - ვებსაიტები, SEO და ციფრული გადაწყვეტილებები"
        description="Next-Hub Solutions ქმნის ვებსაიტებს, SEO ოპტიმიზაციას, Google Business Profile ოპტიმიზაციას და ციფრულ გადაწყვეტილებებს ბიზნესებისთვის საქართველოში. გაიგეთ ჩვენი მიდგომა, ტექნოლოგიები და გამოცდილება."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title: "ჩვენ შესახებ | Next-Hub Solutions",
          description:
            "Next-Hub Solutions ეხმარება ქართულ ბიზნესებს ვებსაიტების შექმნით, SEO ოპტიმიზაციით და შედეგზე ორიენტირებული ციფრული სისტემებით.",
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
              "Next-Hub Solutions, ჩვენ შესახებ, ვებსაიტის დამზადება საქართველოში, საიტის შექმნა, ვებ დიზაინი, SEO ოპტიმიზაცია, Google Business Profile ოპტიმიზაცია, პროგრამული უზრუნველყოფის შექმნა, საიტის მოვლა, ციფრული სააგენტო საქართველო",
          },
        ]}
      />

      <Script
        id="about-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <main className="min-h-screen bg-primary/30 px-4 py-28 text-white md:px-8 md:py-32 xl:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.section
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-14 text-center md:mb-20"
          >
            <span className="mb-5 inline-block rounded-full bg-accent/10 px-5 py-2 text-sm font-semibold text-accent">
              Next-Hub Solutions
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              ჩვენ შესახებ <span className="text-accent">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/80 md:text-lg md:leading-8">
              Next-Hub ქმნის ვებსაიტებს, SEO სტრუქტურას და ციფრულ გადაწყვეტილებებს
              ბიზნესებისთვის საქართველოში, რომ კომპანიებმა მიიღონ მეტი ნდობა,
              მეტი ხილვადობა და მეტი კვალიფიციური მომხმარებელი ონლაინ სივრციდან.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
                  ჩვენი ისტორია
                </span>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  დიზაინზე მეტი: პლატფორმა, რომელიც ბიზნესს მუშაობაში ეხმარება
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                <p>
                  Next-Hub Solutions არის ციფრული გუნდი, რომელიც ბიზნესებს ეხმარება
                  პროფესიონალური ონლაინ წარმომადგენლობის შექმნაში. ჩვენ ვხედავთ
                  პრობლემას, რომელსაც ბევრი კომპანია აწყდება: ვებსაიტი შეიძლება
                  ლამაზად გამოიყურებოდეს, მაგრამ ვერ ყიდიდეს, ვერ ჩანდეს Google-ში
                  და ვერ აძლევდეს მომხმარებელს მკაფიო გზას კონტაქტამდე.
                </p>
                <p>
                  ამიტომ ყოველი პროექტი იწყება ბიზნეს მიზნებით. ვაანალიზებთ
                  აუდიტორიას, სერვისებს, კონკურენტებს, ძიების მოთხოვნებს და
                  კონვერსიის გზას. შემდეგ ვქმნით სტრუქტურას, დიზაინს და ტექნიკურ
                  გადაწყვეტას, რომელიც არა მხოლოდ ვიზუალურად გამოიყურება
                  პროფესიონალურად, არამედ რეალურ შედეგს ემსახურება.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 md:mb-20"
          >
            <div className="mb-8 text-center md:mb-10">
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
                რას ვაკეთებთ
              </span>
              <h2 className="text-2xl font-bold md:text-4xl">
                ციფრული სერვისები ბიზნესის ზრდისთვის
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 md:p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-accent md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/70 md:text-base">
                    {service.text}
                  </p>
                  <span className="mt-5 inline-block text-sm font-semibold text-white/75 group-hover:text-white">
                    გაიგე მეტი
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:rounded-[32px] md:p-8">
              <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
                რატომ ჩვენ
              </span>
              <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                სანდო მიდგომა იდეიდან გაშვებამდე
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                ვმუშაობთ ისე, რომ გადაწყვეტილება იყოს გასაგები, გაზომვადი და
                მომავალ განვითარებაზე მზად.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/15 font-bold text-accent">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-white">
                    {reason}
                  </h3>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold text-accent md:text-sm">
                  ტექნოლოგიები
                </span>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  ვარჩევთ ტექნოლოგიას პროექტის მიზნის მიხედვით
                </h2>
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
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 rounded-[24px] border border-accent/30 bg-accent/10 p-6 shadow-[0_24px_80px_rgba(241,48,36,0.14)] md:mb-20 md:rounded-[32px] md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 md:text-sm">
                  გამოცდილება და ნდობა
                </span>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  რეალური გამოცდილება ბიზნეს პროექტებში
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/75 md:text-base md:leading-8">
                  გვაქვს გამოცდილება ბიზნეს ვებსაიტების, ecommerce პროექტების,
                  სერვისის ვებსაიტების, ლოკალური SEO-ს და Google Business Profile
                  ოპტიმიზაციის მიმართულებით. შედეგს ვზომავთ ხილვადობით,
                  სიჩქარით, მომხმარებლის ქცევით და კონტაქტების ხარისხით.
                </p>
                <Link
                  href="/work"
                  className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-accent transition hover:-translate-y-1 hover:bg-accent hover:text-white"
                >
                  ნამუშევრები
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm font-semibold text-white/85 md:text-base"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 md:mb-20"
          >
            <h2 className="mb-8 text-center text-3xl font-semibold text-white">
              ჩვენი გუნდი
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <TeamMember
                name="თეო ოთხოზორია"
                position="CEO"
                imageSrc="/teo.webp"
              />
              <TeamMember
                name="გიორგი ბლიაძე"
                position="CTO"
                imageSrc="/gio1.webp"
              />
              <TeamMember
                name="თიკო შაიშმელაშვილი"
                position="Head of Marketing"
                imageSrc="/tiko1.webp"
              />
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mobile-bottom-safe-space rounded-[24px] border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-md md:rounded-[32px] md:p-10"
          >
            <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight md:text-4xl">
              გსურთ თქვენი ბიზნესისთვის ძლიერი ციფრული პლატფორმა?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              დაგეგმეთ ვებსაიტის დამზადება, SEO ოპტიმიზაცია ან ინდივიდუალური
              პროგრამული გადაწყვეტა Next-Hub Solutions-თან ერთად.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-white hover:text-accent"
            >
              კონსულტაცია
            </Link>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default About;
