import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, FaPhp,
  FaGitAlt, FaGithub, FaCode, FaFigma,
  FaAndroid, FaMobile, FaJira
} from 'react-icons/fa';
import { 
  SiCplusplus, SiMongodb, SiMysql, SiPostgresql, 
  SiSpring, SiExpress, SiFlutter, SiDart, 
  SiKotlin, SiFirebase, SiPostman, SiIntellijidea,
  SiReactos
} from 'react-icons/si';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  // Skill categories with their respective skills and icons
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
        { name: "C", icon: <FaCode className="text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
        { name: "Dart", icon: <SiDart className="text-blue-400" /> },
        { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "React Native", icon: <SiReactos className="text-blue-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Spring Boot", icon: <SiSpring className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Firebase Firestore", icon: <SiFirebase className="text-yellow-500" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VSCode", icon: <FaCode className="text-blue-500" /> },
        { name: "IntelliJ", icon: <SiIntellijidea className="text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        { name: "Jira", icon: <FaJira className="text-blue-600" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              My Skills
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-500 border border-gray-100 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 relative overflow-hidden"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-bold mb-6 text-gray-800 dark:text-white border-b pb-3 border-gray-200 dark:border-gray-600 flex items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: idx * 0.2
                    }}
                  />
                  {category.title}
                </motion.h3>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mt-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div 
                      key={skillIdx}
                      variants={skillVariants}
                      className="group/skill flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-2.5 text-sm transition-all duration-300 cursor-pointer relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      whileTap={{ scale: 0.95 }}
                      custom={skillIdx}
                    >
                      {/* Animated background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.span 
                        className="mr-2 text-lg relative z-10"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.2
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      
                      <motion.span 
                        className="text-gray-700 dark:text-gray-300 font-medium relative z-10 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300"
                        initial={{ x: 0 }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill.name}
                      </motion.span>
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover/skill:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
