import React from 'react';
import { motion } from 'framer-motion';
import { Dashboard } from '../components/Dashboard';

export function DashboardPage() {
  // This would typically come from your auth/user context
  const mockUserData = {
    username: "Alex Chen",
    tokensLeft: 2500,
    hoursSpent: 42,
    lastActive: "Today"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Dashboard {...mockUserData} />
    </motion.div>
  );
}