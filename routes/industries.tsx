const industries = [
  {
    title: "Agriculture & Agribusiness",
    desc:
      "Climate-smart strategies, EIA, and sustainability reporting for farm and agribusiness operations.",
  },
  {
    title: "Manufacturing",
    desc:
      "Waste reduction, emissions control, and compliance support for manufacturers.",
  },
  {
    title: "Energy & Renewables",
    desc:
      "Advisory for solar, wind, and green energy projects on environmental risk and compliance.",
  },
  {
    title: "Transport & Logistics",
    desc:
      "Fleet sustainability assessments, route optimisation, and carbon reduction planning.",
  },
];

export default function Industries() {
  return (
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold">Industries We Serve</h1>
      <p class="mt-3 text-slate-600">
        We partner with organisations across sectors to deliver measurable
        sustainability outcomes.
      </p>
      <p class="mt-2 text-sm">
        <a
          href="https://www.linkedin.com/company/airisa-green-consulting/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 hover:text-green-700 font-medium"
        >
          See sector updates on LinkedIn
        </a>
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {industries.map((it) => (
          <div class="border rounded-lg p-6 bg-white">
            <div class="font-semibold">{it.title}</div>
            <div class="text-slate-600 mt-2">{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
