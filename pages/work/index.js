/* eslint-disable react/no-unescaped-entities */
//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full lg:h-[700px] xxl:h-[950px]  xll:h-[970px] bg-primary/30 py-36 flex items-center overflow-">
      {/* <Circles /> */}
      <div className="container mx-auto lg:mt-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
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
              გამორჩეული. ჩვენ ვცდილობთ უზრუნველვყოთ მაღალი ხარისხი, თანამედროვე
              და დახვეწილი დიზაინი ყველა პროექტისთვის.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      {/* <Bulb /> */}
    </div>
  );
};

export default Work;
