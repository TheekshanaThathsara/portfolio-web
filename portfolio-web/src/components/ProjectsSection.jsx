import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { cardClass, buttonClass, textClass } from '../utils/styleUtils';
import timberlyImage from '../assets/timberly.jpeg';
import devicegalleryhubImage from '../assets/devicegalleryhub.jpeg';
import travelsriImage from '../assets/travelsri.jpeg';
import portfolioImage from '../assets/portfoliopic.jpeg'; // Assuming you have a portfolio image


const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterTag, setFilterTag] = useState(null);

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Timberly - Smart Furniture Marketplace Platform",
      summary: "Timberly is a full-stack web platform that connects customers and furniture suppliers through custom orders, real-time tracking, and efficient inventory management with product listings, cart functionality, and secure checkout process.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","Stripe"],
      github: "https://github.com/sajeeahrasmi/Timberly",
      demo: "#",
      image: timberlyImage
    },
    {
      id: 2,
      title: "Device Gallery Hub — Responsive E-Commerce Platform for Mobile Accessories",
      summary: "A full-featured MERN stack e-commerce solution offering a seamless, responsive shopping experience for mobile accessories across desktop, tablet, and mobile devices",
      technologies: ["React", "Express", "Tailwind CSS", "MongoDB", "Node.js"],
      github: "https://github.com/TheekshanaThathsara/device-gallery-hub",
      demo: "#",
      image: devicegalleryhubImage
    },
    {
      id: 3,
      title: "TravelSri - All-in-One Travel Planning Platform for Sri Lanka",
      summary: "A responsive web application that helps users plan personalized trips across Sri Lanka by combining guides, hotel bookings, transport, and travel packages into one seamless experience.",
      technologies: ["React", "Java Springboot","Chart.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: travelsriImage
    },
    {
      id: 4,
      title: "Portfolio Website",
      summary: "Personal portfolio showcasing projects and skills with a modern, responsive design.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourdomain.com",
      image: portfolioImage
    },
    {
      id: 5,
      title: "Fitness Tracker",
      summary: "Mobile-responsive application for tracking workouts, nutrition, and fitness goals with visual progress reports.",
      technologies: ["React Native", "Express.js", "MongoDB", "D3.js"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      summary: "Comprehensive analytics dashboard for monitoring social media engagement across multiple platforms.",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Social Media APIs"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  // Get all unique technologies from projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects based on selected tag
  const filteredProjects = filterTag 
    ? projects.filter(project => project.technologies.includes(filterTag))
    : projects;

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              My Projects
            </span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </h2>
          <p className={`${textClass.secondary} max-w-2xl mx-auto px-4 sm:px-0`}>
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
          
          {/* Filter tags - Desktop */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 mt-6 mb-8">
            <motion.button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                filterTag === null 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => setFilterTag(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            
            {allTechnologies.map((tech, idx) => (
              <motion.button
                key={idx}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filterTag === tech 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setFilterTag(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </div>
          
          {/* Filter dropdown - Mobile */}
          <div className="md:hidden mt-4 mb-6 sm:mt-6 sm:mb-8 px-4">
            <div className="relative">
              <select 
                value={filterTag || ""}
                onChange={(e) => setFilterTag(e.target.value || null)}
                className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white appearance-none pr-10"
                aria-label="Filter projects by technology"
              >
                <option value="">All Projects</option>
                {allTechnologies.map((tech, idx) => (
                  <option key={idx} value={tech}>{tech}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`${cardClass} overflow-hidden cursor-pointer flex flex-col h-full`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-3 xs:p-4 sm:p-6">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className={`${textClass.secondary} text-xs xs:text-sm sm:text-base mb-3 sm:mb-4 line-clamp-3`}>
                  {project.summary}
                </p>
                
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="mr-1.5" />
                    <span className="whitespace-nowrap">GitHub</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="mr-1.5" />
                    <span className="whitespace-nowrap">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-lg ${textClass.secondary}`}>
              No projects found with the selected technology.
            </p>
            <button
              onClick={() => setFilterTag(null)}
              className={`mt-4 ${buttonClass.outline} text-sm px-4 py-2`}
            >
              Show All Projects
            </button>
          </motion.div>
        )}
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-52 sm:h-72 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="p-5 sm:p-7">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className={`${textClass.secondary} text-base sm:text-lg mb-6`}>
                  {selectedProject.summary}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm font-medium px-3 py-1 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={selectedProject.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClass.secondary}
                  >
                    <FaGithub className="mr-2" />
                    View Source Code
                  </a>
                  <a 
                    href={selectedProject.demo} 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={buttonClass.primary}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Visit Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
