import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <div class="bg-white dark:bg-emerald-950 transition-colors duration-500">
      <Head>
        <title>About | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Airisa Green Consulting is a social enterprise advancing inclusive mobility, climate resilience, and environmental sustainability across Africa."
        />
        <meta property="og:title" content="About | Airisa Green Consulting" />
        <meta
          property="og:description"
          content="We operate at the intersection of sustainable mobility, gender & inclusion, and climate action across emerging markets."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta name="twitter:title" content="About | Airisa Green Consulting" />
        <meta
          name="twitter:description"
          content="We operate at the intersection of sustainable mobility, gender & inclusion, and climate action across emerging markets."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      {/* Hero / Our Story Section (High Impact & Narrative) */}
      <section class="relative min-h-[60vh] flex items-center bg-emerald-950 overflow-hidden py-16 md:py-24">
        {/* Dynamic Background Elements */}
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-400 rounded-full blur-[120px] animate-pulse" />
          <div
            class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lime-400 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Story Text */}
            <div class="lg:w-2/3 order-2 lg:order-1">
              <h1 class="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 animate-fade-in-up">
                About <span class="text-emerald-400 italic">Us</span>
              </h1>

              <div class="space-y-8 text-xl md:text-2xl text-emerald-50/80 font-medium leading-relaxed max-w-3xl">
                <p class="animate-fade-in-up delay-100">
                  Airisa Green Consulting is a Think-tank and Implementation
                  partner working at the intersection of sustainable mobility,
                  gender & inclusion, and climate action across emerging
                  markets.
                </p>
                <p class="animate-fade-in-up delay-200">
                  We operate a hybrid model, providing expert consulting
                  services to governments, development partners, and private
                  sector clients, while also designing and implementing
                  impact-driven programs that empower communities, inform
                  policy, and foster inclusive, low-carbon transport systems.
                </p>
              </div>
            </div>

            {/* Floating Logo Branding */}
            <div class="lg:w-1/3 order-1 lg:order-2 flex justify-center">
              <div class="relative group">
                <div class="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl group-hover:bg-emerald-400/30 transition-all duration-700" />
                <img
                  src="/images/agc-logo.png"
                  alt="Airisa Green"
                  class="h-64 md:h-80 w-auto relative z-10 animate-float drop-shadow-[0_0_50px_rgba(52,211,153,0.3)] transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission (Parallel & Dynamic) */}
      <section class="py-20 bg-white dark:bg-emerald-950 transition-colors duration-500 relative">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-16 relative">
            {/* Vision Card */}
            <div class="w-full lg:w-[45%] relative group min-h-[320px] overflow-hidden organic-radius bg-emerald-950 p-8 md:p-12 flex flex-col justify-end shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lime/20 animate-fade-in-up">
              <div class="absolute top-0 right-0 p-6 transition-all duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-100">
                <svg
                  class="w-24 h-24 text-lime-400 animate-icon-pop"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <div class="relative z-10">
                <h3 class="text-white text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-4">
                  Vision
                </h3>
                <p class="text-emerald-50/70 text-base md:text-lg font-medium leading-relaxed">
                  To advance inclusive mobility, climate resilience, and
                  environmental sustainability through research, policy
                  innovation, and community‑centered implementation.
                </p>
              </div>
            </div>

            {/* Mission Card - Subtly Staggered */}
            <div class="w-full lg:w-[48%] relative group min-h-[320px] overflow-hidden organic-radius bg-white dark:bg-emerald-900 border border-emerald-100 dark:border-emerald-800/50 p-8 md:p-12 flex flex-col justify-end shadow-xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] lg:translate-y-16 animate-fade-in-up delay-200">
              <div class="absolute top-0 right-0 p-6 transition-all duration-500 group-hover:scale-110 opacity-40 group-hover:opacity-100">
                <svg
                  class="w-24 h-24 text-emerald-600 dark:text-lime-400 animate-icon-pop"
                  style={{ animationDelay: "1s" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <div class="relative z-10">
                <h3 class="text-emerald-950 dark:text-emerald-50 text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-4 transition-colors">
                  Mission
                </h3>
                <p class="text-slate-600 dark:text-emerald-50/70 text-base md:text-lg font-medium leading-relaxed transition-colors">
                  To transform mobility systems through research excellence,
                  gender-inclusive advocacy, and collaborative partnerships that
                  bridge the gap between policy and implementation across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values (Sliding Infinite Marquee) */}
      <section class="py-20 bg-paper dark:bg-emerald-950 transition-colors duration-500 overflow-hidden">
        <div class="container mx-auto px-6 mb-12 text-center">
          <h2 class="text-4xl md:text-7xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-4 transition-colors">
            Our <span class="text-emerald-600">Values</span>
          </h2>
          <div class="w-24 h-2 bg-lime-400 mx-auto" />
        </div>

        {/* Sliding Values Container */}
        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee hover:pause whitespace-nowrap py-10">
            {[...Array(2)].map(() => (
              <>
                {[
                  {
                    title: "Research Excellence",
                    desc:
                      "Commitment to rigorous, evidence-based analysis and thought leadership",
                    icon:
                      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  },
                  {
                    title: "Inclusivity",
                    desc:
                      "Championing gender equity and diversity in transport decision-making",
                    icon:
                      "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                  },
                  {
                    title: "Innovation",
                    desc:
                      "Leveraging cutting-edge research and technology for sustainable development",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  },
                  {
                    title: "Collaboration",
                    desc:
                      "Building strategic partnerships across sectors and borders",
                    icon:
                      "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                  },
                  {
                    title: "Impact",
                    desc:
                      "Delivering measurable, sustainable change in mobility systems",
                    icon:
                      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  },
                ].map((v, _i) => (
                  <div class="inline-block px-3 items-stretch">
                    <div class="w-[300px] bg-white dark:bg-emerald-900/20 organic-radius p-8 shadow-lg border border-emerald-50 dark:border-emerald-800/30 h-full flex flex-col items-center text-center group transition-all duration-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:border-emerald-200 dark:hover:border-emerald-600/50 hover:-translate-y-2">
                      <div class="w-14 h-14 rounded-2xl bg-emerald-950 text-lime-400 flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                        <svg
                          class="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d={v.icon}
                          >
                          </path>
                        </svg>
                      </div>
                      <h4 class="text-2xl font-black text-emerald-950 dark:text-emerald-50 mb-4 whitespace-normal group-hover:text-emerald-700 transition-colors">
                        {v.title}
                      </h4>
                      <p class="text-slate-600 dark:text-emerald-50/70 text-sm leading-relaxed font-medium opacity-80 whitespace-normal transition-colors">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-white dark:bg-emerald-950 transition-colors duration-500">
        <div class="container mx-auto px-6">
          <div class="bg-emerald-950 organic-radius p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group">
            <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-emerald-400/20 transition-all duration-700" />

            <div class="max-w-xl relative z-10">
              {/* Removed heading title per client request for a plainer look */}
              <p class="text-emerald-50/70 text-lg md:text-xl font-medium leading-relaxed">
                Join our visionary team or partner with us to drive the
                transition towards a greener, more inclusive Africa.
              </p>
            </div>

            <div class="relative z-10 flex flex-col sm:flex-row gap-6">
              <a
                href="/team"
                class="px-12 py-6 bg-lime-400 text-emerald-950 font-black uppercase tracking-widest text-sm rounded-tr-3xl rounded-bl-3xl shadow-xl hover:bg-white hover:scale-105 transition-all inline-block active:scale-95"
              >
                Meet the Team
              </a>
              <a
                href="/contact"
                class="px-12 py-6 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-tr-3xl rounded-bl-3xl hover:bg-white/10 transition-all inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
