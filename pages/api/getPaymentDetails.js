export default async function handler(req, res) {
  const { order_id } = req.query; // Get the order_id from the query parameters

  if (!order_id) {
    return res.status(400).json({ error: "Order ID is required" });
  }

  try {
    const token = await getAuthToken(); // Assuming you have a function to retrieve the token

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
      return res
        .status(response.status)
        .json({
          error: errorData.message || "Failed to fetch payment details",
        });
    }

    const paymentDetails = await response.json();
    res.status(200).json(paymentDetails);
  } catch (error) {
    console.error("Error fetching payment details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAuthToken() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getAuthToken`
    );
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw new Error("Authentication failed");
  }
}
