import SectionReveal from "./animations/SectionReveal";
import TestimonialMarquee from "./animations/TestimonialMarquee";

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
  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-28 h-28 top-10 left-[10%] opacity-40 blur-[50px]" />

      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-12">Don't take our word for it</h2>
        </SectionReveal>

        <TestimonialMarquee testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
