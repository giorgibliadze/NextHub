/* eslint-disable react/no-unescaped-entities */
// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const Work = () => {
  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/work/"
        title="ჩვენი ნამუშევრები | ვებსაიტების პორტფოლიო | Next-Hub Solutions"
        description="დაათვალიერეთ Next-Hub Solutions-ის შესრულებული პროექტები. ვებსაიტების პორტფოლიო, WordPress და Next.js პროექტები, ონლაინ მაღაზიები და ბიზნესზე მორგებული ციფრული გადაწყვეტილებები."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/work/",
          site_name: "Next-Hub Solutions",
          title:
            "ჩვენი ნამუშევრები | ვებსაიტების პორტფოლიო | Next-Hub Solutions",
          description:
            "დაათვალიერეთ Next-Hub Solutions-ის შესრულებული პროექტები. ვებსაიტების პორტფოლიო, WordPress და Next.js პროექტები, ონლაინ მაღაზიები და ბიზნესზე მორგებული ციფრული გადაწყვეტილებები.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions ვებსაიტების პორტფოლიო",
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
              "ჩვენი ნამუშევრები, ვებსაიტების პორტფოლიო, საიტების პორტფოლიო, შესრულებული პროექტები, next.js პროექტები, wordpress პროექტები, ონლაინ მაღაზიების დამზადება, ონლაინ მაღაზიების პორტფოლიო, ვებსაიტის დამზადება, საიტის შექმნა, ვებ დეველოპმენტი, web development portfolio, website portfolio georgia, next hub portfolio",
          },
        ]}
      />

      <Script
        id="portfolio-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Next-Hub Solutions Portfolio",
            headline: "ჩვენი ნამუშევრები და ვებსაიტების პორტფოლიო",
            description:
              "Next-Hub Solutions-ის შესრულებული ვებსაიტები, ონლაინ მაღაზიები, WordPress პროექტები, Next.js აპლიკაციები და ბიზნესზე მორგებული ციფრული გადაწყვეტილებები.",
            url: "https://next-hub.pro/work/",
            image: "https://next-hub.pro/nexthub.jpg",
            inLanguage: "ka-GE",
            creator: {
              "@type": "Organization",
              name: "Next-Hub Solutions",
              url: "https://next-hub.pro",
              logo: "https://next-hub.pro/logo.png",
            },
            about: [
              "ვებსაიტების პორტფოლიო",
              "WordPress პროექტები",
              "Next.js პროექტები",
              "ონლაინ მაღაზიები",
              "ვებ დეველოპმენტი",
            ],
          }),
        }}
      />

      <div className="h-full bg-primary/30">
        <Circles />

        <div className="container mx-auto mb-4">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 lg:mt-[100px]">
              <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12 mt-[120px]"
              >
                ჩვენი ნამუშევრები <span className="text-accent">.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                დაათვალიერეთ Next-Hub Solutions-ის შესრულებული ვებსაიტები,
                ონლაინ მაღაზიები, Next.js აპლიკაციები და WordPress პროექტები.
                თითოეული ნამუშევარი შექმნილია თანამედროვე დიზაინით,
                მომხმარებელზე მორგებული სტრუქტურითა და ბიზნესის მიზნების
                გათვალისწინებით.
              </motion.p>
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%] lg:mt-[100px]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>

        <Bulb />
      </div>
    </>
  );
};

export default Work;
