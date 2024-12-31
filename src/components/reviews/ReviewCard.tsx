import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  review: string;
  rating: number;
  imageUrl: string;
}

export function ReviewCard({ name, role, review, rating, imageUrl }: ReviewCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300">{review}</p>
    </motion.div>
  );
}