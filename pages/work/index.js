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
const Work = () => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
      <NextSeo
        title="Next-Hub Solutions | Our Work"
        description="Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით."
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, Projects, Work, Next.js აპლიკაციები, WordPress ვებსაიტები, მაღალი ხარისხი, თანამედროვე დიზაინი",
          },
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "changefreq",
            content: "always",
          },
        ]}
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/work",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Our Work",
          description:
            "Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით.",
          images: [
            {
              url: "https://www.next-hub.pro/bg-explosion.png",
              width: 800,
              height: 600,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
          title: "Next-Hub Solutions | Our Work",
          description:
            "Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით.",
          image: "https://www.next-hub.pro/bg-explosion.png",
        }}
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
