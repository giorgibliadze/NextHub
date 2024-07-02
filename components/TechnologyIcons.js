/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from "swiper";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPowerbi,
  SiMui,
} from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Install Swiper modules
SwiperCore.use([Autoplay]);

const icons = [
  { component: FaHtml5, name: "HTML5", color: "#E34F26" },
  { component: FaCss3, name: "CSS3", color: "#1572B6" },
  { component: FaJs, name: "JavaScript", color: "#F7DF1E" },
  { component: FaReact, name: "React", color: "#61DAFB" },
  { component: FaWordpress, name: "WordPress", color: "#21759B" },
  { component: FaFigma, name: "Figma", color: "#F24E1E" },
  { component: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
  { component: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { component: DiGoogleAnalytics, name: "Google Analytics", color: "#4285F4" },
  {
    component: PiMicrosoftExcelLogoFill,
    name: "Microsoft Excel",
    color: "#217346",
  },
  { component: SiNextdotjs, name: "Next.js", color: "#000000" },
  { component: SiFramer, name: "Framer", color: "#0055FF" },
  { component: SiPowerbi, name: "Power BI", color: "#F2C811" },
  { component: SiMui, name: "Material UI", color: "#007FFF" },
];

const TechnologyIcons = () => {
  return (
    <div className="min-h-[50px] flex items-center ">
      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <SwiperSlide key={index}>
                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-20 h-20 rounded-full shadow-lg flex items-center justify-center bg-white transform transition-transform hover:scale-105"
                >
                  <IconComponent
                    className="text-4xl"
                    style={{ color: icon.color }}
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TechnologyIcons;
