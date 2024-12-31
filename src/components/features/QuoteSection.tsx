import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The future of web development is here. Create stunning websites with unparalleled ease and flexibility.",
    author: "John Doe",
    role: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export function QuoteSection() {
  return (
    <section className="py-32 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Quote className="w-96 h-96 text-gray-900 dark:text-white transform -rotate-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-100 dark:border-blue-900"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/100'}
                />
              </div>
              <Quote className="w-12 h-12 mx-auto mb-8 text-blue-500 dark:text-blue-400" />
              <blockquote className="text-3xl font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-600 dark:text-gray-400">
                <p className="text-xl font-semibold">{testimonial.author}</p>
                <p className="text-lg">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
