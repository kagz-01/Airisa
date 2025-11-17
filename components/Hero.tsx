export default function Hero() {
  return (
    <section class="relative overflow-hidden py-24 md:py-32">
      {/* Animated background gradient */}
      <div class="absolute inset-0 -z-10 animated-gradient"></div>
      {/* Subtle floating orbs */}
      <div class="pointer-events-none absolute -top-10 -left-10 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl animate-float-slow" />
      <div class="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-float-slower" />

      <div class="container mx-auto px-4">
        <div class="text-center max-w-4xl mx-auto">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium animate-fade-in">
            Airisa Green Consulting
          </span>
          <h1 class="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            <span
              class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up"
              style={{ animationDelay: "60ms" }}
            >
              Transforming Mobility and Environmental Sustainability in Africa
            </span>
          </h1>
          <p
            class="mt-6 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            We partner with governments, development partners, and businesses to
            deliver data-driven programs in ESG, carbon markets, and inclusive
            mobility across Africa.
          </p>
          {/* CTAs removed for a cleaner hero per request */}
        </div>
      </div>
    </section>
  );
}
