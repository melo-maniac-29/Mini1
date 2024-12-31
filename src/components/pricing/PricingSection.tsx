import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';

const plans = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect for getting started with basic features",
    features: [
      { text: "Up to 3 projects", included: true },
      { text: "Basic templates", included: true },
      { text: "Community support", included: true },
      { text: "Basic analytics", included: true },
      { text: "Custom domains", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Personal",
    price: "$12",
    description: "Everything you need for personal projects",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Premium templates", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "Team collaboration", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "Advanced features for teams and businesses",
    features: [
      { text: "Unlimited projects", included: true },
      { text: "Custom templates", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "Team collaboration", included: true },
    ],
  },
];

export function PricingSection() {
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}