/* eslint-disable react/no-unescaped-entities */
import RotatingWords from "../components/RotatingWords";
import ParticlesContainer from "../components/ParticlesContainer";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const Home = () => {
  const words = ["ვებსაიტები ", "ონლაინ მაღაზიები ", "ვებ აპლიკაციები "];

  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/"
        title="ვებსაიტის დამზადება | საიტის შექმნა | Next-Hub"
        description="Next-Hub ქმნის თანამედროვე ვებსაიტებს, ონლაინ მაღაზიებსა და ვებ აპლიკაციებს. ვამზადებთ სწრაფ, SEO-ზე მორგებულ და ბიზნესის მიზნებზე შექმნილ საიტებს."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/",
          site_name: "Next-Hub Solutions",
          title: "ვებსაიტის დამზადება | საიტის შექმნა | Next-Hub",
          description:
            "Next-Hub ქმნის თანამედროვე ვებსაიტებს, ონლაინ მაღაზიებსა და ვებ აპლიკაციებს. ვამზადებთ სწრაფ, SEO-ზე მორგებულ და ბიზნესის მიზნებზე შექმნილ საიტებს.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.png",
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

      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Next-Hub Solutions",
            url: "https://next-hub.pro/",
            logo: "https://next-hub.pro/nexthub.png",
          }),
        }}
      />

      <div className="bg-primary/60 h-screen w-full smx:h-[640px] sm:h-[600px] lg:h-[847px] xxl:h-[990px] xll:h-[885px]">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">

            {/* title */}
            <motion.h1
  variants={fadeIn("down", 0.2)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="
mt-[60px]
sm:mt-[80px]
xl:mt-[100px]
text-[34px]
leading-tight
sm:text-[44px]
xl:text-[64px]
font-bold
"
>
  ვებსაიტის დამზადება <span>.</span>

  <br />

  <motion.span
    variants={fadeIn("down", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="text-accent"
  >
    <RotatingWords words={words} />
  </motion.span>

  ბიზნესისთვის
</motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="
              max-w-sm
              text-[15px]
              leading-8
              xl:text-[18px]
              xl:max-w-xl
              mx-auto
              xl:mx-0
              mb-10
              xl:mb-16
              "
            >
              Next-Hub გთავაზობთ თანამედროვე ვებსაიტების, ონლაინ
              მაღაზიებისა და ვებ აპლიკაციების შექმნას. ვამზადებთ სწრაფ,
              SEO-ზე მორგებულ და ბიზნესის მიზნებზე შექმნილ საიტებს.
            </motion.p>

            {/* mobile button */}
            {/* contact button */}
<motion.div
  variants={fadeIn("down", 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex justify-center xl:justify-start relative z-50"
>
  <a
    href="tel:+995555137003"
    className="
      px-8
      py-4
      rounded-full
      bg-accent
      text-white
      font-semibold
      text-[14px]
      xl:text-[16px]
      hover:scale-105
      transition-all
      shadow-lg
      whitespace-nowrap
    "
  >
    დაგვიკავშირდით
  </a>
</motion.div>

          </div>

          <div className="w-full h-full absolute right-0 bottom-0">
            <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

            <ParticlesContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;