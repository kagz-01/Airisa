import { Handlers } from "$fresh/server.ts";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot
}

// Simple HTML template for the inbound email
function renderEmail(data: Required<Omit<ContactPayload, "website">>) {
  const { name, email, company, message } = data;
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /></head><body style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.5;color:#0f172a;">
  <h2 style="color:#065f46;margin:0 0 12px;">New Contact Form Submission</h2>
  <table style="border-collapse:collapse;width:100%;max-width:600px;">
    <tbody>
      <tr><td style="padding:4px 8px;font-weight:600;">Name</td><td style="padding:4px 8px;">${name}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Email</td><td style="padding:4px 8px;">${email}</td></tr>
      <tr><td style="padding:4px 8px;font-weight:600;">Company</td><td style="padding:4px 8px;">${company || "—"}</td></tr>
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
    } catch (_e) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, company = "", message, website } = payload;

    // Honeypot: if filled, treat as spam
    if (website) {
      return new Response(JSON.stringify({ success: true, message: "Message received." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resendKey = Deno.env.get("DENO_RESEND_API_KEY");
    const formspreeEndpoint = Deno.env.get("FORMSPREE_ENDPOINT");
    if (!resendKey) {
      console.warn("[contact] Missing DENO_RESEND_API_KEY environment variable.");
    }

    const toAddress = "e.gathua@airisagreenconsulting.com"; // destination
    const fromAddress = "site@airisagreenconsulting.com"; // must be verified in provider
    const subject = `New inquiry from ${name}`;

    // Attempt email send if key present
    let emailSent = false;
    if (resendKey) {
      try {
        const html = renderEmail({ name, email, company, message });
        const sendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [toAddress],
            reply_to: email,
            subject,
            html,
          }),
        });
        if (!sendRes.ok) {
          console.error("Resend API error", sendRes.status, await sendRes.text());
        } else {
          emailSent = true;
        }
      } catch (err) {
        console.error("Resend send failed", err);
      }
    }

    // Fallback: Formspree endpoint if configured (works without domain ownership)
    if (!emailSent && formspreeEndpoint) {
      try {
        const fsRes = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({ name, email, company, message }),
        });
        if (!fsRes.ok) {
          console.error("Formspree error", fsRes.status, await fsRes.text());
        } else {
          emailSent = true;
        }
      } catch (err) {
        console.error("Formspree send failed", err);
      }
    }

    // Optionally: persist to a database / log aggregator here
    console.log("[contact] submission", { name, email, company, message, emailSent });

    return new Response(
      JSON.stringify({
        success: true,
        message: emailSent
          ? "Message sent — we will reply within 1 business day."
          : "Message received — delivery pending (no email gateway configured).",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
