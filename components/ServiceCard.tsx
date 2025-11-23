interface ServiceCardProps {
  title: string;
  desc: string;
  image?: string;
  icon?: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div class="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:border-emerald-200 flex flex-col h-full">
      {props.image ? (
        <div class="h-48 overflow-hidden relative">
          <img
            src={props.image}
            alt={props.title}
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div class="absolute bottom-3 left-4 text-white font-bold text-lg drop-shadow-md">
            {props.title}
          </div>
        </div>
      ) : (
        <div class="p-6 pb-0">
          <div class="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition">
            {props.icon || "🌱"}
          </div>
          <div class="font-bold text-gray-900 text-lg mb-2">{props.title}</div>
        </div>
      )}

      <div class="p-6 pt-4 flex-1 flex flex-col">
        <p class="text-gray-600 leading-relaxed flex-1 text-sm">{props.desc}</p>
        <div class="mt-4 pt-4 border-t border-gray-100">
          <a
            href="/contact"
            class="text-emerald-600 hover:text-emerald-700 font-medium text-sm inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
