import axios from "axios";
import { getAuthToken } from "./auth"; // იმპორტი აუტენტიფიკაციისთვის

const PAYMENT_URL = "https://api.bog.ge/payments/v1/ecommerce/orders";

export const createPaymentOrder = async (orderData) => {
  try {
    const token = await getAuthToken(); // მიიღეთ Bearer Token
    const response = await axios.post(PAYMENT_URL, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept-Language": "ka", // ან "en" მომხმარებლის ინტერფეისის ენის არჩევით
      },
    });

    return response.data;
  } catch (error) {
    console.error(
      "Payment Order Creation Failed:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Payment order creation failed");
  }
};
