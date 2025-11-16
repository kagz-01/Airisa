import { useState, useEffect } from "preact/hooks";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusVisible, setStatusVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusVisible(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website: "" }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus(data?.message ?? "Message sent ✅");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setStatusVisible(true);
      } else {
        setStatus(data?.error ?? "Failed to send message ❌");
        setStatusVisible(true);
      }
    } catch (_err) {
      setStatus("Network error. Please try again.");
      setStatusVisible(true);
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss + fade-out status after visibility
  useEffect(() => {
    if (!statusVisible || !status) return;
    const hideTimer = setTimeout(() => setStatusVisible(false), 3500);
    const clearTimer = setTimeout(() => setStatus(null), 4200);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [statusVisible, status]);

  return (
    <form onSubmit={onSubmit} class="grid gap-4 max-w-xl">
      <div>
        <label class="block text-sm font-medium text-slate-700">Name</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="text"
          value={name}
          onInput={(e) => setName((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Email</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="email"
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Company (optional)</label>
        <input
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          type="text"
          value={company}
          onInput={(e) => setCompany((e.target as HTMLInputElement).value)}
          placeholder="Your organization"
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          class="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={5}
          value={message}
          onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          required
        />
      </div>
      <div class="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          class="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Sending…" : "Send Message"}
        </button>
        {status && (
          <p
            role="status"
            aria-live="polite"
            class={`text-sm text-slate-600 transition-opacity duration-500 ${statusVisible ? "opacity-100" : "opacity-0"}`}
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
