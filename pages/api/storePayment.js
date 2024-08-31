import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      orderId,
      status,
      amount,
      currency,
      buyerName,
      buyerEmail,
      buyerPhone,
      industry,
      captureMethod,
      paymentDetails,
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
          industry,
          captureMethod,
          paymentDetails: {
            create: paymentDetails.map((detail) => ({
              transactionId: detail.transactionId,
              method: detail.method,
              amount: detail.amount,
              currencyCode: detail.currencyCode,
              items: detail.items,
            })),
          },
        },
      });

      res.status(201).json({ success: true, payment });
    } catch (error) {
      console.error("Error storing payment:", error);
      res.status(500).json({ error: "Failed to store payment" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
