// components
import TeamMember from "../../components/TeamMember";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import Script from "next/script";

// variants
import { fadeIn } from "../../variants";

const CANONICAL = "https://next-hub.pro/about/";

const About = () => {
  return (
    <>
      <NextSeo
        canonical={CANONICAL}
        title="ჩვენ შესახებ | ვებსაიტების დამზადება და ციფრული სერვისები | Next-Hub"
        description="Next-Hub Solutions არის ციფრული სააგენტო, რომელიც ბიზნესებს ეხმარება ვებსაიტების დამზადებაში, SEO ოპტიმიზაციაში, სოციალური მედიის მართვაში, ანალიტიკასა და ციფრულ განვითარებაში."
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: CANONICAL,
          site_name: "Next-Hub Solutions",
          title:
            "ჩვენ შესახებ | ვებსაიტების დამზადება და ციფრული სერვისები | Next-Hub",
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
          {
            name: "keywords",
            content:
              "Next-Hub Solutions, ჩვენ შესახებ, ციფრული სააგენტო, ვებსაიტების დამზადება, საიტის შექმნა, ვებ დეველოპმენტი, SEO ოპტიმიზაცია, სოციალური მედიის მართვა, ციფრული მარკეტინგი, ანალიტიკა, ტექნიკური მხარდაჭერა, website development Georgia, digital agency Georgia, web development Georgia",
          },
        ]}
      />

      <Script
        id="about-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Next-Hub Solutions",
            url: "https://next-hub.pro",
            logo: "https://next-hub.pro/logo.png",
            image: "https://next-hub.pro/nexthub.jpg",
            description:
              "Next-Hub Solutions არის ციფრული სააგენტო, რომელიც ქმნის ვებსაიტებს, ონლაინ მაღაზიებს, SEO სტრატეგიებს, სოციალური მედიის მართვის სერვისებს და ანალიტიკურ გადაწყვეტებს ბიზნესებისთვის.",
            email: "info@next-hub.pro",
            telephone: "+995555137003",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tbilisi",
              addressCountry: "GE",
            },
            areaServed: {
              "@type": "Country",
              name: "Georgia",
            },
            founder: [
              {
                "@type": "Person",
                name: "თეო ოთხოზორია",
                jobTitle: "CEO",
              },
              {
                "@type": "Person",
                name: "გიორგი ბლიაძე",
                jobTitle: "CTO",
              },
            ],
            employee: [
              {
                "@type": "Person",
                name: "თეო ოთხოზორია",
                jobTitle: "CEO",
              },
              {
                "@type": "Person",
                name: "გიორგი ბლიაძე",
                jobTitle: "CTO",
              },
              {
                "@type": "Person",
                name: "თიკო შაიშმელაშვილი",
                jobTitle: "Head of Marketing",
              },
            ],
            knowsAbout: [
              "Web Development",
              "Website Development",
              "SEO Optimization",
              "Social Media Management",
              "Digital Marketing",
              "Web Analytics",
              "Technical Support",
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-primary/30 overflow-x-hidden">
        <div className="container mx-auto py-28 md:py-32 px-4 text-center xl:text-left flex flex-col items-center justify-center h-full">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center"
          >
            <motion.h1
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl md:text-6xl font-bold text-center"
            >
              ჩვენ შესახებ <span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("up", 0.15)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 text-sm md:text-lg leading-7 md:leading-8 text-white/80 max-w-3xl mx-auto"
            >
              Next-Hub Solutions ეხმარება ბიზნესებს ციფრულ განვითარებაში,
              თანამედროვე ვებსაიტების შექმნით, SEO ოპტიმიზაციით, სოციალური
              მედიის მართვით, ანალიტიკითა და ტექნიკური მხარდაჭერით.
            </motion.p>
          </motion.div>

          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-14 md:mt-16 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
          >
            <div className="text-center mb-8 md:mb-10">
              <span className="inline-block mb-4 px-4 md:px-5 py-2 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-semibold">
                Digital Agency
              </span>

              <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 leading-tight">
                ციფრული განვითარება ბიზნესისთვის
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 text-sm md:text-lg leading-7 md:leading-8">
                ჩვენ ვქმნით ვებსაიტებს, ონლაინ მაღაზიებსა და ციფრულ სისტემებს,
                რომლებიც ეხმარება კომპანიებს უკეთ გამოჩნდნენ Google-ში, გაზარდონ
                სანდოობა და მიიღონ მეტი მომხმარებელი ონლაინ სივრციდან.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ვებ დეველოპმენტი
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამზადებთ WordPress, Next.js და React ტექნოლოგიებზე აგებულ
                  თანამედროვე ვებსაიტებსა და ონლაინ მაღაზიებს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  SEO და მარკეტინგი
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვზრდით ბიზნესის ხილვადობას Google-ში, ვმართავთ სოციალურ მედიას
                  და ვქმნით შედეგზე ორიენტირებულ ციფრულ სტრატეგიებს.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 border border-white/10 p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-3 text-accent">
                  ანალიტიკა და მხარდაჭერა
                </h3>
                <p className="text-white/70 leading-7 text-sm">
                  ვამონიტორინგებთ ვებსაიტის შედეგებს, მომხმარებლის ქცევას და
                  ვუზრუნველყოფთ ტექნიკურ მხარდაჭერას საიტის სტაბილური
                  მუშაობისთვის.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-14 md:mt-16 text-center max-w-4xl"
          >
            <motion.h2
              variants={fadeIn("up", 0.25)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl md:text-5xl font-bold"
            >
              მისია <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mt-6 text-sm md:text-lg leading-7 md:leading-8 text-white/80 max-w-3xl mx-auto text-center"
            >
              ჩვენი მისიაა, დავეხმაროთ ბიზნესებს ციფრულ სამყაროში წარმატების
              მიღწევაში. ვქმნით ინოვაციურ და ეფექტურ ციფრულ გადაწყვეტილებებს,
              რომლებიც ხელს უწყობს ბრენდის ცნობადობის ზრდას, მომხმარებელთან
              კომუნიკაციის გაუმჯობესებას და ონლაინ გაყიდვების განვითარებას.
            </motion.p>
          </motion.section>

          <motion.section
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-14 md:mt-16 mb-20"
          >
            <motion.h2
              variants={fadeIn("up", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-3xl font-semibold text-white text-center mb-8"
            >
              ჩვენი გუნდი
            </motion.h2>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-wrap justify-center gap-8"
            >
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
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default About;
