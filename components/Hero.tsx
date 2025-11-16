export default function Hero() {
  return (
    <section class="bg-gradient-to-br from-white via-green-50 to-emerald-100 py-16 md:py-24">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1">
          <div class="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            ESG & Carbon Markets Expert
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Driving Sustainable Growth in
            <span class="text-green-600">African Markets</span>
          </h1>
          <p class="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Expert ESG strategy, carbon project development, and sustainability
            consulting tailored for African businesses and organizations.
            Transform your environmental challenges into competitive advantages.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              class="px-8 py-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-lg text-center"
            >
              Start Your Sustainability Journey
            </a>
            <a
              href="/case-studies"
              class="px-8 py-4 rounded-lg border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition text-center"
            >
              View Success Stories
            </a>
            <a
              href="https://www.linkedin.com/company/airisa-green-consulting/"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 rounded-lg border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition text-center"
            >
              Follow on LinkedIn
            </a>
          </div>

          <div class="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Carbon Markets Specialist</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ESG Reporting</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-96">
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <img
              src="/images/evelyn.jpg"
              alt="Portrait of Evelyn Gathua"
              class="w-32 h-32 rounded-full object-cover mx-auto shadow-lg"
            />
            <div class="text-center mt-6">
              <div class="font-bold text-gray-900 text-lg">Evelyn Gathua</div>
              <div class="text-green-600 font-medium mt-1">
                Founder & Lead Consultant
              </div>
              <div class="text-gray-500 text-sm mt-2">
                Airisa Green Consulting
              </div>
            </div>
            <div class="mt-6 text-center">
              <a
                href="/ecard"
                class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                <span>📱 Save Contact</span>
              </a>
              <div class="mt-3">
                <a
                  href="http://linkedin.com/in/evelyn-gathua-a40887112"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <span>in Connect with Evelyn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
