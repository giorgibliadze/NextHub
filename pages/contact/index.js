// pages/contact/index.js
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState(""); // Add a state for name
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
        alert("Email sent successfully");
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
    <div className="h-full lg:h-[700px] xxl:h-[950px] xll:h-[970px] bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            დაგვიკავშირდით
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={send}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="სახელი"
                className="input text-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="მაილი"
                className="input text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input
              type="text"
              placeholder="თემა"
              className="input text-center"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="შეტყობინება"
              className="textarea text-center"
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
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
