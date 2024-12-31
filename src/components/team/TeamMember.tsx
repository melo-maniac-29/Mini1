import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay: number;
  socialLinks: {
    twitter: string;
    linkedin: string;
  };
}

export function TeamMember({ name, role, imageUrl, delay, socialLinks }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl dark:shadow-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-purple-500/20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

        <div className="relative space-y-6">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 rounded-xl overflow-hidden">
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
              whileHover={{ scale: 1.15 }}
            />
          </div>

          {/* Name and Role */}
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{role}</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <motion.a
              href={socialLinks.twitter}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500 transition-colors duration-300"
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-500 transition-colors duration-300"
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
