import HeroSlideshow from "../islands/HeroSlideshow.tsx";

export default function Hero() {
  return (
    <section class="relative overflow-hidden py-24 md:py-48">
      {/* Background Slideshow */}
      <HeroSlideshow />

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-xl">
            <span
              class="animate-fade-in-up"
              style={{ animationDelay: "60ms" }}
            >
              Transforming Mobility and Environmental Sustainability in Africa
            </span>
          </h1>

        </div>
      </div>
    </section>
  );
}
