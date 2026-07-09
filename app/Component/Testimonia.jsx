"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    quote:
      "Working with this team made buying our first land stress-free and enjoyable. Their expertise throughout the entire process was exceptional.",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    quote:
      "They helped us find the perfect family plot in our ideal location. The attention to detail and market knowledge was impressive.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    quote:
      "Professional, responsive, and truly cared about finding us the right property. We couldn't be happier with our investment!",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 4,
    quote:
      "Excellent service from start to finish. They made the entire process smooth and got us a great deal on our property.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-charcoal-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                  <span className="text-brand-600 font-bold text-sm">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-charcoal-900">{testimonial.name}</h3>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`w-3.5 h-3.5 ${si < testimonial.rating ? "fill-brand-500 text-brand-500" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-1 left-0 text-4xl text-brand-200 font-serif leading-none">&ldquo;</span>
                <p className="text-sm text-charcoal-600 leading-relaxed pl-5">{testimonial.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
          className="text-center mt-12"
        >
          <p className="text-charcoal-500 mb-6">Ready to start your real estate journey?</p>
          <a
            href="https://wa.me/2347031147821"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-charcoal-950 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;