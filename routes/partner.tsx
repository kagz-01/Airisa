import { Head } from "$fresh/runtime.ts";
import ContactForm from "../islands/ContactForm.tsx";

export default function Partner() {
  return (
    <div class="bg-gradient-to-br from-green-50 to-emerald-100 animate-fade-in">
      <Head>
        <title>Partner With Us | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Partner with Airisa Green to co-create transformative mobility and environmental programs across Africa. Contact details and enquiry form."
        />
        <meta
          property="og:title"
          content="Partner With Us | Airisa Green Consulting"
        />
        <meta
          property="og:description"
          content="Collaborate on inclusive mobility, climate resilience, and ESG programs. Reach our team directly or send an enquiry."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Partner With Us | Airisa Green Consulting"
        />
        <meta
          name="twitter:description"
          content="Collaborate on inclusive mobility, climate resilience, and ESG programs. Reach our team directly or send an enquiry."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      <div class="container mx-auto px-6 py-12">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold text-emerald-900 animate-fade-in">
            Partner With Us
          </h1>
          <p
            class="mt-3 text-slate-700 animate-fade-in"
            style={{ animationDelay: "80ms" }}
          >
            We welcome collaborators, funders, and mission‑aligned partners to
            co‑create inclusive, low‑carbon mobility and environmental solutions
            across Africa. Our hybrid model combines professional consulting
            with impact programs under three pillars: Insight, Strategy,
            Sustainability.
          </p>
          <div
            class="mt-4 inline-flex gap-2 text-xs font-semibold animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            <span class="px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-emerald-200 text-emerald-700">
              Insight
            </span>
            <span class="px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-emerald-200 text-emerald-700">
              Strategy
            </span>
            <span class="px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-emerald-200 text-emerald-700">
              Sustainability
            </span>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <div class="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-lg hover-lift transition">
              <ContactForm />
            </div>
          </div>

          <div class="animate-fade-in-up" style={{ animationDelay: "180ms" }}>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-lg hover-lift transition">
              <div class="font-semibold text-emerald-900">
                Contact & Collaboration
              </div>
              <p class="mt-2 text-sm text-slate-700 leading-relaxed">
                We co‑design pilots, develop feasibility & impact frameworks,
                and structure multi‑stakeholder partnerships ready for funding
                and delivery.
              </p>
              <div class="mt-4 text-xs font-semibold flex flex-wrap gap-2">
                <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Pilots
                </span>
                <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Technical Collaboration
                </span>
                <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Grant & Donor Programming
                </span>
                <span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Research & Capacity
                </span>
              </div>
              <ul class="mt-5 space-y-2 text-slate-700 text-sm">
                <li class="flex items-center gap-2">
                  <span>📍</span>
                  <span>Nairobi, Kenya</span>
                </li>
                <li class="flex items-center gap-2">
                  <span>✉️</span>
                  <a
                    href="mailto:e.gathua@airisagreenconsulting.com"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500"
                  >
                    e.gathua@airisagreenconsulting.com
                  </a>
                </li>
                <li class="flex items-center gap-2">
                  <span>✉️</span>
                  <a
                    href="mailto:a.ndolo@airisagreenconsulting.com"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500"
                  >
                    a.ndolo@airisagreenconsulting.com
                  </a>
                </li>
                <li class="flex items-center gap-2">
                  <span>☎️</span>
                  <a href="tel:+254723227150" class="hover:text-emerald-700">
                    +254 723227150
                  </a>
                </li>
              </ul>
              <div class="mt-5 flex flex-wrap gap-3">
                <a
                  href="mailto:e.gathua@airisagreenconsulting.com"
                  class="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700"
                >
                  Email Evelyn
                </a>
                <a
                  href="mailto:a.ndolo@airisagreenconsulting.com"
                  class="inline-flex items-center rounded-md bg-white border border-emerald-300 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
                >
                  Email Anthony
                </a>
                <a
                  href="/ecard"
                  class="inline-flex items-center rounded-md bg-white border border-emerald-300 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
                >
                  E‑Card
                </a>
                <a
                  href="/insights"
                  class="inline-flex items-center rounded-md bg-white border border-emerald-300 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
                >
                  Insights
                </a>
              </div>
              <div class="mt-6 text-xs text-slate-500">
                Response time: within 1 business day.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
