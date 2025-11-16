const testimonials = [
  {
    quote: "Evelyn transformed how we operate.",
    name: "Brian Kimani, MD — Greenergy BioTech Ltd.",
  },
  {
    quote: "The clarity she brought to our NGO was invaluable.",
    name: "Miriam Lwanga — BloomCare Foundation",
  },
  {
    quote: "Exceptional leadership guidance.",
    name: "Abdul Said — Umoja Hardware Enterprises",
  },
];

export default function Testimonials() {
  return (
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold">What Our Clients Say</h1>
      <p class="mt-3 text-sm text-slate-600">
        More stories on{" "}
        <a
          href="https://www.linkedin.com/company/airisa-green-consulting/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 hover:text-green-700 font-medium"
        >
          LinkedIn
        </a>
        .
      </p>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div class="border rounded p-6 bg-white">
            <div class="italic">“{t.quote}”</div>
            <div class="text-sm text-slate-600 mt-4">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
