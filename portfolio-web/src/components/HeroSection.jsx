import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { textClass, buttonClass } from '../utils/styleUtils';
import profileImg from '../assets/profileimg.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-teal-300/10 dark:bg-teal-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-300/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto py-12 md:py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            y: isVisible ? 0 : 30 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile image - optional */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              {/* Your profile picture from assets */}
              <img 
                src={profileImg} 
                alt="Theekshana Thathsara" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Theekshana Thathsara
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Software Engineering Enthusiast | MERN & Springboot Developer | Explore .NET
          </motion.h2>
          
          <motion.p 
            className={`text-base sm:text-lg md:text-xl ${textClass.secondary} mb-8 sm:mb-10 max-w-2xl mx-auto px-4`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            I build stunning digital experiences that make a difference. Let's create something amazing together.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={800} 
              offset={-80} 
              className="inline-block"
            >
              <motion.button 
                className={buttonClass.primary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
            
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              offset={-80} 
              className="inline-block"
            >
              <motion.button 
                className={buttonClass.outline}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Scroll down indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-sm mb-2 opacity-60">Scroll Down</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
