import { GoogleTagManager } from "@next/third-parties/google";
// components
import TeamMember from "../../components/TeamMember";
import { motion } from "framer-motion";
import Head from "next/head";
import { NextSeo } from "next-seo";
// variants
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <>
      <NextSeo
        canonical="https://next-hub.pro/about/"
        title="ჩვენ შესახებ | Next-Hub Solutions"
        description="Next-Hub Solutions ეხმარება ბიზნესებს ვებსაიტების შექმნაში, SEO ოპტიმიზაციაში, სოციალური მედიის მართვაში, ანალიტიკასა და ციფრული განვითარებისთვის საჭირო ტექნიკურ მხარდაჭერაში."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://next-hub.pro/about/",
          site_name: "Next-Hub Solutions",
          title: "ჩვენ შესახებ | Next-Hub Solutions",
          description:
            "Next-Hub Solutions ეხმარება ბიზნესებს ვებსაიტების შექმნაში, SEO ოპტიმიზაციაში, სოციალური მედიის მართვაში, ანალიტიკასა და ციფრულ განვითარებაში.",
          images: [
            {
              url: "https://next-hub.pro/nexthub.jpg",
              width: 1200,
              height: 630,
              alt: "Next-Hub Solutions ჩვენ შესახებ",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "author",
            content: "Next-Hub Solutions",
          },
          {
            name: "robots",
            content: "index,follow,max-image-preview:large",
          },
        ]}
      />

      <div className="h-full bg-primary/30">
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
