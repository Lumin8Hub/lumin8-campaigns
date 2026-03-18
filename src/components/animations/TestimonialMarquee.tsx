import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
}

const TestimonialMarquee = ({ testimonials }: TestimonialMarqueeProps) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const t = testimonials[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial card */}
      <div className="max-w-2xl mx-auto text-center">
        <div
          key={active}
          className="bg-muted/30 rounded-2xl p-10 md:p-12 border border-foreground/[0.06] animate-fade-in"
        >
          <span className="text-4xl text-primary font-serif leading-none">&ldquo;</span>
          <p className="text-foreground/80 leading-relaxed mt-2 mb-6 text-lg">{t.quote}</p>
          <div>
            <p className="font-heading font-bold text-foreground">{t.name}</p>
            <p className="text-lumin8-gray-400 text-sm">{t.title}</p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      {testimonials.length > 1 && (
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-primary" : "bg-foreground/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialMarquee;
