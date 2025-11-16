interface ServiceCardProps {
  title: string;
  desc: string;
  icon?: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div class="group border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-300 hover:border-green-200">
      <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition">
        {props.icon || "🌱"}
      </div>
      <div class="font-bold text-gray-900 text-lg mb-2">{props.title}</div>
      <p class="text-gray-600 leading-relaxed">{props.desc}</p>
      <div class="mt-4 pt-4 border-t border-gray-100">
        <a
          href="/contact"
          class="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center gap-1"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
