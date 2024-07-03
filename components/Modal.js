// components/Modal.jsx
import { useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Modal = ({ isOpen, onClose, cardData }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          phone,
          subject,
          body: `<div>
            <h1>${name}</h1>
            <h1>${email}</h1>
            <h1>${phone}</h1>
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex flex-col items-center p-6 border-4 border-glow bg-black rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow w-11/12 md:w-1/2 lg:w-1/3"
      >
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          {cardData.title}
        </h3>
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 animate-price-glow">
          ₾ {cardData.price} +
        </div>
        <ul className="text-gray-200 mb-4">
          {cardData.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>
        <motion.form
          ref={formRef}
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto border-glow animate-container-glow"
          onSubmit={send}
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="სახელი"
              className="input text-center w-full text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="მაილი"
              className="input text-center w-full text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="ტელეფონი"
            className="input text-center w-full text-white"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="თემა"
            className="input text-center w-full text-white"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="შეტყობინება"
            className="textarea text-center w-full text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            disabled={loading}
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              {loading ? "შეკვეთა..." : "შეკვეთა"}
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2">{successMessage}</p>
          )}
        </motion.form>
        <button onClick={onClose} className="mt-4 text-accent underline">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
