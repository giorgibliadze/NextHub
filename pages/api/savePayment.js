import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log("Request received:", req.body);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    orderId,
    status,
    amount,
    currency,
    buyerName,
    buyerEmail,
    buyerPhone,
    industry, // Add optional fields only if they exist in the schema
    captureMethod, // Add optional fields only if they exist in the schema
  } = req.body;

  try {
    const payment = await prisma.payment.create({
      data: {
        orderId,
        status,
        amount,
        currency,
        buyerName,
        buyerEmail,
        buyerPhone,
        industry, // Only pass optional fields if needed
        captureMethod, // Only pass optional fields if needed
      },
    });

    console.log("Payment saved successfully:", payment);
    return res.status(200).json(payment);
  } catch (error) {
    console.error("Error saving payment:", error.message);
    return res.status(500).json({
      error: "Failed to save payment",
      message: error.message,
    });
  }
}
