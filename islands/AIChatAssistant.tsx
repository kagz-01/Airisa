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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Dynamic Context State
  const [greeting, setGreeting] = useState("👋 Hi! Curious? Ask ARIA!");
  const [suggestions, setSuggestions] = useState(DEFAULT_SUGGESTIONS);

  useEffect(() => {
    // Determine context based on current path
    const path = globalThis.location?.pathname || "/";
    const config = PAGE_CONFIGS[path] || PAGE_CONFIGS["/"];
    
    if (config) {
      setGreeting(config.greeting);
      setSuggestions(config.suggestions);
    }
  }, []);

  // Listen for summarize requests from ARIASummarize island buttons
  useEffect(() => {
    const handleSummarize = async (e: Event) => {
      const custom = e as CustomEvent<{ prompt: string }>;
      const prompt = custom.detail?.prompt;
      if (!prompt) return;
      setIsOpen(true);
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
  }, [messages, isOpen]);

  async function send() {
    if (!input) return;
    const userMsg = input;
    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg }),
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
        <div class="bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-emerald-100 animate-bounce mb-1 mr-1 relative origin-bottom-right">
          {greeting}
          <div class="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-emerald-100 transform rotate-45">
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          class="flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white pl-4 pr-6 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all transform hover:scale-105 ring-4 ring-white/30 backdrop-blur-sm"
        >
          <div class="relative flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-inner">
            {/* Animated Avatar */}
            <span class="text-2xl animate-[spin_3s_linear_infinite]">🌿</span>
            <span class="absolute -top-1 -right-1 text-lg animate-pulse">
              ✨
            </span>
          </div>
          <div class="flex flex-col items-start">
            <span class="font-bold text-sm tracking-wide">Chat with ARIA</span>
            <span class="text-[10px] text-emerald-100 font-medium">
              Your AI Assistant
            </span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div class="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-[90vw] md:w-80 bg-white rounded-xl shadow-2xl border border-emerald-100 flex flex-col max-h-[500px] animate-fade-in-up">
      {/* Header */}
      <div class="flex items-center justify-between p-3 border-b bg-emerald-50 rounded-t-xl">
        <div class="text-sm font-semibold flex items-center gap-2 text-emerald-900">
          <span class="text-lg">🌿</span>
          ARIA — Airisa Assistive
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          class="text-slate-500 hover:text-slate-700 p-1"
        >
          ✕
        </button>
      </div>

      {/* Messages Area */}
      <div class="flex-1 overflow-y-auto p-3 bg-slate-50 min-h-[250px]">
        {messages.length === 0 && (
          <div class="text-xs text-slate-400 text-center mt-4">
            <p>👋 Hi! I'm ARIA.</p>
            <p class="mt-1">
              Ask me about Airisa's vision, pillars, services, or programs like
              Mama Mwendo.
            </p>
          </div>
        )}
        {messages.map((m, idx) => (
          <div
            key={idx}
            class={`flex ${
              m.from === "user" ? "justify-end" : "justify-start"
            } mt-2`}
          >
            <div
              class={`max-w-[85%] text-sm px-3 py-2 rounded-lg ${
                m.from === "user"
                  ? "bg-emerald-700 text-white rounded-br-none"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm"
              }`}
            >
              {m.from === "bot" ? parseMarkdownLinks(m.text) : m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div class="flex justify-start mt-2">
            <div class="bg-white text-slate-500 text-xs px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions & Input */}
      <div class="p-3 border-t bg-white rounded-b-xl">
        <div class="flex overflow-x-auto gap-2 mb-2 pb-1 no-scrollbar">
          {suggestions.map((s) => (
            <button
              type="button"
              class="whitespace-nowrap text-[10px] px-2 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700 transition-colors"
              onClick={() => setInput(s)}
            >
              {s}
            </button>
          ))}
        </div>
        <div class="flex gap-2">
          <input
            class="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
            value={input}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask a question..."
          />
          <button
            type="button"
            class="px-3 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors disabled:opacity-50"
            onClick={send}
            disabled={loading}
          >
            ➤
          </button>
        </div>
        <div class="mt-2 text-[9px] text-slate-400 text-center">
          AI can make mistakes. Verify important info.
        </div>
      </div>
    </div>
  );
}
