import { useState } from "preact/hooks";
import { DynamicInsight } from "../utils/insights_kv.ts";
import ARIASummarize from "../islands/ARIASummarize.tsx";

type TabType = "All" | "Images" | "Videos" | "Articles" | "Documents";

interface InsightTabsProps {
  insights: DynamicInsight[];
}

function ContentBadge({ type }: { type: DynamicInsight["type"] }) {
  const colors = {
    Post: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
    Article: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
    Narrative: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
    Image: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
    Video: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    Document: "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/30 dark:text-slate-300 dark:border-slate-800",
  };
  return (
    <span class={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest border rounded-full ${colors[type] || colors.Post}`}>
      {type}
    </span>
  );
}


export default function InsightTabs({ insights }: InsightTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>("All");

  const tabs: TabType[] = ["All", "Images", "Videos", "Articles", "Documents"];

  const filteredInsights = insights.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Images") return item.type === "Image";
    if (activeTab === "Videos") return item.type === "Video";
    if (activeTab === "Articles") return item.type === "Article";
    if (activeTab === "Documents") return item.type === "Document" || item.type === "Narrative";
    return true;
  });

  return (
    <div class="space-y-16">
      {/* LinkedIn-style Tab Bar */}
      <div class="flex flex-wrap items-center justify-center gap-4 mb-20 sticky top-20 z-40 py-4 bg-white/80 dark:bg-emerald-950/80 backdrop-blur-md border-b border-slate-100 dark:border-emerald-800/20">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            class={`px-8 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all border-2 ${
              activeTab === tab
                ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-105"
                : "bg-transparent text-emerald-900 dark:text-emerald-100 border-slate-200 dark:border-emerald-800 hover:border-emerald-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Grid */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredInsights.length > 0 ? (
          filteredInsights.map((item) => (
            <InsightCard key={item.id} item={item} activeTab={activeTab} />
          ))
        ) : (
          <div class="col-span-full py-32 text-center">
            <p class="text-slate-400 font-bold uppercase tracking-widest animate-pulse">
              No content published in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function InsightCard({ item, activeTab }: { item: DynamicInsight; activeTab: TabType }) {
  const isArticle = item.type === "Article";
  const isDocument = item.type === "Document" || item.type === "Narrative";
  const isVideo = item.type === "Video";

  return (
    <div class="group bg-white dark:bg-emerald-900/5 border border-slate-100 dark:border-emerald-800/20 p-8 flex flex-col h-full hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 text-left relative overflow-hidden">
      {isDocument && (
        <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center -rotate-45 translate-x-8 -translate-y-8">
           <span class="text-[10px] font-black text-emerald-600 dark:text-emerald-500 rotate-45">DOC</span>
        </div>
      )}

      <div class="flex justify-between items-start gap-4 mb-10">
        <div class="flex items-center gap-4">
          <div class={`w-1.5 h-1.5 rounded-full ${isVideo ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`} />
          {activeTab === "All" && <ContentBadge type={item.type} />}
        </div>
      </div>

      <div class="flex-1">
        {item.image && (
          <div class="aspect-video overflow-hidden mb-8 saturate-0 group-hover:saturate-100 transition-all duration-1000 rounded-sm relative">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {isVideo && (
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50">
                  <div class="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[15px] border-l-white" />
                </div>
              </div>
            )}
          </div>
        )}
        <h3 class={`font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-6 leading-tight group-hover:text-emerald-600 transition-colors ${isArticle ? 'text-3xl' : 'text-xl'}`}>
          {item.title}
        </h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-bold mb-8 opacity-90 line-clamp-3">
          {item.summary}
        </p>
      </div>

      <div class="mt-auto pt-8 border-t border-slate-50 dark:border-emerald-800/20 flex flex-col gap-6">
         <div class="flex justify-between items-center">
            <a
              href={item.href}
              target="_blank"
              class="text-emerald-900 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:text-lime-600 transition-colors group/link"
            >
              {item.type === "Article" ? "Explore the Full Article" : 
               item.type === "Document" || item.type === "Narrative" ? "Examine the Technical Document" :
               item.type === "Video" ? "Watch the Full Narrative" :
               "View the Original Insight"}
              <span class="inline-block ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
            <ARIASummarize
              title={item.title}
              summary={item.summary}
              content={item.extendedContent}
            />
         </div>
         <div class="flex justify-between items-center">
            <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium italic">
                {new Date(item.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
            {item.part && (
              <span class="bg-lime-400 text-emerald-950 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm">
                Part {item.part}
              </span>
            )}
         </div>
      </div>
    </div>
  );
}
