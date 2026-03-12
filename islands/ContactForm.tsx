import { useEffect, useState } from "preact/hooks";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. 'Swaziland')",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusVisible, setStatusVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusVisible(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          country,
          subject,
          message,
          website: "",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus(data?.message ?? "Message sent ✅");
        setName("");
        setEmail("");
        setCountry("");
        setSubject("");
        setMessage("");
        setStatusVisible(true);
      } else {
        setStatus(data?.error ?? "Failed to send message ❌");
        setStatusVisible(true);
      }
    } catch (_err) {
      setStatus("Network error. Please try again.");
      setStatusVisible(true);
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss + fade-out status after visibility
  useEffect(() => {
    if (!statusVisible || !status) return;
    const hideTimer = setTimeout(() => setStatusVisible(false), 3500);
    const clearTimer = setTimeout(() => setStatus(null), 4200);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [statusVisible, status]);

  // Prefill message from query param `topic`
  useEffect(() => {
    try {
      const href = globalThis?.location?.href as string | undefined;
      if (!href) return;
      const url = new URL(href);
      const topic = url.searchParams.get("topic");
      if (topic && !subject) {
        setSubject(`Inquiry about: ${topic}`);
      }
    } catch (_) {
      // no-op for SSR or invalid URL
    }
  }, []);

  return (
    <form onSubmit={onSubmit} class="grid gap-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
            Name
          </label>
          <input
            class="w-full rounded-[2px] border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all bg-white/50 backdrop-blur-sm"
            type="text"
            placeholder="Walter James"
            value={name}
            onInput={(e) => setName((e.target as HTMLInputElement).value)}
            required
          />
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
            Email
          </label>
          <input
            class="w-full rounded-[2px] border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all bg-white/50 backdrop-blur-sm"
            type="email"
            placeholder="james@gmail.com"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
            Country
          </label>
          <select
            class="w-full rounded-[2px] border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all bg-white/50 backdrop-blur-sm appearance-none"
            value={country}
            onInput={(e) => setCountry((e.target as HTMLSelectElement).value)}
            required
          >
            <option value="" disabled>Select a country</option>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
            Subject
          </label>
          <input
            class="w-full rounded-[2px] border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all bg-white/50 backdrop-blur-sm"
            type="text"
            placeholder="General Inquiry"
            value={subject}
            onInput={(e) => setSubject((e.target as HTMLInputElement).value)}
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1">
          Message
        </label>
        <textarea
          class="w-full rounded-[2px] border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all bg-white/50 backdrop-blur-sm"
          rows={5}
          placeholder="Tell us about your mission..."
          value={message}
          onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          required
        />
      </div>

      <div class="flex flex-col sm:flex-row items-center gap-6">
        <button
          type="submit"
          disabled={loading}
          class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-[2px] hover:bg-emerald-700 hover:shadow-saffron disabled:opacity-50 overflow-hidden w-full sm:w-auto"
        >
          <span class="relative z-10 flex items-center gap-2">
            {loading ? "Aligning Gears..." : "Initialize Partnership"}
            {!loading && (
              <svg
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="arrow-right"
                />
              </svg>
            )}
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          </div>
        </button>
        {status && (
          <p
            role="status"
            aria-live="polite"
            class={`text-sm font-semibold text-emerald-800 transition-opacity duration-500 ${
              statusVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
