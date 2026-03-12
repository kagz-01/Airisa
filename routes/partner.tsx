import { Head } from "$fresh/runtime.ts";
import ContactForm from "../islands/ContactForm.tsx";

export default function Partner() {
  return (
    <div class="bg-paper min-h-screen relative overflow-hidden">
      <Head>
        <title>Initiate Partnership | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Partner with Airisa Green to co-create transformative mobility and environmental programs across Africa. Contact details and enquiry form."
        />
      </Head>

      {/* Background Decorative Fragments */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-emerald-50 organic-radius rotate-12 -z-10 opacity-60 blend-multiply">
      </div>
      <div className="absolute bottom-[-5%] left-[-10%] w-[30%] h-[50%] bg-amber-50 organic-radius -rotate-6 -z-10 opacity-40">
      </div>

      <div class="container mx-auto px-6 py-12 relative z-10">
        {/* Asymmetric Massive Header */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          <div class="lg:col-span-8">
            <h1 class="text-6xl md:text-8xl font-black text-emerald-950 dark:text-emerald-50 leading-tight animate-fade-in uppercase transition-colors">
              Partner <span class="text-emerald-700 dark:text-emerald-400">With Us</span>
            </h1>
            <div class="h-1.5 w-40 bg-amber-400 mt-6 animate-glow-emerald">
            </div>
          </div>
          <div class="lg:col-span-4 self-end">
            {/* Quote removed as per request */}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Centered Form Fragment */}
          <div class="lg:col-span-8 lg:col-start-1 animate-fade-in-up">
            <div class="bg-white dark:bg-emerald-900/20 organic-radius p-6 md:p-10 shadow-2xl relative border border-emerald-100 dark:border-emerald-800/40 overflow-hidden transition-colors">
              {/* Internal paper texture accent */}
              <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 dark:bg-emerald-800/20 organic-radius -mr-16 -mt-16 rotate-45 transition-colors">
              </div>

              <div class="relative z-10">
                <h2 class="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-8 border-l-4 border-amber-400 dark:border-amber-500 pl-4 transition-colors">
                  Collaboration Inquiry
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Side Info Panel */}
          <div class="lg:col-span-4 space-y-8 animate-fade-in-up delay-200">
            <div class="bg-emerald-900 text-white p-6 organic-radius shadow-xl">
              <h3 class="text-xl font-bold mb-4 text-amber-400">
                Direct Channels
              </h3>
              <ul class="space-y-6 text-sm">
                <li class="flex flex-col gap-1">
                  <span class="text-emerald-300 uppercase text-[10px] font-bold">
                    Nairobi HQ
                  </span>
                  <span class="text-lg">Kenya, East Africa</span>
                </li>
                <li class="flex flex-col gap-1 text-emerald-50">
                  <span class="text-emerald-300 uppercase text-[10px] font-bold">
                    Inquiries
                  </span>
                  <a
                    href="mailto:info@airisagreenconsulting.com"
                    class="hover:text-amber-400 transition break-all underline decoration-emerald-700 decoration-2 underline-offset-4"
                  >
                    info@airisagreenconsulting.com
                  </a>
                </li>
                <li class="flex flex-col gap-1">
                  <span class="text-emerald-300 uppercase text-[10px] font-bold">
                    Phone
                  </span>
                  <a
                    href="tel:+254738573190"
                    class="hover:text-amber-400 transition underline decoration-emerald-700 decoration-2 underline-offset-4"
                  >
                    +254 738573190
                  </a>
                </li>
                <li class="flex flex-col gap-1">
                  <span class="text-emerald-300 uppercase text-[10px] font-bold">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/254738573190"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="hover:text-amber-400 transition underline decoration-emerald-700 decoration-2 underline-offset-4"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div class="bg-white/50 dark:bg-emerald-900/20 backdrop-blur-md p-8 border border-emerald-100/50 dark:border-emerald-800/30 rounded-[2px] shadow-lg transition-colors">
              <h4 class="font-bold text-emerald-900 dark:text-emerald-100 mb-2 transition-colors">
                Technical Collaboration
              </h4>
              <p class="text-sm text-slate-700 dark:text-emerald-50/70 leading-relaxed transition-colors">
                We prioritize co-designing pilots and impact frameworks ready
                for grant programming and technical delivery. Response time:
                within 1 business day.
              </p>
              <div class="mt-4">
                <a
                  href="/ecard"
                  class="text-xs font-bold text-emerald-700 dark:text-emerald-400 border-b-2 border-amber-400 pb-0.5 hover:text-emerald-900 dark:hover:text-emerald-200 transition"
                >
                  Download E‑Card (VCF) →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
