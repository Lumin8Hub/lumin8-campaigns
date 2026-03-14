import { useScrollAnimation, useCardStagger } from "@/hooks/useScrollAnimation";

const painPoints = [
  { emoji: "💸", text: '"Agencies want $5,000+ and a 3-month timeline"' },
  { emoji: "🤯", text: '"I tried Wix/Squarespace but it still looks DIY"' },
  { emoji: "😩", text: '"I don\'t have time to figure out hosting, SEO, and domains"' },
  { emoji: "🤷", text: '"I don\'t even know where to start with my branding"' },
  { emoji: "⏰", text: '"I just need something professional — fast"' },
];

const ProblemSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useCardStagger(".pain-card");

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="problem" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-pink w-32 h-32 top-10 right-10 opacity-50 blur-[50px]" />
      <div className="blob blob-green w-24 h-24 bottom-10 left-10 opacity-40 blur-[40px]" />

      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-foreground mb-12">
          You know you need a website. But...
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-4 max-w-3xl mb-12">
          {painPoints.map((p, i) => (
            <div
              key={i}
              className="pain-card stagger-card bg-muted rounded-2xl p-6 border border-foreground/[0.06] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-2xl mr-3">{p.emoji}</span>
              <span className="text-foreground font-body">{p.text}</span>
            </div>
          ))}
        </div>

        <p className="font-serif italic text-primary text-2xl md:text-3xl">
          Sound familiar? That's exactly why we built this.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
