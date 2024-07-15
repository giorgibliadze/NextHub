/* eslint-disable react/no-unescaped-entities */
// next image
import Image from "next/image";
import RotatingWords from "../components/RotatingWords";
//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectBtn from "../components/ProjectsBtn";

//framer motion
import { motion } from "framer-motion";
import Head from "next/head";
//variants
import { fadeIn } from "../variants";

const Home = () => {
  const words = ["იდეები", "სურვილები", "ოცნებები"];
  const imageUrl = "https://www.next-hub.pro/bg-explosion.png";
  return (
    <div className="bg-primary/60 w-full h-full smx:h-[640px] sm:h-[600px] lg:h-[820px] xxl:h-[970px] xll:h-[865px]">
      {/* Head for SEO */}
      <Head>
        <title>Next-Hub Solutions</title>
        <meta
          name="description"
          content="Transform your ideas into digital reality with Next-Hub Solutions. Achieve your goals and maximize your brand's potential with our expert team."
        />
        <meta
          name="keywords"
          content="Next.js, SEO, Web Development, Digital Marketing"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Next-Hub Solutions" />
        <meta
          property="og:description"
          content="Transform your ideas into digital reality with Next-Hub Solutions. Achieve your goals and maximize your brand's potential with our expert team."
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://www.next-hub.pro" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next-Hub Solutions" />
        <meta
          name="twitter:description"
          content="Transform your ideas into digital reality with Next-Hub Solutions. Achieve your goals and maximize your brand's potential with our expert team."
        />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "Next-Hub Solutions",
            url: "https://www.next-hub.pro",
            logo: "https://www.next-hub.pro/logo.png",
            sameAs: [
              "https://www.facebook.com/NextHub",
              "https://www.twitter.com/NextHub",
              "https://www.linkedin.com/company/NextHub",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-800-555-5555",
              contactType: "Customer Service",
            },
          })}
        </script>
      </Head>
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
  );
};

export default Home;
