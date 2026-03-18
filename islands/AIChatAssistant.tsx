import { useEffect, useRef, useState } from "preact/hooks";

const DEFAULT_SUGGESTIONS = [
  "What is your vision?",
  "Tell me about Insight pillar",
  "List your services",
  "Programs overview",
  "Partner options",
];

const PAGE_CONFIGS: Record<string, { greeting: string; suggestions: string[] }> = {
  "/": {
    greeting: "👋 Hi! Discover how we transform mobility in Africa.",
    suggestions: ["What is your vision?", "How do you work?", "Tell me about ARIA"],
  },
  "/services": {
    greeting: "👋 Need help finding the right service? Ask me!",
    suggestions: ["What is your MEAL framework?", "ESIA capabilities", "Gender advisory"],
  },
  "/programs": {
    greeting: "👋 Curious about Mama Mwendo or Sauti za Barabarani?",
    suggestions: ["Tell me about Mama Mwendo", "What is SMLAP?", "Capacity building"],
  },
  "/team": {
    greeting: "👋 Want to know more about Evelyn or Anthony?",
    suggestions: ["Evelyn's background", "Anthony's experience", "Company history"],
  },
  "/partner": {
    greeting: "👋 Ready to co-design the future? I can answer partnership FAQs!",
    suggestions: ["How do I partner?", "What areas do you fund?", "Contact info"],
  },
  "/about": {
    greeting: "👋 Learn about our mission, vision, and core values.",
    suggestions: ["What are your values?", "Your mission?", "The Airisa Story"],
  },
};

// Simple Markdown Link Parser: converts [text](url) to HTML links
function parseMarkdownLinks(text: string) {
  // Regex looks for [Link Text](URL)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a
        href={match[2]}
        target={match[2].startsWith("/") ? "_self" : "_blank"}
        rel="noopener noreferrer"
        class="underline decoration-emerald-400 hover:text-emerald-200 transition-colors font-semibold"
      >
        {match[1]}
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    Array<{ from: "user" | "bot"; text: string }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic Context State
  const [greeting, setGreeting] = useState("👋 Hi! Curious? Ask ARIA!");
  const [_suggestions, setSuggestions] = useState(DEFAULT_SUGGESTIONS);

  useEffect(() => {
    // Determine context based on current path
    const path = globalThis.location?.pathname || "/";
    const config = PAGE_CONFIGS[path] || PAGE_CONFIGS["/"];
    
    if (config) {
      setGreeting(config.greeting);
      setSuggestions(config.suggestions);
    }
  }, []);

  // Typing effect for initial message
  const _triggerInitialGreeting = () => {
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ from: "bot", text: greeting + " I am ARIA, your Strategic Knowledge Engine. How can I assist you today?" }]);
        setIsTyping(false);
      }, 800);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowWelcome(true);
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // We'll let the Welcome Screen be the primary initial state.
      // If we want a greeting later, we can trigger it after interaction.
    }
  }, [isOpen]);

  // Listen for summarize requests from ARIASummarize island buttons
  useEffect(() => {
    const handleSummarize = async (e: Event) => {
      const custom = e as CustomEvent<{ prompt: string }>;
      const prompt = custom.detail?.prompt;
      if (!prompt) return;
      setIsOpen(true);
      setShowWelcome(false);
      setMessages((m) => [...m, { from: "user", text: "📄 Summarize this article for me" }]);
      setLoading(true);
      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });
        const data = await res.json();
        setMessages((m) => [...m, { from: "bot", text: data.reply ?? "Sorry, I couldn't summarize that." }]);
      } catch {
        setMessages((m) => [...m, { from: "bot", text: "Connection issue. Please try again." }]);
      } finally {
        setLoading(false);
      }
    };
    globalThis.addEventListener("aria:summarize", handleSummarize as EventListener);
    return () => globalThis.removeEventListener("aria:summarize", handleSummarize as EventListener);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  async function send(overrideInput?: string) {
    const textToSend = overrideInput || input;
    if (!textToSend) return;
    
    setShowWelcome(false);
    setMessages((m) => [...m, { from: "user", text: textToSend }]);
    if (!overrideInput) setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend }),
      });
      const data = await res.json();
      setMessages((
        m,
      ) => [...m, {
        from: "bot",
        text: data.reply ?? "Sorry, I couldn't answer that.",
      }]);
    } catch (err) {
      console.error(err);
      setMessages((
        m,
      ) => [...m, {
        from: "bot",
        text: "An error occurred while connecting to the assistant.",
      }]);
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) {
    return (
      <div class="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-2 group">
        {/* Curiosity Callout - Bounces to attract attention */}
        <div class="bg-white dark:bg-emerald-900 text-slate-800 dark:text-emerald-50 text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-emerald-100 dark:border-emerald-800 animate-bounce mb-1 mr-1 relative origin-bottom-right transition-colors">
          {greeting}
          <div class="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-emerald-900 border-b border-r border-emerald-100 dark:border-emerald-800 transform rotate-45">
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          class="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white pl-4 pr-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all transform hover:scale-105 ring-4 ring-white/30 backdrop-blur-sm"
        >
          <div class="relative flex items-center justify-center w-10 h-10 bg-white dark:bg-emerald-900/50 rounded-full shadow-inner transition-colors">
            {/* Animated Avatar */}
            <span class="text-2xl animate-[spin_3s_linear_infinite]">🌿</span>
            <span class="absolute -top-1 -right-1 text-lg animate-pulse">
              ✨
            </span>
          </div>
          <div class="flex flex-col items-start">
            <span class="font-bold text-sm tracking-wide">Chat with ARIA</span>
            <span class="text-[10px] text-emerald-100 font-medium uppercase tracking-widest">
              Knowledge Engine
            </span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div class="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-[90vw] md:w-96 bg-white dark:bg-emerald-950 rounded-2xl shadow-2xl border border-emerald-100 dark:border-emerald-800/50 flex flex-col max-h-[600px] animate-fade-in-up transition-colors overflow-hidden">
      {/* Header */}
      <div class="flex items-center justify-between p-4 border-b dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-900/40 transition-colors">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-white dark:bg-emerald-800 flex items-center justify-center text-lg shadow-sm">
            🌿
          </div>
          <div class="flex flex-col">
            <div class="text-xs font-black tracking-widest uppercase text-emerald-900 dark:text-emerald-50 flex items-center gap-1">
              ARIA 
              <span class="text-[8px] bg-emerald-600 text-white px-1.5 py-0.5 rounded tracking-normal">VERIFIED</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span class="text-[9px] font-bold text-emerald-600/70 dark:text-emerald-400/70 uppercase">System Online</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={clearChat}
              class="text-slate-400 hover:text-lime-600 transition-colors p-1"
              title="Clear Chat"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            class="text-slate-400 hover:text-emerald-600 transition-colors p-1"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      {/* Messages Area / Welcome Screen */}
      <div class="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-emerald-950/50 min-h-[350px] transition-colors relative">
        {showWelcome && messages.length === 0 && !loading && (
          <div class="absolute inset-0 z-10 p-6 flex flex-col items-center justify-center text-center animate-fade-in bg-slate-50 dark:bg-emerald-950">
             <div class="w-16 h-16 bg-white dark:bg-emerald-900 rounded-2xl shadow-xl flex items-center justify-center text-3xl mb-6 animate-bounce-slow">
               🌿
             </div>
             <h2 class="text-xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-2">
               Strategic Knowledge Engine
             </h2>
             <p class="text-xs text-slate-500 dark:text-emerald-100/60 font-medium leading-relaxed mb-8 max-w-[240px]">
               Leveraging field insights and frameworks to assist your journey across Africa's mobility landscape.
             </p>
             
             <div class="grid grid-cols-2 gap-3 w-full">
               {[
                 { label: "Summarize Page", icon: "📄", query: "Summarize this page for me." },
                 { label: "Our Vision", icon: "🧭", query: "What is Airisa's vision?" },
                 { label: "Programs", icon: "🌍", query: "Tell me about your impact programs." },
                 { label: "Services", icon: "⚡", query: "What consulting services do you offer?" }
               ].map((tile) => (
                 <button 
                   type="button"
                   onClick={() => send(tile.query)}
                   class="flex flex-col items-center gap-2 p-3 bg-white dark:bg-emerald-900 shadow-sm border border-emerald-100 dark:border-emerald-800 rounded-xl hover:border-emerald-400 dark:hover:border-emerald-600 transition-all hover:-translate-y-1 group"
                 >
                   <span class="text-xl group-hover:scale-110 transition-transform">{tile.icon}</span>
                   <span class="text-[9px] font-black uppercase tracking-widest text-emerald-900 dark:text-emerald-100">{tile.label}</span>
                 </button>
               ))}
             </div>
          </div>
        )}

        {messages.map((m, idx) => (
          <div
            key={idx}
            class={`flex ${
              m.from === "user" ? "justify-end" : "justify-start"
            } mt-4 animate-fade-in-up`}
          >
            <div
              class={`max-w-[85%] text-sm px-4 py-3 rounded-2xl transition-colors shadow-sm ${
                m.from === "user"
                  ? "bg-emerald-700 text-white rounded-tr-none border border-emerald-600"
                  : "bg-white dark:bg-emerald-900/60 text-slate-800 dark:text-emerald-50 border border-slate-100 dark:border-emerald-800 rounded-tl-none font-medium leading-relaxed"
              }`}
            >
              <div class="flex items-center gap-2 mb-1">
                 <span class="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">
                   {m.from === "user" ? "Client" : "ARIA Brief"}
                 </span>
              </div>
              {m.from === "bot" ? parseMarkdownLinks(m.text) : m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div class="flex justify-start mt-4 animate-fade-in">
             <div class="bg-white dark:bg-emerald-900/40 px-4 py-3 rounded-2xl rounded-tl-none border border-emerald-100 dark:border-emerald-800 shadow-sm flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
             </div>
          </div>
        )}
        {loading && (
          <div class="flex justify-start mt-4 animate-fade-in">
            <div class="bg-emerald-900 text-emerald-400 text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-lg border border-emerald-800 shadow-xl flex items-center gap-2">
              <span class="w-2 h-2 bg-lime-400 rounded-full animate-ping"></span>
              Analyzing Knowledge Graph...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div class="p-4 border-t dark:border-emerald-800/50 bg-white dark:bg-emerald-950 transition-colors">
        <div class="flex items-center gap-3 bg-slate-50 dark:bg-emerald-900/40 p-2 rounded-xl focus-within:ring-2 ring-emerald-500/30 transition-all border border-slate-100 dark:border-emerald-800">
          <input
            class="flex-1 bg-transparent border-none px-3 py-2 text-sm focus:outline-none text-slate-900 dark:text-emerald-50 placeholder-slate-400"
            value={input}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Query ARIA engine..."
          />
          <button
            type="button"
            class="w-10 h-10 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-all flex items-center justify-center disabled:opacity-50 shadow-lg active:scale-90"
            onClick={() => send()}
            disabled={loading}
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
