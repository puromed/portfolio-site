import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, color } from 'framer-motion'; // Importing framer-motion for animations

// Importing components
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal'; // Importing the modal component

// Importing icons for skills
import Html5Icon from '../components/icons/Html5Icon';
import Css3Icon from '../components/icons/Css3Icon';
import JavascriptIcon from '../components/icons/JavascriptIcon';
import ReactIcon from '../components/icons/ReactIcon';
import PythonIcon from '../components/icons/PythonIcon';
import PhpIcon from '../components/icons/PhpIcon';
import CIcon from '../components/icons/CIcon';
import MySqlIcon from '../components/icons/MySqlIcon';
import MongoIcon from '../components/icons/MongoIcon';
import GitIcon from '../components/icons/GitIcon';
import GithubIcon from '../components/icons/GithubIcon';
import { useMemo } from 'react';

// right hero typewriter element
const CodeTypewriter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [ isDeleting, setIsDeleting] = useState(false);

  const codeSnippets = [
    {
      language: 'JavaScript',
      code: `const developer = {
      name: 'Arfan Haziq',
      skills: [ "React", "Node.js"],
      passionate: true,
    };`,
       color: 'text-yellow-400' // JavaScript yellow
    },
    {
      language: 'Python',
      code: `class Developer:
    def __init__(self):
        self.name = 'Arfan'
        self.learning = True`,
      color: 'text-blue-500' // Python blue
    },
    {
      language: 'PHP',
      code: `<?php
    class Portfolio {
      public $projects = [];
      public $skills = "growing";
      }`,
      color: 'text-purple-600' // PHP purple
    },
    {
      language: 'C++',
      code: `#include <iostream>
      using namespace std;
      int main() {
        cout << "Hello, World!";
        return 0;
      }`,
      color: 'text-red-600' // C++ red
    }
  ];

  useEffect(() => {
    const currentSnippet = codeSnippets[currentIndex];
    const targetText = currentSnippet.code;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
        }
        }
      }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentIndex]);

    const currentSnippet = codeSnippets[currentIndex];

    return (
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sky-400">//</span>
          <span className={`${currentSnippet.color} font-semibold`}>
            {currentSnippet.language}
          </span>
        </div>
        <pre className="text-slate-300 leading-relaxed">
          {currentText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    );
  };





function HomePage() {
  // Animation variants for the hero section

  const skills = [
    { name: 'HTML', icon: <Html5Icon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Frontend Development' },
    { name: 'CSS', icon: <Css3Icon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Frontend Development' },
    { name: 'JavaScript', icon: <JavascriptIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Frontend Development' },
    { name: 'React', icon: <ReactIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Frontend Development' },
   

    // Backend Development
    { name: 'Python', icon: <PythonIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Backend Development' },
    { name: 'PHP', icon: <PhpIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Backend Development' },
    { name: 'C++', icon: <CIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Backend Development' },

    // Database Management
    { name: 'MySQL', icon: <MySqlIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Database Management' },
    { name: 'MongoDB', icon: <MongoIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Database Management' },

    // Tools & Version Control
    { name: 'Git', icon: <GitIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Tools & Version Control' },
    { name: 'GitHub', icon: <GithubIcon className="w-10 h-10 md:w-12 md:h-12" />, category: 'Tools & Version Control' },


  ];

  // === Projects Data ===
  const projectsData = [
    {
      id: 'student-merit-system', 
      title: 'Student Merit System', 
      category: 'Web development', 
      imageUrl: '/images/projects/emerit.jpg', 
      shortDescription: 'A web-based merit tracking system using CakePHP.', 
      longDescription: 'This project is a web-based merit tracking system developed using CakePHP. It allows users to track and manage student merits efficiently. The system includes features such as user authentication, merit tracking, and reporting functionalities. The project was developed as part of my coursework and showcases my skills in web development and database management.', 
      technologies: ['PHP', 'CakePHP 5.x', 'Bootstrap 5', 'MySQL'], 
      liveUrl: null, 
      repoUrl: null,
    },
    {
      id: 'train-booking-system', 
      title: 'Train Booking System', 
      category: 'Programming Project', 
      imageUrl: '/images/projects/trainProject.png', 
      shortDescription: 'A console-based train booking system using C++.', 
      longDescription: 'This project is a console-based train booking system developed using C++. It allows users to book train tickets, view available trains, and manage bookings. The system includes features such as user authentication, ticket booking, and reporting functionalities. The project was developed as part of my coursework and showcases my skills in programming and data structures.', 
      technologies: ['C++', 'Data Structures', 'OOP'], 
      liveUrl: null, 
      repoUrl: null,
    },
    {
      id: 'pptx-to-pdf-converter-gui', 
      title: 'PPTX to PDF Converter GUI', 
      category: 'Side project', 
      imageUrl: '/images/projects/pptxtopdf.png', 
      shortDescription: 'A Python GUI to convert PowerPoint files to PDF.', 
      longDescription: 'A simple conversion tools that converts PowerPoint files (.pptx) to PDF format using Python. The GUI is built with tkinter and uses the win32com.client library to handle the conversion process. This project demonstrates my ability to create user-friendly applications and integrate with Windows APIs.', 
      technologies: ['Python', 'tkinter', 'pywin32'], 
      liveUrl: null, 
      repoUrl: null,
    },
    {
      id: 'document-analyser', 
      title: 'Document Analyzer using OpenAI API and Pinecone Vector Database', 
      category: 'Programming Project', 
      imageUrl: '/images/projects/docAnalyze.png', 
      shortDescription: 'A document analysis tool leveraging AI and vector databases.', 
      longDescription: 'A project that utilizes OpenAI API and Pinecone vector database to analyze documents. It allows users to upload documents and receive insights based on AI analysis. The project showcases my skills in AI integration and database management. Develop for an artifact for design science research, this project aims to demonstrate the potential of AI in document analysis and retrieval. However, it is still in the early stages of development and requires further refinement.', 
      technologies: ['Python', 'RAG', 'React'], 
      liveUrl: null, 
      repoUrl: null,
    },
    {
      id: 'maradock', 
      title: 'Maradock', 
      category: 'Web development', 
      imageUrl: '/images/projects/Maradock.png', 
      shortDescription: 'A PHP-based student dashboard for academic management.', 
      longDescription: 'Maradock is a comprehensive student dashboard that helps students manage their academic journey effectively. The application includes features such as assignment tracking, GPA calculation, and dynamic user interface elements. It is built using PHP and MySQL, providing a robust backend for data management. The project was developed to enhance my skills in web development and database integration.', 
      technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'], 
      liveUrl: null, 
      repoUrl: null,
    },
    {
      id: 'car-rental-system', 
      title: 'Car Rental System', 
      category: 'Programming Project', 
      imageUrl: '/images/projects/carProject.png', 
      shortDescription: 'A C++ console car rental system with admin/user roles.', 
      longDescription: 'A C++ console based system that includes dual roles (Admin/User), booking management and car management. It is a project to enhance previous code I once did and it is now more organized and structured.', 
      technologies: ['C++', 'Visual Studio 2022'], 
      liveUrl: null, 
      repoUrl: null,
    }
  ];

  const projectCategories = [
    "All",
    "Web development",
    "Programming Project",
    "Side project"
  ]; // Side project is empty for now

  // State for active project category filter
  const [activeCategory, setActiveCategory] = useState("All");

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    // Will implement modal later
    console.log("opening modal for: ", project.title);
  };

  // Memoize filtered projects to avoid re-filtering on every render
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory, projectsData]);

  const categories = [
    'Frontend Development',
    'Backend Development',
    'Database Management',
    'Tools & Version Control',
    'Frameworks & Libraries',
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const slideIn = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    // Container for homepage content
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={stagger}
        id="hero"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-40 transition-opacity duration-500"
            style={{
              backgroundColor: '#ff99c2',
              backgroundImage: `
              radial-gradient(at 68% 51%, hsla(245,88%,72%,1) 0px, transparent 50%),
              radial-gradient(at 7% 76%, hsla(259,62%,76%,1) 0px, transparent 50%),
              radial-gradient(at 33% 32%, hsla(181,90%,74%,1) 0px, transparent 50%),
              radial-gradient(at 89% 11%, hsla(204,85%,70%,1) 0px, transparent 50%),
              radial-gradient(at 54% 0%, hsla(79,85%,78%,1) 0px, transparent 50%)
            `,
            }}
          />
          {/* Add an overlay for better text readability */}
          <div className="absolute inset-0 z-[1] bg-black/50 backdrop-blur-md" />
        </div>

        {/* Content container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div variants={slideIn} className="md:w-1/2 text-left md:pr-12">
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
            >
              Mohammad Arfan Haziq Bin Razlan
            </motion.h1>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-700/60 text-white font-bold py-2 px-4 rounded-lg backdrop-blur-sm shadow">
                Web Developer
              </span>
              <span className="bg-slate-700/60 text-white font-bold py-2 px-4 rounded-lg backdrop-blur-sm shadow">
                Backend Developer
              </span>
              <span className="bg-slate-700/60 text-white font-bold py-2 px-4 rounded-lg backdrop-blur-sm shadow">
                Tech Enthusiast
              </span>
            </motion.div>

            <motion.p
              variants={fadeIn}
              className="text-lg text-white mb-8 leading-relaxed"
            >
              Welcome to my digital space! I'm an aspiring Information Science
              student with a passion for technology and web development. My
              journey in the world of coding and technology has been fueled by
              curiosity and a desire to create impactful solutions.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              {/* <a
                href="/resume/ArfanResume.pdf"
                download="ArfanResume.pdf"
                className={"inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg " +
                  "transition duration-200 shadow-md hover:shadow-lg transform hover:scale-105 " +
                  "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                }
              >
                Download My Resume
              </a> } disable for now */}
              <Link
                to="/about"
                className="bg-slate-600/50 hover:bg-slate-500/50 text-slate-100 font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg backdrop-blur-sm"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Code Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative w-full h-[350px] md:h-[400px] bg-slate-900/90 rounded-2xl backdrop-blur-sm border border-slate-700/50 shadow-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 p-4 border-b border-slate-700/50">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-2">~/portfolio</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <CodeTypewriter />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Snippet Section with Scroll Animation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the section is in view
        transition={{ duration: 0.7, ease: 'easeOut' }}
        id="about-snippet"
        className="container mx-auto px-6 py-16 md:py-20"
      >
        {/* Card Wrapper */}
        <div className="bg-slate-800 rounded-xl shadow-lg max-w-4xl mx-auto p-8 md:p-12 text-center overflow-hidden">
          {/* optional icon */}
          <div className="mb-6 text-sky-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.08a1 1 0 001.998-.001L18 6.92a1 1 0 000-1.84l-7-3zM3 9.38l-.714-.31a1 1 0 00-1.47 1.382l.714.31A1 1 0 002 11v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-.606-.919zM17.714 9.07l.714.31a1 1 0 10-1.47-1.382l-.714-.31A1 1 0 0018 11v3a1 1 0 100 2h1a1 1 0 001-1v-3a1 1 0 00-.286-.714zM10 11.586l-4.707 2.14a1 1 0 00-.586 1.414V17a1 1 0 001 1h8a1 1 0 001-1v-1.86a1 1 0 00-.586-1.414L10 11.586z"></path>
            </svg>
          </div>

          {/* Heading inside card */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100 tracking-tight">
            A little about Me
          </h2>

          {/* paragraph inside card */}
          <p className="max-w-2xl mx-auto text-slate-300 mb-10 leading-relaxed text-lg">
            I am an aspiring Information Science student with a passion for technology and web development. I am an
            enthusiastic learner with a keen interest in web development and backend technologies. My journey in
            technology has been fueled by curiosity and a desire to create impactful solutions.
          </p>
          {/* Button inside card */}
          <Link
            to="/about"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
          >
            Read More About Me
          </Link>
        </div>
      </motion.section>

      {/* Skills Section with Scroll Animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="skills"
        className="container mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-100 tracking-tight">My Skills</h2>
        <p className="text-lg md:text-xl text-center text-slate-400 mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto">
          A curated list of my skills and technologies I am proficient in...
        </p>

        {categories.map((category) => {
          const skillInCategory = skills.filter((skill) => skill.category === category);
          if (skillInCategory.length === 0) return null; // Skip empty categories
          return (
            <div key={category} className="mb-12 md:mb-16">
              <h3 className="text-2xl  md:text-3xl font-semibold text-sky-400 mb-6 md:mb-8 text-center md:text-left">
                {category}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {skillInCategory.map((skill, index) => (
                  <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </motion.section>

      {/* === Projects section (updated) */}
     <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{ duration: 0.8 }}
  id="featured-projects"
  className="container mx-auto px-6 py-16 md:py-20"
>
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-100 tracking-tight">Featured Projects</h2>
  <p className="text-lg md:text-xl text-center text-slate-400 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
    Here are some of my notable projects that showcase my skills and passion for development
  </p>
  
  {/* Filter tabs with improved styling */}
  <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16">
    {projectCategories.map((category) => (
      <button
        key={category}
        className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
          activeCategory === category
            ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
            : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-600/50 backdrop-blur-sm'
        }`}
        onClick={() => setActiveCategory(category)}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Modern Projects grid with better aspect ratios */}
  <motion.div className="max-w-7xl mx-auto">
    <AnimatePresence mode="wait">
      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center py-16"
        >
          <div className="text-slate-400 text-lg">
            No projects found in this category.
          </div>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.slice(0, 6).map((project, index) => ( // Limit to 6 projects for better layout
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut",
                delay: index * 0.1 // Stagger animation
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-sky-500/50">
                {/* Project Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-sky-500/90 text-white text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-slate-700/60 text-slate-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-slate-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleCardClick(project)}
                    className="w-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 hover:from-sky-500 hover:to-blue-600 text-sky-400 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-sky-500/30 hover:border-transparent group-hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>

        </motion.div>
          
        </motion.section>
      {/* End of Projects section */}

      {/* === Call to Action === */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        id="call-to-action"
        className="py-16 md:py-24"
      >
       {/* This inner div is the main card for the CTA */}
       <div className="relative container max-w-4xl mx-auto rounded-xl overflow-hidden 
       p-10 md:p-16 shadow-2xl
        bg-gradient-to-br from-sky-500/50 via-indigo-600/40 to-purple-600/30 
        backdrop-blur-lg border border-white/10" 
       >
        <div className="relative text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Interested in collaborating or have a project in mind?
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8">
            Let's connect and bring your ideas to life!
          </p>
          <Link to="/contact" className={"inline-block bg-white text-sky-600 font-bold py-3 px-10 rounded-lg text-lg" +
            "shadow-xl transform transition-all duration-300 ease-in-out " + "hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl " +
            "focus:outline-none focus:ring-4 focus:ring-white/60"
          }>
            Contact Me
          </Link>
        </div>

       </div>
       
      </motion.section>
      {/* End of Call to Action */}

      {/* Project Details Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
      
    </div>
  );
}

export default HomePage;