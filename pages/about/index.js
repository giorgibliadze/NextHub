// next image
import Image from "next/image";
import Bulb from "../../components/Bulb";
// components
import TeamMember from "../../components/TeamMember";
import ServiceSlider from "../../components/ServiceSlider";
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="h-full min-h-screen">
      {/* container */}
      <div className="container mx-auto mt-[50px] py-16 px-4 sm:px-6 lg:px-8">
        {/* header */}
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
            className="h2 xl:mt-8"
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

        {/* services */}
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
            სერვისები
          </motion.h2>
          <ServiceSlider />
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
            მიღწევაში, მათთვის საჭირო ხელსაწყოების და ექსპერტიზის უზრუნველყოფით.
            ჩვენ ვგეგმავთ ინოვაციური და ეფექტური ციფრული გადაწყვეტილებების
            მიწოდებას, რომლებიც ხელს უწყობენ ზრდას და ბრენდის ცნობადობის
            გაუმჯობესებას.
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
              name="თიკო შაიშმელაშვილი"
              position="Head of Marketing"
              imageSrc="/tiko.webp"
            />
          </motion.div>
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default About;
