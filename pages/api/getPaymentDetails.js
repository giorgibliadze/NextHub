export default async function handler(req, res) {
  const { order_id } = req.query;

  if (!order_id) {
    return res.status(400).json({ error: "Order ID is required" });
  }

  try {
    const token = await getAuthToken(); // Function to get the token

    const response = await fetch(
      `https://api.bog.ge/payments/v1/receipt/${order_id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to fetch payment details:", errorData);
      return res.status(response.status).json({
        error: errorData.message || "Failed to fetch payment details",
      });
    }

    const paymentDetails = await response.json();
    res.status(200).json(paymentDetails);
  } catch (error) {
    console.error("Error fetching payment details:", error.message);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

async function getAuthToken() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getAuthToken`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch auth token");
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error.message);
    throw new Error("Authentication failed");
  }
}