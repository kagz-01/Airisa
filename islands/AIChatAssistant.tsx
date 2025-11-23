import { useState } from "preact/hooks";

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
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    Array<{ from: "user" | "bot"; text: string }>
  >([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div class="w-full md:w-96 bg-white rounded-xl shadow p-4 border border-emerald-100">
      <div class="text-sm font-semibold mb-2 flex items-center gap-2">
        <span class="text-emerald-600">🌿</span>
        ARIA — Airisa Assistive
      </div>
      <div class="h-48 overflow-auto border rounded p-2 bg-slate-50">
        {messages.length === 0 && (
          <div class="text-xs text-slate-400">
            Ask about vision, pillars, services, programs (SMLAP, Mama Mwendo),
            team, or partnership.
          </div>
        )}
        {messages.map((m) => (
          <div
            class={m.from === "user"
              ? "text-right text-sm mt-2"
              : "text-left text-sm mt-2"}
          >
            <div
              class={m.from === "user"
                ? "inline-block bg-green-700 text-white px-3 py-2 rounded-lg"
                : "inline-block bg-white text-slate-800 px-3 py-2 rounded-lg border"}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div class="mt-2 flex flex-wrap gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            type="button"
            class="text-[11px] px-2 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700"
            onClick={() => {
              setInput(s);
            }}
          >
            {s}
          </button>
        ))}
      </div>
      <div class="mt-3 flex gap-2">
        <input
          class="flex-1 border rounded px-3 py-2"
          value={input}
          onInput={(e) => setInput((e.target as HTMLInputElement).value)}
          placeholder="Ask ARIA a question..."
        />
        <button
          type="button"
          class="px-3 py-2 rounded bg-green-700 text-white"
          onClick={send}
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
      <div class="mt-2 text-[10px] text-slate-500">
        ARIA answers from Airisa's live profile. For pricing or formal
        proposals, ask to connect with the team.
      </div>
    </div>
  );
}
