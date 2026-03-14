import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Lumin8 delivered a beautiful, professional website that perfectly captures our brand. The process was seamless and fast.",
    name: "Earth Songfire",
    title: "Founder",
  },
  {
    quote: "Working with Lumin8 was effortless. They took our vision and turned it into a polished online presence in record time.",
    name: "Acronym Solutions",
    title: "Client",
  },
  {
    quote: "Lumin8 understood exactly what we needed. The website they built has been a game-changer for our community engagement.",
    name: "Matt",
    title: "Unapologetically Jewish",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-28 h-28 top-10 left-[10%] opacity-40 blur-[50px]" />

      <div className="max-w-5xl mx-auto">
        <h2 className="section-headline text-foreground mb-12">Don't take our word for it</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-muted/30 rounded-2xl p-8 border border-foreground/[0.06]"
            >
              <span className="text-4xl text-primary font-serif leading-none">"</span>
              <p className="text-foreground/80 leading-relaxed mt-2 mb-6">{t.quote}</p>
              <div>
                <p className="font-heading font-bold text-foreground">{t.name}</p>
                <p className="text-lumin8-gray-400 text-sm">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
