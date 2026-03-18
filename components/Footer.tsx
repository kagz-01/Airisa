import Logo from "./Logo.tsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="bg-white dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-50 py-10 relative overflow-hidden border-t border-emerald-200 dark:border-emerald-800/30 transition-colors duration-500">
      <div class="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">

        {/* Top Row: Logo left, contact right */}
        <div class="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo — image already contains the company name */}
          <a
            href="/"
            class="hover:opacity-80 transition-opacity transform hover:scale-105 duration-300"
          >
            <Logo size="md" src="/images/agc-logo.png" />
          </a>

          {/* Contact links */}
          <div class="flex flex-col items-center md:items-end gap-1 text-sm">
            <a
              href="mailto:info@airisagreenconsulting.com"
              class="font-black border-b-2 border-lime-400 dark:border-lime-500 pb-0.5 text-emerald-950 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-all duration-300 tracking-tight"
            >
              info@airisagreenconsulting.com
            </a>
          </div>
        </div>

        {/* Centre: Tagline + Copyright */}
        <div class="text-center space-y-2">
          <div class="text-xs md:text-sm font-bold italic text-emerald-900 dark:text-emerald-100 transition-colors tracking-wider">
            Transforming mobility and environmental sustainability in Africa
          </div>
          <div class="text-xs font-black text-emerald-950/80 dark:text-emerald-50/80 transition-colors">
            © {year} Airisa Green Consulting. All Rights Reserved. • <a href="/unsubscribe" class="hover:text-emerald-700 dark:hover:text-emerald-400 underline decoration-emerald-300 dark:decoration-emerald-700 transition-colors">Unsubscribe</a>
          </div>
        </div>

        {/* Bottom Row: Social / contact icons centred */}
        <div class="flex gap-6 items-center justify-center">
          {/* Phone */}
          <a
            href="tel:+254738573190"
            title="+254 738 573 190"
            class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/40 hover:bg-emerald-600 text-emerald-800 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254738573190"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Us"
            class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/40 hover:bg-emerald-600 text-emerald-800 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.1632c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.444 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/airisa-green-consulting/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-800/40 hover:bg-emerald-600 text-emerald-800 dark:text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
