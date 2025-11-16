import { Head } from "$fresh/runtime.ts";
import ServiceCard from "../components/ServiceCard.tsx";

export default function Services() {
  return (
    <div class="container mx-auto px-6 py-12">
      <Head>
        <title>Services — ESG, Carbon, Compliance | Airisa Green</title>
        <meta
          name="description"
          content="ESG strategy & reporting, carbon project development, sustainability audits, and climate action planning."
        />
        <meta
          property="og:title"
          content="Services — ESG, Carbon, Compliance | Airisa Green"
        />
        <meta
          property="og:description"
          content="ESG strategy & reporting, carbon project development, sustainability audits, and climate action planning."
        />
        <meta property="og:image" content="/images/AGC.png" />
        <meta
          name="twitter:title"
          content="Services — ESG, Carbon, Compliance | Airisa Green"
        />
        <meta
          name="twitter:description"
          content="ESG strategy & reporting, carbon project development, sustainability audits, and climate action planning."
        />
        <meta name="twitter:image" content="/images/AGC.png" />
      </Head>
      <h1 class="text-3xl font-bold">Services</h1>
      <p class="mt-3 text-slate-600">
        Practical consulting services focused on sustainability, compliance, and
        operational efficiency.
      </p>
      <p class="mt-2 text-sm">
        <a
          href="https://www.linkedin.com/company/airisa-green-consulting/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-green-600 hover:text-green-700 font-medium"
        >
          Follow Airisa on LinkedIn
        </a>
        for service updates and insights.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ServiceCard
          title="Environmental Impact Assessment (EIA)"
          desc="Complete EIA services including stakeholder engagement and mitigation planning."
        />
        <ServiceCard
          title="ESG Strategy & Reporting"
          desc="ESG frameworks and investor-facing reports."
        />
        <ServiceCard
          title="Sustainability Audits"
          desc="Identify efficiency and waste reduction opportunities."
        />
        <ServiceCard
          title="Climate Action Planning"
          desc="Roadmaps for carbon reduction and adaptation."
        />
      </div>
    </div>
  );
}
