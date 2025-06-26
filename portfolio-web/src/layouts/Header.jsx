import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Projects</a></li>
            <li><a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Experience</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors">Contact</a></li>
            <li>
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0,
          display: mobileMenuOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg overflow-hidden absolute w-full top-full left-0 safe-padding-bottom z-50"
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col">
            <li><a href="#about" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800">About</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800">Skills</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800">Projects</a></li>
            <li><a href="#experience" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800">Experience</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu} className="block py-3 text-lg font-medium text-center text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800">Contact</a></li>
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;