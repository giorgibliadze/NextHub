import { createPaymentOrder } from "../services/payment";

const handlePayment = async () => {
  const orderData = {
    callback_url: "https://example.com/callback",  // შეცვალეთ თქვენი რეალური URL-ით
    external_order_id: "id123",  // შეცვალეთ თქვენი შეკვეთის ID-თი
    purchase_units: {
      currency: "GEL",  // ვალუტა
      total_amount: 100,  // გადასახდელი თანხა
      basket: [
        {
          quantity: 1,
          unit_price: 100,
          product_id: "product123"  // პროდუქტის ID
        }
      ]
    },
    redirect_urls: {
      fail: "https://next-hub.pro/fail",  // შეცვალეთ თქვენი წარუმატებელი გადამისამართების URL-ით
      success: "https://next-hub.pro/success"  // შეცვალეთ თქვენი წარმატების URL-ით
    }
  };

  try {
    const response = await createPaymentOrder(orderData);
    console.log("Order created successfully:", response);
    
    // გადაამისამართეთ მომხმარებელი გადახდის გვერდზე
    window.location.href = response._links.redirect.href;
  } catch (error) {
    console.error("Payment failed:", error.message);
    // შესაბამისად იმართეთ შეცდომა
  }
};