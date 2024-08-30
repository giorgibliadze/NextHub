import { createVerify } from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const signature = req.headers['callback-signature'];
    const publicKey = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4RUyAw3+CdkS3ZNILQh
    zHI9Hemo+vKB9U2BSabppkKjzjjkf+0Sm76hSMiu/HFtYhqWOESryoCDJoqffY0Q
    1VNt25aTxbj068QNUtnxQ7KQVLA+pG0smf+EBWlS1vBEAFbIas9d8c9b9sSEkTrr
    TYQ90WIM8bGB6S/KLVoT1a7SnzabjoLc5Qf/SLDG5fu8dH8zckyeYKdRKSBJKvhx
    tcBuHV4f7qsynQT+f2UYbESX/TLHwT5qFWZDHZ0YUOUIvb8n7JujVSGZO9/+ll/g
    4ZIWhC1MlJgPObDwRkRd8NFOopgxMcMsDIZIoLbWKhHVq67hdbwpAq9K9WMmEhPn
    PwIDAQAB
    -----END PUBLIC KEY-----`;

    // Verify the signature
    const verify = createVerify('RSA-SHA256');
    verify.update(req.body);
    verify.end();

    const isVerified = verify.verify(publicKey, signature, 'base64');

    if (!isVerified) {
      return res.status(400).json({ error: 'Invalid signature' });
    }

    // Process the payment details
    const { event, zoned_request_time, body } = req.body;

    if (event === 'order_payment') {
      // Update your order status in the database based on body.order_id and other details
      console.log('Payment details received:', body);

      // Respond with HTTP 200
      return res.status(200).json({ message: 'Callback processed successfully' });
    }

    return res.status(400).json({ error: 'Invalid event type' });

  } catch (error) {
    console.error('Error processing callback:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}