import SectionReveal from "./animations/SectionReveal";
import TestimonialMarquee from "./animations/TestimonialMarquee";

const testimonials = [
  {
    quote: "Dan led our full rebranding and built a multi-functional website that enabled franchisees across North America to benefit from professional brand assets and marketing best practices. It transformed how we operate.",
    name: "Sportball",
    title: "Head of Marketing",
  },
  {
    quote: "Dorit and the Lumin8 team exceeded our expectations with social media and paid marketing strategy for our North York location launch. They deeply understand how to reach parents in our target market.",
    name: "Aqua-Tots North York",
    title: "Owners",
  },
  {
    quote: "Dorit and the team brought creative innovation to our brand — including an AR filter for the Netflix Unicorn Academy collaboration that drove sales increases across our store locations.",
    name: "Yogen Früz",
    title: "Head of Marketing",
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
