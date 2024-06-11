// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, body } = req.body;
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transport.verify();
      const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
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
