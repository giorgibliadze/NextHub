/* eslint-disable react/no-unescaped-entities */
//components
import React, { Suspense, lazy } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ServiceSlider = lazy(() => import("../../components/ServiceSlider"));

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Head>
        <title>Next-Hub Solutions | Services</title>
        <meta
          name="description"
          content="გადააქციეთ თქვენი იდეები ციფრულ რეალობად ჩვენი სერვისებით. ჩვენ გთავაზობთ ვებ-გვერდების შექმნას, საიტის ადმინისტრირებას, SEO ოპტიმიზაციას და სოციალური მედიის მენეჯმენტს."
        />
        <meta
          name="keywords"
          content="Next-Hub, Services, ვებ-გვერდების შექმნა, საიტის ადმინისტრირება, SEO, სოციალური მედიის მენეჯმენტი, ციფრული პოტენციალი"
        />
        <meta name="changefreq" content="always" />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Next-Hub Solutions | Services" />
        <meta
          property="og:description"
          content="გადააქციეთ თქვენი იდეები ციფრულ რეალობად ჩვენი სერვისებით. ჩვენ გთავაზობთ ვებ-გვერდების შექმნას, საიტის ადმინისტრირებას, SEO ოპტიმიზაციას და სოციალური მედიის მენეჯმენტს."
        />
        <meta property="og:url" content="https://www.next-hub.pro/services" />
        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta name="twitter:title" content="Next-Hub Solutions | Services" />
        <meta
          name="twitter:description"
          content="გადააქციეთ თქვენი იდეები ციფრულ რეალობად ჩვენი სერვისებით. ჩვენ გთავაზობთ ვებ-გვერდების შექმნას, საიტის ადმინისტრირებას, SEO ოპტიმიზაციას და სოციალური მედიის მენეჯმენტს."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[970px] bg-primary/30 py-36 flex p-[20px]">
        <Circles />
        <div className="container min-w-full items-center mx-auto">
          <div className="flex flex-col md:mt-[15px] md:flex-row xl:flex-row gap-x-8 items-center mx-auto">
            {/* text */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mx-0"
            >
              <motion.h2
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                სერვისები <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] lg:mx-0"
              >
                გადააქციეთ თქვენი იდეები ციფრულ რეალობად ჩვენი სერვისებით. ჩვენ
                გთავაზობთ ვებ-გვერდების შექმნას, საიტის ადმინისტრირებას, SEO
                ოპტიმიზაციას და სოციალური მედიის მენეჯმენტს, რათა მაქსიმალურად
                გაზარდოთ თქვენი ციფრული პოტენციალი.
              </motion.p>
            </motion.div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full  min-w-[300px] xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </Suspense>
  );
};

export default Services;
