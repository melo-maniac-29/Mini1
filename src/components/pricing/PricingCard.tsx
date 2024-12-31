import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  popular, 
  buttonText = "Get Started" 
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative p-8 rounded-2xl ${
        popular 
          ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20' 
          : 'bg-white dark:bg-gray-800 shadow-lg'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1 bg-blue-700 rounded-full text-sm font-medium text-white">
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {name}
        </h3>
        <p className={`text-sm ${popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span className={`text-4xl font-bold ${popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {price}
        </span>
        {price !== "Free" && <span className={popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}>/month</span>}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-3 ${
              feature.included
                ? popular ? 'text-white' : 'text-blue-500'
                : 'text-gray-300 dark:text-gray-600'
            }`} />
            <span className={`text-sm ${
              feature.included
                ? popular ? 'text-white' : 'text-gray-900 dark:text-white'
                : 'text-gray-400 dark:text-gray-500'
            }`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'secondary' : 'primary'}
        className={`w-full ${
          popular ? 'bg-white text-blue-600 hover:bg-blue-50' : ''
        }`}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
}