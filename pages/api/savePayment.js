import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
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
    industry, // optional
    captureMethod, // optional
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
        industry: industry || null, // ensure optional fields are handled
        captureMethod: captureMethod || null,
      },
    });

    console.log("Payment saved successfully:", payment);
    return res.status(200).json(payment);
  } catch (error) {
    console.error("Error saving payment:", error.message);
    console.error("Error details:", error); // Log the entire error object

    return res.status(500).json({
      error: "Failed to save payment",
      message: error.message,
      details: error.details || "No additional details available",
    });
  }
}