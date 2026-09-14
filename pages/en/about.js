/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Script from "next/script";
import { fadeIn } from "../../variants";

const CANONICAL = "https://next-hub.pro/en/about";

const title =
  "About us.";
const description =
  "Find out who Next-Hub Solutions is: SEO website building, optimization, web design and digital development team in Georgia.";

const services = [
  {
    title: "making a website.",
    href: "/en/webdevelopment",
    text: "we build fast, mobile-friendly, and properly structured websites for SEO. The main goal is to build trust, clearly display services, and get visitors to contact.",
  },
  {
    title: "Create an online store.",
    href: "/en/webdevelopment",
    text: "We're building ecommerce platforms with product catalogs, payment, order logic, and a convenient management system.",
  },
  {
    title: "Software development.",
    href: "/en/software-development",
    text: "we're building individual web applications, portals, CRM-like systems, and tools tailored to business processes.",
  },
  {
    title: "Web design.",
    href: "/en/web-design",
    text: "We're creating a modern UI/UX design that makes the brand premium and reliable. We're focusing on the mobile experience, the content hierarchy, and the CTA.",
  },
  {
    title: "SEO Optimization",
    href: "/en/seo-services",
    text: "we're developing technical SEO, metadata, page structure, internal links, and content logic. The goal is for Google to better understand your services and make it easy for customers to find you.",
  },
  {
    title: "Google Business Profile Optimization",
    href: "/en/google-business-profile-optimization",
    text: "We're developing and improving Google Business Profile- for local search and Google Maps visibility. This is especially important for service and local businesses.",
  },
  {
    title: "Site maintenance and technical support.",
    href: "/en/website-maintenance-services",
    text: "we take care of the security of the site, updates, bug fixes, speed and stability. Support helps businesses keep the site active and functioning.",
  },
  {
    title: "Analytics and Conversion Tracking",
    href: "/en/services/analytics",
    text: "we use Google Analytics-, Search Console, Microsoft Clarity- and conversion metering systems. The data helps you understand where users come from and what works best.",
  },
];

const benefits = [
  {
    title: "Business-oriented approach.",
    text: "we plan the project based on business objectives, audience and sales process.",
  },
  {
    title: "SEO from day one.",
    text: "the structure, the headings, the URL-s and the technical basis for the Google from the beginning.",
  },
  {
    title: "Fast and modern technology.",
    text: "We use Next.js-, React-, WordPress and other technologies as needed for the project.",
  },
  {
    title: "the perfect mobile experience.",
    text: "the pages are designed to be easy to read, navigate and contact from your phone.",
  },
  {
    title: "Security and stability.",
    text: "we focus on security, updates, backup approaches and the safe operation of the site.",
  },
  {
    title: "Support after launch.",
    text: "We're still helping businesses with maintenance, upgrades and development.",
  },
];

const processSteps = [
  ["01", "Consultation.", "we learn the idea, the goal, the timeline, the budget, and we choose the right direction for the project."],
  ["02", "Business Analysis.", "we evaluate the audience, the competitors, the services, the sales channels and the digital capabilities."],
  ["03", "structure and design of UI/UX", "we're going to do the page logic, the content hierarchy, the CTAs, and the visual system."],
  ["04", "Development.", "we build a fast, responsive and run a website, a store or an individual web application."],
  ["05", "SEO and technical optimization.", "we're building the metadata, schema, the speed, the analytics, and the basis for Search Console."],
  ["06", "Launch.", "we test the mobile, the shapes, the links, the speed, the security, and we run the project in the real world."],
  ["07", "Support and Development.", "we continue to provide technical support, improvements, content updates and results analysis."],
];

const stats = [
  ["40+", "Project completed."],
  ["95%", "Happy customer."],
  ["99%", "The goal of technical stability."],
  ["24/7", "the ability to support."],
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
    question: "What does Next-Hub Solutions do?",
    answer:
      "Next-Hub Solutions creates websites, online stores, web applications, SEO structure, Google Business Profile optimization and site technical support for businesses in Georgia.",
  },
  {
    question: "What kind of websites do you build?",
    answer:
      "we build business websites, landing page-, corporate pages, ecommerce stores, service sites, catalogs and individual web applications.",
  },
  {
    question: "Are you working on WordPress?",
    answer:
      "Yes. We use WordPress when a business needs a simple website, blog, service pages, or WooCommerce online store.",
  },
  {
    question: "Are you working on Next.js-?",
    answer:
      "Yes. We use Next.js- for fast, SEO-enabled, scalable websites and web applications where speed and flexible architecture are important.",
  },
  {
    question: "Are you optimizing SEO?",
    answer:
      "Yes. We are developing the technical SEO, metadata, schema markup-, internal links, page structure and the basis for Search Console.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "the timing depends on the size and functionality of the project. A simple website is often created in a matter of weeks, and an online store or individual system requires more detailed planning.",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "Yes. We offer site maintenance, security updates, bug fixes, speed improvements, analytics monitoring and development support.",
  },
  {
    question: "How do I get counseling?",
    answer:
      "For consultation, go to the contact page, write about the project or contact us at the contact channels provided.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://next-hub.pro/#organization",
      name: "Next-Hub Solutions",
      url: "https://next-hub.pro/en",
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
          url: `https://next-hub.pro/en${service.href}`,
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
          name: "Home",
          item: "https://next-hub.pro/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About us.",
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
          locale: "en_US",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title,
          description,
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions about us",
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
              "NextHub, Next-Hub Solutions, website design, website development, web developer Georgia, digital agency Georgia, website development Georgia, digital agency Georgia, web design Tbilisi, SEO Georgia",
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
              website building and digital business development in Georgia
              <span className="text-accent">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-white/78 md:text-lg md:leading-9">
              Next-Hub Solutions creates modern websites, online stores and web applications that not only look great, but they increase sales, improve visibility in Google, and help businesses grow.
            </p>
            <Link
              href="/en/contact"
              className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 font-semibold text-white shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:bg-white hover:text-accent"
            >
              Consultation.
            </Link>
          </motion.section>

          <section className="mb-14 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:mb-20 md:rounded-[32px] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <SectionLabel>Our Story.</SectionLabel>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  Why was Next-Hub created?
                </h2>
              </div>
              <div className="space-y-5 text-sm leading-7 text-white/72 md:text-base md:leading-8">
                <p>
                  Next-Hub was created to provide Georgian businesses with modern, fast and reliable digital platforms. Many companies have quality products or services, but cannot display their value in the online space as demanded by the market.
                </p>
                <p>
                  Our approach doesn't just start with design, and it doesn't end with design. The website needs to meet business goals, build trust, build leads, help sales, and provide customers with the information they need quickly.
                </p>
                <p>
                  In every project, we're combining UX-, SEO, speed, security, and mobile experience, so we're creating a platform that looks good, works fast, and is built with a structure that's also understandable to Google.
                </p>
                <p>
                  Our goal is not for businesses to just have an online business card, but we're creating websites that build reputation, make contact easier, and make the company more competitive in the digital environment.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-14 md:mb-20">
            <div className="mb-8 text-center md:mb-10">
              <SectionLabel>Services.</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">What we do</h2>
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
                    Learn more.
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md md:rounded-[32px] md:p-8">
              <SectionLabel>Advantages.</SectionLabel>
              <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                Why Next-Hub?
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                we work to make every decision understandable, measurable, and ready for future development.
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
              <SectionLabel>the process.</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">How We Work.</h2>
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
                <SectionLabel>Technology.</SectionLabel>
                <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                  "We choose technology according to the business task".
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/70 md:text-base md:leading-8">
                  Next.js and React give us fast, scalable and customized solutions to SEO. WordPress and WooCommerce are good for easy-to-use websites and online stores, and analytics tools help us measure results.
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
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-2xl font-bold leading-tight md:text-4xl">
              Our mission.
            </h2>
            <p className="mt-5 max-w-4xl text-sm leading-7 text-white/72 md:text-base md:leading-8">
              Our goal is for Georgian businesses to have fast, secure and modern websites that are not only the company's business card, but actually create new opportunities, increase trust and help increase sales.
            </p>
          </section>

          <section className="mb-14 md:mb-20">
            <div className="mb-8 text-center md:mb-10">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl font-bold md:text-4xl">
                FAQs.
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
              Are you ready to move your business to the next level?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
              Write down and come together to choose the right technology, design, SEO structure and budget for your project.
            </p>
            <Link
              href="/en/contact"
              prefetch={false}
              className="mt-7 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-accent shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-accent hover:text-white"
            >
              Free consultation.
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
