const studies = [
  {
    title: "Carbon Reduction for a Logistics Firm",
    summary:
      "22% reduction in annual CO2 emissions after route optimisation and driver training.",
  },
  {
    title: "ESG Rollout for a Manufacturing Company",
    summary:
      "Achieved compliance with IFC performance standards and improved investor confidence.",
  },
  {
    title: "County Waste Management Upgrade",
    summary:
      "35% improvement in waste collection efficiency through systems redesign.",
  },
];

export default function CaseStudies() {
  return (
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold">Case Studies</h1>
      <p class="mt-3 text-slate-600">
        Selected projects demonstrating measurable impact.
      </p>

      <div class="mt-6 space-y-4">
        {studies.map((s) => (
          <div class="border rounded p-6 bg-white shadow-sm">
            <div class="font-semibold">{s.title}</div>
            <div class="text-slate-600 mt-2">{s.summary}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
