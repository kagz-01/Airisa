import { useState } from "preact/hooks";

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
    <div class="w-full md:w-96 bg-white rounded-lg shadow p-4">
      <div class="text-sm font-semibold mb-2">
        ARIA — Sustainability Assistant
      </div>
      <div class="h-48 overflow-auto border rounded p-2 bg-slate-50">
        {messages.length === 0 && (
          <div class="text-xs text-slate-400">
            Ask a question about services, sustainability, or book a
            consultation.
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
    </div>
  );
}
