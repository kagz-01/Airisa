import HeroSlideshow from "../islands/HeroSlideshow.tsx";

export default function Hero() {
  return (
    <section class="relative overflow-hidden py-24 md:py-32 min-h-[75vh] flex items-center">
      {/* Background Slideshow */}
      <HeroSlideshow />

      {/* Organic Fragments (Overlapping Layers) */}
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-950/20 to-transparent pointer-events-none z-0" />
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" />
      <div class="absolute top-1/4 -right-20 w-80 h-80 border-[40px] border-white/5 rounded-full pointer-events-none z-0" />

      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-5xl md:text-7xl font-black leading-[1.1] text-white drop-shadow-2xl tracking-tighter animate-fade-in-up">
          Transforming Mobility and Environmental Sustainability in Africa
        </h1>

        <div class="mt-8 max-w-2xl relative">
          {/* Disruptor vertical line */}
          <div class="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-transparent rounded-full hidden md:block" />

          {/* Removed descriptive paragraph per client request for a plainer look */}

          <div
            class="mt-8 flex flex-wrap gap-5 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="/services"
              class="px-8 py-4 bg-lime-400 hover:bg-lime-500 text-emerald-950 font-bold rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md transition-all transform hover:scale-105 shadow-xl"
            >
              Our Services
            </a>
            <a
              href="/about"
              class="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold border border-white/30 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
