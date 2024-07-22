// next image
import Image from "next/image";
import Bulb from "../../components/Bulb";
import { GoogleTagManager } from "@next/third-parties/google";
// components
import TeamMember from "../../components/TeamMember";
import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";
import Head from "next/head";

// variants
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <>
      <GoogleTagManager gtmId="GTM-KHQ9N3M5" />
      <Head>
        <title>Next-Hub Solutions | About</title>
        <meta
          name="description"
          content="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        />
        <meta
          name="keywords"
          content="Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა"
        />
        <meta name="author" content="Next-Hub Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Next-Hub Solutions | About" />
        <meta
          property="og:description"
          content="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        />
        <meta property="og:url" content="https://www.next-hub.pro/about" />

        <meta
          property="og:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <meta name="changefreq" content="always" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ka_GE" />
        <meta property="og:site_name" content="Next-Hub Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@NextHub" />
        <meta name="twitter:title" content="Next-Hub Solutions | About" />
        <meta
          name="twitter:description"
          content="მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად."
        />
        <meta
          name="twitter:image"
          content="https://www.next-hub.pro/bg-explosion.png"
        />
        <link rel="icon" href="/favicon.jpg" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="h-full bg-primary/30">
        <Head>
          <title>About Us - Next-Hub Solutions</title>
          <meta
            name="description"
            content="Learn more about Next-Hub Solutions and how we help companies transform in the digital era with web development, social media management, SEO, and analytics services."
          />
        </Head>
        <div className="container mx-auto py-32 text-center xl:text-left flex flex-col items-center justify-center h-full">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center"
          >
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              ჩვენ შესახებ <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-lg text-white max-w-3xl mx-auto"
            >
              Next-Hub-ში ჩვენ ვეხმარებით კომპანიებს, ციფრული ეპოქის
              ტრანსფორმაციაში. ჩვენი ექსპერტების გუნდი გთავაზობთ ვებ
              დეველოპმენტის, სოციალური მედიის მართვის, SEO-ს და ანალიტიკის
              სერვისებს, რათა გაზარდოთ თქვენი ბრენდის ცნობადობა და სანდოობა.
            </motion.p>
          </motion.div>

          {/* mission */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-16 text-center"
          >
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              მისია <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-lg text-white max-w-3xl mx-auto text-center"
            >
              ჩვენი მისიაა, დავეხმაროთ ბიზნესებს ციფრულ სამყაროში წარმატების
              მიღწევაში, მათთვის საჭირო ხელსაწყოების და ექსპერტიზის
              უზრუნველყოფით. ჩვენ ვგეგმავთ ინოვაციური და ეფექტური ციფრული
              გადაწყვეტილებების მიწოდებას, რომლებიც ხელს უწყობენ ზრდას და
              ბრენდის ცნობადობის გაუმჯობესებას.
            </motion.p>
          </motion.div>
          {/* team */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-16"
          >
            <motion.h2
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl font-semibold text-white text-center mb-6"
            >
              ჩვენი გუნდი
            </motion.h2>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-wrap justify-center gap-8"
            >
              {/* team member */}
              <TeamMember
                name="თეო ოთხოზორია"
                position="CEO"
                imageSrc="/teo.webp"
              />
              <TeamMember
                name="გიორგი ბლიაძე"
                position="CTO"
                imageSrc="/gio1.webp"
              />
              <TeamMember
                className="mb-[100px]"
                name="თიკო შაიშმელაშვილი"
                position="Head of Marketing"
                imageSrc="/tiko1.webp"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
