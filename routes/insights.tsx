import { Head } from "$fresh/runtime.ts";

interface Item {
  title: string;
  summary: string;
  pillar: "Insight" | "Strategy" | "Sustainability";
  href?: string;
  tag?: string;
  image?: string;
  animation?: "zoom-in" | "zoom-out" | "pan" | "blur";
}

const articles: Item[] = [
  {
    title: "Leveraging Transport Data for Urban Equity",
    summary:
      "How multi-source mobility datasets surface accessibility and safety gaps for informal transit users.",
    pillar: "Insight",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
  },
  {
    title: "Designing Inclusive E-Mobility Programs",
    summary:
      "Principles for integrating gender-responsive and disability-inclusive perspectives into charging and fleet pilots.",
    pillar: "Strategy",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
  },
  {
    title: "Operationalizing Sustainability in Last-Mile Logistics",
    summary:
      "Embedding lifecycle thinking, emissions tracking, and circular inputs in emerging urban delivery models.",
    pillar: "Sustainability",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
  },
];

const researchSnapshots: Item[] = [
  {
    title: "Baseline Diagnostic Framework",
    summary:
      "Structured approach to early-stage program scoping: context, actors, enabling policy, data maturity.",
    pillar: "Insight",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
  },
  {
    title: "Risk & Safeguards Matrix",
    summary:
      "Mapping environmental and social vectors to mitigation pathways across transport interventions.",
    pillar: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
  },
  {
    title: "Adaptive Implementation Ladder",
    summary:
      "Iterative milestone structure aligning feasibility, stakeholder alignment, and sustainability integration.",
    pillar: "Strategy",
    image:
      "https://images.unsplash.com/photo-1502086223501-681191e2167a?auto=format&fit=crop&w=800&q=80",
    animation: "pan",
  },
];

const methodologies: Item[] = [
  {
    title: "Multi-Source Mobility Data Stack",
    summary:
      "Combining surveys, sensor feeds, open standards, and participatory mapping for richer transit intelligence.",
    pillar: "Insight",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-out",
  },
  {
    title: "Inclusive Consultation Protocol",
    summary:
      "Sequenced engagement ensuring marginalized commuter voices inform design pivots early.",
    pillar: "Strategy",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    animation: "blur",
  },
  {
    title: "Sustainability Integration Checklist",
    summary:
      "Lifecycle, circularity, carbon, and equity checkpoints embedded pre- and post-deployment.",
    pillar: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    animation: "zoom-in",
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
    <div class="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      {item.image && (
        <div class="h-48 overflow-hidden relative">
          <img
            src={item.image}
            alt={item.title}
            class={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
              item.animation === "zoom-out"
                ? "scale-110 group-hover:scale-100"
                : item.animation === "pan"
                ? "scale-110 group-hover:translate-x-4"
                : item.animation === "blur"
                ? "blur-[2px] scale-105 group-hover:blur-none group-hover:scale-100"
                : "group-hover:scale-110"
            }`}
          />
          <div class="absolute top-3 right-3">
            <PillarBadge pillar={item.pillar} />
          </div>
        </div>
      )}
      <div class="p-5 flex-1 flex flex-col">
        {!item.image && (
          <div class="mb-3 flex justify-end">
            <PillarBadge pillar={item.pillar} />
          </div>
        )}
        <h3 class="text-base font-semibold group-hover:text-emerald-700 transition-colors mb-2">
          {item.href ? <a href={item.href}>{item.title}</a> : item.title}
        </h3>
        <p class="text-sm text-slate-600 leading-relaxed flex-1">
          {item.summary}
        </p>
        {item.href && (
          <div class="mt-4 pt-3 border-t border-slate-100">
            <a
              href={item.href}
              class="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1"
            >
              Read Article →
            </a>
          </div>
        )}
      </div>
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
