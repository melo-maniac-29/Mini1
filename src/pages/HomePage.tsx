import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { FeatureSection } from '../components/features/FeatureSection';
import { QuoteSection } from '../components/features/QuoteSection';
import { TeamSection } from '../components/team/TeamSection';
import { ReviewsSection } from '../components/reviews/ReviewsSection';
import { Footer } from '../components/footer/Footer';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:text-white"
    >
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <QuoteSection />
      <TeamSection />
      <ReviewsSection />
      <Footer />
    </motion.div>
  );
}