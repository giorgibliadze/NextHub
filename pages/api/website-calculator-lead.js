import { CONTACT_EMAIL, sendContactMail } from "../../lib/contactMailer";

const REQUIRED_FIELDS_ERROR = "გთხოვთ შეავსოთ სავალდებულო ველები.";
const CONTACT_ERROR = "გთხოვთ მიუთითოთ ტელეფონი ან ელფოსტა.";
const CONSENT_ERROR = "გთხოვთ დაეთანხმოთ დაკავშირების პირობებს.";

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function listValue(value) {
  if (Array.isArray(value) && value.length > 0) {
    return value.map(escapeHtml).join(", ");
  }

  return "არ არის მითითებული";
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#9ca3af;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#ffffff;">${value}</td>
    </tr>
  `;
}

function buildEmailBody(lead) {
  const submittedAt = new Date().toISOString();

  return `
    <div style="font-family:Arial,sans-serif;background:#0b0b0f;color:#ffffff;padding:24px;">
      <h1 style="margin:0 0 18px;color:#f13024;font-size:24px;">
        ვებსაიტის კალკულატორის ახალი მოთხოვნა
      </h1>
      <table style="width:100%;border-collapse:collapse;background:#15151b;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">
        <tbody>
          ${row("სახელი", escapeHtml(lead.name))}
          ${row("ტელეფონი", escapeHtml(lead.phone || "არ არის მითითებული"))}
          ${row("ელფოსტა", escapeHtml(lead.email || "არ არის მითითებული"))}
          ${row("კომპანიის სახელი", escapeHtml(lead.company || "არ არის მითითებული"))}
          ${row("დამატებითი კომენტარი", escapeHtml(lead.comment || "არ არის მითითებული"))}
          ${row("ვებსაიტის ტიპი", escapeHtml(lead.websiteType))}
          ${row("გვერდების რაოდენობა", escapeHtml(lead.pageCount))}
          ${row("დიზაინის დონე", escapeHtml(lead.designLevel))}
          ${row("არჩეული ფუნქციონალი", listValue(lead.selectedFeatures))}
          ${row("ტექნოლოგია", escapeHtml(lead.technology))}
          ${row("სავარაუდო ფასი", escapeHtml(lead.estimatedPrice))}
          ${row("ფასის დიაპაზონი", escapeHtml(lead.priceRange))}
          ${row("რეკომენდებული პაკეტი", escapeHtml(lead.packageName))}
          ${row("გვერდის URL", escapeHtml(lead.pageUrl || "არ არის მითითებული"))}
          ${row("გაგზავნის თარიღი", escapeHtml(submittedAt))}
        </tbody>
      </table>
    </div>
  `;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const lead = req.body || {};

  if (lead.website) {
    return res.status(200).json({ message: "მოთხოვნა მიღებულია." });
  }

  if (!String(lead.name || "").trim()) {
    return res.status(400).json({ message: REQUIRED_FIELDS_ERROR });
  }

  if (!String(lead.phone || "").trim() && !String(lead.email || "").trim()) {
    return res.status(400).json({ message: CONTACT_ERROR });
  }

  if (!lead.consent) {
    return res.status(400).json({ message: CONSENT_ERROR });
  }

  try {
    await sendContactMail({
      to: CONTACT_EMAIL,
      subject: "ვებსაიტის კალკულატორის ახალი მოთხოვნა",
      html: buildEmailBody(lead),
    });

    return res.status(200).json({ message: "მოთხოვნა წარმატებით გაიგზავნა." });
  } catch (error) {
    console.error("Website calculator lead email error:", error);
    return res.status(500).json({
      message: "მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.",
    });
  }
}
