import axios from "axios";
import { getAuthToken } from "./auth"; // Assuming you have an auth.js that handles token retrieval

const PAYMENT_API_URL = "https://api.bog.ge/payments/v1/ecommerce/orders";

export const createPaymentOrder = async (orderData) => {
  try {
    const token = await getAuthToken(); // Retrieve the Bearer token
    console.log("Token:", token);
    const response = await axios.post(PAYMENT_API_URL, orderData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Return the API response data
  } catch (error) {
    console.error("Error creating payment order:", error);
    throw new Error("Payment order creation failed");
  }
};
