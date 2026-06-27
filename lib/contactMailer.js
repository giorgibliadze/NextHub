import nodemailer from "nodemailer";

export const CONTACT_EMAIL = "info@next-hub.pro";

export function createContactTransport() {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function sendContactMail({ to = CONTACT_EMAIL, subject, html }) {
  const { SMTP_EMAIL } = process.env;
  const transport = createContactTransport();

  await transport.verify();

  return transport.sendMail({
    from: SMTP_EMAIL,
    to,
    subject,
    html,
  });
}
