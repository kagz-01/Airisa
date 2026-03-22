import { Head } from "$fresh/runtime.ts";
import { capacityBuilding, namedPrograms } from "../data/programs.ts";

export default function Programs() {
  return (
    <div class="bg-white dark:bg-emerald-950 min-h-screen transition-colors duration-500">
      <Head>
        <title>Programs | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Social Impact Programs and Capacity Building — Translating policy into practice through direct community intervention and knowledge leadership."
        />
      </Head>

      {/* Refined Minimalist Header */}
      <section class="py-6 md:py-8 bg-transparent dark:bg-emerald-950/20 transition-colors">
        <div class="container mx-auto px-6 flex justify-center">
          <div class="inline-flex items-center px-12 py-3 bg-emerald-950 dark:bg-emerald-900 rounded-full shadow-2xl transition-all hover:scale-105 group border border-emerald-800">
            <h1 class="text-lg md:text-xl font-black text-white uppercase tracking-[0.5em] whitespace-nowrap">
              Our Programs
            </h1>
          </div>
        </div>
      </section>

      {/* Section 1: Social Impact Programs */}
      <section class="py-12 md:py-16 bg-emerald-50 dark:bg-[#021f16] relative transition-colors duration-500 overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div class="max-w-2xl">
              <h2 class="text-3xl md:text-4xl font-black text-emerald-950 dark:text-white tracking-tighter mb-6 transition-colors">
                Social <span class="text-emerald-600 dark:text-emerald-400">Impact</span>
              </h2>
              <div class="w-24 h-2 bg-lime-400 mb-8" />
              <p class="text-base text-slate-600 dark:text-emerald-100/60 font-medium italic transition-colors">
                Translating policy into practice through on-the-ground
                implementation and community co-creation.
              </p>
            </div>
          </div>

          <div class="space-y-16 lg:space-y-24">
            {namedPrograms.map((p, i) => (
              <div
                key={i}
                class={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 animate-fade-in-up ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Image Container with Glow */}
                <div class="w-full lg:w-1/2 relative group">
                  <div class="absolute -inset-4 bg-emerald-400/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div class="relative aspect-video overflow-hidden rounded-[40px] shadow-2xl border border-white/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                  </div>
                </div>

                {/* Content Container */}
                <div class="w-full lg:w-1/2">
                  <h3 class="text-2xl md:text-3xl font-black text-emerald-950 dark:text-white mb-6 tracking-tighter leading-tight transition-colors">
                    {p.title}
                  </h3>
                  <p class="text-base md:text-lg text-slate-700 dark:text-emerald-50/70 leading-relaxed font-medium mb-10 transition-colors">
                    {p.desc}
                  </p>
                  <a
                    href={`/partner?topic=${encodeURIComponent(p.title)}`}
                    class="inline-flex items-center gap-4 text-lime-400 font-black uppercase tracking-widest text-sm hover:gap-6 transition-all"
                  >
                    Partner on this initiative <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Capacity Building & Knowledge Leadership */}
      <section class="py-12 md:py-16 bg-[#FDFCF8] dark:bg-emerald-950 transition-colors duration-500 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#021f16] to-transparent opacity-10" />

        <div class="container mx-auto px-6 relative z-10">
          <div class="text-center max-w-4xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-6 transition-colors">
              Capacity Building & <span class="text-emerald-600 dark:text-emerald-400">Knowledge Leadership</span>
            </h2>
            <div class="w-20 h-2 bg-lime-400 mx-auto mb-8" />
            <p class="text-base text-slate-600 dark:text-emerald-50/70 font-bold transition-colors">
              We equip individuals and organizations with the knowledge and
              skills to advance sustainable mobility and environmental
              sustainability.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capacityBuilding.map((item, i) => (
              <div
                key={i}
                class="bg-white dark:bg-emerald-900/10 rounded-[40px] shadow-sm border border-emerald-100/50 dark:border-emerald-800/40 hover:shadow-[0_45px_100px_-20px_rgba(5,150,105,0.15)] dark:hover:border-emerald-700/50 hover:-translate-y-2 transition-all duration-700 animate-fade-in-up group overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image Header with Animation */}
                <div class="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    class={`w-full h-full object-cover transition-all duration-1000 
                      ${item.animation === "pan" ? "group-hover:translate-x-8 group-hover:scale-110" : ""}
                      ${item.animation === "zoom-in" ? "group-hover:scale-125" : ""}
                      ${item.animation === "zoom-out" ? "scale-125 group-hover:scale-100" : ""}
                      ${item.animation === "blur" ? "blur-sm group-hover:blur-0 group-hover:scale-110" : "group-hover:scale-110"}
                    `}
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" />
                  <div class="absolute bottom-6 left-8">
                    <div class="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-black text-xl border border-white/30">
                      0{i + 1}
                    </div>
                  </div>
                </div>

                <div class="p-8 md:p-10">
                  <h4 class="text-xl font-black text-emerald-950 dark:text-emerald-50 mb-6 tracking-tight leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p class="text-sm md:text-base text-slate-600 dark:text-emerald-50/70 leading-relaxed font-medium opacity-80 mb-10 min-h-[60px] transition-colors">
                    {item.desc}
                  </p>
                  <a
                    href={`/partner?topic=${encodeURIComponent(item.title)}`}
                    class="inline-flex items-center gap-3 text-emerald-700 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-200 font-black uppercase tracking-widest text-xs border-b-2 border-emerald-100 dark:border-emerald-800 hover:border-emerald-600 dark:hover:border-emerald-500 pb-1 transition-all"
                  >
                    Request Collaboration <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Insights Hub Teaser */}
          <div class="mt-16 p-8 md:p-12 bg-emerald-50 dark:bg-emerald-950 rounded-[60px] relative overflow-hidden group border border-emerald-100 dark:border-emerald-800 transition-colors duration-500">
            <div class="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <div class="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div class="max-w-xl text-center md:text-left">
                <h3 class="text-2xl md:text-3xl font-black text-emerald-950 dark:text-white mb-6 tracking-tighter transition-colors">
                  Visit the <span class="text-emerald-600 dark:text-lime-400">Insights Hub</span>
                </h3>
                <p class="text-slate-600 dark:text-emerald-50/60 font-medium text-base transition-colors">
                  Explore our latest articles, whitepapers, and diagnostic
                  studies shared across our LinkedIn community.
                </p>
              </div>
              <a
                href="/insights"
                class="px-10 py-5 bg-emerald-950 dark:bg-emerald-400 text-white dark:text-emerald-950 font-black uppercase tracking-widest text-xs rounded-tr-3xl rounded-bl-3xl hover:bg-emerald-800 dark:hover:bg-lime-400 transition-all shadow-xl"
              >
                Explore Insights
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
