# Contact Form SMTP Runbook

Comprehensive checklist for ensuring the `/contact` form emails reach Eve
reliably via SMTP (with optional Resend/Formspree fallbacks).

## 1. Prerequisites

- Deno 1.40+ and Fresh installed locally for verification.
- SMTP provider that exposes hostname, port, credentials, and either implicit
  TLS or STARTTLS (e.g., Gmail, Outlook, SendGrid, Zoho).
- Access to Eve's inbox (or distribution list) for end-to-end validation.
- Optional: Resend account and Formspree endpoint for redundancy.

## 2. Required Environment Variables

| Variable                              | Required | Description                                                        |
| ------------------------------------- | -------- | ------------------------------------------------------------------ |
| `SMTP_HOST`                           | Yes      | Mail server hostname (e.g., `smtp.gmail.com`).                     |
| `SMTP_PORT`                           | Yes      | Port for SMTP (typically `465` for SSL/TLS or `587` for STARTTLS). |
| `SMTP_SECURE`                         | Yes      | Set to `true` for implicit TLS, `false` for STARTTLS/plain.        |
| `SMTP_USER`                           | Yes      | SMTP username or full email address used for auth.                 |
| `SMTP_PASS`                           | Yes      | SMTP password or provider-specific app password/token.             |
| `SMTP_FROM`                           | No       | Friendly FROM header. Defaults to `SMTP_USER` if omitted.          |
| `TO_EMAIL`                            | Yes      | Eve's inbox or any address that should receive submissions.        |
| `FORMSPREE_ENDPOINT`                  | No       | HTTPS endpoint acting as a fallback queue.                         |
| `DENO_RESEND_API_KEY`                 | No       | Legacy Resend API key if keeping Resend enabled.                   |
| `RESEND_FROM`                         | No       | Verified Resend sender address.                                    |
| `RESEND_TO`                           | No       | Recipient for Resend flow.                                         |
| `AI_BASE_URL`/`AI_API_KEY`/`AI_MODEL` | No       | Required only if the AI assistant is deployed.                     |

> **Tip:** Store secrets in `.env` locally and in your hosting provider's secret
> manager in production.

## 3. Local Verification Steps

1. Export secrets in your shell (or use a `.env` loader) and start the dev
   server:
   ```sh
   deno task start
   ```
2. Submit the `/contact` form in the browser with a real email address. Confirm
   the success toast appears and Eve receives the email.
3. Exercise the API directly to ensure JSON serialization matches expectations:
   ```sh
   curl -X POST http://localhost:8000/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Runbook Test",
       "email": "tester@example.com",
       "country": "Kenya",
       "subject": "Runbook verification",
       "message": "Hello from curl",
       "website": ""
     }'
   ```
4. Temporarily unset `SMTP_PASS` (or stop the SMTP server) and repeat the curl.
   The API should respond with `success: false` and log the configuration
   error—verifies guard rails work.
5. (Optional) Unset the entire SMTP block, set `FORMSPREE_ENDPOINT`, and confirm
   the fallback path works.

## 4. Deployment Checklist

1. **Secrets:** Configure all required vars (`SMTP_*`, `TO_EMAIL`, optional
   fallbacks) in your host before deploying.
2. **Build:**
   ```sh
   deno task build
   ```
3. **Deploy:** Push to `main` (or your release branch) and trigger the
   deployment pipeline (e.g., Deno Deploy, Supabase Edge, Fly.io).
4. **Post-Deploy Validation:**
   - Submit the form once with real data.
   - Verify Eve received the email and the JSON snapshot is present.
   - Review server logs for `[contact]` entries—ensure HTTP 200 responses back
     from the SMTP library.

## 5. Troubleshooting

| Symptom                                                              | Likely Cause                               | Resolution                                                                                                            |
| -------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| API returns `success: false` with "Email delivery is not configured" | Missing env variables                      | Check deployment secrets; run `deno task check` locally to ensure `.env` is loaded.                                   |
| API returns success but Eve receives nothing                         | SMTP blocked or spam filtering             | Verify SMTP provider activity logs, ensure `SMTP_FROM` is authorized, and DKIM/SPF records exist.                     |
| SMTP error `EAUTH` or `535`                                          | Wrong credentials or app password required | Reset credentials, enable "Less secure app"/app-password mode, or switch to provider tokens.                          |
| Timeout errors                                                       | Port/firewall issue                        | Ensure outbound SMTP ports are allowed; for Deno Deploy use a provider that supports HTTPS APIs (fallback to Resend). |
| Form takes long to respond                                           | SMTP handshake delay                       | Consider enabling Formspree fallback or queuing, and monitor provider latency.                                        |

## 6. Monitoring & Ops Tips

- Add log drains or observability hooks filtering for `SMTP error:` to alert on
  delivery failures.
- Configure daily synthetic tests (cron job hitting `/api/contact` with a dummy
  payload) and auto-close them with a keyword in the message to identify test
  traffic.
- Keep SMTP credentials rotated quarterly; app passwords can be revoked and
  recreated without code changes.
- For high volume, consider using Resend or another transactional provider's
  HTTP API instead of raw SMTP.
