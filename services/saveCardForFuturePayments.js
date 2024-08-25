import axios from "axios";
import { getAuthToken } from "./auth"; // ფუნქცია, რომელიც JWT token-ს აბრუნებს

export const saveCardForFuturePayments = async (order_id) => {
  try {
    const token = await getAuthToken(); // მიიღეთ JWT token
    const response = await axios.put(
      `https://api.bog.ge/payments/v1/orders/${order_id}/cards`,
      {}, // PUT მეთოდი იყენებს ცარიელ ბოდი პარამეტრს
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Idempotency-Key": generateUUID(), // გამოაგენერეთ უნიკალური UUID ყოველი ახალი მოთხოვნისთვის
        },
      }
    );

    if (response.status === 202) {
      console.log("Card saved for future payments successfully.");
    } else {
      console.error("Failed to save card for future payments:", response.data);
    }
  } catch (error) {
    console.error("Error saving card for future payments:", error);
  }
};

// UUID გენერაციის ფუნქცია
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
