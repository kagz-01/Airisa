import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import ServiceCard from "../components/ServiceCard.tsx";
import AIChatAssistant from "../islands/AIChatAssistant.tsx";

export default function Home() {
  const services = [
    {
      title: "ESG Strategy & Reporting",
      desc:
        "Develop comprehensive ESG frameworks and prepare investor-ready sustainability reports aligned with global standards.",
      icon: "📊",
    },
    {
      title: "Carbon Project Development",
      desc:
        "End-to-end carbon credit project development, from feasibility assessment to verification and market placement.",
      icon: "🌍",
    },
    {
      title: "Sustainability Compliance",
      desc:
        "Navigate complex environmental regulations and ensure compliance with local and international standards.",
      icon: "⚖️",
    },
    {
      title: "Climate Risk Assessment",
      desc:
        "Identify and mitigate climate-related risks while capitalizing on opportunities in the green economy.",
      icon: "🔍",
    },
    {
      title: "Green Financing Advisory",
      desc:
        "Secure sustainable financing and grants for environmental projects and climate initiatives.",
      icon: "💸",
    },
    {
      title: "Capacity Building",
      desc:
        "Training programs and workshops on carbon markets, ESG, and sustainable business practices.",
      icon: "👥",
    },
  ];

  return (
    <>
      <Head>
        <title>Airisa Green — ESG & Carbon Markets</title>
        <meta
          name="description"
          content="Climate strategy, carbon project development, and ESG implementation across African markets."
        />
        <meta
          property="og:title"
          content="Airisa Green — ESG & Carbon Markets"
        />
        <meta
          property="og:description"
          content="Climate strategy, carbon project development, and ESG implementation across African markets."
        />
        <meta property="og:image" content="/images/AGC.png" />
        <meta
          name="twitter:title"
          content="Airisa Green — ESG & Carbon Markets"
        />
        <meta
          name="twitter:description"
          content="Climate strategy, carbon project development, and ESG implementation across African markets."
        />
        <meta name="twitter:image" content="/images/AGC.png" />
      </Head>
      <Hero />

      {/* Services Section */}
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900">
              Specialized Sustainability Services
            </h2>
            <p class="mt-4 text-lg text-gray-600">
              Tailored solutions for African businesses navigating the
              transition to sustainable operations
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
            {services.map((service) => (
              <ServiceCard
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant + Case Studies Section */}
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Case Studies */}
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-8">
                Proven Impact
              </h3>
              <div class="space-y-6">
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="font-semibold text-gray-900">
                      Carbon Project Success
                    </span>
                  </div>
                  <p class="text-gray-600">
                    Developed and verified carbon projects generating 50,000+
                    credits annually for agricultural clients in East Africa.
                  </p>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="font-semibold text-gray-900">
                      ESG Framework Implementation
                    </span>
                  </div>
                  <p class="text-gray-600">
                    Helped manufacturing companies achieve ESG compliance and
                    secure green financing totaling $2M+.
                  </p>
                </div>
              </div>

              <div class="mt-8">
                <a
                  href="/case-studies"
                  class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                >
                  View all case studies →
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
