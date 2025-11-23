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
    <form onSubmit={onSubmit} class="grid gap-4 max-w-xl">
      <div>
        <label class="block text-sm font-medium text-slate-700">Name</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="text"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Email</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="email"
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Country</label>
        <select
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          value={country}
          onInput={(e) => setCountry((e.target as HTMLSelectElement).value)}
          required
        >
          <option value="" disabled>Select a country</option>
          {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Subject</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="text"
          value={subject}
          onInput={(e) => setSubject((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={5}
          value={message}
          onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          required
        />
      </div>
      <div class="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          class="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
        {status && (
          <p
            role="status"
            aria-live="polite"
            class={`text-sm text-slate-600 transition-opacity duration-500 ${
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
