import SectionReveal from "@/components/animations/SectionReveal";

interface ProseSectionProps {
  label?: string;
  heading: string;
  paragraphs: string[];
  labelColor?: string;
  labelFont?: string;
  headingFont?: string;
  mutedColor?: string;
  bgColor?: string;
}

const ProseSection = ({
  label,
  heading,
  paragraphs,
  labelColor = "rgba(255,255,255,0.4)",
  labelFont,
  headingFont,
  mutedColor = "rgba(255,255,255,0.6)",
  bgColor,
}: ProseSectionProps) => (
  <section className="px-6 py-20" style={{ backgroundColor: bgColor }}>
    <div className="max-w-5xl mx-auto">
      <SectionReveal>
        {label && (
          <div
            className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
            style={{ color: labelColor, fontFamily: labelFont }}
          >
            {label}
          </div>
        )}
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-8"
          style={{ fontFamily: headingFont }}
        >
          {heading}
        </h2>
        <div className="space-y-5 max-w-3xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed" style={{ color: mutedColor }}>
              {p}
            </p>
          ))}
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default ProseSection;
