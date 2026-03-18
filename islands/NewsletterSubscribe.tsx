import { useEffect, useState } from "preact/hooks";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusType(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "Subscription successful ✅");
        setStatusType("success");
        setEmail("");
      } else {
        setStatus(data.error || "Failed to subscribe ❌");
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
    <section class={`py-24 md:py-32 bg-emerald-950 overflow-hidden relative transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-block px-4 py-1 border border-lime-400 text-lime-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
          Stay Informed
        </div>
        <h3 class="text-4xl md:text-8xl font-black text-white tracking-tighter mb-16 leading-none">
          Join the Next <br />
          <span class="text-lime-400 italic">Policy Briefing.</span>
        </h3>
        <form
          onSubmit={onSubmit}
          class="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Professional email address"
            required
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            disabled={loading}
            class="px-8 py-6 bg-white/5 border border-white/20 text-white font-medium hover:border-white/40 focus:bg-white/10 w-full focus:outline-none focus:border-lime-400 transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            class="px-10 py-6 bg-lime-400 text-emerald-950 font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:scale-105 active:scale-95 transition-all w-full md:w-auto shrink-0 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </form>
        {status && (
          <div
            class={`mt-8 text-sm font-black uppercase tracking-widest animate-bounce px-6 py-3 inline-block rounded-sm ${
              statusType === "success"
                ? "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20"
                : "text-red-400 bg-red-400/10 border border-red-400/20"
            }`}
          >
            {status}
            {statusType === "success" && (
              <p class="mt-2 text-[10px] opacity-70 normal-case tracking-normal">
                You can unsubscribe at any time by visiting /unsubscribe
              </p>
            )}
          </div>
        )}
        <div class="mt-8">
          <a
            href="/unsubscribe"
            class="text-[9px] font-black text-emerald-400/40 uppercase tracking-[0.2em] hover:text-lime-400 transition-colors"
          >
            Manage Subscription
          </a>
        </div>
        <p class="mt-12 text-emerald-400/50 text-[9px] font-black uppercase tracking-widest">
          Rigorous Insights. Zero Spam.
        </p>
      </div>
    </section>
  );
}
