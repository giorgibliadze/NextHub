/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

/* eslint-disable react/jsx-key */
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiGoogleAnalytics } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { SiNextdotjs, SiFramer, SiPowerbi, SiMui } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiTypescript />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX",
        icons: [<FaFigma />, <SiTailwindcss />, <SiMui />],
      },
      {
        title: "Analytics",
        icons: [
          <DiGoogleAnalytics />,
          <PiMicrosoftExcelLogoFill />,
          <SiPowerbi />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-end Developer - Hoppa Delivery",
        stage: "November 2023 - Present",
        description:
          "Contributing to Next.js and Nest.js applications, implementing GraphQL with Apollo Federation for microservices architecture.",
      },
      {
        title: "WordPress Developer - Core & Nino's Ia (Outsource)",
        stage: "November 2022 - Present",
        description:
          "Involved in WordPress development projects, including Core's comprehensive design services and Nino's Ia online store development.",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Master's in Business Administration (Management)",
        stage: "University of Business & Technology",
        stage: "2022",
      },
      {
        title: "Bachelor's in Economics",
        stage: "Caucasus University",
        stage: "2019",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Front-end Development (UpSkill b2b)",
        provider: "EPAM UpSkill",
        stage: "2023",
      },
      {
        title: "Modern React with Redux [2023 Update]",
        provider: "Udemy",
        stage: "2022",
      },
      {
        title: "HTML/CSS + JavaScript + React",
        provider: "Academy of Digital Industries",
        stage: "2022",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[1000px] bg-primary/30 text-center xl:text-left xl-py-32">
      <Circles />
    </div>
  );
};

export default About;
