import { useEffect, useState } from "preact/hooks";
import Logo from "../components/Logo.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrandingCardOpen, setIsBrandingCardOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(globalThis.location.pathname);

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".branding-container")) {
        setIsBrandingCardOpen(false);
      }
    };

    if (isBrandingCardOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isBrandingCardOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "Insights", href: "/insights" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header class="sticky top-0 z-50 bg-white dark:bg-emerald-950/95 shadow-sm border-b border-green-100 dark:border-emerald-900/50 backdrop-blur-md animate-fade-in">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="relative branding-container">
          <button
            type="button"
            onClick={() => setIsBrandingCardOpen(!isBrandingCardOpen)}
            class="flex items-center focus:outline-none transition-transform hover:scale-[1.02] active:scale-95"
            aria-label="Toggle Branding Info"
          >
            <Logo size="lg" src="/images/agc-logo.png" />
          </button>

          {isBrandingCardOpen && (
            <div class="absolute top-[115%] left-0 w-[90vw] md:w-[450px] bg-white dark:bg-emerald-900 border border-emerald-100 dark:border-emerald-800 shadow-[0_40px_120px_-20px_rgba(5,150,105,0.25)] rounded-[40px] p-10 z-[100] animate-fade-in-up overflow-hidden">
              <div class="absolute top-0 right-0 w-48 h-48 bg-emerald-50 dark:bg-emerald-800/30 rounded-full blur-3xl -z-10" />
              <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-lime-50 dark:bg-lime-900/20 rounded-full blur-2xl -z-10" />

              <div class="flex justify-between items-start mb-10">
                <div class="space-y-4">
                  <Logo size="lg" src="/images/agc-logo.png" />
                  <p class="text-emerald-900/60 dark:text-emerald-100/70 text-sm font-medium leading-relaxed max-w-[280px]">
                    Advancing inclusive mobility, climate resilience, and
                    environmental sustainability through research and
                    innovation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBrandingCardOpen(false)}
                  class="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-700 text-emerald-950 dark:text-emerald-100 transition-all hover:rotate-90"
                >
                  ✕
                </button>
              </div>

              <div class="grid grid-cols-3 gap-3">
                {[
                  {
                    name: "Insight",
                    icon: "🧭",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                  {
                    name: "Strategy",
                    icon: "⚡",
                    color: "text-lime-600",
                    bg: "bg-lime-50",
                  },
                  {
                    name: "Sustainability",
                    icon: "🌍",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                  },
                ].map((pillar) => (
                  <div
                    class={`flex flex-col items-center justify-center p-4 ${pillar.bg} dark:bg-opacity-10 rounded-2xl border border-white dark:border-emerald-800 transition-transform hover:scale-105`}
                  >
                    <span class="text-2xl mb-2">{pillar.icon}</span>
                    <span
                      class={`text-[10px] font-black uppercase tracking-wider ${pillar.color}`}
                    >
                      {pillar.name}
                    </span>
                  </div>
                ))}
              </div>

              <div class="mt-10 pt-8 border-t border-emerald-50 dark:border-emerald-800/50 flex flex-col gap-4">
                <a
                  href="/about"
                  class="flex items-center justify-center gap-3 w-full py-5 bg-emerald-950 text-white font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl hover:bg-black transition-all shadow-xl active:scale-95"
                  onClick={() => setIsBrandingCardOpen(false)}
                >
                  Read Our Full Story
                  <span>→</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <nav class="hidden md:flex gap-6 items-center text-sm font-black uppercase tracking-tight text-emerald-950 dark:text-emerald-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class={`px-3 py-1.5 rounded-full transition-all duration-300 hover:text-green-600 dark:hover:text-green-400 ${
                activePath === link.href
                  ? "bg-emerald-glow text-emerald-700 dark:text-emerald-400 font-semibold"
                  : "hover:bg-green-50 dark:hover:bg-emerald-900/50"
              }`}
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/partner"
            class={`px-4 py-2 text-[10px] uppercase font-black rounded-full transition shadow-sm hover-lift whitespace-nowrap ${
              activePath === "/partner"
                ? "bg-emerald-600 text-white animate-glow-emerald"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Partner With Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div class="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
            class="p-2 rounded-md border border-gray-200 dark:border-emerald-800 hover:border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-slate-800 dark:text-emerald-200"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div class="md:hidden border-t border-gray-100 dark:border-emerald-900 bg-white dark:bg-emerald-950 absolute w-full left-0 shadow-lg animate-fade-in-up">
          <nav class="flex flex-col p-4 space-y-3 text-sm font-black tracking-tight text-emerald-950 dark:text-emerald-50">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                class={`block px-3 py-2 rounded-md transition ${
                  activePath === link.href
                    ? "bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-semibold"
                    : "hover:bg-green-50 dark:hover:bg-emerald-900/30 hover:text-green-700 dark:hover:text-green-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/partner"
              class={`block px-3 py-3 rounded-md text-center transition shadow-sm ${
                activePath === "/partner"
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Partner With Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
