import { Head } from "$fresh/runtime.ts";

const socialImpactPrograms = [
  "Community-based sustainable mobility education and awareness campaigns",
  "Youth and women training in green mobility careers",
  "Grassroots pilots for inclusive and safe mobility access",
  "Participatory transport research and co-design workshops",
  "Localization of climate resilience tools for urban transport",
  "Advocacy and coalition-building for inclusive mobility policies",
];

const capacityBuilding = [
  "Curriculum co-creation with academic & industry partners",
  "Workshops & Trainings",
  "Mentorship programs",
  "Speaking and moderation",
];

export default function Programs() {
  return (
    <div class="bg-white">
      <Head>
        <title>Programs — Social Impact & Capacity | Airisa Green</title>
        <meta
          name="description"
          content="Social Impact Programs and Capacity Building — community pilots, advocacy, trainings, and knowledge leadership translating policy into practice."
        />
        <meta
          property="og:title"
          content="Programs — Social Impact & Capacity | Airisa Green"
        />
        <meta
          property="og:description"
          content="Community-level pilots, advocacy, and capacity building that translate policy into practice with measurable benefits."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Programs — Social Impact & Capacity | Airisa Green"
        />
        <meta
          name="twitter:description"
          content="Community-level pilots, advocacy, and capacity building that translate policy into practice with measurable benefits."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      <section class="relative overflow-hidden py-14 md:py-20">
        <div class="absolute inset-0 -z-10 animated-gradient" />
        <div class="container mx-auto px-6 text-center">
          <h1 class="text-3xl md:text-4xl font-extrabold text-emerald-900 animate-fade-in-up">
            Programs
          </h1>
          <p
            class="mt-3 text-slate-700 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            Community‑level pilots, advocacy, and knowledge leadership that turn
            policy into practice and deliver measurable benefits.
          </p>
        </div>
      </section>

      <section class="py-10">
        <div class="container mx-auto px-6">
          <div class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold animate-fade-in">
            B. Social Impact Programs
          </div>
          <p
            class="mt-2 text-slate-600 animate-fade-in-up"
            style={{ animationDelay: "40ms" }}
          >
            Community‑level pilots and advocacy that translate policy into
            practice with measurable benefits
          </p>

          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {socialImpactPrograms.map((item, i) => (
              <div
                class="bg-white rounded-xl p-5 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div class="flex items-start gap-3">
                  <span class="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-500">
                  </span>
                  <p class="text-slate-800 text-sm leading-relaxed">{item}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-emerald-50 text-sm">
                  <a
                    href={`/partner?topic=${encodeURIComponent(item)}`}
                    class="text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    Enquire about this program →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="container mx-auto px-6">
          <div class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold animate-fade-in">
            C. Capacity Building & Knowledge Leadership
          </div>
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capacityBuilding.map((item, i) => (
              <div
                class="bg-white rounded-xl p-5 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div class="flex items-start gap-3">
                  <span class="mt-1 inline-block w-2 h-2 rounded-full bg-emerald-500">
                  </span>
                  <p class="text-slate-800 text-sm leading-relaxed">{item}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-emerald-50 text-sm">
                  <a
                    href={`/partner?topic=${encodeURIComponent(item)}`}
                    class="text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    Enquire about this program →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
