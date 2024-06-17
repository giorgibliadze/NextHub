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
      <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[970px] bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
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
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                გადააქციეთ იდეები ციფრულ რეალობად და გამოიყენეთ სრული
                პოტენციალი. ჩვენ დაგეხმარებით მიზნების მიღწევაში, გთავაზობთ: ვებ
                საიტის დამზადების, საიტის ადმინისტრირების, საიტის & SEO
                ოპტიმიზაციის და სოციალური მედიის სერვისებს.
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
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
