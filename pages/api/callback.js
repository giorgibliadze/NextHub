import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import getRawBody from "raw-body";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false, // Disable Next.js's default body parsing
  },
};

export default async function handler(req, res) {
  // Ensure it's a POST request
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Get the callback signature from the headers
  const signature = req.headers["callback-signature"];
  if (!signature) {
    return res.status(400).json({ error: "Missing signature" });
  }

  // Define the public key for signature verification
  const publicKey = `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4RUyAw3+CdkS3ZNILQh
  zHI9Hemo+vKB9U2BSabppkKjzjjkf+0Sm76hSMiu/HFtYhqWOESryoCDJoqffY0Q
  1VNt25aTxbj068QNUtnxQ7KQVLA+pG0smf+EBWlS1vBEAFbIas9d8c9b9sSEkTrr
  TYQ90WIM8bGB6S/KLVoT1a7SnzabjoLc5Qf/SLDG5fu8dH8zckyeYKdRKSBJKvhx
  tcBuHV4f7qsynQT+f2UYbESX/TLHwT5qFWZDHZ0YUOUIvb8n7JujVSGZO9/+ll/g
  4ZIWhC1MlJgPObDwRkRd8NFOopgxMcMsDIZIoLbWKhHVq67hdbwpAq9K9WMmEhPn
  PwIDAQAB
  -----END PUBLIC KEY-----`;

  try {
    // Parse the raw body
    const rawBody = await getRawBody(req);
    
    // Verify the signature
    const verify = crypto.createVerify("RSA-SHA256");
    verify.update(rawBody);
    verify.end();

    const isValidSignature = verify.verify(publicKey, signature, "base64");

    if (!isValidSignature) {
      return res.status(400).json({ error: "Invalid signature" });
    }

    // Parse the raw body as JSON
    const parsedBody = JSON.parse(rawBody.toString());

    const { event, zoned_request_time, body } = parsedBody;

    if (event !== "order_payment") {
      return res.status(400).json({ error: "Invalid event type" });
    }

    const {
      order_id,
      status,
      amount,
      currency,
      buyerName,
      buyerEmail,
      buyerPhone,
    } = body;

    // Update the payment status in the database
    const payment = await prisma.payment.update({
      where: { orderId: order_id },
      data: {
        status,
        amount,
        currency,
        buyerName,
        buyerEmail,
        buyerPhone,
        updatedAt: new Date(zoned_request_time),
      },
    });

    console.log("Payment status updated successfully:", payment);

    // Respond with HTTP 200 to acknowledge the callback
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error handling callback:", error.message);
    return res.status(500).json({
      error: "Failed to handle callback",
      message: error.message,
    });
  }
}