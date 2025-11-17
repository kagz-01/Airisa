export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="border-t border-emerald-800 bg-gradient-to-t from-emerald-950 to-emerald-900 text-emerald-50 animate-fade-in">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div class="flex items-center gap-2 font-semibold">
            <img
              src="/images/agc-logo.png"
              alt="Airisa Green"
              class="h-6 w-6"
            />
            <span>Airisa Green</span>
          </div>
          <p class="mt-3 text-sm text-emerald-100">
            Climate strategy, carbon markets, and ESG implementation.
          </p>
        </div>
        <div>
          <div class="text-sm font-semibold mb-2 text-emerald-200">Company</div>
          <ul class="space-y-1 text-sm">
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/programs"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/team"
              >
                Team
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div class="text-sm font-semibold mb-2 text-emerald-200">Connect</div>
          <ul class="space-y-1 text-sm">
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="https://www.linkedin.com/company/airisa-green-consulting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company LinkedIn
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="http://linkedin.com/in/evelyn-gathua-a40887112"
                target="_blank"
                rel="noopener noreferrer"
              >
                Evelyn on LinkedIn
              </a>
            </li>
            <li>
              <a
                class="text-emerald-100 hover:text-white transition-colors"
                href="/ecard"
              >
                E‑Card
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-emerald-800 py-4 text-center text-sm text-emerald-200">
        © {year} Airisa Green. All rights reserved.
      </div>
    </footer>
  );
}
