import { useState, useEffect, useRef, useCallback } from "react";

const clients = [
  {
    name: "YogenFruz",
    websiteUrl: "https://yogenfruz.com/",
    logoUrl: "/logos/YogenFruz.png",
  },
  {
    name: "Sportball",
    websiteUrl: "https://sportball.com/",
    logoUrl: "/logos/Sportball.png",
  },
  {
    name: "Acronym Solutions",
    websiteUrl: "https://acronymsolutions.com/",
    logoUrl: "/logos/Acronym.png",
  },
  {
    name: "TZC",
    websiteUrl: "",
    logoUrl: "/logos/TZC.png",
  },
  {
    name: "Unapologetically Jewish",
    websiteUrl: "https://www.unapologetically-jewish.org/",
    logoUrl: "/logos/uj.png",
  },
  {
    name: "Garage Door Beasts",
    websiteUrl: "https://garagedoorbeasts.ca/organization-landing-page/",
    logoUrl: "/logos/GarageDoorBeasts.png",
  },
  {
    name: "Earth Song Festival",
    websiteUrl: "https://earthsongfestival.com/",
    logoUrl: "/logos/EarthSongFestival.png",
  },
  {
    name: "Sparkpolo",
    websiteUrl: "https://www.sparkpolo.com/",
    logoUrl: "/logos/Sparkpolo.png",
  },
  {
    name: "ScentIt",
    websiteUrl: "",
    logoUrl: "/logos/ScentIt.png",
  },
  {
    name: "LightHouse1Eighty",
    websiteUrl: "https://lighthouse1eighty.com/",
    logoUrl: "/logos/Lighthouse.png",
  },
  {
    name: "CCNY",
    websiteUrl: "https://ccny.ca/",
    logoUrl: "/logos/CCNY.png",
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth >= 1024) return 5;
  if (window.innerWidth >= 640) return 3;
  return 2;
}

const SocialProofBar = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const mqTablet = window.matchMedia("(min-width: 640px)");

    const update = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setCurrentIndex(0);
    };

    mqDesktop.addEventListener("change", update);
    mqTablet.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqTablet.removeEventListener("change", update);
    };
  }, []);

  // Advance by one logo every 2 seconds
  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(advance, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [advance, isPaused]);

  // IntersectionObserver fade-in
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Duplicate logos for seamless infinite scroll
  const extendedClients = [...clients, ...clients];
  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <section
      ref={sectionRef}
      className="fade-in-section bg-white border-t border-gray-200 py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-serif italic text-lg md:text-2xl text-center text-[#ed4c96]">
          Trusted by Canadian Businesses
        </p>

        <div
          className="mt-8 md:mt-10 overflow-hidden"
          aria-label="Client logos"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            aria-live="polite"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: "transform 600ms ease-in-out",
            }}
          >
            {extendedClients.map((client, idx) => {
              const img = (
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="h-12 md:h-14 w-auto object-contain"
                  style={{ minHeight: "48px" }}
                />
              );

              return (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 md:px-10"
                  style={{ minWidth: `${100 / visibleCount}%` }}
                >
                  {client.websiteUrl ? (
                    <a
                      href={client.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {img}
                    </a>
                  ) : (
                    <span>{img}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
