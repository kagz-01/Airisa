import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import { services } from "../data/services.ts";
import { namedPrograms } from "../data/programs.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Airisa Green Consulting advances inclusive mobility, climate resilience, and environmental sustainability through Insight, Strategy, and Sustainability focused consulting and impact programs."
        />
        <meta property="og:title" content="Home | Airisa Green Consulting" />
        <meta
          property="og:description"
          content="Inclusive mobility, climate resilience, and sustainability consulting plus impact programs powered by Insight, Strategy, Sustainability pillars."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta name="twitter:title" content="Home | Airisa Green Consulting" />
        <meta
          name="twitter:description"
          content="Consulting & programs advancing inclusive mobility and climate resilience across Africa."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>
      <Hero />

      {/* Our Approach Section (Organic Overlapping Pillars) */}
      <section class="py-16 md:py-20 bg-white dark:bg-emerald-950 relative overflow-hidden transition-colors duration-500">
        {/* Background Decorative Element */}
        <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 dark:bg-emerald-900/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50 animate-pulse transition-colors" />
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/50 dark:bg-amber-900/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40 animate-pulse transition-colors"
          style={{ animationDelay: "1.5s" }}
        />

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-3xl mb-10">
            <h2 class="text-4xl md:text-5xl font-black text-emerald-950 tracking-tighter">
              Our <span class="text-emerald-600">Approach</span>
            </h2>
            <div class="w-16 h-1.5 bg-amber-400 mt-4" />
            <p class="mt-6 text-xl text-slate-600 font-medium leading-relaxed">
              We move beyond linear consulting. Our pillars overlap and
              reinforce each other to create sustainable momentum.
            </p>
          </div>

          <div class="relative flex flex-col gap-8 md:gap-0">
            {/* Pillar 1: Insight */}
            <div class="md:w-[45%] bg-white rounded-tr-[40px] rounded-bl-[40px] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(5,150,105,0.08)] border border-emerald-50 relative z-10 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_45px_100px_-20px_rgba(5,150,105,0.15)] group animate-fade-in-up">
              <div class="flex items-center gap-4 mb-6">
                <span class="text-5xl group-hover:animate-bounce-slow">🧭</span>
              </div>
              <h3 class="text-5xl md:text-6xl font-black text-emerald-950 mb-8 leading-none tracking-tighter drop-shadow-sm group-hover:text-emerald-700 transition-colors">
                Insight
              </h3>
              <p class="text-lg text-slate-600 leading-relaxed font-medium">
                We generate clear, evidence-based understanding of transport and
                environmental systems helping partners identify gaps,
                opportunities, and emerging trends that inform better decisions.
              </p>
            </div>

            {/* Pillar 2: Strategy (Overlapping) */}
            <div
              class="md:w-[45%] md:ml-auto md:-mt-12 bg-emerald-950 rounded-tl-[40px] rounded-br-[40px] p-6 md:p-10 shadow-2xl relative z-20 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: "200ms" }}
            >
              <div class="flex items-center gap-4 mb-6">
                <span class="text-4xl text-amber-400 group-hover:scale-125 transition-transform duration-500">
                  ⚡
                </span>
              </div>
              <h3 class="text-5xl md:text-6xl font-black text-white mb-8 leading-none tracking-tighter group-hover:text-amber-400 transition-colors">
                Strategy
              </h3>
              <p class="text-lg text-emerald-50/80 leading-relaxed font-medium">
                We translate insights into practical, inclusive strategies that
                support sustainable mobility, climate resilience, and
                responsible investment. Our focus is on solutions that are
                realistic, policy-aligned, and ready for implementation.
              </p>
            </div>

            {/* Pillar 3: Sustainability (Overlapping) */}
            <div
              class="md:w-[45%] md:-mt-12 bg-white rounded-tr-[40px] rounded-bl-[40px] p-6 md:p-10 shadow-[0_30px_60px_-15px_rgba(5,150,105,0.08)] border border-emerald-50 relative z-10 transition-all duration-500 hover:scale-[1.03] animate-fade-in-up group"
              style={{ animationDelay: "400ms" }}
            >
              <div class="flex items-center gap-4 mb-6">
                <span class="text-4xl text-emerald-600 group-hover:rotate-12 transition-transform duration-500">
                  🌍
                </span>
              </div>
              <h3 class="text-5xl md:text-6xl font-black text-emerald-950 mb-8 leading-none tracking-tighter group-hover:text-emerald-700 transition-colors">
                Sustainability
              </h3>
              <p class="text-lg text-slate-600 leading-relaxed font-medium">
                We ensure long-term results by embedding environmental, social,
                and community-focused considerations into every intervention
                supporting partners to track progress, strengthen resilience,
                and deliver measurable, lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section class="py-16 bg-white dark:bg-emerald-950 transition-colors duration-500">
        <div class="container mx-auto px-6">
          {/* Section Label */}
          <div class="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div class="max-w-2xl">
              <span class="text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] mb-3 block">
                What We Do
              </span>
              <h2 class="text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter transition-colors">
                Our <span class="text-emerald-600 dark:text-emerald-400">Services</span>
              </h2>
              <div class="w-16 h-1.5 bg-amber-400 mt-3 mb-4" />
              <p class="text-lg text-slate-600 dark:text-emerald-50/70 font-medium leading-relaxed transition-colors">
                Practical consulting and advisory support across mobility, environment and climate designed to turn complexity into clear action.
              </p>
            </div>
            <a
              href="/services"
              class="px-8 py-4 bg-emerald-950 dark:bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md hover:bg-amber-400 hover:text-emerald-950 transition-all shadow-xl shrink-0"
            >
              All Services →
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(0, 4).map((s, _i) => (
              <div class="group p-6 bg-paper border border-emerald-50 organic-radius hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div class="w-10 h-1 bg-amber-400 mb-4 group-hover:w-full transition-all duration-500" />
                <h4 class="text-lg font-bold text-emerald-950 mb-2">
                  {s.title}
                </h4>
                <p class="text-slate-600 text-sm leading-relaxed opacity-80">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Programs ── */}
      <section class="py-16 md:py-24 bg-emerald-950 relative overflow-hidden">
        {/* Decorative Saffron Wave */}
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30" />

        <div class="container mx-auto px-6 relative z-10">
          {/* Section Label */}
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div class="max-w-xl">
              <span class="text-amber-400 text-[10px] font-black uppercase tracking-[0.5em] mb-3 block">
                On the Ground
              </span>
              <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter">
                Our <span class="text-amber-400">Programs</span>
              </h2>
              <div class="w-16 h-1.5 bg-emerald-400 mt-3 mb-4" />
              <p class="text-lg text-emerald-50/70 font-medium leading-relaxed">
                Strategy in motion direct community programs that bring our consulting work to life and create measurable change across Africa.
              </p>
            </div>
            <a
              href="/programs"
              class="inline-flex items-center gap-3 text-amber-400 hover:text-amber-300 font-bold group text-sm uppercase tracking-widest shrink-0"
            >
              Explore all programs
              <span class="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {namedPrograms.slice(0, 3).map((p, _i) => (
              <div
                class="bg-emerald-900/40 backdrop-blur-sm border border-emerald-800/50 p-6 rounded-tr-3xl rounded-bl-3xl group hover:bg-emerald-900/60 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${_i * 100}ms` }}
              >
                <div class="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-3 opacity-70">
                  {p.pillar}
                </div>
                <h4 class="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h4>
                <p class="text-emerald-50/50 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
