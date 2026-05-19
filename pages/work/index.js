/* eslint-disable react/no-unescaped-entities */
//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { GoogleTagManager } from "@next/third-parties/google";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Script from "next/script";
const Work = () => {
  return (
    <>
    
     <NextSeo
  canonical="https://next-hub.pro/work/"
  title="ჩვენი ნამუშევრები | ვებსაიტების პორტფოლიო | Next-Hub"
  description="ნახეთ Next-Hub Solutions-ის შესრულებული ვებსაიტები, Next.js აპლიკაციები, WordPress პროექტები, ონლაინ მაღაზიები და ბიზნესზე მორგებული ციფრული გადაწყვეტილებები."
  openGraph={{
    type: "website",
    locale: "ka_GE",
    url: "https://next-hub.pro/work/",
    site_name: "Next-Hub Solutions",
    title: "ჩვენი ნამუშევრები | ვებსაიტების პორტფოლიო | Next-Hub",
    description:
      "ნახეთ Next-Hub Solutions-ის შესრულებული ვებსაიტები, Next.js აპლიკაციები, WordPress პროექტები, ონლაინ მაღაზიები და ბიზნესზე მორგებული ციფრული გადაწყვეტილებები.",
    images: [
      {
        url: "https://next-hub.pro/nexthub.jpg",
        width: 1200,
        height: 630,
        alt: "Next-Hub Solutions პორტფოლიო",
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
      <div className="h-full bg-primary/30">
        <Circles />
        <div className="container mx-auto mb-4">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 lg:mt-[100px]">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12 mt-[120px]"
              >
                პროექტები <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                ჩვენი პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან
                WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით არის
                გამორჩეული. ჩვენ ვცდილობთ უზრუნველვყოთ მაღალი ხარისხი,
                თანამედროვე და დახვეწილი დიზაინი ყველა პროექტისთვის.
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
