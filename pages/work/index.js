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
    <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[970px] bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container min-w-full">
        <div className="flex flex-col sm:m-[0px] md:mt-[20px] lgx:mt-[420px] md:flex-col xl:mt-[100px] md:items-center xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex sm:w-[400px] md:w-[600px] sm:items-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 lg:mt-[100px] xll:mt-[0px] sm:mt-[50px] z-50 lg:ml-[60px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              პროექტები <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] sm:max-w-[600px] mx-auto lg:mx-0 lg:ml-[50px]"
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
            className="w-full xl:max-w-[55%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
