import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const GetStarted = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen pt-28 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Plan Your Dream Trip
          </h1>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Let our AI help you create the perfect itinerary for your next adventure.
          </p>

          {/* Form will be added here in future updates */}
          <div className="mt-12">
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted; 