import { Handlers } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

interface ContactPayload {
  name?: string;
  email?: string;
  country?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
}

function buildJsonSummary(
  data: Required<Omit<ContactPayload, "website">>,
): string {
  return JSON.stringify(
    {
      name: data.name,
      email: data.email,
      country: data.country || "",
      subject: data.subject || "",
      message: data.message,
      receivedAt: new Date().toISOString(),
    },
    null,
    2,
  );
}

function renderEmail(data: Required<Omit<ContactPayload, "website">>) {
  const { name, email, country, subject, message } = data;
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.5;color:#0f172a;">
  <h2 style="color:#065f46;margin:0 0 12px;">New Contact Form Submission</h2>
  <table style="border-collapse:collapse;width:100%;max-width:600px;">
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:600;">Name</td><td style="padding:4px 8px;">${name}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Email</td><td style="padding:4px 8px;">${email}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Country</td><td style="padding:4px 8px;">${
    country || "—"
  }</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Subject</td><td style="padding:4px 8px;">${
    subject || "—"
  }</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Message</td><td style="padding:4px 8px;white-space:pre-wrap;">${message}</td></tr>
    </tbody>
  </table>
  <p style="margin-top:16px;font-size:12px;color:#64748b;">Sent automatically from the website contact form.</p>
  </body></html>`;
}

export const handler: Handlers = {
  async POST(req) {
    let payload: ContactPayload;
    try {
      payload = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, country = "", subject = "", message, website } =
      payload;

    // Honeypot check
    if (website) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 422, headers: { "Content-Type": "application/json" } },
      );
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Prepare structured data
    const structured = {
      name,
      email,
      country,
      subject,
      message,
    } satisfies Required<Omit<ContactPayload, "website">>;

    const html = renderEmail(structured);
    const text = buildJsonSummary(structured);

    const headers = { "Content-Type": "application/json" };
    const requiredEnv = {
      host: Deno.env.get("SMTP_HOST"),
      port: Deno.env.get("SMTP_PORT"),
      user: Deno.env.get("SMTP_USER"),
      pass: Deno.env.get("SMTP_PASS"),
      to: Deno.env.get("TO_EMAIL"),
    } as const;

    const missing = Object.entries(requiredEnv)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missing.length) {
      console.error("Missing SMTP environment variables:", missing.join(", "));
      return new Response(
        JSON.stringify({
          success: false,
          error: `Email delivery is not configured on the server. Missing: ${
            missing.join(", ")
          }`,
        }),
        { status: 500, headers },
      );
    }

    const parsedPort = Number(requiredEnv.port);
    if (!Number.isFinite(parsedPort)) {
      console.error("Invalid SMTP_PORT value:", requiredEnv.port);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server email settings are invalid (SMTP_PORT)",
        }),
        { status: 500, headers },
      );
    }

    const secureRaw = Deno.env.get("SMTP_SECURE");
    const secure = secureRaw ? secureRaw.toLowerCase() === "true" : true;

    // Construct "From" header: "User Name <system@email.com>"
    // We MUST use the authenticated email (requiredEnv.user) as the sender address.
    // Sending *as* the user's email (e.g. user@gmail.com) is spoofing and will be blocked by Gmail/Outlook.
    // However, setting the display name to the user's name makes it look correct in the inbox.
    const cleanName = name.replace(/["<>]/g, "");
    const fromHeader = `"${cleanName}" <${requiredEnv.user}>`;

    let emailSent = false;
    let client: SMTPClient | null = null;
    try {
      client = new SMTPClient({
        connection: {
          hostname: requiredEnv.host!,
          port: parsedPort,
          tls: secure,
          auth: { username: requiredEnv.user!, password: requiredEnv.pass! },
        },
      });

      await client.send({
        from: fromHeader,
        to: requiredEnv.to!,
        subject: subject
          ? `New Inquiry: ${subject}`
          : `New Inquiry from ${name}`,
        html,
        content: text,
        replyTo: email,
      });

      emailSent = true;
    } catch (err) {
      console.error("SMTP error:", err);
    } finally {
      if (client) {
        try {
          await client.close();
        } catch (closeErr) {
          console.error("SMTP close error:", closeErr);
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: emailSent
          ? "Message sent successfully."
          : "Message received, but email delivery failed.",
      }),
      {
        status: 200,
        headers,
      },
    );
  },
};
