// pages/contact/index.js
import { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ModernSection from "../../components/ModernSection";
import dynamic from "next/dynamic";

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
          to: "bliadze1997@gmail.com",
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
    <div className="container min-w-full h-full  smx:h-[900px] sm:h-[850px] md:h-[820px] lg:h-[820px] lgx:h-[820px] xl:h-[820px] xxl:h-[1000px] xll:h-[865px] bg-primary/60 items-center">
      <div className="container min-w-full flex-col mt-[130px]text-center xl:text-left flex items-center justify-center h-full">
        <ModernSection />
        <div className="flex flex-col w-full max-w-[700px] px-4 md:px-0 items-center">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            დაგვიკავშირდით
          </motion.h1>

          <motion.form
            ref={formRef}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={send}
          >
            <div className="flex flex-col md:flex-row gap-6 w-full">
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
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col items-center p-5 rounded-2xl"
      >
        <MapComponent />
      </motion.div>
    </div>
  );
};

export default Contact;
