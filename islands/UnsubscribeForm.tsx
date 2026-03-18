import { useEffect, useState } from "preact/hooks";

export default function UnsubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const url = new URL(globalThis.location.href);
      const emailParam = url.searchParams.get("email");
      if (emailParam) {
        setEmail(emailParam);
      }
    } catch (_e) {
      // Ignored
    }
  }, []);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusType(null);

    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "Unsubscription successful ✅");
        setStatusType("success");
        setEmail("");
      } else {
        setStatus(data.error || "Failed to unsubscribe ❌");
        setStatusType("error");
      }
    } catch (_err) {
      setStatus("Network error. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="max-w-md mx-auto">
      <form
        onSubmit={onSubmit}
        class="flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Your email address"
          required
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          disabled={loading}
          class="px-8 py-6 bg-slate-50 dark:bg-emerald-900/20 border border-slate-200 dark:border-emerald-800 text-emerald-950 dark:text-white font-medium focus:outline-none focus:border-emerald-500 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          class="px-10 py-6 bg-emerald-950 dark:bg-emerald-800 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-emerald-900 transition-all disabled:opacity-50"
        >
          {loading ? "Processing..." : "Unsubscribe"}
        </button>
      </form>

      {status && (
        <div
          class={`mt-8 text-sm font-black uppercase tracking-widest px-6 py-3 inline-block rounded-sm ${
            statusType === "success"
              ? "text-emerald-600 bg-emerald-600/10 border border-emerald-600/20"
              : "text-red-600 bg-red-600/10 border border-red-600/20"
          }`}
        >
          {status}
        </div>
      )}
    </div>
  );
}
