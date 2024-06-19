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

// components
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

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

const About = () => {
  return (
    <div className="min-h-screen py-16 flex items-center bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
      <Circles />
      <div className="container mx-auto px-10">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-5xl font-bold text-center text-white mb-12"
        >
          ჩვენს შესახებ
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-xl text-center text-white max-w-3xl mx-auto mb-8"
        >
          NextHub დაგეხმარებათ იდეების ტრანსფორმირებაში. ჩვენ სპეციალიზირებული
          ვართ SEO ოპტიმიზაციაში, ვებსაიტების შექმნაში, სოციალური მედიის
          მენეჯმენტსა და ანალიტიკაში.
        </motion.p>
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
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
                  className="p-6 m-4 rounded-lg shadow-lg flex items-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-400 transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <IconComponent
                    className="text-6xl transition-colors duration-300"
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

export default About;
