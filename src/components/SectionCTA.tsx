import { openContestForm } from "@/lib/tally";

interface SectionCTAProps {
  text?: string;
}

const SectionCTA = ({ text = "Get Started" }: SectionCTAProps) => (
  <div className="flex justify-center mt-8">
    <button
      onClick={openContestForm}
      className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-full hover:scale-[1.03] transition-transform duration-300"
    >
      {text}
    </button>
  </div>
);

export default SectionCTA;
