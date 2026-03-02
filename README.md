# Airisa Green Website (Fresh + Deno)

Marketing site scaffold for Airisa Green built with Fresh, Preact Islands, and
Tailwind CSS.

## Structure

- `components/`: Navbar, Footer, Hero, ServiceCard
- `islands/`: `ContactForm` (POSTs to `/api/contact`), `AIChatAssistant` (POSTs
  to `/api/ai`)
- `routes/`: marketing pages (`/about`, `/services`, `/industries`,
  `/case-studies`, `/testimonials`, `/contact`, `/ecard`) and API endpoints
  under `/api`
- `static/`: CSS and static assets served at runtime (Fresh serves from here)
- `images/`: Project images placeholders (not served by Fresh by default)
- `import_map.json`: mirrors module specifiers already present in `deno.json`

## Run

Make sure Deno is installed:
<https://deno.land/manual/getting_started/installation>

Dev server:

```sh
deno task start
```

Build:

```sh
deno task build
```

Preview build:

```sh
deno task preview
```

## Notes

- Fresh serves static files from `static/`. The `images/` and root
  `favicon.ico`/`logo.png` here are scaffolding placeholders; copy real assets
  into `static/` (e.g. `static/images/...`) for serving.
- Contact form performs real email delivery via the Resend API (with optional
  Formspree fallback):
  - Set environment variable `DENO_RESEND_API_KEY` in your runtime (Deno Deploy
    / server).
  - Ensure the `from` address (`site@airisagreenconsulting.com`) is verified in
    Resend.
  - Payload is validated (required: name, email, message) and includes a
    honeypot field.
  - If the API key is missing, you can set `FORMSPREE_ENDPOINT` (e.g.
    `https://formspree.io/f/xxxx`) to deliver without owning a domain.
  - If neither is set, submissions succeed with a warning and delivery is
    deferred.
- To add Slack/CRM integration, extend `routes/api/contact.ts` after the email
  send block.
- `/api/ai` remains a rule-based stub; swap in an external AI provider when
  ready.
- `import_map.json` is provided for compatibility but `deno.json` already
  defines inline imports. You can switch to the file‑based map by adding
  `"importMap": "import_map.json"` in `deno.json` and removing the inline
  `imports`.

### Environment

Set environment variables before running. Example `.env` snippet for SMTP:

```sh
export SMTP_HOST="smtp.gmail.com"
export SMTP_PORT="465"
export SMTP_SECURE="true" # set to false for STARTTLS/25
export SMTP_USER="site@airisagreenconsulting.com"
export SMTP_PASS="your_app_password"
export SMTP_FROM="Airisa Website <site@airisagreenconsulting.com>" # optional
export TO_EMAIL="eve@airisagreenconsulting.com"
export FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id" # optional fallback
deno task start
```

Legacy Resend delivery is still available—set `DENO_RESEND_API_KEY`,
`RESEND_FROM`, and `RESEND_TO` instead of the SMTP variables above if you prefer
that provider. On Deno Deploy (or any host), configure whichever set of secrets
you use inside the project settings.

## Deployment

1. **Configure secrets**
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, optional
     `SMTP_FROM`, and `TO_EMAIL` are required for the new SMTP-based delivery
     path.
   - `DENO_RESEND_API_KEY`, `RESEND_FROM`, `RESEND_TO` remain supported if you
     keep Resend as your primary provider.
   - `FORMSPREE_ENDPOINT` (optional) continues to act as a fallback queue if
     SMTP/Resend are unreachable.
   - `AI_BASE_URL`, `AI_API_KEY`, `AI_MODEL` (optional) power the `/api/ai`
     assistant island when deploying chat features.
2. **Prepare providers**
   - For SMTP: create an app password or service credential with your ESP, allow
     SMTP access, and whitelist the `FROM` address so the inbox accepts replies.
   - For Resend (optional): add/verify the sending domain and confirm the
     `RESEND_FROM` address.
   - In Formspree (optional): create a form, copy the secure endpoint, and
     verify the recipient address so fallback submissions succeed without manual
     approval.
3. **Verify locally before shipping**
   - Load secrets in a `.env` or shell session, then run:

     ```sh
     deno task start
     ```

   - Submit the `/contact` form twice: once with Resend credentials present,
     once after temporarily unsetting `DENO_RESEND_API_KEY` to confirm the
     Formspree fallback path.
   - Monitor the terminal output for `[contact]` logs; any non-200 responses are
     surfaced there along with the JSON payload, which you can forward manually
     if needed.

4. **Deploy**
   - Push to `main`, then redeploy via your Fresh hosting target (Deno Deploy,
     Supabase Edge, etc.). Make sure the environment variables above are
     configured for the production project before triggering the build.
   - Need a deeper ops checklist? See `docs/contact-email-runbook.md` for the
     full SMTP/Resend/Formspree runbook.

### Security

- Basic email format validation and honeypot anti-spam (`website` field)
  included.
- Consider adding rate limiting (e.g. edge KV or IP-based threshold) for
  production.
