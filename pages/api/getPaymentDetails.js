export default async function handler(req, res) {
  const { order_id } = req.query;

  if (!order_id) {
    return res.status(400).json({ error: "Order ID is required" });
  }

  try {
    const token = await getAuthToken();

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
      let errorData;
      try {
        errorData = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse error response as JSON:", jsonError);
        errorData = { message: "Unknown error occurred" };
      }
      console.error(`Failed to fetch payment details: ${response.statusText}`);
      return res.status(response.status).json({
        error: errorData.message || "Failed to fetch payment details",
      });
    }

    const paymentDetails = await response.json();
    if (!paymentDetails || Object.keys(paymentDetails).length === 0) {
      console.error("Payment details are empty or undefined.");
      return res.status(404).json({ error: "Payment details not found" });
    }

    res.status(200).json(paymentDetails);
  } catch (error) {
    console.error("Error fetching payment details:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAuthToken() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/getAuthToken`
    );
    if (!response.ok) {
      console.error(`Failed to fetch auth token: ${response.statusText}`);
      throw new Error("Failed to fetch auth token");
    }
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching auth token:", error.message);
    throw new Error("Authentication failed");
  }
}
