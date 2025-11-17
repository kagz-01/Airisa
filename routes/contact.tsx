import ContactForm from "../islands/ContactForm.tsx";

export default function Contact() {
  return (
    <div class="bg-gradient-to-br from-green-50 to-emerald-100 animate-fade-in">
      <div class="container mx-auto px-6 py-12">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold text-emerald-900 animate-fade-in">
            Contact
          </h1>
          <p
            class="mt-3 text-slate-700 animate-fade-in"
            style={{ animationDelay: "80ms" }}
          >
            Reach out for a consultation or project inquiry.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <div class="bg-gradient-to-br from-white to-emerald-50 rounded-xl p-6 shadow-sm hover:shadow-lg hover-lift transition">
              <ContactForm />
            </div>
          </div>

          <div class="animate-fade-in-up" style={{ animationDelay: "180ms" }}>
            <div class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 hover:shadow-lg hover-lift transition">
              <div class="font-semibold text-emerald-900">Office</div>
              <ul class="mt-3 space-y-2 text-slate-700 text-sm">
                <li
                  class="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "220ms" }}
                >
                  <span>📍</span>
                  <span>Nairobi, Kenya</span>
                </li>
                <li
                  class="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "260ms" }}
                >
                  <span>✉️</span>
                  <a
                    href="mailto:e.gathua@airisagreenconsulting.com"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500"
                  >
                    e.gathua@airisagreenconsulting.com
                  </a>
                </li>
                <li
                  class="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <span>☎️</span>
                  <a href="tel:+254723227150" class="hover:text-emerald-700">
                    +254 723227150
                  </a>
                </li>
              </ul>

              <div
                class="mt-4 flex flex-wrap gap-3 animate-fade-in-up"
                style={{ animationDelay: "340ms" }}
              >
                <a
                  href="mailto:e.gathua@airisagreenconsulting.com"
                  class="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700"
                >
                  Email Us
                </a>
                <a
                  href="/ecard"
                  class="inline-flex items-center rounded-md bg-white border border-emerald-300 px-4 py-2 text-emerald-700 hover:bg-emerald-50"
                >
                  E‑Card
                </a>
              </div>

              <div
                class="mt-6 text-xs text-slate-500 animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                Response time: within 1 business day.
              </div>

              <div
                class="mt-4 animate-fade-in-up"
                style={{ animationDelay: "440ms" }}
              >
                <div class="text-sm font-semibold text-emerald-900">
                  Frequently asked
                </div>
                <div class="mt-2 space-y-2">
                  <details class="group bg-emerald-50 border border-emerald-100 rounded-md p-3">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 flex items-center justify-between">
                      Do you offer a free consultation?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700">
                      Yes — book a quick discovery call on our contact page.
                    </p>
                  </details>
                  <details class="group bg-emerald-50 border border-emerald-100 rounded-md p-3">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 flex items-center justify-between">
                      What industries do you serve?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700">
                      We support agriculture, forestry, energy, and finance
                      across Africa.
                    </p>
                  </details>
                  <details class="group bg-emerald-50 border border-emerald-100 rounded-md p-3">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 flex items-center justify-between">
                      How soon can projects start?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700">
                      Typically within 1–2 weeks after the discovery session.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
