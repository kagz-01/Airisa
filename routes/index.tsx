import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import ServiceCard from "../components/ServiceCard.tsx";
import AIChatAssistant from "../islands/AIChatAssistant.tsx";

export default function Home() {
  const services = [
    {
      title: "Research",
      desc: "Feasibility & baseline studies, market research & surveys.",
      icon: "📑",
    },
    {
      title: "Project Management",
      desc:
        "Support from design through implementation for mobility & environment projects.",
      icon: "🧭",
    },
    {
      title: "MEAL",
      desc:
        "Monitoring, Evaluation, Accountability & Learning systems and delivery.",
      icon: "📈",
    },
    {
      title: "ESIA & Audits",
      desc:
        "Environmental and Social Impact Assessments (ESIA) & Environmental Audits (EA).",
      icon: "📝",
    },
    {
      title: "ESG Strategy",
      desc:
        "Materiality, governance, and investor-grade ESG strategy development.",
      icon: "🧩",
    },
    {
      title: "Gender & Inclusion",
      desc: "Advisory for gender-responsive and inclusive mobility planning.",
      icon: "♀️",
    },
    {
      title: "Stakeholder & Capacity",
      desc: "Stakeholder engagement and technical capacity building.",
      icon: "🤝",
    },
    {
      title: "Business Development",
      desc: "Bid development and consulting support for program delivery.",
      icon: "💼",
    },
  ];

  return (
    <>
      <Head>
        <title>Airisa Green — Consulting & Advisory Services</title>
        <meta
          name="description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta
          property="og:title"
          content="Airisa Green — Consulting & Advisory Services"
        />
        <meta
          property="og:description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Airisa Green — Consulting & Advisory Services"
        />
        <meta
          name="twitter:description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>
      <Hero />

      {/* Objectives Section */}
      <section class="py-16 bg-gradient-to-b from-emerald-50/60 to-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 animate-fade-in">
              Our Objectives
            </h2>
            <p
              class="mt-3 text-lg text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "60ms" }}
            >
              Three pillars guiding our work across mobility and environment.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:-translate-y-1 hover:shadow-md">
              <div class="text-sm font-semibold text-emerald-700">INSIGHT</div>
              <p class="mt-2 text-sm text-slate-600">
                Evidence generation and diagnostics to inform policy, program
                design, and investments.
              </p>
              <ul class="mt-4 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>Baseline studies & technical assessments</li>
                <li>Theory of Change development</li>
                <li>Gender-disaggregated transport data</li>
                <li>Best practice analysis</li>
                <li>Stakeholder mapping & engagement</li>
                <li>Transport pattern & trends analysis</li>
              </ul>
            </div>

            <div
              class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: "80ms" }}
            >
              <div class="text-sm font-semibold text-emerald-700">STRATEGY</div>
              <p class="mt-2 text-sm text-slate-600">
                Inclusive, implementable strategies across mobility, adaptation,
                circularity, and ESG.
              </p>
              <ul class="mt-4 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>Investment cases & feasibility studies</li>
                <li>Gender-responsive mobility frameworks</li>
                <li>Climate adaptation strategies</li>
                <li>Policy alignment & advocacy roadmaps</li>
                <li>Institutional strengthening & coordination</li>
                <li>Implementation blueprints with milestones</li>
              </ul>
            </div>

            <div
              class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up transition hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: "120ms" }}
            >
              <div class="text-sm font-semibold text-emerald-700">
                SUSTAINABILITY
              </div>
              <p class="mt-2 text-sm text-slate-600">
                Delivering measurable, lasting impact with robust evaluation and
                learning.
              </p>
              <ul class="mt-4 space-y-2 text-slate-700 text-sm list-disc list-inside">
                <li>ESIA frameworks & audits</li>
                <li>Monitoring, evaluation, and learning (MEL)</li>
                <li>Social inclusion metrics & tracking</li>
                <li>Performance monitoring tools</li>
                <li>Impact evaluation methodologies</li>
                <li>Community-centered adaptation strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 animate-fade-in">
              Consulting & Advisory Services
            </h2>
            <p
              class="mt-4 text-lg text-gray-600 animate-fade-in-up"
              style={{ animationDelay: "60ms" }}
            >
              Design, policy, finance, and safeguards support across mobility
              and environmental programs.
            </p>
            <p class="mt-3 text-sm">
              <a
                href="https://www.linkedin.com/company/airisa-green-consulting/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-green-600 hover:text-green-700 font-medium"
              >
                Follow Airisa on LinkedIn
              </a>
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, i) => (
              <div
                class="animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ServiceCard
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant + Programs Section */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Programs */}
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">Programs</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Community mobility education",
                    desc:
                      "Awareness campaigns for sustainable, inclusive transport choices.",
                  },
                  {
                    title: "Youth & women green careers",
                    desc: "Training pathways into e-mobility and climate jobs.",
                  },
                  {
                    title: "Grassroots pilots",
                    desc:
                      "Pilots improving safe, inclusive access to mobility.",
                  },
                  {
                    title: "Participatory research & co-design",
                    desc: "Workshops that localize solutions with communities.",
                  },
                  {
                    title: "Localized resilience tools",
                    desc: "Contextualizing climate tools for urban transport.",
                  },
                  {
                    title: "Policy advocacy coalitions",
                    desc: "Coalition-building for inclusive mobility policies.",
                  },
                ].map((p, i) => (
                  <div
                    class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in-up transition hover:-translate-y-1 hover:shadow-md"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div class="font-semibold text-gray-900">{p.title}</div>
                    <p class="text-gray-600 mt-2 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>

              <div class="mt-8">
                <a
                  href="/programs"
                  class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  Explore all programs →
                </a>
              </div>
            </div>

            {/* AI Assistant - Now properly positioned */}
            <div class="sticky top-24">
              <div class="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-1 shadow-xl">
                <div class="bg-white rounded-xl p-6">
                  <AIChatAssistant />
                </div>
              </div>
              <p class="text-center text-sm text-gray-500 mt-3">
                Ask ARIA about ESG, carbon markets, or book a consultation
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
