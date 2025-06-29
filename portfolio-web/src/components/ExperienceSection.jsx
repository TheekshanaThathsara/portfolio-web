import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample experience data - replace with your actual experience
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'University of Colombo School of Computing',
      location: 'San Colombo, Sri Lanka',
      date: '2023 - Present',
      description: 'Gained strong academic experience in data structures and algorithms, software engineering, design patterns, web development, mobile app development, human-computer interaction, and project management..',
      skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Web Development', 'UI/UX Design']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full stack Developer',
      organization: ' Device Gallery Hub',
      location: 'Colombo, Sri Lanka',
      date: '2025 - Present',
      description: 'Developed responsive user interfaces for multiple client projects. Collaborated with design and back-end teams to implement seamless user experiences. Reduced load time by 40% through code optimization.',
      skills: ['React', 'JavaScript', 'Tailwindcss', 'Express', 'MongoDB', 'NodeJs' ]
    },
    //{
    //   id: 3,
    //   type: 'work',
    //   title: 'Full-stack Developer',
    //   organization: 'Digital Innovations Inc.',
    //   location: 'San Jose, CA',
    //   date: '2023 - 2024',
    //   description: 'Led development of e-commerce platform serving 10,000+ daily users. Implemented secure payment processing system and user authentication. Optimized database queries reducing server response time by 60%.',
    //   skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Payment APIs']
    // },
    // {
    //   id: 4,
    //   type: 'education',
    //   title: 'UI/UX Design Certification',
    //   organization: 'Design Institute Online',
    //   location: 'Remote',
    //   date: '2024',
    //   description: 'Advanced certification in user interface and experience design. Focused on accessibility, user research methodologies, and creating design systems. Completed 5 real-world projects with client feedback.',
    //   skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Design Systems', 'Prototyping']
    // },
    // {
    //   id: 5,
    //   type: 'work',
    //   title: 'Senior Frontend Developer',
    //   organization: 'InnovateTech Solutions',
    //   location: 'San Francisco, CA',
    //   date: '2024 - Present',
    //   description: 'Currently leading a team of 5 developers building a next-generation SaaS platform. Implementing CI/CD pipelines and modern frontend architecture. Mentoring junior developers and establishing best practices.',
    //   skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'CI/CD', 'Team Leadership']
    // }
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
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Experience & Education
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and academic background that shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="flex justify-center px-2 sm:px-4">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-full max-w-3xl md:px-4"
          >
            {/* Timeline line */}
            <div className="absolute left-5 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`mb-12 flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-8 md:left-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-gray-900 border-3 sm:border-4 border-blue-500 dark:border-purple-600 transform -translate-x-1/2 flex items-center justify-center z-10">
                  {exp.type === 'work' ? (
                    <FaBriefcase className="text-blue-500 dark:text-purple-500 text-sm sm:text-lg md:text-xl" />
                  ) : (
                    <FaGraduationCap className="text-blue-500 dark:text-purple-500 text-sm sm:text-lg md:text-xl" />
                  )}
                </div>
                
                {/* Timeline content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 sm:pl-16 md:pl-0`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 sm:p-4 md:p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-0">
                        {exp.title}
                      </h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-0.5 rounded inline-block sm:ml-3 mb-2 sm:mb-0 w-fit">
                        {exp.type === 'work' ? 'Work' : 'Education'}
                      </span>
                    </div>
                    
                    <div className="mb-3 sm:mb-4">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {exp.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.location}
                      </p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <FaCalendarAlt className="mr-1" />
                        {exp.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 3).map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 3 && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          +{exp.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
