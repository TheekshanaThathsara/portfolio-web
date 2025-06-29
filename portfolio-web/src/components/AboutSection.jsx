import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </span>
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-10">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I’m currently an undergraduate at the <strong>University of Colombo School of Computing,</strong> 
                pursuing a <strong>Bachelor’s degree in Computer Science.</strong> My academic journey has laid a strong 
                foundation in algorithmic thinking, software engineering, and modern computing principles—skills 
                I continuously sharpen through real-world projects, research, and hands-on learning.
              </p>
              
              <p className="text-lg leading-relaxed">
                My <strong>passion for development and design</strong> stems from the belief that technology should be both 
                functional and beautiful. I enjoy the challenge of crafting clean, efficient code while simultaneously 
                creating intuitive, engaging user experiences. The intersection of technical problem-solving and creative 
                design is where I thrive, constantly seeking to bridge the gap between form and function.
              </p>
              
              <p className="text-lg leading-relaxed">
                In the ever-evolving landscape of IT, my interests are particularly focused on <strong>cloud architecture</strong>, 
                <strong> artificial intelligence</strong>, and <strong>responsive web applications</strong>. I'm fascinated by how 
                these technologies are reshaping our digital interactions and enabling new possibilities. When I'm not coding, 
                I enjoy contributing to open-source projects, attending tech meetups, and exploring emerging technologies 
                through hands-on experimentation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
