import { useEffect, useState } from "preact/hooks";

const SLIDES = [
  {
    // Nairobi Urban (Aerial)
    url: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Electric Bus (Nairobi vibe)
    url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110 translate-x-0",
    active: "scale-110 translate-x-10",
  },
  {
    // Solar Farm (Rural landscape)
    url: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110",
    active: "scale-100",
  },
  {
    // Bicycle (Rural Uganda)
    url: "https://images.unsplash.com/photo-1594913785162-e67860bc216d?auto=format&fit=crop&w=1920&q=80",
    base: "scale-105 blur-sm",
    active: "scale-105 blur-none",
  },
  {
    // Camels (Desert Caravan)
    url: "https://images.unsplash.com/photo-1542401886-65d6c60db27b?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Three-Wheeler (TukTuk)
    url: "https://images.unsplash.com/photo-1565553636730-67f13b194511?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110 -translate-x-0",
    active: "scale-110 -translate-x-10",
  },
  {
    // Logistics (Modern Truck Kenya)
    url: "https://images.unsplash.com/photo-1566454825481-67011d0e9cc0?auto=format&fit=crop&w=1920&q=80",
    base: "scale-110",
    active: "scale-100",
  },
  {
    // Professional African Woman (Tech)
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    base: "scale-105 blur-sm",
    active: "scale-105 blur-none",
  },
  {
    // African Tech/Collaboration
    url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80",
    base: "scale-100",
    active: "scale-110",
  },
  {
    // Nature/Forest (African context)
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
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
