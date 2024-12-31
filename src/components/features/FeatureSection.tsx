import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedShape } from './AnimatedShape';

export function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12"
        >
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Design Without Limits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Create stunning websites with our intuitive drag-and-drop builder. 
              No coding required. Just pure creativity unleashed.
            </p>
          </div>
          <div className="flex-1 flex justify-center mt-8 sm:mt-0">
            <AnimatedShape />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
