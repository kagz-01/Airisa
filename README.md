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
- Contact form performs real email delivery via the Resend API (with optional Formspree fallback):
  - Set environment variable `DENO_RESEND_API_KEY` in your runtime (Deno Deploy / server).
  - Ensure the `from` address (`site@airisagreenconsulting.com`) is verified in Resend.
  - Payload is validated (required: name, email, message) and includes a honeypot field.
  - If the API key is missing, you can set `FORMSPREE_ENDPOINT` (e.g. `https://formspree.io/f/xxxx`) to deliver without owning a domain.
  - If neither is set, submissions succeed with a warning and delivery is deferred.
- To add Slack/CRM integration, extend `routes/api/contact.ts` after the email send block.
- `/api/ai` remains a rule-based stub; swap in an external AI provider when ready.
- `import_map.json` is provided for compatibility but `deno.json` already
  defines inline imports. You can switch to the file‑based map by adding
  `"importMap": "import_map.json"` in `deno.json` and removing the inline
  `imports`.

### Environment

Set environment variables before running:

```sh
export DENO_RESEND_API_KEY="your_resend_key_here"
# Optional fallback that works without a custom domain
export FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
deno task start
```

On Deno Deploy, configure `DENO_RESEND_API_KEY` in project settings.
Optionally add `FORMSPREE_ENDPOINT` if you don’t have a sending domain yet.

### Security

- Basic email format validation and honeypot anti-spam (`website` field) included.
- Consider adding rate limiting (e.g. edge KV or IP-based threshold) for production.
