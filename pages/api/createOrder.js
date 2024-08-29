export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).end(); // Method Not Allowed
    }
  
    try {
      const { token, orderDetails } = req.body;
  
      // Log the order details being sent
      console.log("Order Details:", JSON.stringify(orderDetails, null, 2));
  
      const response = await fetch(
        "https://api.bog.ge/payments/v1/ecommerce/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Accept-Language": "ka",
          },
          body: JSON.stringify(orderDetails),
        }
      );
  
      const data = await response.json();
  
      // Log the response data
      console.log("Response Data:", JSON.stringify(data, null, 2));
  
      if (!response.ok) {
        console.error("Error creating order:", data);
        return res.status(response.status).json({ message: data });
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ error: "Order creation failed" });
    }
  }