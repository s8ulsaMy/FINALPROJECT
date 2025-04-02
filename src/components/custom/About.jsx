import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  const storyContent = [
    {
      title: "The Challenge",
      content: `In today's digital age, we found ourselves drowning in an ocean of travel possibilities. 
      Countless destinations, endless attractions, and infinite combinations of itineraries – the paradox 
      of choice was real. As students passionate about travel, we noticed how our friends and family would 
      spend hours, sometimes days, trying to plan the perfect trip, only to feel overwhelmed and uncertain.`
    },
    {
      title: "The Realization",
      content: `That's when it hit us: what if we could harness the power of artificial intelligence to 
      cut through the noise? What if we could create a system that understands not just where you want to go, 
      but why you want to travel? A companion that could transform the overwhelming into the exciting, the 
      complex into the simple.`
    },
    {
      title: "The Solution",
      content: `And thus, TRAVISTA was born – your intelligent travel companion that understands your 
      preferences, considers your constraints, and crafts personalized itineraries that feel just right. 
      We've combined cutting-edge AI technology with our passion for travel to create a platform that makes 
      travel planning not just easier, but enjoyable.`
    }
  ];

  return (
    <section 
      id="about"
      className={`min-h-screen py-20 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-16"
        >
          {/* Main Title */}
          <motion.h2 
            className="text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Story
          </motion.h2>

          {/* Story Sections */}
          <div className="space-y-16 max-w-4xl mx-auto">
            {storyContent.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4"
              >
                <h3 className={`text-2xl md:text-3xl font-semibold ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {section.title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="pt-16"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-12">Meet the Team</h3>
            
            {/* Team Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.21, 0.45, 0.32, 0.9]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`aspect-square rounded-2xl overflow-hidden shadow-xl ${
                    isDarkMode 
                      ? 'shadow-blue-500/10' 
                      : 'shadow-blue-500/20'
                  }`}
                >
                  <div className={`w-full h-full ${
                    isDarkMode 
                      ? 'bg-gray-800' 
                      : 'bg-gray-100'
                  } flex items-center justify-center`}>
                    <span className="text-6xl opacity-30">
                      {index}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* University Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`text-xl md:text-2xl font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Pre-Final Year Students | Medi-Caps University
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries with AI technology"
              },
              {
                title: "Simplicity",
                description: "Making travel planning effortless"
              },
              {
                title: "Personalization",
                description: "Crafting unique experiences for each traveler"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`p-8 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800' 
                    : 'bg-gray-50 hover:bg-gray-100'
                } transition-colors duration-300`}
              >
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 