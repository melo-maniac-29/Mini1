import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Code2, Star } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Active Users', value: '2M+' },
  { icon: Globe, label: 'Countries', value: '150+' },
  { icon: Code2, label: 'Templates', value: '1000+' },
  { icon: Star, label: 'Reviews', value: '4.9/5' },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <stat.icon className="w-16 h-16 mx-auto mb-4 text-blue-500 dark:text-blue-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
