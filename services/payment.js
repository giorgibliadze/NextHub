import axios from "axios";
import { getAuthToken } from "./auth";  // მოიყვანეთ თქვენი auth.js ფაილი

const PAYMENT_URL = "https://api.bog.ge/payments/v1/ecommerce/orders";

export const createPaymentOrder = async (orderData) => {
  try {
    // მიიღეთ Bearer Token
    const token = await getAuthToken();
    
    // შეკვეთის მოთხოვნის გაგზავნა API-სკენ
    const response = await axios.post(
      PAYMENT_URL,
      orderData,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept-Language": "ka",  // ან "en" მომხმარებლის ინტერფეისის ენის არჩევით
        },
      }
    );

    // შეკვეთის წარმატებით შექმნის შედეგი
    console.log("Payment Order Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Payment Order Creation Failed:", error.response ? error.response.data : error.message);
    throw new Error("Payment order creation failed");
  }
};