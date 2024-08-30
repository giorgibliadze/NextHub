import { useState, useRef, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ isOpen, onClose, cardData }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null); // State for payment details
  const [generatedOrderId, setGeneratedOrderId] = useState(null);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        setSuccessMessage("შეკვეთა მიღებულია");
        formRef.current.reset(); // Reset form fields
        setFormData({
          email: "",
          phone: "",
          subject: "",
          message: "",
          name: "",
        });
      } else {
        setError(`შეკვეთის მიღება ვერ მოხერხდა: ${data.message}`);
      }
    } catch (err) {
      setError(`შეკვეთის მიღება ვერ მოხერხდა: ${err.message}`);
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
      console.log("Token fetched successfully:", data.access_token);
      return data.access_token;
    } catch (error) {
      console.error("Error fetching auth token:", error);
      throw new Error("Authentication failed");
    }
  };

  const createOrder = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const token = await getAuthToken(); // Retrieve the token first
      const orderId = uuidv4(); // Generate a unique ID
      setGeneratedOrderId(orderId); // Store the generated ID
      const orderDetails = {
        callback_url: "https://next-hub.pro/api/callback",
        external_order_id: orderId,
        purchase_units: {
          currency: "GEL",
          total_amount: cardData.price,
          basket: [
            {
              quantity: 1,
              unit_price: cardData.price,
              product_id: cardData.product_id,
            },
          ],
        },
        redirect_urls: {
          fail: "https://example.com/fail",
          success: "https://example.com/success",
        },
      };

      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, orderDetails }),
      });

      const data = await res.json();

      if (res.ok) {
        const orderIdFromResponse = data.id; // Get the correct order ID
        await fetchPaymentDetails(orderIdFromResponse); // Pass it to the fetchPaymentDetails function
        console.log("Order created successfully:", data);
        window.location.href = data._links.redirect.href;
      } else {
        setError(`Order creation failed: ${data.message}`);
        console.error("Order creation failed:", data);
      }
    } catch (err) {
      setError(`Order creation failed: ${err.message}`);
      console.error("Order creation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPaymentDetails = async (orderId) => {
    console.log("Fetching payment details for order ID:", orderId); // Add this line to debug
    try {
      const res = await fetch(`/api/getPaymentDetails?order_id=${orderId}`);
      const data = await res.json();

      if (res.ok) {
        console.log("Payment Details:", data);
        setPaymentDetails(data); // Update state with payment details
      } else {
        setError(`Failed to fetch payment details: ${data.message}`);
      }
    } catch (err) {
      setError(`Failed to fetch payment details: ${err.message}`);
      console.error("Payment details error:", err);
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative flex flex-col items-center p-6 border-4 border-glow bg-black rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl animate-container-glow w-11/12 md:w-1/2 lg:w-1/3 max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold text-gray-100 mt-4 mb-4">
          {cardData.title}
        </h3>
        <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 animate-price-glow">
          ₾ {cardData.price} +
        </div>
        <ul className="text-gray-200 mb-4 text-center w-full">
          {cardData.features.map((feature, index) => (
            <li key={index} className="mb-2">
              {feature}
            </li>
          ))}
        </ul>

        {/* Display payment details if available */}
        {paymentDetails && (
          <div className="text-white mt-4">
            <h4 className="text-xl font-bold">Payment Details:</h4>
            <p>Order ID: {paymentDetails.order_id}</p>
            <p>Status: {paymentDetails.order_status?.value}</p>
            <p>
              Amount: {paymentDetails.purchase_units?.request_amount}{" "}
              {paymentDetails.purchase_units?.currency_code}
            </p>
            {/* Add more fields as needed */}
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
              placeholder="სახელი"
              className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent focus:bg-transparent"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="მაილი"
              className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent focus:bg-transparent"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="ტელეფონი"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent focus:bg-transparent"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="თემა"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent focus:bg-transparent"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="შეტყობინება"
            className="text-white bg-transparent border-b border-gray-500 focus:outline-none focus:border-accent input text-center w-full focus:text-accent focus:bg-transparent"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-white"
              disabled={loading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "შეკვეთა..." : "შეკვეთა"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-white"
              onClick={createOrder}
              disabled={loading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "გადახდა..." : "გადახდა"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && (
            <p className="text-green-500 mt-2 text-center">{successMessage}</p>
          )}
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

export default Modal;
