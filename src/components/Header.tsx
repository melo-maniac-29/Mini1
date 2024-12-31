import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { ProfileButton } from './ui/ProfileButton';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const { isLoggedIn, user } = useAuth();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold dark:text-white">Echo</Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/templates" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Creation
            </Link>
            <Link to="/plans" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Plans
            </Link>
            <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Resources
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggle={toggleDarkMode} />
            <ProfileButton 
              isLoggedIn={isLoggedIn} 
              imageUrl={user?.imageUrl}
              username={user?.username}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}