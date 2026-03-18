import { Head } from "$fresh/runtime.ts";
import ServiceCard from "../components/ServiceCard.tsx";
import { services } from "../data/services.ts";

export default function Services() {
  return (
    <div class="bg-paper min-h-screen">
      <Head>
        <title>Services | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
      </Head>

      <section class="py-16 md:py-24 relative overflow-hidden">
        {/* Abstract background ornaments */}
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
        <div
          class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-100/20 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div class="container mx-auto px-6 relative z-10">
          <div class="max-w-4xl mb-16">
            <h1 class="text-6xl md:text-8xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-8 leading-[0.9] transition-colors">
              Consulting & <br />
              <span class="text-emerald-600 dark:text-emerald-400">Advisory</span>
            </h1>
            <div class="w-32 h-2.5 bg-lime-400 mb-10" />
            <p class="text-2xl md:text-3xl text-slate-600 dark:text-emerald-50/70 leading-tight font-bold max-w-2xl transition-colors">
              We provide professional consulting and advisory services across
              mobility and environmental programs.
            </p>
          </div>

          <div class="flex flex-wrap gap-y-12 -mx-4">
            {services.map((service, i) => (
              <div
                class={`px-4 w-full md:w-1/2 lg:w-1/3 animate-fade-in-up ${
                  i % 2 === 1 ? "md:translate-y-20" : ""
                } ${i % 3 === 1 ? "lg:translate-y-12" : ""} ${
                  i % 3 === 2 ? "lg:translate-y-24" : ""
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div class="group relative">
                  {/* Magnetic Glow Effect */}
                  <div class="absolute -inset-4 bg-emerald-400/0 rounded-[40px] blur-2xl group-hover:bg-emerald-400/10 transition-all duration-700" />

                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Bottom CTA */}
          <div class="mt-24 relative group">
            <div class="absolute inset-0 bg-emerald-950 rounded-[40px] transform group-hover:scale-[1.02] transition-transform duration-700" />
            <div class="relative p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div class="max-w-xl text-center lg:text-left">
                <h2 class="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                  Ready to <span class="text-lime-400">Co-Create?</span>
                </h2>
                <div class="text-lg text-emerald-100/60 font-medium">
                  Looking to co-create a mobility or climate initiative? Explore
                  our programs or partner directly with our expert team.
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-5">
                <a
                  href="/programs"
                  class="px-10 py-5 bg-white dark:bg-emerald-900 text-emerald-950 dark:text-emerald-50 font-black uppercase tracking-widest text-xs rounded-tr-2xl rounded-bl-2xl hover:bg-lime-400 dark:hover:bg-lime-500 transition-all shadow-xl hover:-translate-y-1"
                >
                  View Programs
                </a>
                <a
                  href="/partner"
                  class="px-10 py-5 bg-emerald-500 text-white font-black uppercase tracking-widest text-xs rounded-tr-2xl rounded-bl-2xl hover:bg-lime-400 transition-all shadow-xl hover:-translate-y-1"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
