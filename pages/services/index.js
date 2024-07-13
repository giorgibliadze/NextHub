/* eslint-disable react/no-unescaped-entities */
//components
import React, { Suspense, lazy } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ServiceSlider = lazy(() => import("../../components/ServiceSlider"));

const Services = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-full bg-primary/30">
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
