import { Head } from "$fresh/runtime.ts";

const namedPrograms = [
  {
    title: "Mama Mwendo",
    pillar: "Gender & Inclusion",
    desc:
      "Strengthens women’s participation and leadership in mobility and climate sectors through curated learning, mentorship, and professional growth — building a community shaping inclusive transport futures.",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
  },
  {
    title: "Sauti za Barabarani",
    pillar: "Inclusive Mobility",
    desc:
      "Brings communities and decision-makers together to reimagine mobility systems. Surfaces lived experiences, amplifies marginalized voices, and embeds equity & safety in transport planning.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
  },
  {
    title: "Sustainable Mobility Literacy & Adoption (SMLAP)",
    pillar: "Sustainable Mobility",
    desc:
      "Promotes awareness and adoption of electric, active, and low‑carbon transport options — equipping communities with foundational knowledge for informed choices and safer practices.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
  },
  {
    title: "Resilient Transport Labs",
    pillar: "Climate Action",
    desc:
      "Enables counties and cities to explore climate risks affecting mobility and identify adaptation pathways — fostering resilience mindset and long-term planning for climate‑smart systems.",
    image:
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
  },
  {
    title: "Community Climate Champions (C3)",
    pillar: "Climate Action",
    desc:
      "Nurtures local leadership in climate action through awareness, engagement, and community-driven initiatives that inspire environmental stewardship.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
  },
];

const capacityBuilding = [
  {
    title: "Curriculum Co-creation",
    desc:
      "Collaborating with academic & industry partners to design relevant educational frameworks.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
  },
  {
    title: "Workshops & Trainings",
    desc:
      "Hands-on sessions designed to build practical skills and foster collaborative learning.",
    image:
      "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
  },
  {
    title: "Mentorship Programs",
    desc:
      "Guiding the next generation of leaders through structured mentorship and support.",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
  },
  {
    title: "Speaking & Moderation",
    desc:
      "Thought leadership and facilitation at key industry conferences and events.",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
  },
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
                class="bg-white rounded-xl overflow-hidden shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div class="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    class={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      p.animation === "zoom-out"
                        ? "scale-110 hover:scale-100"
                        : p.animation === "pan"
                        ? "scale-110 hover:translate-x-4"
                        : p.animation === "blur"
                        ? "blur-[2px] scale-105 hover:blur-none hover:scale-100"
                        : "hover:scale-110"
                    }`}
                  />
                  <div class="absolute top-3 right-3">
                    <span class="px-2 py-1 rounded-md bg-white/90 backdrop-blur border border-emerald-100 text-emerald-700 text-[11px] font-medium shadow-sm">
                      {p.pillar}
                    </span>
                  </div>
                </div>
                <div class="p-5 flex-1 flex flex-col">
                  <div class="font-semibold text-emerald-900 text-lg mb-2">
                    {p.title}
                  </div>
                  <p class="text-slate-700 text-sm leading-relaxed flex-1">
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
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capacityBuilding.map((item, i) => (
              <div
                class="bg-white rounded-xl overflow-hidden shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1 flex flex-col h-full"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div class="h-40 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    class={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      item.animation === "zoom-out"
                        ? "scale-110 hover:scale-100"
                        : item.animation === "pan"
                        ? "scale-110 hover:translate-x-4"
                        : item.animation === "blur"
                        ? "blur-[2px] scale-105 hover:blur-none hover:scale-100"
                        : "hover:scale-110"
                    }`}
                  />
                </div>
                <div class="p-5 flex-1 flex flex-col">
                  <div class="font-semibold text-emerald-900 mb-2">
                    {item.title}
                  </div>
                  <p class="text-slate-700 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                  <div class="mt-4 pt-3 border-t border-emerald-50 text-sm">
                    <a
                      href={`/partner?topic=${encodeURIComponent(item.title)}`}
                      class="text-emerald-700 hover:text-emerald-800 font-medium text-xs"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
