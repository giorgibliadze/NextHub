import { getAuthToken } from "./auth";

const makePaymentRequest = async (paymentData) => {
  try {
    const token = await getAuthToken();
    const response = await axios.post("https://api.bog.ge/endpoint", paymentData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Payment request failed:", error);
    throw new Error("Payment request failed");
  }
};