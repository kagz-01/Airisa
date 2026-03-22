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

      {/* ── Our Approach ── */}
      <section class="py-16 md:py-24 bg-white dark:bg-emerald-950 relative overflow-hidden transition-colors duration-500">
        <div class="container mx-auto px-6 mb-12">
          <div class="max-w-3xl">
            <h2 class="text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter">
              Our <span class="text-emerald-600 dark:text-emerald-400">Approach</span>
            </h2>
            <div class="w-16 h-1.5 bg-lime-400 mt-4" />
            <p class="mt-4 text-lg text-slate-600 dark:text-emerald-50/70 font-medium leading-relaxed">
              We move beyond linear consulting. Our pillars overlap and reinforce each other to create sustainable momentum.
            </p>
          </div>
        </div>

        {/* Horizontal Sliding Track (Ping-Pong) */}
        <div class="relative overflow-hidden w-full group/track">
          <div class="flex animate-ping-pong hover:pause py-10 px-6 gap-10 whitespace-nowrap w-max">
            {[
              {
                id: "insight",
                title: "Insight",
                desc: "We generate clear, evidence-based understanding of transport and environmental systems helping partners identify gaps, opportunities, and emerging trends that inform better decisions.",
                icon: "🧭",
                color: "bg-white dark:bg-emerald-900/20 text-emerald-950 dark:text-emerald-50 border border-emerald-100 dark:border-emerald-800/30",
                accent: "text-emerald-950 dark:text-white",
                subtext: "text-slate-600 dark:text-emerald-50/70"
              },
              {
                id: "strategy",
                title: "Strategy",
                desc: "We translate insights into practical, inclusive strategies that support sustainable mobility, climate resilience, and responsible investment—solutions that are realistic, policy-aligned, and ready for implementation.",
                icon: "⚡",
                color: "bg-emerald-950 dark:bg-[#020b08] text-white border border-emerald-900 dark:border-emerald-800/50",
                accent: "text-lime-400",
                subtext: "text-emerald-50/80"
              },
              {
                id: "sustainability",
                title: "Sustainability",
                desc: "We ensure long-term results by embedding environmental, social, and community-focused considerations into every intervention—supporting partners to track progress, strengthen resilience, and deliver measurable, lasting impact.",
                icon: "🌍",
                color: "bg-lime-400 dark:bg-lime-500 text-emerald-950 border border-lime-300 dark:border-lime-400",
                accent: "text-emerald-950",
                subtext: "text-emerald-900/80"
              }
            ].map((p) => (
              <div
                key={p.id}
                class={`w-[350px] md:w-[550px] shrink-0 ${p.color} text-emerald-950 dark:text-emerald-50 rounded-tr-[50px] rounded-bl-[50px] p-8 md:p-12 shadow-2xl transition-all duration-700 hover:scale-[1.05] group`}
              >
                <div class="flex items-center gap-4 mb-6">
                  <span class={`text-4xl md:text-5xl ${p.id === 'strategy' ? 'text-lime-400' : ''}`}>{p.icon}</span>
                </div>
                <h3 class={`text-2xl md:text-3xl font-black mb-4 leading-none tracking-tighter ${p.accent} transition-colors whitespace-normal`}>
                  {p.title}
                </h3>
                <p class={`text-sm md:text-base ${p.subtext || "text-slate-600 dark:text-emerald-50/60"} leading-relaxed font-bold whitespace-normal`}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section class="py-16 bg-white dark:bg-emerald-950 transition-colors duration-500">
        <div class="container mx-auto px-6">
          {/* Section Label */}
          <div class="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
            <div class="max-w-2xl">
              <h2 class="text-4xl md:text-5xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter transition-colors">
                Our <span class="text-emerald-600 dark:text-emerald-400">Services</span>
              </h2>
              <div class="w-16 h-1.5 bg-lime-400 mt-3 mb-4" />
              <p class="text-lg text-slate-600 dark:text-emerald-50/70 font-medium leading-relaxed transition-colors">
                Practical consulting and advisory support across mobility, environment and climate designed to turn complexity into clear action.
              </p>
            </div>
            <a
              href="/services"
              class="px-8 py-4 bg-emerald-950 dark:bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md hover:bg-lime-400 hover:text-emerald-950 transition-all shadow-xl shrink-0"
            >
              All Services →
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px]">
            {services.slice(0, 4).map((s, i) => (
              <div 
                key={s.title}
                class={`group p-8 bg-paper dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-800/30 organic-radius hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2 transition-all duration-700 flex flex-col justify-between overflow-hidden relative
                  ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
                  ${i === 3 ? "md:col-span-2" : ""}
                `}
              >

                <div class="relative z-10">
                  <h4 class={`font-black text-emerald-950 dark:text-emerald-50 mb-3 transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400
                    ${i === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}
                  `}>
                    {s.title}
                  </h4>
                  <p class={`text-slate-600 dark:text-emerald-50/60 leading-relaxed font-bold transition-opacity group-hover:opacity-100
                    ${i === 0 ? "text-base md:text-lg max-w-md" : "text-xs md:text-sm opacity-80"}
                  `}>
                    {s.desc}
                  </p>
                </div>

                {/* Subtle Decorative Icon/Letter */}
                <div class="absolute -bottom-6 -right-6 text-8xl font-black text-emerald-950/5 dark:text-white/5 select-none pointer-events-none group-hover:scale-125 transition-transform duration-1000">
                  {s.title.charAt(0)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Programs ── */}
      <section class="py-20 md:py-28 bg-[#020b08] relative overflow-hidden transition-colors duration-500">
        {/* Dynamic Background Depth Orbs */}
        <div class="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div class="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Decorative Lime Wave */}
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />

        <div class="container mx-auto px-6 relative z-10">
          {/* Section Label */}
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div class="max-w-xl">
              <h2 class="text-4xl md:text-5xl font-black text-white tracking-tighter">
                Our <span class="text-lime-400">Programs</span>
              </h2>
              <div class="w-16 h-1.5 bg-emerald-400 mt-3 mb-4" />
              <p class="text-lg text-emerald-50/70 font-medium leading-relaxed">
                Strategy in motion direct community programs that bring our consulting work to life and create measurable change across Africa.
              </p>
            </div>
            <a
              href="/programs"
              class="inline-flex items-center gap-3 text-lime-400 hover:text-lime-300 font-bold group text-sm uppercase tracking-widest shrink-0"
            >
              Explore all programs
              <span class="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {namedPrograms.slice(0, 3).map((p, i) => (
              <div
                key={p.title}
                class="group relative bg-emerald-900/20 backdrop-blur-2xl border border-emerald-800/30 p-8 md:p-10 rounded-tr-[60px] rounded-bl-[60px] transition-all duration-700 hover:bg-emerald-800/40 hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] animate-fade-in-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Lime Tracer Border (Hover Effect) */}
                <div class="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div class="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-lime-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h4 class="text-2xl font-black text-white mb-4 group-hover:text-lime-400 transition-colors tracking-tight">
                  {p.title}
                </h4>
                <p class="text-emerald-50/60 text-sm md:text-base leading-relaxed font-medium">
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