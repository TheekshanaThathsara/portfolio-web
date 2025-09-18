import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { textClass, buttonClass } from '../utils/styleUtils';
import profileImg from '../assets/profileimg.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Software Engineer',
    'Full-Stack Developer', 
    'MERN Developer',
    'Spring Boot Developer',
    '.NET Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
    // Preload image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = profileImg;
  }, []);

  useEffect(() => {
    const currentText = roles[currentRole];
    let timeout;

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Erasing speed
      } else {
        // Move to next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <section className="min-h-screen w-full flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-white relative overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-teal-300/10 dark:bg-teal-500/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 90, 180]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            rotate: [180, 270, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/15 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-16 w-full py-4">
          
          {/* Profile Image - Mobile/Tablet First */}
          <motion.div 
            className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : 30,
              x: isVisible ? 0 : 50,
              scale: isVisible ? 1 : 0.8
            }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div 
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient Border with animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-1"
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, #14b8a6, #2563eb)",
                      "linear-gradient(135deg, #06b6d4, #7c3aed)",
                      "linear-gradient(135deg, #14b8a6, #2563eb)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                    {!imageLoaded && (
                      <motion.div 
                        className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <motion.div 
                          className="w-12 sm:w-16 h-12 sm:h-16 border-4 border-teal-500 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                    <motion.img 
                      src={profileImg} 
                      alt="Theekshana Thathsara" 
                      className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      onLoad={() => setImageLoaded(true)}
                      loading="eager"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{
                        imageRendering: 'crisp-edges',
                        WebkitImageRendering: 'crisp-edges',
                        MozImageRendering: 'crisp-edges',
                        filter: 'none'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating Stats Cards with enhanced animations */}
                <motion.div
                  className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-2xl p-3 sm:p-4 text-center"
                  initial={{ opacity: 0, scale: 0, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1, duration: 0.6, ease: "backOut" }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div 
                    className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-blue-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  >
                    4+
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Projects</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-2xl p-3 sm:p-4 text-center"
                  initial={{ opacity: 0, scale: 0, rotate: 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "backOut" }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                    boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.div 
                    className="text-base sm:text-lg font-bold text-blue-600 dark:text-purple-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  >
                    Full Stack
                  </motion.div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Developer</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Content - Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left max-w-3xl w-full order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              x: isVisible ? 0 : -50 
            }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "backOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-300 dark:text-green-300 text-xs sm:text-sm font-medium">Available for new opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2 sm:mb-3">
                <motion.span 
                  className="block text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "backOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  Theekshana Thathsara
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.h2 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 h-7 sm:h-8 md:h-10 lg:h-12 xl:h-14 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <motion.span 
                className="min-h-[1em]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "backOut" }}
              >
                {displayText}
                <motion.span 
                  className="inline-block w-0.5 h-4 sm:h-5 md:h-6 lg:h-7 bg-teal-500 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              I am a motivated Full Stack Developer passionate about creating efficient and scalable web applications. Currently seeking a software engineering internship to apply my skills, learn from industry professionals, and contribute to impactful projects.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={800} 
                offset={-80} 
                className="inline-block"
              >
                <motion.button 
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  View My Work
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
                  className="w-full sm:w-auto border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base rounded-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgb(96, 165, 250)",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 text-xs text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              {['React', 'Node.js', 'MongoDB', 'Spring Boot', '.NET'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-800/50 px-2 sm:px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700/50 transition-colors cursor-default"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 1.7 + index * 0.1, 
                    duration: 0.5,
                    ease: "backOut"
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div 
        className="flex-shrink-0 flex flex-col items-center cursor-pointer mt-4 sm:mt-6 pb-4 sm:pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.span 
          className="text-gray-500 dark:text-gray-400 text-xs mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-4 sm:w-5 h-6 sm:h-8 border-2 border-gray-400 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-0.5 h-1.5 sm:h-2 bg-gray-400 dark:bg-gray-400 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
