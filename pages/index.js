/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import RotatingWords from "../components/RotatingWords";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";

import { motion } from "framer-motion";

import { GoogleTagManager } from "@next/third-parties/google";
import { fadeIn } from "../variants";
import { NextSeo } from "next-seo";
import Script from "next/script";

const Home = () => {
  const words = ["იდეები", "სურვილები", "ოცნებები"];
  return (
    <>
      
      <NextSeo
      canonical="https://next-hub.pro"
        title="Next-Hub | ვებსაიტის დამზადება"
        description="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        keywords="Next-Hub, ვებსაიტის დამზადება, საიტის დამზადება, საიტების შექმნა, ვებსაიტების დამზადება, საიტების დამზადება, ვებ აპლიკაციები"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub | ვებსაიტის დამზადება",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          images: [
            {
              url: "https://www.next-hub.pro/nexthub.png",
              width: 800,
              height: 400,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
          title: "Next-Hub | ვებსაიტის დამზადება",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/nexthub.png",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, ვებსაიტის დამზადება, საიტის დამზადება, საიტების შექმნა, ვებსაიტების დამზადება, საიტების დამზადება, ვებ აპლიკაციები",
          },
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "changefreq",
            content: "always",
          },
        ]}
      />

      <div className="bg-primary/60 h-screen w-full smx:h-[640px] sm:h-[600px] lg:h-[847px] xxl:h-[990px] xll:h-[885px]">
        {/* text */}
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto ]">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mt-[100px]"
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
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ
              ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.
            </motion.p>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectBtn />
            </motion.div>
          </div>

          {/* image */}
          <div className="w-full h-full absolute right-0 bottom-0">
            {/* bg img */}
            <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
            {/* particles */}
            <div>
              <ParticlesContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;