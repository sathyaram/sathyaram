import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "sathyatheram@gmail.com";
// Resend's own shared sender — works without verifying a custom domain,
// which is the whole point for a personal site. The tradeoff: it can only
// deliver to the address that owns the Resend account, so RESEND_API_KEY
// has to belong to an account signed up with sathyatheram@gmail.com.
const FROM_ADDRESS = "Portfolio Contact Form <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot first, before anything else: "company" is a field real
  // visitors never see (see ContactForm.tsx), so anything filled in there
  // is a bot. Dropping it up front means bot traffic never reaches the
  // config check below and never fills the logs with its noise. Responds
  // with a normal-looking success rather than a rejection, so the bot gets
  // no signal to adapt against — the email just never sends.
  if (typeof company === "string" && company.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Loose sanity check, not full RFC validation — the input type="email"
  // already does real validation client-side; this just blocks garbage
  // that reaches the API directly.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set, contact form cannot send.");
    return NextResponse.json(
      { error: "Email sending isn't configured yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
