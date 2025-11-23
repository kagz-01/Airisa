import { useState } from "preact/hooks";

export interface Bio {
  name: string;
  title: string;
  email: string;
  image?: string;
  linkedin?: string;
  summary: string;
  highlights: string[];
}

interface TeamGridProps {
  team: Bio[];
}

export default function TeamGrid({ team }: TeamGridProps) {
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);

  const handleCardClick = (idx: number, e: Event) => {
    // Prevent triggering if clicking a link/button
    if ((e.target as HTMLElement).closest("a")) return;

    setFocusedIdx(focusedIdx === idx ? null : idx);
  };

  return (
    <>
      {/* Backdrop for focused state */}
      <div
        class={`fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          focusedIdx !== null
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setFocusedIdx(null)}
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 relative">
        {team.map((bio, idx) => {
          const isFocused = focusedIdx === idx;

          return (
            <div key={bio.name} class="relative">
              {/* Placeholder to hold space in grid when focused */}
              <div class={`invisible ${isFocused ? "block" : "hidden"}`}>
                {/* Render a copy just for sizing if needed, or just a div with height */}
                <div class="h-96 w-full"></div>
              </div>

              <div
                onClick={(e) => handleCardClick(idx, e)}
                class={`
                  bg-white rounded-xl p-6 border border-emerald-100
                  transition-all duration-500 ease-in-out cursor-pointer
                  ${
                  isFocused
                    ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-2xl shadow-2xl scale-100 max-h-[90vh] overflow-y-auto"
                    : "relative shadow-sm hover:shadow-md hover:-translate-y-1 scale-100 z-0 h-full"
                }
                `}
              >
                <div class="flex items-start justify-between gap-4">
                  <div class="flex gap-4">
                    {bio.image
                      ? (
                        <img
                          src={bio.image}
                          alt={bio.name}
                          class="w-20 h-20 rounded-full object-cover shadow"
                        />
                      )
                      : (
                        <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold">
                          {bio.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      )}
                    <div>
                      <h3 class="text-lg font-semibold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                        {bio.name}
                      </h3>
                      <p class="text-sm text-emerald-700 font-medium">
                        {bio.title}
                      </p>
                      <p class="text-xs text-slate-600 mt-1">{bio.email}</p>
                      <div class="mt-2 flex gap-3 text-xs">
                        {bio.linkedin && (
                          <a
                            href={bio.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-emerald-700 hover:text-emerald-800"
                          >
                            LinkedIn
                          </a>
                        )}
                        <a
                          href={`mailto:${bio.email}`}
                          class="text-emerald-700 hover:text-emerald-800"
                        >
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  class={`mt-4 text-slate-700 leading-relaxed ${
                    isFocused ? "text-base" : "text-sm"
                  }`}
                >
                  {bio.summary}
                </p>
                <ul class="mt-4 space-y-1 text-xs text-slate-600">
                  {bio.highlights.map((h) => (
                    <li class="flex items-start gap-2">
                      <span class="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div class="mt-5 flex gap-2">
                  <a
                    href={`/partner?topic=${encodeURIComponent(bio.name)}`}
                    class="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700"
                  >
                    Engage
                  </a>
                </div>

                {/* Close hint for focused state */}
                {isFocused && (
                  <div class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
