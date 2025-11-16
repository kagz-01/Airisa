import { Head } from "$fresh/runtime.ts";

export default function About() {
  return (
    <div class="container mx-auto px-6 py-12">
      <Head>
        <title>About — Evelyn Gathua | Airisa Green</title>
        <meta
          name="description"
          content="Founder of Airisa Green Consulting. EIA, ESG reporting, sustainability audits, and climate advisory."
        />
        <meta
          property="og:title"
          content="About — Evelyn Gathua | Airisa Green"
        />
        <meta
          property="og:description"
          content="Meet Evelyn Gathua, founder of Airisa Green Consulting, leading ESG and sustainability initiatives across Africa."
        />
        <meta property="og:image" content="/images/evelyn.jpg" />
        <meta
          name="twitter:title"
          content="About — Evelyn Gathua | Airisa Green"
        />
        <meta
          name="twitter:description"
          content="Meet Evelyn Gathua, founder of Airisa Green Consulting, leading ESG and sustainability initiatives across Africa."
        />
        <meta name="twitter:image" content="/images/evelyn.jpg" />
      </Head>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2">
          <h1 class="text-3xl font-bold">About Evelyn Gathua</h1>
          <p class="mt-4 text-slate-600">
            Evelyn is an environmental consultant with 10+ years of experience
            helping organisations integrate sustainability into their
            operations. She specialises in EIA, ESG reporting, and
            sustainability audits.
          </p>

          <h2 class="mt-8 text-xl font-semibold">Mission & Vision</h2>
          <p class="mt-2 text-slate-600">
            To deliver innovative and actionable environmental solutions that
            support sustainable business growth across East Africa.
          </p>

          <h2 class="mt-8 text-xl font-semibold">Impact</h2>
          <ul class="mt-2 list-disc ml-6 text-slate-600">
            <li>60+ clients served</li>
            <li>200+ sustainability reports completed</li>
            <li>18 counties engaged in training & advisory</li>
          </ul>
        </div>

        <aside class="bg-white rounded-lg p-6 shadow">
          <img
            src="/images/evelyn.jpg"
            alt="Evelyn Gathua"
            class="w-32 h-32 rounded-full object-cover mx-auto"
          />
          <div class="text-center mt-4">
            <div class="font-medium">Evelyn Gathua</div>
            <div class="text-sm text-slate-500">
              Founder — Airisa Green Consulting
            </div>
          </div>

          <div class="mt-6">
            <a
              href="/contact"
              class="block text-center px-4 py-2 rounded bg-green-700 text-white"
            >
              Book a Consultation
            </a>
            <a
              href="https://www.linkedin.com/company/airisa-green-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center px-4 py-2 rounded border border-green-700 text-green-700 mt-3"
            >
              Company LinkedIn
            </a>
            <a
              href="http://linkedin.com/in/evelyn-gathua-a40887112"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center px-4 py-2 rounded border border-slate-300 text-slate-700 mt-2"
            >
              Connect with Evelyn
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
