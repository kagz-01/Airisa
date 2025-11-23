import { Head } from "$fresh/runtime.ts";
import ServiceCard from "../components/ServiceCard.tsx";

export default function Services() {
  return (
    <div class="container mx-auto px-6 py-12">
      <Head>
        <title>Services — Consulting & Advisory | Airisa Green</title>
        <meta
          name="description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta
          property="og:title"
          content="Services — Consulting & Advisory | Airisa Green"
        />
        <meta
          property="og:description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta property="og:image" content="/images/agc-logo.png" />
        <meta
          name="twitter:title"
          content="Services — Consulting & Advisory | Airisa Green"
        />
        <meta
          name="twitter:description"
          content="Consulting & Advisory Services — Design, policy, finance, and safeguards support across mobility and environmental programs."
        />
        <meta name="twitter:image" content="/images/agc-logo.png" />
      </Head>

      <div class="max-w-3xl">
        <h1 class="text-3xl font-bold">Consulting & Advisory Services</h1>
        <p class="mt-3 text-slate-600 leading-relaxed">
          Design, policy, finance, and safeguards support across mobility and environmental programs. We combine evidence generation, inclusive strategy, and sustainability integration to move initiatives from concept to measurable impact.
        </p>
        <div class="mt-4 inline-flex gap-2 text-xs font-semibold">
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">Insight</span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">Strategy</span>
          <span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">Sustainability</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ServiceCard
          title="Research"
          desc="Baseline & feasibility studies, market surveys, diagnostics, and best practice analysis."
        />
        <ServiceCard
          title="Project Management"
          desc="End-to-end delivery oversight from design to implementation with quality and safeguards."
        />
        <ServiceCard
          title="MEAL Systems"
          desc="Monitoring, Evaluation, Accountability & Learning frameworks and tool deployment."
        />
        <ServiceCard
          title="ESIA & Audits"
          desc="Environmental & Social Impact Assessments and Environmental Audits aligned to regulations."
        />
        <ServiceCard
          title="ESG Strategy Development"
          desc="Materiality, governance alignment, KPI definition, and investor-grade reporting support."
        />
        <ServiceCard
          title="Gender & Inclusion Advisory"
          desc="Embedding gender-responsive and inclusive approaches in mobility and climate programs."
        />
        <ServiceCard
          title="Stakeholder Engagement & Capacity"
          desc="Coordinated stakeholder processes and technical capacity building for sustainable adoption."
        />
        <ServiceCard
          title="Business Development & Consulting"
          desc="Bid support, partnership structuring, and resource mobilization for viable program scaling."
        />
        <ServiceCard
          title="Implementation Blueprints"
          desc="Practical rollout plans with milestones, risk tracking, and sustainability integration." />
      </div>

      <div class="mt-12 bg-emerald-50 border border-emerald-100 rounded-xl p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div class="text-sm text-slate-700">
          Looking to co-create a mobility or climate initiative? Explore our programs or partner directly.
        </div>
        <div class="flex gap-3">
          <a href="/programs" class="px-4 py-2 rounded-md bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-100 text-sm font-medium">View Programs</a>
          <a href="/partner" class="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium">Partner With Us</a>
        </div>
      </div>
    </div>
  );
}
