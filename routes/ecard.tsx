import { Head } from "$fresh/runtime.ts";

export default function ECard() {
  const vCardUrl = "/api/vcard";
  const smartCardUrl = "https://linko.page/t5t29fmalivk";
  const qrSvgUrl = `/api/qr?size=200&data=${encodeURIComponent(smartCardUrl)}`;
  const qrOgUrl = `/api/qr?size=1200&data=${encodeURIComponent(smartCardUrl)}`;

  return (
    <>
      <Head>
        <title>Digital Business Card — Airisa Green</title>
        <meta
          name="description"
          content="Scan to view Evelyn’s smart card, save contact, or get in touch."
        />
        <meta property="og:title" content="Digital Business Card — Airisa Green" />
        <meta
          property="og:description"
          content="Scan to view Evelyn’s smart card, save contact, or get in touch."
        />
        <meta property="og:image" content={qrOgUrl} />
        <meta name="twitter:image" content={qrOgUrl} />
      </Head>

      <div class="container mx-auto px-4 py-12 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-green-200">
          <div class="text-center">
            <img
              src="/images/evelyn.jpg"
              alt="Portrait of Evelyn Gathua"
              class="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
            />

            <h2 class="mt-6 text-2xl font-bold text-gray-900">Evelyn Gathua</h2>
            <div class="text-green-600 font-semibold mt-2">
              Founder & Sustainability Consultant
            </div>
            <div class="text-gray-500 text-sm mt-1">Airisa Green Consulting</div>

            <div class="mt-6 bg-gray-50 rounded-lg p-4">
              <div class="text-center mb-4">
                <div class="relative inline-block">
                  <img
                    src={qrSvgUrl}
                    alt="QR code linking to Evelyn’s smart card"
                    class="mx-auto border rounded-lg"
                  />
                  <img
                    src="/images/AGC.png"
                    alt="Airisa logo"
                    class="w-10 h-10 rounded bg-white p-1 shadow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <p class="text-xs text-gray-500 mt-2">Scan to open smart card</p>
              </div>

              <div class="grid grid-cols-2 gap-2 text-sm mt-4">
                <a
                  href="tel:+254723227150"
                  class="flex items-center justify-center gap-2 rounded-md bg-white border border-green-200 px-3 py-2 text-green-700 hover:bg-green-50"
                  aria-label="Call Evelyn"
                >
                  📞 Call
                </a>
                <a
                  href="https://wa.me/254723227150"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 rounded-md bg-white border border-green-200 px-3 py-2 text-green-700 hover:bg-green-50"
                  aria-label="WhatsApp Evelyn"
                >
                  💬 WhatsApp
                </a>
                <a
                  href="mailto:e.gathua@airisagreenconsulting.com"
                  class="flex items-center justify-center gap-2 rounded-md bg-white border border-green-200 px-3 py-2 text-green-700 hover:bg-green-50 col-span-2"
                >
                  📧 e.gathua@airisagreenconsulting.com
                </a>
                <a
                  href="https://www.linkedin.com/in/evelyn-gathua-a40887112"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 rounded-md bg-white border border-green-200 px-3 py-2 text-green-700 hover:bg-green-50"
                >
                  💼 Connect on LinkedIn
                </a>
                <a
                  href="https://www.linkedin.com/company/airisa-green-consulting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 rounded-md bg-white border border-green-200 px-3 py-2 text-green-700 hover:bg-green-50"
                >
                  🗞️ Follow Airisa on LinkedIn
                </a>
                <a
                  href={smartCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 rounded-md bg-green-600 text-white px-3 py-2 hover:bg-green-700 col-span-2"
                >
                  🔗 Open Smart Card
                </a>
              </div>
            </div>

            <div class="mt-6 flex gap-3 justify-center">
              <a
                href={vCardUrl}
                class="px-6 py-3 rounded-lg border border-green-600 text-green-600 hover:bg-green-50 font-medium transition flex items-center gap-2"
                download="evelyn-gathua.vcf"
              >
                📥 Download vCard
              </a>
              <a
                href="/contact"
                class="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium transition"
              >
                Book Consultation
              </a>
            </div>
          </div>

          <div class="mt-4 text-xs text-gray-500 text-center">
            <div>Nairobi, Kenya</div>
            <a
              href="https://airisagreenconsulting.com"
              class="underline hover:text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              airisagreenconsulting.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
