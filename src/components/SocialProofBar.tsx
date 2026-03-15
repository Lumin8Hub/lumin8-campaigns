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
];

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

const SocialProofBar = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Track viewport breakpoint changes
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

  // Auto-advance interval
  const advance = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + visibleCount;
      return next >= clients.length ? 0 : next;
    });
  }, [visibleCount]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(advance, 3000);
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

  const translateX = -(currentIndex * (100 / visibleCount));

  return (
    <section
      ref={sectionRef}
      className="fade-in-section bg-white border-t border-gray-200 py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-serif italic text-lg md:text-2xl text-foreground text-center">
          Trusted by franchise brands, small businesses, events, and non-profits
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
              transition: "transform 500ms ease-in-out",
            }}
          >
            {clients.map((client) => {
              const img = (
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="max-h-14 md:max-h-16 w-auto object-contain"
                />
              );

              return (
                <div
                  key={client.name}
                  className="flex-shrink-0 flex items-center justify-center px-8 md:px-12"
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
