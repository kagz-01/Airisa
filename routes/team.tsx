import { Head } from "$fresh/runtime.ts";

const team = [
  {
    name: "Evelyn Gathua",
    role: "Founder & Sustainability Consultant",
    email: "e.gathua@airisagreenconsulting.com",
    image: "/images/evelyn.png",
    linkedin: "https://linkedin.com/in/evelyn-gathua-a40887112",
  },
  {
    name: "Anthony Ndolo",
    role: "Programs & Partnerships",
    email: "a.ndolo@airisagreenconsulting.com",
    image: "/images/antony.png",
    linkedin: "",
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team — Airisa Green</title>
        <meta
          name="description"
          content="Meet the leadership team driving mobility and environmental sustainability at Airisa Green."
        />
      </Head>
      <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto">
            <h1 class="text-3xl font-bold text-gray-900">Our Team</h1>
            <p class="mt-3 text-slate-600">
              Transforming mobility and environmental sustainability in Africa
              through research, inclusive design, and impactful partnerships.
            </p>
          </div>

          <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div class="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 animate-fade-in-up">
                <div class="flex items-center gap-5">
                  {m.image
                    ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        class="w-20 h-20 rounded-full object-cover shadow"
                      />
                    )
                    : (
                      <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                    )}
                  <div>
                    <div class="text-lg font-semibold text-gray-900">
                      {m.name}
                    </div>
                    <div class="text-emerald-700 font-medium">{m.role}</div>
                    <div class="text-sm text-slate-600 mt-1">{m.email}</div>
                    <div class="mt-2 flex gap-3 text-sm">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-emerald-700 hover:text-emerald-800"
                        >
                          LinkedIn
                        </a>
                      )}
                      <a
                        href={`mailto:${m.email}`}
                        class="text-emerald-700 hover:text-emerald-800"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
