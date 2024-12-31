import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Button';
import { GradientText } from '../ui/GradientText';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { FloatingElements } from './FloatingElements';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <FloatingElements />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <GradientText
              text="Design Without Limits"
              className="text-7xl sm:text-8xl font-bold tracking-tight"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Create stunning websites with our intuitive platform. No coding required.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Button
              to="/signup"
              variant="primary"
              className="group relative overflow-hidden px-8 py-4 text-lg hover:scale-105 transition-transform"
              aria-label="Get Started"
            >
              <span className="relative z-10 flex items-center">
                Start
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
            
            <Button
              to="/demo"
              variant="secondary"
              className="group px-8 py-4 text-lg hover:scale-105 transition-transform"
              aria-label="Watch Demo"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
