import { Head } from "$fresh/runtime.ts";
import TeamGrid, { Bio } from "../islands/TeamGrid.tsx";

const team: Bio[] = [
  {
    name: "Evelyn Gathua",
    title: "Founder & Managing Director",
    email: "e.gathua@airisagreenconsulting.com",
    image: "/images/evelyn.png",
    linkedin: "https://linkedin.com/in/evelyn-gathua-a40887112",
    summary:
      "Environmental and sustainable mobility professional shaping inclusive, low‑carbon transport systems through research excellence, policy innovation, and strategic program delivery.",
    highlights: [
      "Lead consultant: Drive Electric Study (WRI)",
      "Methodology development for EV readiness & digitization (UNEP)",
      "Member: KEBS Electric Mobility Committee (TC 199)",
      "Licensed NEMA Associate Expert",
      "Speaker: Women & Transport Conference; GrowUp Demo Day",
      "Collaborations: GIZ, Siemens Stiftung, Greenpeace Africa",
    ],
  },
  {
    name: "Anthony Ndolo",
    title: "Co‑founder & Director of Strategy",
    email: "bondolo90@gmail.com",
    image: "/images/antony.png",
    linkedin: "",
    summary:
      "Sustainable mobility innovator leveraging data, technology, and partnership structuring to accelerate inclusive logistics and transport transformation across emerging markets.",
    highlights: [
      "Founder & former CEO: SMATBEBA (>$100k ARR; 10k+ jobs)",
      "Westerwelle Foundation Fellow (2022)",
      "Africa Mobility Initiative grant winner ($25k)",
      "Delegate: Bits & Pretzels Greentech Africa Mobility",
      "Panelist: MIT Africa Innovate Conference",
      "Digital Africa 1000 Winner (Africa‑France Summit)",
    ],
  },
];

export default function Team() {
  return (
    <div class="container mx-auto px-6 py-12">
      <Head>
        <title>Our Team | Airisa Green Consulting</title>
        <meta
          name="description"
          content="Meet the leadership team driving inclusive, sustainable mobility and climate action across Africa."
        />
        <meta
          property="og:title"
          content="Our Team | Airisa Green Consulting"
        />
        <meta
          property="og:description"
          content="Leadership advancing evidence, strategy, and sustainability in African mobility."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Our Team | Airisa Green Consulting"
        />
        <meta
          name="twitter:description"
          content="Leadership advancing evidence, strategy, and sustainability in African mobility."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold">Leadership & Impact</h1>
        <p class="mt-4 text-slate-600 leading-relaxed">
          Our founders bring complementary expertise spanning research
          diagnostics, inclusive strategy formation, sustainability integration
          and technology‑enabled delivery. Together they steward a hybrid model
          professional consulting plus impact programs ensuring insights
          translate into adaptive implementation and measurable change.
        </p>
        <div class="mt-4 inline-flex gap-2 text-xs font-semibold">
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Insight
          </span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Strategy
          </span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
            Sustainability
          </span>
        </div>
      </div>

      <TeamGrid team={team} />

      <div class="mt-14 bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="text-sm text-slate-700">
          Interested in collaborating or exploring a program opportunity? Start
          a conversation with our team.
        </div>
        <div class="flex gap-3">
          <a
            href="/programs"
            class="px-4 py-2 rounded-md bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-100 text-sm font-medium"
          >
            View Programs
          </a>
          <a
            href="/partner"
            class="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
}
