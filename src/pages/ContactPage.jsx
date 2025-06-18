import React, { useState } from 'react';
import { motion} from 'framer-motion';
import GitHubCalendar from 'react-github-calendar'; // Changed import

// Import icon components
import LinkedInIcon from '../components/icons/LinkedInIcon';
import GithubIcon from '../components/icons/GithubIcon';
import GmailIcon from '../components/icons/GmailIcon';

// Animation variants (outside component)
const sectionVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }}
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function ContactPage() {
  
  // Github data
  const GITHUB_USERNAME = "puromed" 
  const MY_EMAIL = "arfanhaziq33@gmail.com"
  const LINKEDIN_URL = "https://www.linkedin.com/in/mohammad-arfan-haziq-bin-razlan-0180482b5/"
  const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`
  // End Github data

  // GitHub Calendar section update
 const calendarTheme = {
       light: ['#f1f5f9', '#d1e7dd', '#a3cfbb', '#588157', '#3a5a40'],
  dark: ['#1e293b', '#2d3748', '#4a5568', '#588157', '#3a5a40']
  };

    return (
     <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0}}
        transition={{ duration: 0.5}}
        className='container mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-20 md:space-y-24'
      >
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2}}
          className='text-center pt-4 md:pt-0 pb-8 md:pb-12'
        >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-4">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto">
          I'm excited to discuss new projects, creative ideas, or opportunities. Feel free to reach out through any of the channels below!
        </p>
        </motion.header>

        {/* Direct contact methods section */}
        <motion.section 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2}}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <motion.a
              href={`mailto:${MY_EMAIL}`}
              variants={itemVariants}
              className='bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-sky-500/20'
            >
              <div className="mb-4 text-sky-400 group-hover:scale-110 transition-transform">
                <GmailIcon className="w-10 h-10"/>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-1">Email Me</h3>
              <p className="text-sm text-slate-400 truncate group-hover:text-sky-300 transition-colors">{MY_EMAIL}</p>
            </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-sky-500/20"
          >
            <div className="mb-4 text-sky-400 group-hover:scale-110 transition-transform">
              <LinkedInIcon  className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-1">LinkedIn</h3>
            <p className="text-sm text-slate-400 group-hover:text-sky-300 transition-colors">Connect Professionally</p>
          </motion.a>

          {/* GitHub */}
          <motion.a 
            href={GITHUB_PROFILE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col items-center text-center group hover:shadow-lg hover:shadow-sky-500/20"
          >
            <div className="mb-4 text-sky-400 group-hover:scale-110 transition-transform">
              <GithubIcon  className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-1">GitHub</h3>
            <p className="text-sm text-slate-400 group-hover:text-sky-300 transition-colors">View My Code</p>
          </motion.a>
          </div>
        </motion.section>

        {/* GitHub Contribution Calendar Section */}
         <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='py-12 md:py-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-8 md:mb-10 text-center tracking-tight'>
            Github Contributions
          </h2>
          <div className="bg-slate-800/60 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-xl border border-slate-700/50 max-w-4xl mx-auto">
                <GitHubCalendar
                    username={GITHUB_USERNAME}
                    colorScheme="dark"
                    theme={calendarTheme}
                    fontSize={12}
                />
                <p className="text-sm text-slate-500 mt-4 text-center">
                    Contributions are updated daily. Check back often!
                </p>
            </div>
        </motion.section>
      </motion.div>
    );
  }

  export default ContactPage;
