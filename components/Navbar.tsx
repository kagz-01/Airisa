import Logo from "./Logo.tsx";

export default function Navbar() {
  return (
    <header class="sticky top-0 z-50 bg-white shadow-sm border-b border-green-100 animate-fade-in">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/">
          <Logo size="md" src="/images/AGC.png" />
        </a>

        <nav class="hidden md:flex gap-8 items-center text-sm font-medium text-gray-700">
          <a href="/about" class="hover:text-green-600 transition">About</a>
          <a href="/services" class="hover:text-green-600 transition">
            Services
          </a>
          <a href="/industries" class="hover:text-green-600 transition">
            Industries
          </a>
          <a href="/case-studies" class="hover:text-green-600 transition">
            Programs
          </a>
          <a
            href="/contact"
            class="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition shadow-sm hover-lift"
          >
            Get Started
          </a>
        </nav>

        <div class="md:hidden">
          <button
            type="button"
            aria-label="menu"
            class="p-2 rounded-md border border-gray-200 hover:border-green-300"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
