import { verify } from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const signature = req.headers["callback-signature"];
      const publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4RUyAw3+CdkS3ZNILQh
zHI9Hemo+vKB9U2BSabppkKjzjjkf+0Sm76hSMiu/HFtYhqWOESryoCDJoqffY0Q
1VNt25aTxbj068QNUtnxQ7KQVLA+pG0smf+EBWlS1vBEAFbIas9d8c9b9sSEkTrr
TYQ90WIM8bGB6S/KLVoT1a7SnzabjoLc5Qf/SLDG5fu8dH8zckyeYKdRKSBJKvhx
tcBuHV4f7qsynQT+f2UYbESX/TLHwT5qFWZDHZ0YUOUIvb8n7JujVSGZO9/+ll/g
4ZIWhC1MlJgPObDwRkRd8NFOopgxMcMsDIZIoLbWKhHVq67hdbwpAq9K9WMmEhPn
PwIDAQAB
-----END PUBLIC KEY-----
`;

      const isVerified = verify(
        "sha256",
        Buffer.from(req.body),
        {
          key: publicKey,
          padding: require("crypto").constants.RSA_PKCS1_PADDING,
        },
        Buffer.from(signature, "base64")
      );

      if (!isVerified) {
        return res.status(400).json({ message: "Invalid signature" });
      }

      const { event, body } = req.body;

      if (event === "order_payment") {
        // გადახდის სტატუსის დამუშავება
        console.log("Received payment details:", body);

        // თქვენი ლოგიკის მიხედვით, დაამუშავეთ მიღებული ინფორმაცია
        // მაგ., შეგიძლიათ შეინახოთ მონაცემები მონაცემთა ბაზაში

        // უკან დააბრუნეთ წარმატების კოდი
        return res
          .status(200)
          .json({ message: "Callback received successfully" });
      } else {
        return res.status(400).json({ message: "Invalid event type" });
      }
    } catch (error) {
      console.error("Error processing callback:", error);
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const orderData = {
  callback_url: "https://next-hub.pro/api/paymentCallback", // Your Callback URL
  external_order_id: "id123", // Your internal order ID
  purchase_units: {
    currency: "GEL",
    total_amount: 100, // Total payment amount
    basket: [
      {
        quantity: 1,
        unit_price: 100,
        product_id: "product123",
      },
    ],
  },
  redirect_urls: {
    fail: "https://next-hub.pro/fail",
    success: "https://next-hub.pro/success",
  },
};
