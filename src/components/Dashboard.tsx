import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Battery, Activity, Calendar } from 'lucide-react';

interface DashboardProps {
  username: string;
  tokensLeft: number;
  hoursSpent: number;
  lastActive: string;
}

export function Dashboard({ username, tokensLeft, hoursSpent, lastActive }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Welcome Section */}
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome back, {username}
            </h1>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium"
            >
              Pro Account
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tokens Left */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Battery className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tokens Left</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{tokensLeft}</p>
                </div>
              </div>
            </motion.div>

            {/* Hours Spent */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hours Spent</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{hoursSpent}</p>
                </div>
              </div>
            </motion.div>

            {/* Activity */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Activity className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Activity</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">Active</p>
                </div>
              </div>
            </motion.div>

            {/* Last Active */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="w-8 h-8 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Last Active</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{lastActive}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Activity
            </h2>
            <div className="h-64 flex items-end space-x-2">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-blue-500 dark:bg-blue-600 rounded-t-lg opacity-80"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}