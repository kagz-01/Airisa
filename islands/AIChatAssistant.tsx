import { useEffect, useRef, useState } from "preact/hooks";

const SUGGESTIONS = [
  "What is your vision?",
  "Tell me about Insight pillar",
  "List your services",
  "Programs overview",
  "Tell me about Mama Mwendo",
  "Team Evelyn",
  "Partner options",
];

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    Array<{ from: "user" | "bot"; text: string }>
  >([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        class="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:bg-emerald-800 transition-all transform hover:scale-105"
      >
        <span class="text-xl">🌿</span>
        <span class="font-medium">Chat with Airisa</span>
      </button>
    );
  }

  return (
    <div class="fixed bottom-6 right-6 z-50 w-[90vw] md:w-80 bg-white rounded-xl shadow-2xl border border-emerald-100 flex flex-col max-h-[500px]">
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
              {m.text}
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
          {SUGGESTIONS.map((s) => (
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
