import { useState } from "preact/hooks";

interface Props {
  title: string;
  summary: string;
  content?: string;
}

/**
 * ARIASummarize — a small island button that fires a custom event to open
 * the ARIA chat pre-loaded with a summarise request for the given article.
 * It dispatches a window event that AIChatAssistant.tsx listens for.
 */
export default function ARIASummarize({ title, summary, content }: Props) {
  const [fired, setFired] = useState(false);

  function triggerSummary() {
    const text = content
      ? `${title}\n\n${content}`
      : `${title}\n\n${summary}`;

    // Dispatch an event that AIChatAssistant can listen to
    const event = new CustomEvent("aria:summarize", {
      detail: {
        prompt: `Please give me a concise summary of this Airisa article:\n\n"${text}"\n\nHighlight the key insight, why it matters for African mobility or sustainability, and one thing the reader should take away.`,
      },
      bubbles: true,
    });
    globalThis.dispatchEvent(event);
    setFired(true);
    setTimeout(() => setFired(false), 3000);
  }

  return (
    <button
      type="button"
      onClick={triggerSummary}
      title="Ask ARIA to summarize this article"
      class={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all duration-300 ${
        fired
          ? "bg-emerald-600 text-white border-emerald-600"
          : "bg-white dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600"
      }`}
    >
      <span class="text-[11px]">🌿</span>
      {fired ? "Opening ARIA..." : "Ask ARIA"}
    </button>
  );
}
