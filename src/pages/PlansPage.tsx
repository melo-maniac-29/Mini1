import React from 'react';
import { motion } from 'framer-motion';
import { PricingSection } from '../components/pricing/PricingSection';

export function PlansPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PricingSection />
    </motion.div>
  );
}