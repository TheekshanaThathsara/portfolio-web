/** 
 * Global CSS utilities for styling consistency across components
 * These are helper functions to ensure styling consistency between components
 */

// Helper function for smooth transitions
export const transitionClass = "transition-all duration-300 ease-in-out";

// Helper for rounded corners and shadows
export const cardClass = "rounded-xl shadow-soft dark:shadow-soft-dark hover:shadow-soft-lg bg-white dark:bg-gray-800 " + transitionClass;

// Section spacing
export const sectionClass = "py-16 md:py-24";

// Gradient text
export const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600";

// Button styles
export const buttonClass = {
  primary: `px-6 py-3 rounded-lg font-medium bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 ${transitionClass}`,
  secondary: `px-6 py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 ${transitionClass}`,
  outline: `px-6 py-3 rounded-lg font-medium border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white ${transitionClass}`,
};

// Reusable animations
export const animationClass = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  slideInRight: "animate-slide-in-right",
  slideInLeft: "animate-slide-in-left",
};

// Text colors for light/dark mode
export const textClass = {
  primary: "text-gray-800 dark:text-white",
  secondary: "text-gray-600 dark:text-gray-300",
  accent: "text-teal-500 dark:text-teal-400",
};

// Background colors for light/dark mode
export const bgClass = {
  primary: "bg-white dark:bg-gray-900",
  secondary: "bg-gray-50 dark:bg-gray-800",
  accent: "bg-teal-500 dark:bg-teal-600",
};
