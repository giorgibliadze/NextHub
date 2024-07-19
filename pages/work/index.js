/* eslint-disable react/no-unescaped-entities */
//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
const Work = () => {
  return (
    <>
      <Head>
        <title>Next-Hub Solutions | Our Work</title>
        <meta
          name="description"
          content="Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით."
        />
        <meta
          name="keywords"
          content="Next-Hub, Projects, Work, Next.js აპლიკაციები, WordPress ვებსაიტები, მაღალი ხარისხი, თანამედროვე დიზაინი"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Next-Hub Solutions | Our Work" />
        <meta
          property="og:description"
          content="Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით."
        />
        <meta property="og:url" content="https://www.next-hub.pro/work" />
        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta name="twitter:title" content="Next-Hub Solutions | Our Work" />
        <meta
          name="twitter:description"
          content="Next-Hub Solutions-ის პროექტები, დაწყებული დინამიური Next.js აპლიკაციებიდან WordPress-ის ვებსაიტებამდე, უნიკალური გამოწვევებით და მაღალი ხარისხით."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
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
