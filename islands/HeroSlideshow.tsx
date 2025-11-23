import { useEffect, useState } from "preact/hooks";

const IMAGES = [
  "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1920&q=80", // Nairobi/City
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1920&q=80", // Bus/Transport
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80", // Solar/Energy
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80", // Team/Collaboration
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80", // Woman Professional
  "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1920&q=80", // Community
  "https://images.unsplash.com/photo-1474962558142-9ca839d74115?auto=format&fit=crop&w=1920&q=80", // Bicycles
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80", // Nature
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="absolute inset-0 -z-10 overflow-hidden">
      {IMAGES.map((src, index) => (
        <div
          key={src}
          class={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Slideshow background"
            class="w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability */}
          <div class="absolute inset-0 bg-black/40" />
        </div>
      ))}
    </div>
  );
}
