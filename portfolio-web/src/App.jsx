import { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { ThemeProvider } from './context/ThemeContext'
import ViewportIndicator from './components/common/ViewportIndicator'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading state for initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
              }}
              className="text-4xl font-bold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                Portfolio
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="App relative"
          >
            <Header />
            <main className="overflow-hidden">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </main>
            <Footer />
               <ViewportIndicator />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App
