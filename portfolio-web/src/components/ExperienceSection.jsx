import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaUsers, 
  FaCamera, 
  FaBullhorn,
  FaEdit,
  FaMapMarkerAlt,
  FaTrophy,
  FaStar,
  FaAward
} from 'react-icons/fa';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Professional and Leadership Experience only
  const experiences = [
    // Professional Experience
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Device Gallery Hub',
      location: 'Colombo, Sri Lanka',
      period: '2025 - Present',
      description: 'Developed responsive user interfaces for multiple client projects. Collaborated with design and back-end teams to implement seamless user experiences. Reduced load time by 40% through code optimization.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Successfully delivered 5+ client projects on time',
        'Implemented responsive designs for mobile and desktop platforms',
        'Collaborated with cross-functional teams to deliver high-quality solutions'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Express', 'MongoDB', 'Node.js'],
      icon: FaBriefcase,
      status: 'Current'
    },
    // Leadership & Editorial Roles
    {
      id: 2,
      type: 'leadership',
      title: 'Editor',
      organization: 'Rotaract Club of UCSC',
      location: 'University of Colombo',
      period: 'Jul 2025 – Present',
      description: 'Leading editorial content creation and managing communication strategies for the Rotaract Club. Responsible for maintaining high-quality publications and digital content.',
      achievements: [
        'Enhanced club visibility through strategic content creation',
        'Managed editorial team and content workflow processes',
        'Developed comprehensive communication strategies',
        'Improved publication quality and reader engagement'
      ],
      technologies: ['Content Strategy', 'Editorial Management', 'Digital Publishing', 'Team Leadership'],
      icon: FaEdit,
      status: 'Current'
    },
    {
      id: 3,
      type: 'leadership',
      title: 'Executive Committee Member',
      organization: 'Pahasara - UCSC Media',
      location: 'University of Colombo',
      period: 'Aug 2025 – Present',
      description: 'Active committee member contributing to media initiatives and strategic planning for university media operations.',
      achievements: [
        'Contributed to strategic planning for media operations',
        'Organized successful media events and initiatives',
        'Collaborated with diverse teams on multimedia projects',
        'Enhanced university media presence and engagement'
      ],
      technologies: ['Media Management', 'Strategic Planning', 'Event Coordination', 'Team Collaboration'],
      icon: FaUsers,
      status: 'Current'
    },
    {
      id: 4,
      type: 'leadership',
      title: 'Photographer',
      organization: 'Pahasara - UCSC Media',
      location: 'University of Colombo',
      period: 'Dec 2023 – Present',
      description: 'Capturing and documenting university events, creating visual content for media publications, and maintaining photography standards for official university media.',
      achievements: [
        'Documented 50+ university events with professional quality',
        'Created visual content library for official university media',
        'Maintained consistent photography standards across all publications',
        'Developed efficient workflow for event coverage and post-processing'
      ],
      technologies: ['Professional Photography', 'Photo Editing', 'Visual Storytelling', 'Event Documentation'],
      icon: FaCamera,
      status: 'Current'
    },
    {
      id: 5,
      type: 'leadership',
      title: 'Director of Public Relations',
      organization: 'Rotaract Club of UCSC',
      location: 'University of Colombo',
      period: 'Jun 2024 – Jun 2025',
      description: 'Led public relations initiatives, managed external communications, and developed strategic partnerships to enhance club visibility and community engagement.',
      achievements: [
        'Increased club visibility by 60% through strategic PR campaigns',
        'Established partnerships with 10+ external organizations',
        'Managed crisis communications and maintained positive public image',
        'Organized community engagement events reaching 500+ participants'
      ],
      technologies: ['Public Relations', 'Strategic Communication', 'Partnership Development', 'Event Management'],
      icon: FaBullhorn,
      status: 'Completed'
    },
    {
      id: 6,
      type: 'leadership',
      title: 'Middle Board Director',
      organization: 'Colombo Beacon',
      location: 'Colombo, Sri Lanka',
      period: 'Jun 2024 – Jun 2025',
      description: 'Served as Middle Board Director, contributing to organizational governance and strategic decision-making processes.',
      achievements: [
        'Participated in strategic planning sessions for organizational growth',
        'Contributed to policy development and governance frameworks',
        'Mentored junior members and facilitated leadership development',
        'Improved organizational efficiency through process optimization'
      ],
      technologies: ['Governance', 'Strategic Planning', 'Board Management', 'Leadership Development'],
      icon: FaUsers,
      status: 'Completed'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'work':
        return {
          gradient: 'from-blue-500 to-cyan-500',
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-700',
          label: 'Professional',
          labelColor: 'text-blue-700 dark:text-blue-300'
        };
      case 'leadership':
        return {
          gradient: 'from-purple-500 to-pink-500',
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          border: 'border-purple-200 dark:border-purple-700',
          label: 'Leadership',
          labelColor: 'text-purple-700 dark:text-purple-300'
        };
      default:
        return {
          gradient: 'from-gray-500 to-gray-600',
          bg: 'bg-gray-50 dark:bg-gray-800',
          border: 'border-gray-200 dark:border-gray-700',
          label: 'Experience',
          labelColor: 'text-gray-700 dark:text-gray-300'
        };
    }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            My professional journey and leadership roles that shaped my expertise in technology and team management.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-12 max-w-5xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-500 relative overflow-hidden group"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeStyle(exp.type).bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`} />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${getTypeStyle(exp.type).gradient} rounded-full opacity-30`}
                      style={{
                        left: `${15 + i * 20}%`,
                        top: `${10 + (i % 2) * 70}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${getTypeStyle(exp.type).gradient} rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg`}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <exp.icon className="text-white text-2xl sm:text-3xl" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                        >
                          {exp.organization}
                        </motion.p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <motion.div
                        className={`${getTypeStyle(exp.type).bg} ${getTypeStyle(exp.type).labelColor} px-4 py-2 rounded-full text-sm font-semibold border ${getTypeStyle(exp.type).border}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {getTypeStyle(exp.type).label}
                      </motion.div>
                      <motion.div
                        className={`${exp.status === 'Current' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700'} px-4 py-2 rounded-full text-sm font-semibold border`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.status}
                      </motion.div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      variants={achievementVariants}
                    >
                      <FaMapMarkerAlt className="text-red-500 mr-3 text-lg" />
                      <span className="font-medium">{exp.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                      variants={achievementVariants}
                    >
                      <FaCalendarAlt className="text-blue-500 mr-3 text-lg" />
                      <span className="font-medium">{exp.period}</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {exp.description}
                  </motion.p>

                  {/* Key Achievements */}
                  <div className="mb-6 sm:mb-8">
                    <motion.h4 
                      className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <FaTrophy className="text-yellow-500 mr-3" />
                      Key Achievements
                    </motion.h4>
                    <motion.div 
                      className="space-y-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          variants={achievementVariants}
                          className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 group/item cursor-default"
                          whileHover={{ x: 5, scale: 1.02 }}
                          custom={idx}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Technologies/Skills */}
                  <div>
                    <motion.h4 
                      className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <FaStar className="text-purple-500 mr-3" />
                      Technologies & Skills
                    </motion.h4>
                    <motion.div 
                      className="flex flex-wrap gap-2 sm:gap-3"
                      variants={containerVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          variants={achievementVariants}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05, y: -2 }}
                          custom={idx}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
