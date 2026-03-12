import ContactForm from "../islands/ContactForm.tsx";

export default function Contact() {
  return (
    <div class="bg-gradient-to-br from-green-50 dark:from-emerald-950 to-emerald-100 dark:to-emerald-900 animate-fade-in transition-colors duration-500 min-h-screen">
      <div class="container mx-auto px-6 py-8">
        <div class="max-w-3xl">
          <h1 class="text-3xl font-bold text-emerald-900 dark:text-emerald-50 animate-fade-in transition-colors">
            Contact
          </h1>
          <p
            class="mt-3 text-slate-700 dark:text-emerald-100/70 animate-fade-in transition-colors"
            style={{ animationDelay: "80ms" }}
          >
            Reach out for a consultation or project inquiry.
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
            <div class="bg-gradient-to-br from-white dark:from-emerald-900/40 to-emerald-50 dark:to-emerald-800/20 rounded-xl p-4 shadow-sm hover:shadow-lg hover-lift transition">
              <ContactForm />
            </div>
          </div>

          <div class="animate-fade-in-up" style={{ animationDelay: "180ms" }}>
            <div class="bg-white dark:bg-emerald-900/20 rounded-xl p-4 shadow-sm border border-emerald-100 dark:border-emerald-800/40 hover:shadow-lg hover-lift transition">
              <div class="font-semibold text-emerald-900 dark:text-emerald-100 transition-colors">Office</div>
              <ul class="mt-3 space-y-2 text-slate-700 dark:text-emerald-50/70 text-sm transition-colors">
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
                    href="mailto:info@airisagreenconsulting.com"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500 transition-all"
                  >
                    info@airisagreenconsulting.com
                  </a>
                </li>
                <li
                  class="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <span>☎️</span>
                  <a
                    href="tel:+254738573190"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500 transition-all font-medium"
                  >
                    +254 738573190
                  </a>
                </li>
                <li
                  class="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: "320ms" }}
                >
                  <svg class="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.1632c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <a
                    href="https://wa.me/254738573190"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-500 transition-all font-medium"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              </ul>

              <div
                class="mt-4 flex flex-wrap gap-3 animate-fade-in-up"
                style={{ animationDelay: "340ms" }}
              >
                <a
                  href="mailto:info@airisagreenconsulting.com"
                  class="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow-sm hover:bg-emerald-700"
                >
                  Email Us
                </a>
                <a
                  href="/ecard"
                  class="inline-flex items-center justify-center rounded-md bg-white dark:bg-emerald-900/50 border border-emerald-300 dark:border-emerald-700 px-4 py-2 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-800 font-medium transition-colors"
                >
                  E‑Card
                </a>
                <a
                  href="https://wa.me/254738573190"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-md bg-emerald-100 dark:bg-emerald-800/40 px-4 py-2 text-emerald-800 dark:text-emerald-200 font-bold hover:bg-emerald-200 dark:hover:bg-emerald-700/60 transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <div
                class="mt-6 text-xs text-slate-500 dark:text-emerald-50/50 animate-fade-in transition-colors"
                style={{ animationDelay: "400ms" }}
              >
                Response time: within 1 business day.
              </div>

              <div
                class="mt-4 animate-fade-in-up"
                style={{ animationDelay: "440ms" }}
              >
                <div class="text-sm font-semibold text-emerald-900 dark:text-emerald-100 transition-colors">
                  Frequently asked
                </div>
                <div class="mt-2 space-y-2">
                  <details class="group bg-emerald-50 dark:bg-emerald-800/20 border border-emerald-100 dark:border-emerald-700/30 rounded-md p-3 transition-colors">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 dark:text-emerald-100 flex items-center justify-between transition-colors">
                      Do you offer a free consultation?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700 dark:text-emerald-50/70 transition-colors">
                      Yes — book a quick discovery call on our contact page.
                    </p>
                  </details>
                  <details class="group bg-emerald-50 dark:bg-emerald-800/20 border border-emerald-100 dark:border-emerald-700/30 rounded-md p-3 transition-colors">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 dark:text-emerald-100 flex items-center justify-between transition-colors">
                      What industries do you serve?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700 dark:text-emerald-50/70 transition-colors">
                      We support agriculture, forestry, energy, and finance
                      across Africa.
                    </p>
                  </details>
                  <details class="group bg-emerald-50 dark:bg-emerald-800/20 border border-emerald-100 dark:border-emerald-700/30 rounded-md p-3 transition-colors">
                    <summary class="cursor-pointer select-none text-sm text-emerald-900 dark:text-emerald-100 flex items-center justify-between transition-colors">
                      How soon can projects start?
                      <span class="transition-transform group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <p class="mt-2 text-sm text-slate-700 dark:text-emerald-50/70 transition-colors">
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
