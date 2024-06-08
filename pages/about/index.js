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
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xxl:pt-10 md:pt-[60px]">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mt-[100px] xl:mt-[0px]"
          >
            Crafting <span className="text-accent">digital</span> wonders from
            imagination to reality.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            2 years ago, I started my adventure in development. Since then, I've
            been learning, growing, and building my skills. From personal
            projects to collaborations with other developers, I've been busy
            crafting digital experiences. I'm passionate about creating cool
            stuff online and always excited to learn more!
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[380px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
