import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { DynamicInsight, getAllDynamicInsights } from "../utils/insights_kv.ts";
import ARIASummarize from "../islands/ARIASummarize.tsx";

interface Item {
  id?: string;
  title: string;
  summary: string;
  extendedContent?: string;
  pillar: "Insight" | "Strategy" | "Sustainability";
  href?: string;
  tag?: string;
  image?: string;
  animation?: "zoom-in" | "zoom-out" | "pan" | "blur";
  isDynamic?: boolean;
  part?: string;
  seriesTitle?: string;
}

// These are now part of the "Knowledge Base" (Archive/Core Frameworks)
const staticArchive: Item[] = [
  {
    title: "Baseline Diagnostic Framework",
    summary:
      "Structured approach to early-stage program scoping: context, actors, enabling policy, data maturity.",
    pillar: "Insight",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    href: "https://www.linkedin.com/company/airisa-green-consulting/",
  },
  {
    title: "Multi-Source Mobility Data Stack",
    summary:
      "Combining surveys, sensor feeds, open standards, and participatory mapping for richer transit intelligence.",
    pillar: "Insight",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    href: "https://www.linkedin.com/company/airisa-green-consulting/",
  },
  {
    title: "Risk & Safeguards Matrix",
    summary:
      "Mapping environmental and social vectors to mitigation pathways across transport interventions.",
    pillar: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    href: "https://www.linkedin.com/company/airisa-green-consulting/",
  },
  {
    title: "Sustainability Integration Checklist",
    summary:
      "Lifecycle, circularity, carbon, and equity checkpoints embedded pre- and post-deployment.",
    pillar: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    href: "https://www.linkedin.com/company/airisa-green-consulting/",
  },
];

export const handler: Handlers = {
  async GET(_req, ctx) {
    const dynamicInsights = await getAllDynamicInsights();
    return ctx.render({ dynamicInsights });
  },
};

function PillarBadge(
  { pillar, inverted = false }: { pillar: Item["pillar"]; inverted?: boolean },
) {
  return (
    <span
      class={`px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] border-l-2 ${
        inverted
          ? "bg-white/10 text-white border-amber-400"
          : "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-600 dark:border-emerald-500"
      }`}
    >
      {pillar}
    </span>
  );
}

function PartBadge({ part }: { part: string }) {
  return (
    <span class="bg-amber-400 text-emerald-950 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-sm">
      Part {part}
    </span>
  );
}

function FeatureCard({ item }: { item: Item }) {
  return (
    <div class="group relative w-full h-[75vh] min-h-[650px] overflow-hidden bg-emerald-950 flex flex-col justify-end p-8 md:p-24 shadow-2xl">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          class="absolute inset-0 w-full h-full object-cover saturate-[0.4] group-hover:saturate-100 transition-all duration-1000 group-hover:scale-105 opacity-60"
        />
      )}
      <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />

      <div class="relative z-10 max-w-4xl text-left">
        <div class="flex items-center gap-4 mb-6 flex-wrap">
          <div class="bg-white text-emerald-950 text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1">
            The Feature Spotlight
          </div>
          {item.part && <PartBadge part={item.part} />}
          <PillarBadge pillar={item.pillar} inverted />
        </div>

        <h2 class="text-4xl md:text-7xl font-black text-white leading-none tracking-tighter mb-8 group-hover:translate-x-4 transition-transform duration-700">
          {item.title}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <p class="text-lg md:text-2xl text-emerald-50/90 font-medium leading-tight border-l-4 border-amber-400 pl-6">
            {item.summary}
          </p>
          <div class="space-y-6">
            <p class="text-emerald-50/60 text-sm leading-relaxed whitespace-pre-line line-clamp-4 md:line-clamp-6 font-medium">
              {item.extendedContent}
            </p>
            <a
              href={item.href}
              target="_blank"
              class="inline-flex items-center gap-4 text-amber-400 text-sm font-black uppercase tracking-[0.3em] hover:text-white transition-all group/link"
            >
              Read Full Narrative{" "}
              <span class="group-hover/link:translate-x-3 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PulseCard({ item }: { item: Item }) {
  return (
    <div class="group bg-white dark:bg-emerald-900/10 border border-slate-100 dark:border-emerald-800/30 p-8 flex flex-col h-full hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-700 hover:-translate-y-2 text-left">
      <div class="flex flex-wrap justify-between items-start gap-4 mb-10">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <div class="flex flex-col">
            <span class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              LinkedIn Sync
            </span>
            {item.part && (
              <div class="mt-1">
                <PartBadge part={item.part} />
              </div>
            )}
          </div>
        </div>
        <PillarBadge pillar={item.pillar} />
      </div>

      <div class="flex-1">
        {item.image && (
          <div class="aspect-video overflow-hidden mb-8 saturate-[0.6] group-hover:saturate-100 transition-all duration-1000 rounded-sm">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        )}
        <h3 class="text-2xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-6 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {item.title}
        </h3>
        <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-bold mb-6 opacity-90">
          {item.summary}
        </p>
        <div class="h-px w-12 bg-emerald-100 dark:bg-emerald-800 mb-6 group-hover:w-full transition-all duration-700" />
        <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed italic line-clamp-3 font-medium">
          {item.extendedContent}
        </p>
      </div>

      <div class="mt-10 pt-8 border-t border-slate-50 dark:border-emerald-800/30 flex justify-between items-center gap-4">
        <a
          href={item.href}
          target="_blank"
          class="text-emerald-900 dark:text-emerald-300 text-[9px] font-black uppercase tracking-tighter hover:tracking-[0.2em] transition-all"
        >
          View Original on LinkedIn →
        </a>
        <ARIASummarize
          title={item.title}
          summary={item.summary}
          content={item.extendedContent}
        />
      </div>
    </div>
  );
}

function KnowledgeCard({ item }: { item: Item }) {
  return (
    <div class="group flex flex-col md:flex-row gap-8 items-start py-10 border-b border-slate-100 dark:border-emerald-800/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-all px-6 text-left relative overflow-hidden">
      <a
        href={item.href || "https://www.linkedin.com/company/airisa-green-consulting/"}
        target="_blank"
        rel="noopener noreferrer"
        class="w-24 h-32 md:h-24 shrink-0 bg-slate-100 dark:bg-emerald-900 overflow-hidden rounded-sm saturate-[0.1] group-hover:saturate-100 transition-all duration-700 shadow-sm group-hover:scale-110 group-hover:rotate-1"
      >
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            class="w-full h-full object-cover"
          />
        )}
      </a>
      <div class="flex-1">
        <div class="flex items-center gap-4 mb-3">
          <span class="text-[8px] font-black text-emerald-600 uppercase tracking-[0.4em]">
            {item.pillar}
          </span>
          <div class="h-px flex-1 bg-slate-100 dark:bg-emerald-800 group-hover:bg-emerald-400 transition-all duration-500" />
        </div>
        <a
          href={item.href || "https://www.linkedin.com/company/airisa-green-consulting/"}
          target="_blank"
          rel="noopener noreferrer"
          class="block"
        >
          <h4 class="text-xl md:text-2xl font-black text-emerald-950 dark:text-emerald-50 tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-2">
            {item.title}
          </h4>
          <p class="text-sm text-slate-900 dark:text-slate-300 font-bold max-w-2xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
            {item.summary}
          </p>
        </a>
        <div class="mt-4 flex items-center justify-between gap-4">
          <a
            href={item.href || "https://www.linkedin.com/company/airisa-green-consulting/"}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500"
          >
            Read Full Narrative <span>→</span>
          </a>
          <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ARIASummarize title={item.title} summary={item.summary} />
          </div>
        </div>
      </div>
      <div class="text-[9px] font-black text-slate-300 dark:text-slate-600 group-hover:text-emerald-950 dark:group-hover:text-emerald-300 transition-colors pt-1 tracking-widest self-end md:self-start">
        TECH.DOSSIER
      </div>
    </div>
  );
}

export default function Insights(
  { data }: PageProps<{ dynamicInsights: DynamicInsight[] }>,
) {
  const dynamicItems: Item[] = (data?.dynamicInsights || []).map((di) => ({
    ...di,
    isDynamic: true,
  }));

  const featured = dynamicItems[0];
  const pulses = dynamicItems.slice(1);

  return (
    <div class="bg-white dark:bg-emerald-950 min-h-screen">
      <Head>
        <title>The Airisa Chronicle | Global Insights Hub</title>
        <meta
          name="description"
          content="The Airisa Chronicle – Real-time evidence, frameworks, and applied learning from the front lines of global mobility."
        />
      </Head>

      {/* Hero / Spotlight */}
      <section>
        {featured
          ? <FeatureCard item={featured} />
          : (
            <div class="py-24 md:py-32 bg-emerald-950 text-center">
              <h1 class="text-white font-black text-6xl tracking-tighter">
                The Chronicle
              </h1>
              <p class="text-emerald-400 mt-4 text-sm tracking-[0.4em] uppercase font-black">
                Connecting to the live feed...
              </p>
            </div>
          )}
      </section>

      {/* The Chronicle Grid */}
      <section class="py-16 md:py-24 bg-[#faf9f6] dark:bg-emerald-900/5">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row md:items-end gap-6 mb-16">
            <div class="shrink-0 text-left">
              <span class="text-emerald-600 dark:text-emerald-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                Section .01
              </span>
              <h2 class="text-4xl md:text-6xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter">
                The Airisa <span class="text-emerald-600 dark:text-emerald-500">Pulse.</span>
              </h2>
            </div>
            <div class="h-px w-full bg-emerald-200 dark:bg-emerald-800 mb-4 hidden md:block" />
            <div class="flex items-center gap-3 shrink-0 bg-white dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 px-6 py-4 rounded-full shadow-sm mb-4">
              <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span class="text-[10px] font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-[0.3em]">
                LIVE FIELD SYNC
              </span>
            </div>
          </div>

          <div class="max-w-2xl text-left mb-16">
            <p class="text-slate-500 dark:text-slate-400 font-bold leading-relaxed border-l-2 border-emerald-100 dark:border-emerald-800 pl-6 italic">
              A real-time broadcast of our latest LinkedIn activity,
              industry-shaping news, and evolving policy landscapes from the
              ground.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {pulses.map((p, _i) => (
              <div key={p.id}>
                <PulseCard item={p} />
              </div>
            ))}
          </div>

          {pulses.length === 0 && (
            <div class="py-16 text-center border-2 border-dashed border-slate-200 dark:border-emerald-800 rounded-xl">
              <p class="text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest text-sm">
                More industry pulses arriving soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The Knowledge Base */}
      <section class="py-16 md:py-24 bg-white dark:bg-emerald-950">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="flex flex-col md:flex-row items-start md:items-end gap-10 mb-16 text-left">
            <div class="max-w-2xl">
              <span class="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                Section .02
              </span>
              <h2 class="text-4xl md:text-7xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-8 leading-none">
                The Knowledge <br />
                <span class="text-slate-300 dark:text-emerald-800">Repository.</span>
              </h2>
              <p class="text-slate-500 dark:text-slate-400 font-bold text-lg leading-snug">
                Foundational frameworks and technical methodologies established
                through years of rigorous field research and validated policy
                interventions.
              </p>
            </div>
            <div class="flex-1 hidden md:block border-t-2 border-slate-100 dark:border-emerald-800 pb-8" />
          </div>

          <div class="flex flex-col border-t border-slate-100 dark:border-emerald-800/50">
            {staticArchive.map((item, _i) => (
              <KnowledgeCard key={_i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Newsletter CTA */}
      <section class="py-24 md:py-32 bg-emerald-950 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div class="container mx-auto px-6 relative z-10 text-center">
          <div class="inline-block px-4 py-1 border border-amber-400 text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
            Stay Informed
          </div>
          <h3 class="text-4xl md:text-8xl font-black text-white tracking-tighter mb-16 leading-none">
            Join the Next <br />
            <span class="text-amber-400 italic">Policy Briefing.</span>
          </h3>
          <div class="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Professional email address"
              class="px-8 py-6 bg-white/5 border border-white/20 text-white font-medium hover:border-white/40 focus:bg-white/10 w-full focus:outline-none focus:border-amber-400 transition-all"
            />
            <button
              type="button"
              class="px-10 py-6 bg-amber-400 text-emerald-950 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all w-full md:w-auto shrink-0"
            >
              Subscribe
            </button>
          </div>
          <p class="mt-12 text-emerald-400/50 text-[9px] font-black uppercase tracking-widest">
            Rigorous Insights. Zero Spam.
          </p>
        </div>
      </section>
    </div>
  );
}
