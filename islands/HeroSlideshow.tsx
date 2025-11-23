import { useEffect, useState } from "preact/hooks";

const SLIDES = [
  {
    // Nairobi/City - Zoom In
    url:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Bus/Transport - Pan Right
    url:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110 translate-x-0",
    active: "scale-110 translate-x-10",
  },
  {
    // Solar/Energy - Zoom Out
    url:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110",
    active: "scale-100",
  },
  {
    // Team/Collaboration - Blur In
    url:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    base: "scale-105 blur-sm",
    active: "scale-105 blur-none",
  },
  {
    // Woman Professional - Zoom In
    url:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Community - Pan Left
    url:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110 -translate-x-0",
    active: "scale-110 -translate-x-10",
  },
  {
    // Electric Bikes - Zoom Out
    url:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110",
    active: "scale-100",
  },
  {
    // Nature - Blur In
    url:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
    base: "scale-105 blur-sm",
    active: "scale-105 blur-none",
  },
  {
    // Tech (New) - Zoom In
    url:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Education (New) - Pan Right
    url:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110 translate-x-0",
    active: "scale-110 translate-x-10",
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.url}
            class={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt="Slideshow background"
              class={`w-full h-full object-cover transition-all duration-[5000ms] ease-linear transform ${
                isActive ? slide.active : slide.base
              }`}
            />
            {/* Overlay to ensure text readability */}
            <div class="absolute inset-0 bg-black/40" />
          </div>
        );
      })}
    </div>
  );
}
