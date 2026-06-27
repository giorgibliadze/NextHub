import { sendContactMail } from "../../lib/contactMailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, body } = req.body;

    try {
      const sendResult = await sendContactMail({
        to,
        subject,
        html: body,
      });
      res
        .status(200)
        .json({ message: "Email sent successfully", result: sendResult });
    } catch (error) {
      console.error("Error sending email: ", error); // Log the error
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
