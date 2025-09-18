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

    const handleResize = () => {
      // Close mobile menu if screen size changes to desktop
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      // Close mobile menu when clicking outside if it's open
      const header = document.querySelector('header');
      if (mobileMenuOpen && header && !header.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled, mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 sm:py-3 shadow-lg' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        <div className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-8 items-center">
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">Projects</a></li>
            <li><a href="#education" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">Education</a></li>
            <li><a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">Experience</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm lg:text-base px-2 py-1">Contact</a></li>
            <li>
              <button 
                onClick={toggleTheme} 
                className="p-1.5 lg:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ml-1"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className="p-1.5 sm:p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg overflow-hidden absolute w-full top-full left-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex flex-col rounded-lg overflow-hidden">
            <li><a href="#about" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">About</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Skills</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Projects</a></li>
            <li><a href="#education" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Education</a></li>
            <li><a href="#experience" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Experience</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu} className="block py-2.5 text-base sm:text-lg font-medium text-center text-gray-700 dark:text-gray-300 active:bg-gray-100 dark:active:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;