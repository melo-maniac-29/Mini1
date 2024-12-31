import React from 'react';
import { motion } from 'framer-motion';
import { ReviewCard } from './ReviewCard';

const reviews = [
  {
    name: "Emma Thompson",
    role: "Small Business Owner",
    review: "This platform transformed how I showcase my products online. The templates are stunning and the customization options are endless!",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "James Wilson",
    role: "Freelance Designer",
    review: "The 3D elements and animations make my portfolio stand out. My clients are consistently impressed with the professional look.",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Sofia Rodriguez",
    role: "Marketing Director",
    review: "The ease of use combined with powerful features makes this my go-to choice for creating landing pages. Outstanding service!",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied customers who trust us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}