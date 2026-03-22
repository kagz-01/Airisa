import { useState } from "preact/hooks";
import { DynamicInsight } from "../utils/insights_kv.ts";

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
  const [visibleCount, setVisibleCount] = useState(6);

  const tabs: TabType[] = ["All", "Images", "Videos", "Articles", "Documents"];

  const filteredInsights = insights.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Images" && item.type === "Image") return true;
    if (activeTab === "Videos" && item.type === "Video") return true;
    if (activeTab === "Articles" && item.type === "Article") return true;
    if (activeTab === "Documents" && (item.type === "Document" || item.type === "Narrative")) return true;
    return false;
  }).sort((a, b) => b.timestamp - a.timestamp);

  const visibleInsights = filteredInsights.slice(0, visibleCount);

  // Reset count when tab changes
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  return (
    <div class="space-y-16">
      {/* Tab Navigation */}
      <div class="flex flex-wrap justify-center gap-4 border-b border-emerald-100 dark:border-emerald-800/50 pb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabChange(tab)}
            class={`px-8 py-3 text-[11px] font-black uppercase tracking-[0.4em] transition-all relative ${
              activeTab === tab
                ? "text-emerald-950 dark:text-lime-400 scale-110"
                : "text-emerald-900 dark:text-emerald-100/70 hover:text-emerald-950 dark:hover:text-white"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-lime-400 animate-slide-in-right" />
            )}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {visibleInsights.length > 0 ? (
          visibleInsights.map((item) => (
            <InsightCard key={item.id} item={item} activeTab={activeTab} />
          ))
        ) : (
          <div class="col-span-full py-32 text-center">
            <p class="text-slate-400 font-medium">No {activeTab.toLowerCase()} found in this cycle.</p>
          </div>
        )}
      </div>

      {/* Load More / Show Less Action */}
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
        {filteredInsights.length > visibleCount && (
          <button
            type="button"
            onClick={() => setVisibleCount(prev => prev + 6)}
            class="px-12 py-5 bg-emerald-950 text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-lime-400 hover:text-emerald-950 transition-all shadow-xl active:scale-95 group"
          >
            Discover More Insights
            <span class="inline-block ml-3 group-hover:translate-y-1 transition-transform">↓</span>
          </button>
        )}
        
        {visibleCount > 6 && (
          <button
            type="button"
            onClick={() => setVisibleCount(6)}
            class="px-12 py-5 border-2 border-emerald-950 dark:border-emerald-400/30 text-emerald-950 dark:text-emerald-400 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-emerald-950 hover:text-white transition-all active:scale-95 group"
          >
            Show Less
            <span class="inline-block ml-3 group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
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
    <div class="group bg-white/70 dark:bg-emerald-950/40 border border-emerald-100/50 dark:border-emerald-800/40 p-8 flex flex-col h-full hover:shadow-[0_20px_60px_-15px_rgba(52,211,153,0.1)] transition-all duration-700 hover:-translate-y-1 hover:border-lime-400/40 text-left relative overflow-hidden backdrop-blur-sm">
      {/* Subtle Gradient Overlay - pointer-events-none to prevent blocking clicks */}
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Dynamic Background Glow on Hover - pointer-events-none to prevent blocking clicks */}
      <div class="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-lg blur opacity-0 group-hover:opacity-5 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>
      
      {isDocument && (
        <div class="absolute top-0 right-0 w-16 h-16 bg-emerald-50 dark:bg-emerald-400/10 flex items-center justify-center -rotate-45 translate-x-8 -translate-y-8 z-20 pointer-events-none">
           <span class="text-[10px] font-black text-emerald-600 dark:text-lime-300 rotate-45 uppercase tracking-widest">Doc</span>
        </div>
      )}

      <div class="flex justify-between items-start gap-4 mb-8 relative z-10">
        <div class="flex items-center gap-4">
          {activeTab === "All" && <ContentBadge type={item.type} />}
        </div>
      </div>

      <div class="flex-1 relative z-10">
        {item.image && (
          <div class={`aspect-video overflow-hidden mb-8 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 rounded-sm relative ${isDocument ? 'shadow-[10px_10px_20px_-5px_rgba(0,0,0,0.3)] border-l-4 border-emerald-900/20' : ''}`}>
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {isVideo && (
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all pointer-events-none">
                <div class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50">
                  <div class="ml-1 w-0 h-0 border-y-[10px] border-y-transparent border-l-[15px] border-l-white" />
                </div>
              </div>
            )}
            {isDocument && (
               <div class="absolute bottom-4 right-4 w-10 h-10 bg-emerald-950/80 backdrop-blur-sm flex items-center justify-center rounded-sm border border-emerald-400/30">
                  <svg class="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
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
         {item.fileUrl && (
            <a
              href={item.fileUrl}
              download
              class="w-full py-4 bg-lime-400 text-emerald-950 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-950 hover:text-white transition-all shadow-lg active:scale-95"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Technical PDF
            </a>
         )}
         <div class="flex justify-between items-center">
            <a
              href={item.href}
              target="_blank"
              class="text-emerald-900 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest hover:text-lime-600 transition-colors group/link"
            >
              {item.type === "Article" ? "Explore the Full Article" : 
               item.type === "Document" || item.type === "Narrative" ? "Examine on LinkedIn" :
               item.type === "Video" ? "Watch the Full Narrative" :
               "View the Original Insight"}
              <span class="inline-block ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
            </a>
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
