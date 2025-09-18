import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaStar
} from 'react-icons/fa';

const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Colombo School of Computing',
      location: 'Colombo, Sri Lanka',
      period: '2023 - Present',
      status: 'Ongoing',
      description: 'Comprehensive study in computer science fundamentals, specializing in software engineering, web development, and modern programming paradigms. Actively engaged in practical projects and research.',
      highlights: [
        'Data Structures and Algorithms',
        'Software Engineering Principles',
        'Web Development (Full Stack)',
        'Mobile App Development',
        'Human-Computer Interaction',
        'Database Management Systems',
        'Project Management',
        'UI/UX Design',
        'Object-Oriented Programming',
        'Design Patterns'
      ],
      achievements: [
        'Active participant in coding competitions',
        'Member of multiple technical societies',
        'Contributor to open-source projects'
      ],
      gpa: 'In Progress',
      icon: FaGraduationCap
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-teal-500">
              Education
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            My academic journey in computer science, building a strong foundation in technology and innovation.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full max-w-4xl"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Main Education Card */}
                <motion.div 
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 relative overflow-hidden group"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-teal-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + (i % 3) * 30}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <motion.div
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg"
                          whileHover={{ 
                            rotate: [0, -5, 5, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <edu.icon className="text-white text-2xl sm:text-3xl" />
                        </motion.div>
                        <div>
                          <motion.h3 
                            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.p 
                            className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                          >
                            {edu.institution}
                          </motion.p>
                        </div>
                      </div>

                      <motion.div
                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 dark:border-green-700"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.status}
                      </motion.div>
                    </div>

                    {/* Details Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <motion.div 
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        variants={highlightVariants}
                      >
                        <FaMapMarkerAlt className="text-red-500 mr-3 text-lg" />
                        <span className="font-medium">{edu.location}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        variants={highlightVariants}
                      >
                        <FaCalendarAlt className="text-blue-500 mr-3 text-lg" />
                        <span className="font-medium">{edu.period}</span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <motion.p 
                      className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {edu.description}
                    </motion.p>

                    {/* Course Highlights */}
                    <div className="mb-6 sm:mb-8">
                      <motion.h4 
                        className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                      >
                        <FaStar className="text-yellow-500 mr-3" />
                        Key Areas of Study
                      </motion.h4>
                      <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      >
                        {edu.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            variants={highlightVariants}
                            className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 group/item cursor-default"
                            whileHover={{ x: 5, scale: 1.02 }}
                            custom={idx}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300" />
                            <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <motion.h4 
                        className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                      >
                        <FaAward className="text-purple-500 mr-3" />
                        Achievements & Activities
                      </motion.h4>
                      <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                      >
                        {edu.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            variants={highlightVariants}
                            className="flex items-start bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
                            whileHover={{ scale: 1.02, x: 5 }}
                            custom={idx}
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;