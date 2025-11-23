import { Head } from "$fresh/runtime.ts";

const namedPrograms = [
  {
    title: "Mama Mwendo",
    pillar: "Gender & Inclusion",
    desc:
      "Strengthens women’s participation and leadership in mobility and climate sectors through curated learning, mentorship, and professional growth — building a community shaping inclusive transport futures.",
  },
  {
    title: "Sauti za Barabarani",
    pillar: "Inclusive Mobility",
    desc:
      "Brings communities and decision-makers together to reimagine mobility systems. Surfaces lived experiences, amplifies marginalized voices, and embeds equity & safety in transport planning.",
  },
  {
    title: "Sustainable Mobility Literacy & Adoption (SMLAP)",
    pillar: "Sustainable Mobility",
    desc:
      "Promotes awareness and adoption of electric, active, and low‑carbon transport options — equipping communities with foundational knowledge for informed choices and safer practices.",
  },
  {
    title: "Resilient Transport Labs",
    pillar: "Climate Action",
    desc:
      "Enables counties and cities to explore climate risks affecting mobility and identify adaptation pathways — fostering resilience mindset and long-term planning for climate‑smart systems.",
  },
  {
    title: "Community Climate Champions (C3)",
    pillar: "Climate Action",
    desc:
      "Nurtures local leadership in climate action through awareness, engagement, and community-driven initiatives that inspire environmental stewardship.",
  },
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
        <title>Programs | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Social Impact Programs and Capacity Building — community pilots, advocacy, trainings, and knowledge leadership translating policy into practice."
        />
        <meta
          property="og:title"
          content="Programs | Airisa Green Consulting"
        />
        <meta
          property="og:description"
          content="Community-level pilots, advocacy, and capacity building that translate policy into practice with measurable benefits."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Programs | Airisa Green Consulting"
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
            Core Programs
          </div>
          <p
            class="mt-2 text-slate-600 animate-fade-in-up"
            style={{ animationDelay: "40ms" }}
          >
            Named initiatives built around Sustainable Mobility, Gender &
            Inclusion, and Climate Action.
          </p>
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {namedPrograms.map((p, i) => (
              <div
                class="bg-white rounded-xl p-5 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="font-semibold text-emerald-900 text-sm md:text-base">
                    {p.title}
                  </div>
                  <span class="px-2 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-medium">
                    {p.pillar}
                  </span>
                </div>
                <p class="mt-3 text-slate-700 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <div class="mt-4 pt-3 border-t border-emerald-50 text-xs flex flex-wrap gap-3">
                  <a
                    href={`/partner?topic=${encodeURIComponent(p.title)}`}
                    class="text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    Partner →
                  </a>
                  <a
                    href={`/partner?topic=${
                      encodeURIComponent(p.title + " enquiry")
                    }`}
                    class="text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    Enquire →
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
            Capacity Building & Knowledge Leadership
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
