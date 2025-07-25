"use client";
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      quote:
        "Working with this team made buying our first home stress-free and enjoyable. Their expertise and dedication throughout the entire process was exceptional.",
      hasPhoto: false,
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      quote:
        "They helped us find the perfect family home in our ideal neighborhood. The attention to detail and market knowledge was impressive.",
      hasPhoto: false,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      quote:
        "Professional, responsive, and truly cared about finding us the right property. We couldn't be happier with our new home!",
      hasPhoto: false,
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 4,
      quote:
        "Excellent service from start to finish. They made the selling process smooth and got us a great price for our property.",
      hasPhoto: false,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="text-yellow-400 text-sm">
          {i <= rating ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
                  <span className="text-blue-600 dark:text-blue-400 text-xl font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="text-4xl text-blue-200 dark:text-blue-800 absolute -top-2 -left-1 font-serif">
                  "
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to start your real estate journey?
          </p>
          <button
            onClick={() => window.open("https://wa.link/7bmwjs", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
