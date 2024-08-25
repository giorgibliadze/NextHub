import axios from 'axios';
import { getAuthToken } from './auth';  // მოიყვანეთ თქვენი auth.js ფაილი

const PAYMENT_DETAILS_URL = 'https://api.bog.ge/payments/v1/receipt/';

export const getPaymentDetails = async (orderId) => {
  try {
    const token = await getAuthToken();  // მიიღეთ Bearer Token
    const response = await axios.get(`${PAYMENT_DETAILS_URL}${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // გადაიტანეთ პასუხის დეტალები
    console.log('Payment Details Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch payment details:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch payment details');
  }
};