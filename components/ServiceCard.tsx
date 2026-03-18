interface ServiceCardProps {
  title: string;
  desc: string;
  image?: string;
  icon?: string;
  animationEffect?: "zoom-in" | "zoom-out" | "pan" | "blur";
}

export default function ServiceCard(props: ServiceCardProps) {
  const getAnimationClass = () => {
    switch (props.animationEffect) {
      case "zoom-out":
        return "scale-110 group-hover:scale-100";
      case "pan":
        return "scale-110 group-hover:translate-x-4";
      case "blur":
        return "blur-[2px] scale-105 group-hover:blur-none group-hover:scale-100";
      case "zoom-in":
      default:
        return "group-hover:scale-110";
    }
  };

  return (
    <div class="group border border-emerald-100/50 dark:border-emerald-800/40 rounded-tr-[40px] rounded-bl-[40px] rounded-tl-xl rounded-br-xl overflow-hidden bg-white dark:bg-emerald-900/10 hover:shadow-[0_20px_50px_rgba(5,150,105,0.15)] dark:hover:shadow-emerald-900/20 transition-all duration-500 hover:border-emerald-200/60 dark:hover:border-emerald-700/50 flex flex-col h-full relative">
      {/* Decorative Fragment */}
      <div class="absolute -top-4 -right-4 w-12 h-12 bg-lime-400/10 rounded-full blur-2xl group-hover:bg-lime-400/20 transition-all duration-500" />

      {props.image
        ? (
          <div class="h-56 overflow-hidden relative">
            <img
              src={props.image}
              alt={props.title}
              class={`w-full h-full object-cover transition-all duration-[1500ms] ease-out ${getAnimationClass()}`}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-900/20 to-transparent opacity-90" />
            <div class="absolute bottom-4 left-6">
              <div class="w-8 h-1 bg-lime-400 mb-2 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
              <div class="text-white font-bold text-xl drop-shadow-md">
                {props.title}
              </div>
            </div>
          </div>
        )
        : (
          <div class="p-6 pb-0">
            <div class="w-14 h-14 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:bg-lime-400 dark:group-hover:bg-lime-500 group-hover:text-emerald-950 transition-all duration-500 transform group-hover:rotate-6">
              <span class="text-2xl">{props.icon || "🌱"}</span>
            </div>
            <div class="font-bold text-emerald-950 dark:text-emerald-50 text-xl mb-3 tracking-tight transition-colors">
              {props.title}
            </div>
          </div>
        )}

      <div class="p-6 pt-4 flex-1 flex flex-col">
        <p class="text-slate-600 dark:text-emerald-50/70 leading-relaxed flex-1 text-sm font-medium opacity-90 transition-colors">
          {props.desc}
        </p>
        <div class="mt-6 pt-5 border-t border-emerald-50/50 dark:border-emerald-800/40">
          <a
            href="/contact"
            class="text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-200 font-bold text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all"
          >
            <span>Learn more</span>
            <span class="text-lime-500 dark:text-lime-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
