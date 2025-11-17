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

      <h1 class="text-3xl font-bold">Consulting & Advisory Services</h1>
      <p class="mt-3 text-slate-600">
        Design, policy, finance, and safeguards support across mobility and
        environmental programs.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ServiceCard
          title="Research"
          desc="Feasibility & baseline studies, market research & surveys."
        />
        <ServiceCard
          title="Project Management"
          desc="Support from design through implementation for mobility & environment projects."
        />
        <ServiceCard
          title="MEAL"
          desc="Monitoring, Evaluation, Accountability & Learning systems and delivery."
        />
        <ServiceCard
          title="ESIA & Audits"
          desc="Environmental and Social Impact Assessments (ESIA) & Environmental Audits (EA)."
        />
        <ServiceCard
          title="ESG Strategy"
          desc="Materiality, governance, and investor-grade ESG strategy development."
        />
        <ServiceCard
          title="Gender & Inclusion"
          desc="Advisory for gender-responsive and inclusive mobility planning."
        />
        <ServiceCard
          title="Stakeholder & Capacity"
          desc="Stakeholder engagement and technical capacity building."
        />
        <ServiceCard
          title="Business Development"
          desc="Bid development and consulting support for program delivery."
        />
      </div>
    </div>
  );
}
