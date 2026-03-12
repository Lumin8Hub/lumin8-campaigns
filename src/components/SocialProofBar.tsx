import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [
  "Acronym Solutions",
  "Nanashake",
  "CCNY",
  "Spring Management Academy",
  "Lighthouse 1Eighty",
  "Divana",
];

const SocialProofBar = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="bg-lumin8-off-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-label text-lumin8-gray-600">
          Trusted by small businesses and non-profits across the GTA
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {clients.map((c) => (
            <span key={c} className="font-mono text-sm text-lumin8-gray-600 tracking-wide">
              ✦ {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
