import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "Staff was instrumental in pivoting my business in a different direction. They dig deep into your business and your audience and help you develop a marketing strategy.",
    name: "Jenny Trummer",
    title: "Founder at Certified Lover Corn",
  },
  {
    quote: "We went from having no online presence to a site we're genuinely proud of. The whole process was painless.",
    name: "Client Name",
    title: "Business Name",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-28 h-28 top-10 left-[10%] opacity-40 blur-[50px]" />

      <div className="max-w-5xl mx-auto">
        <span className="section-label">// WHAT OUR CLIENTS SAY</span>
        <h2 className="section-headline text-foreground mb-12">Don't take our word for it</h2>

        <div className="grid md:grid-cols-2 gap-6">
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
