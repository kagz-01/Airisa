import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <div class="bg-white">
      <Head>
        <title>About — Airisa Green Consulting</title>
        <meta
          name="description"
          content="Airisa Green Consulting is a social enterprise advancing inclusive mobility, climate resilience, and environmental sustainability across Africa."
        />
        <meta property="og:title" content="About — Airisa Green Consulting" />
        <meta
          property="og:description"
          content="We operate at the intersection of sustainable mobility, gender & inclusion, and climate action across emerging markets."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta name="twitter:title" content="About — Airisa Green Consulting" />
        <meta
          name="twitter:description"
          content="We operate at the intersection of sustainable mobility, gender & inclusion, and climate action across emerging markets."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      {/* Header */}
      <section class="relative overflow-hidden py-16 md:py-24">
        <div class="absolute inset-0 -z-10 animated-gradient" />
        <div class="pointer-events-none absolute -top-10 -left-10 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl animate-float-slow" />
        <div class="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-float-slower" />
        <div class="container mx-auto px-6 text-center max-w-4xl">
          <img
            src="/images/agc-logo.png"
            alt="Airisa Green"
            class="h-14 w-14 mx-auto animate-fade-in hover:scale-105 transition-transform"
          />
          <h1 class="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-900 animate-fade-in-up">
            About Airisa Green
          </h1>
          <div
            class="mt-6 animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            <p class="text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              We Are More Than A Consultancy
            </p>
            <p class="mt-4 text-slate-700 leading-relaxed">
              We are a movement catalyzing inclusive mobility and climate
              resilience across Africa—uniting research, gender equity, and
              program delivery to turn policy into practice.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section class="py-14 bg-gradient-to-b from-white to-emerald-50/40">
        <div class="container mx-auto px-6 max-w-4xl">
          <div class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold animate-fade-in">
            Background
          </div>
          <h2 class="mt-4 text-2xl md:text-3xl font-bold text-gray-900 animate-fade-in-up">
            Catalyzing Transformative Mobility
          </h2>
          <div class="mt-5 space-y-5 text-slate-700 leading-relaxed">
            <p class="animate-fade-in-up" style={{ animationDelay: "40ms" }}>
              Airisa Green Consulting unites sustainability consultancy with
              impact program implementation bridging the gap between policy
              ambition and on‑the‑ground delivery across emerging markets.
            </p>
            <p class="animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              We work alongside governments, development partners, and private
              sector actors to design data-driven, gender‑inclusive solutions
              that accelerate equitable, low‑carbon transport systems.
            </p>
            <p class="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
              Our approach blends research excellence, community co‑creation,
              and strategic partnerships to drive measurable environmental and
              social outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section class="py-10">
        <div class="container mx-auto px-6 grid gap-6 md:grid-cols-2">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1">
            <div class="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              Vision
            </div>
            <p class="mt-3 text-slate-700">
              To be Africa’s leading consultancy advancing inclusive mobility,
              climate resilience, and environmental sustainability through
              research, policy innovation, and community‑centered
              implementation.
            </p>
          </div>
          <div
            class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1"
            style={{ animationDelay: "80ms" }}
          >
            <div class="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
              Mission
            </div>
            <p class="mt-3 text-slate-700">
              To transform mobility systems through research excellence,
              gender-inclusive advocacy, and collaborative partnerships that
              bridge the gap between policy and implementation while fostering
              innovation in emerging markets' transport sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="py-12">
        <div class="container mx-auto px-6">
          <h3 class="text-2xl font-bold text-gray-900 animate-fade-in">
            Our Values
          </h3>
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Research Excellence",
                desc:
                  "Commitment to rigorous, evidence-based analysis and thought leadership.",
              },
              {
                title: "Inclusivity",
                desc:
                  "Championing gender equity and diversity in transport decision-making.",
              },
              {
                title: "Innovation",
                desc:
                  "Leveraging cutting-edge research and technology for sustainable development.",
              },
              {
                title: "Collaboration",
                desc:
                  "Building strategic partnerships across sectors and borders.",
              },
              {
                title: "Impact",
                desc:
                  "Delivering measurable, sustainable change in mobility systems.",
              },
            ].map((v, i) => (
              <div
                class="group bg-white rounded-xl p-5 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:shadow-md hover:-translate-y-1 hover:border-emerald-300"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div class="font-semibold text-emerald-900 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  {v.title}
                </div>
                <p class="text-slate-700 mt-2 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA removed for redundancy */}
    </div>
  );
}
