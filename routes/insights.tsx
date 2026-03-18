import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { DynamicInsight, getAllDynamicInsights } from "../utils/insights_kv.ts";
import InsightTabs from "../islands/InsightTabs.tsx";
import NewsletterSubscribe from "../islands/NewsletterSubscribe.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const dynamicInsights = await getAllDynamicInsights();
    return ctx.render({ dynamicInsights });
  },
};


function PartBadge({ part }: { part: string }) {
  return (
    <span class="bg-lime-400 text-emerald-950 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-sm">
      Part {part}
    </span>
  );
}

function FeatureCard({ item }: { item: DynamicInsight }) {
  return (
    <div class="group relative w-full h-[85vh] min-h-[700px] overflow-hidden bg-emerald-950 flex flex-col justify-end p-8 md:p-32">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          class="absolute inset-0 w-full h-full object-cover saturate-[0.2] group-hover:saturate-100 transition-all duration-1000 group-hover:scale-105 opacity-40"
        />
      )}
      <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent" />

      <div class="relative z-10 max-w-5xl text-left">
        <div class="flex items-center gap-4 mb-8 flex-wrap">
          <div class="bg-lime-400 text-emerald-950 text-[10px] font-black uppercase tracking-[0.4em] px-4 py-1.5 shadow-lg">
            Featured {item.type || "Insight"}
          </div>
          {item.part && <PartBadge part={item.part} />}
        </div>

        <h1 class="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 group-hover:-translate-y-2 transition-transform duration-700">
          {item.title}
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div class="space-y-6">
            <p class="text-xl md:text-3xl text-emerald-50 font-medium leading-tight border-l-4 border-lime-400 pl-8">
              {item.summary}
            </p>
          </div>
          <div class="space-y-8">
            <p class="text-emerald-50/70 text-base leading-relaxed whitespace-pre-line font-medium max-w-lg">
              {item.extendedContent}
            </p>
            <a
              href={item.href}
              target="_blank"
              class="inline-flex items-center gap-6 px-8 py-4 bg-white text-emerald-950 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-lime-400 transition-all group/link"
            >
              {item.type === "Article" ? "Explore the Full Article" : 
               item.type === "Document" || item.type === "Narrative" ? "Examine the Technical Document" :
               item.type === "Video" ? "Watch the Full Narrative" :
               "View the Original Insight"}
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

export default function Insights(
  { data }: PageProps<{ dynamicInsights: DynamicInsight[] }>,
) {
  const allItems = data?.dynamicInsights || [];
  const featuredItem = allItems[0];

  return (
    <div class="bg-white dark:bg-emerald-950 min-h-screen font-['Open_Sans']">
      <Head>
        <title>Insights Hub | Airisa Green Consulting</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="Expert narratives, field intelligence, and policy roadmaps for Africa's e-mobility transition."
        />
      </Head>

      {/* Section .00 : The Spotlight */}
      <section>
        {featuredItem
          ? <FeatureCard item={featuredItem} />
          : (
            <div class="h-[60vh] flex items-center justify-center bg-emerald-950">
               <p class="text-white font-black tracking-[0.5em] animate-pulse">SYNCHRONIZING...</p>
            </div>
          )}
      </section>

      {/* Section .01 : The Pulse (Dynamic Tabs) */}
      <section class="py-24 bg-[#FAFAFA] dark:bg-emerald-900/10">
        <div class="container mx-auto px-6 max-w-7xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 text-left">
            <div class="max-w-xl">
              <h2 class="text-5xl md:text-8xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter leading-[0.9] mb-8 font-['Poppins']">
                The Field <span class="text-emerald-600">Pulse.</span>
              </h2>
              <p class="text-slate-500 dark:text-slate-400 font-bold text-xl leading-relaxed border-l-4 border-emerald-100 dark:border-emerald-800 pl-8 italic">
                A high-fidelity teaser of our active engagements and technical intelligence, synchronized directly from LinkedIn.
              </p>
            </div>
            <div class="flex items-center gap-4 bg-white dark:bg-emerald-900/40 border border-slate-200 dark:border-emerald-800 px-8 py-4 shadow-xl">
               <div class="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
               <span class="text-[10px] font-black text-emerald-950 dark:text-emerald-100 uppercase tracking-[0.5em]">LIVE FEED</span>
            </div>
          </div>

          <InsightTabs insights={allItems} />
        </div>
      </section>

      <NewsletterSubscribe />
    </div>
  );
}
