/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";
import RotatingWords from "../components/RotatingWords";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  const words = ["იდეები", "სურვილები", "ოცნებები"];

  return (
    <div className="bg-primary/60  h-full sm:h-[600px] lg:h-[847px]  xxl:h-[970px]  xll:h-[865px] min-h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 absolute overflow-x-hidden">
        <div className="container mx-auto h-full flex flex-col justify-center text-center items-center lgx:items-start lgx:text-left xl:items-start xl:text-left lg:ml-[150px] overflow-y-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 lg:mt-[100px] lgx:mt-[40px] smx:mt-[150px] text-white"
          >
            გადააქციეთ
            <motion.span
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-accent"
            >
              <RotatingWords words={words} />
            </motion.span>
            <br /> ციფრულ რეალობად
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl xl:mx-0 mb-10 xl:mb-16 text-white"
          >
            მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ
            ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.
          </motion.p>
          <div className="flex justify-center xl:hidden relative mb-[100px]">
            <ProjectBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex xl:mb-16 smx:mb-[16px]"
          >
            <ProjectBtn />
          </motion.div>
        </div>
        <div className="w-full h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
          <div>
            <ParticlesContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
