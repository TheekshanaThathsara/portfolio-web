import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scroll event to show/hide scroll-to-top button
  useEffect(() => {
    const checkScroll = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScrollTop]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-4">        
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Theekshana Thathsara
            </span>
          </h3>
          
          {/* <p className="text-gray-400 mb-4">
            Designed By Theekshana Thathsara
          </p>
           */}
          <p className="text-gray-500">
            &copy; {currentYear} Theekshana Thathsara. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;