import SectionReveal from "@/components/animations/SectionReveal";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
  borderColor: string;
  bgColor?: string;
  textColor?: string;
  attributionColor?: string;
  font?: string;
}

const PullQuote = ({
  quote,
  attribution,
  borderColor,
  bgColor = "rgba(255,255,255,0.02)",
  textColor = "rgba(255,255,255,0.85)",
  attributionColor = "rgba(255,255,255,0.5)",
  font,
}: PullQuoteProps) => (
  <SectionReveal>
    <div
      className="my-8 pl-6 py-4 rounded-r-lg"
      style={{
        borderLeft: `4px solid ${borderColor}`,
        backgroundColor: bgColor,
      }}
    >
      <p
        className="text-lg italic leading-relaxed"
        style={{ color: textColor, fontFamily: font }}
      >
        "{quote}"
      </p>
      {attribution && (
        <p
          className="text-sm mt-3 font-semibold"
          style={{ color: attributionColor }}
        >
          — {attribution}
        </p>
      )}
    </div>
  </SectionReveal>
);

export default PullQuote;
