export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { body } = req;
  
    // Here you can verify the callback signature if needed
    // And process the payment status
  
    console.log("Received callback:", body);
  
    // Acknowledge the callback
    res.status(200).end();
  }