import { Head } from "$fresh/runtime.ts";

interface Item {
  title: string;
  summary: string;
  pillar: "Insight" | "Strategy" | "Sustainability";
  href?: string;
  tag?: string;
}

const articles: Item[] = [
  {
    title: "Leveraging Transport Data for Urban Equity",
    summary:
      "How multi-source mobility datasets surface accessibility and safety gaps for informal transit users.",
    pillar: "Insight",
    href: "#",
  },
  {
    title: "Designing Inclusive E-Mobility Programs",
    summary:
      "Principles for integrating gender-responsive and disability-inclusive perspectives into charging and fleet pilots.",
    pillar: "Strategy",
    href: "#",
  },
  {
    title: "Operationalizing Sustainability in Last-Mile Logistics",
    summary:
      "Embedding lifecycle thinking, emissions tracking, and circular inputs in emerging urban delivery models.",
    pillar: "Sustainability",
    href: "#",
  },
];

const researchSnapshots: Item[] = [
  {
    title: "Baseline Diagnostic Framework",
    summary:
      "Structured approach to early-stage program scoping: context, actors, enabling policy, data maturity.",
    pillar: "Insight",
  },
  {
    title: "Risk & Safeguards Matrix",
    summary:
      "Mapping environmental and social vectors to mitigation pathways across transport interventions.",
    pillar: "Sustainability",
  },
  {
    title: "Adaptive Implementation Ladder",
    summary:
      "Iterative milestone structure aligning feasibility, stakeholder alignment, and sustainability integration.",
    pillar: "Strategy",
  },
];

const methodologies: Item[] = [
  {
    title: "Multi-Source Mobility Data Stack",
    summary:
      "Combining surveys, sensor feeds, open standards, and participatory mapping for richer transit intelligence.",
    pillar: "Insight",
  },
  {
    title: "Inclusive Consultation Protocol",
    summary:
      "Sequenced engagement ensuring marginalized commuter voices inform design pivots early.",
    pillar: "Strategy",
  },
  {
    title: "Sustainability Integration Checklist",
    summary:
      "Lifecycle, circularity, carbon, and equity checkpoints embedded pre- and post-deployment.",
    pillar: "Sustainability",
  },
];

function PillarBadge({ pillar }: { pillar: Item["pillar"] }) {
  return (
    <span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
      {pillar}
    </span>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <div class="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-semibold group-hover:text-emerald-700 transition-colors">
          {item.href ? <a href={item.href}>{item.title}</a> : item.title}
        </h3>
        <PillarBadge pillar={item.pillar} />
      </div>
      <p class="mt-2 text-sm text-slate-600 leading-relaxed">{item.summary}</p>
    </div>
  );
}

export default function Insights() {
  return (
    <div class="container mx-auto px-6 py-12">
      <Head>
        <title>Insights Hub | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Insights Hub – Articles, research snapshots, and methodologies advancing inclusive, sustainable mobility and climate programs."
        />
        <meta
          property="og:title"
          content="Insights Hub | Airisa Green Consulting"
        />
        <meta
          property="og:description"
          content="Articles, research snapshots, and methodologies advancing inclusive, sustainable mobility and climate programs."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Insights Hub | Airisa Green Consulting"
        />
        <meta
          name="twitter:description"
          content="Articles, research snapshots, and methodologies for inclusive & sustainable mobility."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold">Insights Hub</h1>
        <p class="mt-4 text-slate-600 leading-relaxed">
          Evidence, frameworks, and applied learning powering impact across our
          consulting and program portfolio. We translate multi-source data and
          on-the-ground practice into actionable guidance.
        </p>
        <div class="mt-4 inline-flex gap-2 text-xs font-semibold">
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Insight
          </span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Strategy
          </span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Sustainability
          </span>
        </div>
      </div>

      <section class="mt-10">
        <h2 class="text-xl font-semibold">Latest Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {articles.map((a) => <Card item={a} key={a.title} />)}
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-xl font-semibold">Research Snapshots</h2>
        <p class="mt-2 text-sm text-slate-600 max-w-2xl">
          Concise analytical artifacts and structural tools guiding diagnostics,
          safeguards, and adaptive delivery.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {researchSnapshots.map((r) => <Card item={r} key={r.title} />)}
        </div>
      </section>

      <section class="mt-12">
        <h2 class="text-xl font-semibold">Frameworks & Methodologies</h2>
        <p class="mt-2 text-sm text-slate-600 max-w-2xl">
          Reusable scaffolds shaping inclusive, data-driven and
          sustainability-aligned program design.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {methodologies.map((m) => <Card item={m} key={m.title} />)}
        </div>
      </section>

      <div class="mt-14 bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="text-sm text-slate-700">
          Want to apply these insights in a live initiative? Partner with us to
          co-design evidence-led, sustainable mobility solutions.
        </div>
        <div class="flex gap-3">
          <a
            href="/services"
            class="px-4 py-2 rounded-md bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-100 text-sm font-medium"
          >
            Explore Services
          </a>
          <a
            href="/partner"
            class="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
}
