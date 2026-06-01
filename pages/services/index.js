/* eslint-disable react/no-unescaped-entities */
//components
import React, { Suspense, lazy } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Head from "next/head";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { GoogleTagManager } from "@next/third-parties/google";
import { NextSeo } from "next-seo";
const ServiceSlider = lazy(() => import("../../components/ServiceSlider"));

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextSeo
        canonical="https://next-hub.pro/services/"
        title="ჩვენი სერვისები | ვებსაიტები, SEO და მარკეტინგი | Next-Hub"
        description="Next-Hub გთავაზობთ ვებსაიტების შექმნას, SEO ოპტიმიზაციას, სოციალური მედიის მართვას, ტექნიკურ მხარდაჭერასა და ბიზნესზე მორგებულ ციფრულ სერვისებს."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/services/",
          site_name: "Next-Hub Solutions",

          title: "ჩვენი სერვისები | ვებსაიტები, SEO და მარკეტინგი | Next-Hub",

          description:
            "Next-Hub გთავაზობთ ვებსაიტების შექმნას, SEO ოპტიმიზაციას, სოციალური მედიის მართვას, ტექნიკურ მხარდაჭერასა და ბიზნესზე მორგებულ ციფრულ სერვისებს.",

          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions სერვისები",
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
