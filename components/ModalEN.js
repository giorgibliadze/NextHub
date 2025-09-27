'use client';

import { useState, useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants"; // adjust path if needed
import { v4 as uuidv4 } from "uuid";

const ModalEN = ({ isOpen, onClose, cardData }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [generatedOrderId, setGeneratedOrderId] = useState(null);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const send = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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
          ...formData,
          body: `<div>
            <h1>${formData.name}</h1>
            <h1>${formData.email}</h1>
            <h1>${formData.phone}</h1>
            <h1>${formData.message}</h1>
          </div>`,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Order received");
        formRef.current?.reset();
        setFormData({
          email: "",
          phone: "",
          subject: "",
          message: "",
          name: "",
        });
      } else {
        setError(`Failed to submit order: ${data?.message || "Unknown error"}`);
      }
    } catch (err) {
      setError(`Failed to submit order: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const getAuthToken = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getAuthToken`
      );
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching auth token:", error);
      throw new Error("Authentication failed");
    }
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!validateForm()) return;

    setPayLoading(true);

    try {
      const token = await getAuthToken();
      const orderId = uuidv4();
      setGeneratedOrderId(orderId);

      const orderDetails = {
        callback_url: "https://next-hub.pro/api/callback",
        external_order_id: orderId,
        purchase_units: {
          currency: "GEL", // keep your gateway currency
          total_amount: cardData?.price,
          basket: [
            {
              quantity: 1,
              unit_price: cardData?.price,
              product_id: cardData?.product_id,
            },
          ],
        },
        redirect_urls: {
          fail: "https://next-hub.pro/payment/fail",
          success: "https://next-hub.pro/payment/success",
        },
      };

      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, orderDetails }),
      });

      const data = await res.json();

      if (res.ok) {
        const orderIdFromResponse = data.id;
        const orderStatus = data.status || "pending";

        await fetchPaymentDetails(orderIdFromResponse);

        await savePayment({
          orderId: orderIdFromResponse,
          status: orderStatus,
          amount: cardData?.price,
          currency: "GEL",
          buyerName: formData.name,
          buyerEmail: formData.email,
          buyerPhone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        });

        // redirect user to payment provider
        window.location.href = data._links.redirect.href;
      } else {
        setError(`Order creation failed: ${data?.message || "Unknown error"}`);
      }
    } catch (err) {
      setError(`Order creation failed: ${err.message}`);
    } finally {
      setPayLoading(false);
    }
  };

  const savePayment = async (paymentData) => {
    try {
      const res = await fetch("/api/savePayment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const responseText = await res.text();
      if (!responseText) throw new Error("Empty response from server");

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Failed to parse JSON response:", responseText);
        throw new Error("Failed to parse JSON response");
      }

      if (!res.ok) {
        console.error("Failed to save payment:", data);
        return;
      }
    } catch (err) {
      console.error("Error saving payment:", err.message);
    }
  };

  const fetchPaymentDetails = async (orderId) => {
    try {
      const res = await fetch(`/api/getPaymentDetails?order_id=${orderId}`);
      const responseText = await res.text();
      if (!responseText) throw new Error("Empty response from the server.");
      const data = JSON.parse(responseText);

      if (res.ok) {
        if (data && Object.keys(data).length > 0) {
          setPaymentDetails(data);
        } else {
          setError("Payment details are unavailable.");
        }
      } else {
        setError(`Failed to fetch payment details: ${data?.message || ""}`);
      }
    } catch (err) {
      setError(`Failed to fetch payment details: ${err.message}`);
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.classList.add("modal-open");
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative flex flex-col items-center p-6 border-4 border-glow bg-black rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow w-11/12 md:w-1/2 lg:w-1/3 max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold text-gray-100 mt-4 mb-4">
          {cardData?.title || "Selected plan"}
        </h3>

        {/* Price display for EN (USD visible). Change to ₾ if you prefer. */}
        {typeof cardData?.price !== "undefined" && (
          <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 animate-price-glow">
            $ {cardData.price}
          </div>
        )}

        {Array.isArray(cardData?.features) && cardData.features.length > 0 && (
          <ul className="text-gray-200 mb-4 text-center w-full">
            {cardData.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Payment details (shown if available) */}
        {paymentDetails && (
          <div className="text-white mt-4 w-full">
            <h4 className="text-xl font-bold mb-2">Payment Details:</h4>
            <p>Order ID: {paymentDetails.order_id}</p>
            <p>Status: {paymentDetails.order_status?.value}</p>
            <p>
              Amount: {paymentDetails.purchase_units?.request_amount}{" "}
              {paymentDetails.purchase_units?.currency_code}
            </p>
          </div>
        )}

        <motion.form
          id="card-form"
          ref={formRef}
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col gap-6 w-full mx-auto border-glow animate-container-glow text-white"
          onSubmit={send}
        >
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-white"
              disabled={loading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "Ordering..." : "Order now"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
        </motion.form>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="mt-4 text-accent underline"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ModalEN;
