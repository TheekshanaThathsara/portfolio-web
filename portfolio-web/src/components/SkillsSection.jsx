import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaDatabase, 
  FaGitAlt, FaCode, FaFigma,
  FaPalette, FaSwatchbook
} from 'react-icons/fa';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Skill categories with their respective skills and icons
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <FaNodeJs className="text-gray-400" /> },
        { name: "MongoDB", icon: <FaDatabase className="text-green-600" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "VSCode", icon: <FaCode className="text-blue-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> }
      ]
    },
    {
      title: "UI/UX",
      skills: [
        { name: "Adobe XD", icon: <FaPalette className="text-pink-600" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        { name: "Tailwind CSS", icon: <FaSwatchbook className="text-cyan-500" /> }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-600">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-4">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full px-4 py-2 text-sm transition-all hover:shadow-md hover:scale-105"
                  >
                    <span className="mr-2 text-lg">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
