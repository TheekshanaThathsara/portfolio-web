import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

/**
 * A reusable section container with consistent styling and animations
 * @param {object} props Component props
 * @param {string} props.id Section ID for navigation
 * @param {string} props.title Section title
 * @param {string} props.subtitle Optional section subtitle
 * @param {React.ReactNode} props.children Section content
 * @param {string} props.className Additional CSS classes
 * @param {string} props.bgColor Background color class (default: 'bg-white dark:bg-gray-900')
 */
const SectionContainer = ({ 
  id,
  title,
  subtitle,
  children,
  className = '',
  bgColor = 'bg-white dark:bg-gray-900'
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section 
      id={id}
      className={`py-10 sm:py-14 md:py-16 lg:py-20 ${bgColor} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="text-center mb-8 md:mb-12"
          >
            {title && (
              <motion.div variants={variants} className="inline-block relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                    {title}
                  </span>
                </h2>
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                  initial={{ width: "0%" }}
                  animate={inView ? { width: "100%" } : { width: "0%" }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </motion.div>
            )}
            
            {subtitle && (
              <motion.p 
                variants={variants}
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 text-sm sm:text-base"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        
        <motion.div
          ref={!title && !subtitle ? ref : undefined}
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContainer;
