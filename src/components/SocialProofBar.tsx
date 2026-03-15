import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    name: "YogenFruz",
    websiteUrl: "https://yogenfruz.com/",
    logoUrl: "/logos/YogenFruz.svg",
  },
  {
    name: "Sportball",
    websiteUrl: "https://sportball.com/",
    logoUrl: "/logos/Sportball.svg",
  },
  {
    name: "Acronym Solutions",
    websiteUrl: "https://acronymsolutions.com/",
    logoUrl: "/logos/Acronym.svg",
  },
  {
    name: "TZC",
    websiteUrl: "",
    logoUrl: "/logos/TZC.svg",
  },
  {
    name: "Unapologetically Jewish",
    websiteUrl: "https://www.unapologetically-jewish.org/",
    logoUrl: "/logos/uj.svg",
  },
  {
    name: "Garage Door Beasts",
    websiteUrl: "https://garagedoorbeasts.ca/organization-landing-page/",
    logoUrl: "/logos/GarageDoorBeasts.svg",
  },
  {
    name: "Earth Song Festival",
    websiteUrl: "https://earthsongfestival.com/",
    logoUrl: "/logos/EarthSongFestival.svg",
  },
];

// Duplicate 3x so the track is long enough for the scroll animation
const repeatedClients = [...clients, ...clients, ...clients];

const SocialProofBar = () => {
  const sectionRef = useScrollAnimation();
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -66.666,
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-lumin8-off-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-label text-lumin8-gray-600">
          Trusted by small businesses and non-profits across the GTA
        </p>
      </div>

      <div className="overflow-hidden mt-8">
        <div ref={trackRef} className="flex items-center gap-16 whitespace-nowrap w-max">
          {repeatedClients.map((client, i) => {
            const img = (
              <img
                src={client.logoUrl}
                alt={client.name}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            );

            return client.websiteUrl ? (
              <a
                key={`${client.name}-${i}`}
                href={client.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                {img}
              </a>
            ) : (
              <span key={`${client.name}-${i}`} className="shrink-0">
                {img}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
