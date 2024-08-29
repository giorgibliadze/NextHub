export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { order_id } = req.query; // Get the order_id from query parameters
  
    if (!order_id) {
      return res.status(400).json({ error: "Order ID is required" });
    }
  
    try {
      const token = await getAuthToken(); // Retrieve the token
  
      const response = await fetch(
        `https://api.bog.ge/payments/v1/receipt/${order_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error("Error fetching payment details:", data);
        return res.status(response.status).json({ message: data });
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error("Error fetching payment details:", error);
      res.status(500).json({ error: "Failed to retrieve payment details" });
    }
  }
  
  // Helper function to get the auth token
  async function getAuthToken() {
    try {
      const response = await fetch("/api/getAuthToken");
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching auth token:", error);
      throw new Error("Authentication failed");
    }
  }