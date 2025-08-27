import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });
    try {
      // Try submitting to a Netlify Function that sends email via SendGrid
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus({ submitted: true, submitting: false, error: null });
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const text = await res.text();
      throw new Error(text || 'Function error');
    } catch (error) {
      console.warn('Serverless send failed, falling back to mailto —', error);

      // Fallback: open user's default mail client with pre-filled subject/body
      const subject = encodeURIComponent(`Portfolio message from ${formData.name || formData.email || 'Website'}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      const mailto = `mailto:thathsaragpht@gmail.com?subject=${subject}&body=${body}`;

      // Attempt to open mail client
      window.location.href = mailto;

      // Mark as submitted (user will send via their mail client)
      setFormStatus({ submitted: true, submitting: false, error: null });
      setFormData({ name: '', email: '', message: '' });
    }
  };

  // Social media links - replace with your actual links
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/TheekshanaThathsara',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/theekshana-thathsara-03947828a',
      color: 'hover:text-blue-700 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:thathsaragpht@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out through the form below or connect with me on social media.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-5 sm:p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
            
            {formStatus.submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Thank you for your message. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setFormStatus({ submitted: false, submitting: false, error: null })}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" data-netlify="true" netlify-honeypot="bot-field">
                {/* Netlify form hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                {formStatus.error && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 text-red-700 dark:text-red-400">
                    <p>{formStatus.error}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`flex items-center justify-center w-full px-6 py-3 rounded-md text-white text-lg font-medium transition-all duration-300 ${
                    formStatus.submitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {formStatus.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Info & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg p-5 sm:p-6 md:p-8 text-white h-full">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="mb-8">
                <p className="mb-4">
                  I'm currently available for freelance work and full-time positions. If you have a project that you want to get started, think you need my help with something, or just want to say hello, then get in touch.
                </p>
                <p>
                  Based in Colombo, Sri Lanka. Available for remote work worldwide.
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-5">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-white opacity-80 hover:opacity-100 transition-opacity ${social.color}`}
                      aria-label={social.name}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-medium mb-4">Preferred contact method</h4>
                <p>
                  Email is the best way to contact me for any inquiries. I typically respond within 24 hours.
                </p>
                <a 
                  href="mailto:thathsaragpht@gmail.com" 
                  className="inline-block mt-3 border-b-2 border-white hover:border-opacity-100 border-opacity-50 font-medium transition-all"
                >
                  thathsaragpht@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
