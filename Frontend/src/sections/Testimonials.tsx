import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Team Lead",
    role: "Senior Developer",
    company: "Utech India Pvt. Ltd.",
    text: "Ruturaj quickly became an integral part of our fintech team. His ability to design secure, scalable REST APIs with JWT and RBAC was impressive. He shipped the salary slip generation and biometric attendance features with minimal supervision.",
    rating: 5
  },
  {
    name: "Project Manager",
    role: "Technical Lead",
    company: "A2Z IT Hub Pvt. Ltd.",
    text: "During his internship, Ruturaj delivered production-quality code from day one. His Django expertise and thorough unit testing approach helped us maintain 80% test coverage. The billing software he built is still used daily by our client.",
    rating: 5
  },
  {
    name: "Colleague",
    role: "Full Stack Developer",
    company: "Utech India Pvt. Ltd.",
    text: "Working alongside Ruturaj on Finance Bazar was a great experience. He's meticulous with code quality, proactive in code reviews, and always pushes for performance optimization. His face-api.js integration was particularly innovative.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Feedback from colleagues and mentors I've had the privilege to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="testimonial-border">
                <div className="testimonial-inner p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                      <Quote size={20} className="text-white" />
                    </div>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonials[current].name}</h4>
                      <p className="text-sm text-slate-400">
                        {testimonials[current].role} • <span className="text-primary">{testimonials[current].company}</span>
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={next}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'w-8 bg-primary' : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
