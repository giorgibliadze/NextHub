/* eslint-disable react/no-unescaped-entities */
import React from "react";

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

// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-xl text-center text-white max-w-3xl mx-auto mb-8"
        >
          NextHub დაგეხმარებათ იდეების ტრანსფორმირებაში. ჩვენ სპეციალიზირებული
          ვართ SEO ოპტიმიზაციაში, ვებსაიტების შექმნაში, სოციალური მედიის
          მენეჯმენტსა და ანალიტიკაში.
        </motion.p>
        <Slider {...settings}>
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="p-6 m-4 rounded-lg shadow-lg flex items-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-400 transform transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <IconComponent
                  className="text-6xl transition-colors duration-300"
                  style={{ color: icon.color }}
                />
                <h2 className="text-xl font-bold ml-4 text-white">
                  {icon.name}
                </h2>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default About;
