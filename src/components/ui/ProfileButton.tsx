import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface ProfileButtonProps {
  isLoggedIn: boolean;
  imageUrl?: string;
  username?: string;
}

export function ProfileButton({ isLoggedIn, imageUrl, username }: ProfileButtonProps) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/login')}
        className="flex items-center space-x-2 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        <span>Get Started</span>
      </motion.button>
    );
  }

  return (
    <div className="relative group">
      <Link to="/dashboard">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-blue-500">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={username} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            )}
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {username || 'Profile'}
          </span>
        </motion.div>
      </Link>

      {/* Dropdown menu */}
      <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <Link 
          to="/dashboard" 
          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}