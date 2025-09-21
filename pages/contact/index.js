import { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ModernSection from "../../components/ModernSection";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import { NextSeo } from "next-seo";
const MapComponent = dynamic(() => import("../../components/MapComponent"), {
  ssr: false,
});

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const formRef = useRef(null);

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@next-hub.pro",
          name,
          subject,
          body: `<div>
            <h1>${name}</h1>
            <h1>${email}</h1>
            <h1>${message}</h1>
          </div>`,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Email sent successfully");
        formRef.current.reset(); // Reset form fields
      } else {
        setError(`Failed to send email: ${data.message}`);
      }
    } catch (err) {
      setError(`Failed to send email: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
      canonical="https://www.next-hub.pro/contact/"
        title="Next-Hub Solutions | Contact"
        description="დაგვიკავშირდით და მიიღეთ პასუხები თქვენს შეკითხვებზე. Next-Hub Solutions-ის გამოცდილ გუნდთან ერთად მიაღწიეთ თქვენს მიზნებს."
        keywords="Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა"
        openGraph={{
          type: "website",
          locale: "ka_GE",
          url: "https://www.next-hub.pro/contact",
          site_name: "Next-Hub Solutions",
          title: "Next-Hub Solutions | Contact",
          description:
            "დაგვიკავშირდით და მიიღეთ პასუხები თქვენს შეკითხვებზე. Next-Hub Solutions-ის გამოცდილ გუნდთან ერთად მიაღწიეთ თქვენს მიზნებს.",
          images: [
            {
              url: "https://www.next-hub.pro/nexthub.jpg",
              width: 800,
              height: 600,
              alt: "Next-Hub Solutions",
            },
          ],
        }}
        twitter={{
          handle: "@NextHub",
          site: "@NextHub",
          cardType: "summary_large_image",
          title: "Next-Hub Solutions | Contact",
          description:
            "მიაღწიეთ თქვენს მიზნებს, გამოიყენეთ სრული პოტენციალი და გაზარდეთ ბრენდის ცნობადობა და სანდოობა next-hub-ის გამოცდილ გუნდთან ერთად.",
          image: "https://www.next-hub.pro/nexthub.jpg",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Next-Hub, ციფრული რეალობა, იდეები, სურვილები, ოცნებები, ბრენდის ცნობადობა, სანდოობა, ციფრული ტრანსფორმაცია, ვებ აპლიკაციები, სოციალური მედია, SEO, ანალიტიკა",
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

      {/* page */}
      <div className="h-screen bg-primary/30">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col items-center p-5 rounded-2xl"
        >
          <MapComponent />
        </motion.div>
        <div className="container mx-auto py-24 text-center xl:text-left flex flex-col items-center justify-center h-full mt-[85px]">
          <ModernSection />
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px] px-4 md:px-0 mt-16">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-10"
            >
              დაგვიკავშირდით
            </motion.h1>

            <motion.form
              ref={formRef}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 items-center flex flex-col gap-4 w-full mx-auto mb-[100px]"
              onSubmit={send}
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="სახელი"
                  className="input text-center w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="მაილი"
                  className="input text-center w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="თემა"
                className="input text-center w-full"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="შეტყობინება"
                className="textarea text-center w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                disabled={loading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {loading ? "გაგზავნა..." : "გაგზავნა"}
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {successMessage && (
                <p className="text-green-500 mt-2">{successMessage}</p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
