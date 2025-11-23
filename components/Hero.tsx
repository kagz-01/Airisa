import HeroSlideshow from "../islands/HeroSlideshow.tsx";

export default function Hero() {
  return (
    <section class="relative overflow-hidden py-32 md:py-48">
      {/* Background Slideshow */}
      <HeroSlideshow />

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <span class="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium animate-fade-in shadow-sm">
            Airisa Green Consulting
          </span>
          <h1 class="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            <span
              class="animate-fade-in-up"
              style={{ animationDelay: "60ms" }}
            >
              Transforming Mobility and Environmental Sustainability in Africa
            </span>
          </h1>
          <p
            class="mt-6 text-lg md:text-xl text-slate-100 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md"
            style={{ animationDelay: "120ms" }}
          >
            We partner with governments, development partners, and businesses to
            deliver data-driven programs in ESG, carbon markets, and inclusive
            mobility across Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
