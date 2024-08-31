import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, status, amount, currency, buyerName, buyerEmail, buyerPhone } = req.body;

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
      },
    });

    // Return a JSON response
    return res.status(200).json(payment);
  } catch (error) {
    console.error("Error saving payment:", error);

    // Return an error as JSON
    return res.status(500).json({ error: "Failed to save payment" });
  }
}
