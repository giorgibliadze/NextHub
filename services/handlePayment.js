const handlePayment = async () => {
  const orderData = {
    callback_url: "https://next-hub.pro/api/paymentCallback", // თქვენი callback URL
    external_order_id: "id123", // თქვენი შიდა შეკვეთის ID
    purchase_units: {
      currency: "GEL",
      total_amount: 100, // გადასახდელი საერთო თანხა
      basket: [
        {
          quantity: 1,
          unit_price: 100,
          product_id: "product123",
        },
      ],
    },
    redirect_urls: {
      fail: "https://next-hub.pro/fail",
      success: "https://next-hub.pro/success",
    },
  };

  try {
    const response = await createPaymentOrder(orderData);

    // წარმატებით შექმნილი შეკვეთის შემდეგ, მომხმარებლის გადამისამართება გადახდის გვერდზე
    window.location.href = response._links.redirect.href;
  } catch (error) {
    console.error("Payment failed:", error.message);
    // შესაბამისად იმართეთ შეცდომა
  }
};
