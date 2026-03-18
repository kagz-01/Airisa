import { Head } from "$fresh/runtime.ts";
import UnsubscribeForm from "../islands/UnsubscribeForm.tsx";

export default function Unsubscribe() {
  return (
    <div class="bg-white dark:bg-emerald-950 min-h-[70vh] flex items-center">
      <Head>
        <title>Unsubscribe | Airisa Green Consulting</title>
      </Head>

      <div class="container mx-auto px-6 max-w-2xl text-center">
        <div class="inline-block px-4 py-1 border border-emerald-600 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
          Manage Subscription
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-emerald-950 dark:text-emerald-50 tracking-tighter mb-8 leading-none">
          Leave the <br />
          <span class="text-emerald-600 italic">Protocol.</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 font-bold text-lg mb-12">
          We're sorry to see you go. Enter your email address below to
          unsubscribe from our policy briefings.
        </p>

        <UnsubscribeForm />

        <div class="mt-16">
          <a
            href="/insights"
            class="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest hover:translate-x-2 inline-block transition-transform"
          >
            ← Back to Insights
          </a>
        </div>
      </div>
    </div>
  );
}
