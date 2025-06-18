import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules'; // Added EffectCoverflow for 3D effect

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'; // Added Coverflow effect CSS

// Import your achievement card components
import AchievementCarouselCard from '../components/AchievementCarouselCard';
import AchievementGridCard from '../components/AchievementGridCard';

//Import the icons (For now, using placeholder icons)
import GitHubIcon from '../components/icons/GithubIcon'; // Change to Github foundation logo later
import MongoIcon from '../components/icons/MongoIcon'; // Change to RAG logo later
import ReactIcon from '../components/icons/ReactIcon'; // Change to Coursera logo later
// will add more icons as needed, for dean list, just use react icon for now




const PlaceholderIcon = ({className}) => ( // Re-using a simple placeholder
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> 
);

const achievementsData = [
  // list of achievements
 {
    id: 'cert-mongodb-rag', title: 'Building RAG Apps', category: 'Certifications', organization: 'MongoDB', date: 'May 2025', description: 'Earned badge for Retrieval Augmented Generation apps with MongoDB.', 
    icon: <img src="/images/achieve_icon/mongoRAG.png" alt="MongoDB RAG Certificate" className="w-full h-full object-contain"/>, 
    link: 'https://www.credly.com/earner/earned/badge/914adccb-d40a-47d5-bd84-b1fd95d1d943', featured: true
  },
  {
    id: 'cert-github-foundations', title: 'GitHub Foundations', category: 'Certifications', organization: 'GitHub', date: 'April 2025', description: 'Mastered version control and collaboration with GitHub.', 
    icon: <img src="/images/achieve_icon/github_foundation.png" alt="GitHub Foundations Certificate" className="w-full h-full object-contain"/>, 
    link: 'https://www.credly.com/earner/earned/badge/c4bdb5b5-22cb-4224-b70f-957759548315', featured: true
  },
  {
    id: 'deanlist-sem4', title: "Dean's List - Sem 4", category: 'Academic Excellence', organization: 'UiTM', date: 'Feb 2025', description: 'Academic excellence with a 3.56 GPA.', icon: <PlaceholderIcon className="text-purple-400"/>, link: null
  },
  {
    id: 'cert-ibm-chatbot', title: 'Build Your Own Chatbot', category: 'Certifications', organization: 'IBM', date: 'March 2025', description: 'Foundation in chatbot creation using IBM services.', icon: <img src="/images/achieve_icon/ibm.png" alt="IBM Data Science Certificate" className="w-full h-full object-contain"/> , link: '#'
  },
  {
    id: 'deanlist-sem3', title: "Dean's List - Sem 3", category: 'Academic Excellence', organization: 'UiTM', date: 'Aug 2024', description: 'Academic excellence with a 3.84 GPA.', icon: <PlaceholderIcon className="text-purple-400"/>, link: null
  },
  {
    id: 'cert-python-datascience', title: 'Python for Data Science, AI & Development', category: 'Certifications', organization: 'IBM (Coursera)', date: 'Jan 2024', description: 'Python programming for data science and AI.', 
    icon: <img src="/images/achieve_icon/ibm.png" alt="IBM Data Science Certificate" className="w-full h-full object-contain"/>, 
    link: 'https://coursera.org/verify/CGDLNWRGM9HL', featured: true
  },
  {
    id: 'cert-stanford-cip', title: "Code in Place Participant", category: 'Certifications', organization: 'Stanford University', date: 'April 2024', description: 'Completed Stanford\'s introductory programming course.', 
    icon: <img src="/images/achieve_icon/stanford.png" alt="Stanford Code in Place" className="w-full h-full object-contain"/>, 
    link: 'https://codeinplace.stanford.edu/cip4/certificate/4hzyds', featured: true
  },
  {
    id: 'extracurricular-smf', title: 'Member, SMF', category: 'Leadership & Extracurricular', organization: 'Info. Science Faculty, UiTM', date: 'Oct 2024 - Present', description: 'Event planning and student welfare initiatives.', icon: <PlaceholderIcon className="text-indigo-400"/>, link: null
  }
];

const achievementCategories = [
  'Academic Excellence',
  'Certifications',
  'Leadership & Extracurricular'
];

function AchievementsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // To track main slide
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for manual control

  const featuredAchievements = achievementsData.filter(ach => ach.featured).slice(0, 5); // Max 5 featured

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Modified auto-scroll functionality
  useEffect(() => {
    if (swiperInstance && featuredAchievements.length > 1) {
      const timer = setInterval(() => {
        if (!swiperInstance.destroyed) {
          swiperInstance.slideNext();
        }
      }, 5000);

      return () => {
        clearInterval(timer);
        if (swiperInstance && !swiperInstance.destroyed) {
          swiperInstance.autoplay.stop();
        }
      };
    }
  }, [swiperInstance, featuredAchievements.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16 md:space-y-20"
    >
      <motion.header 
        variants={sectionVariants} initial="hidden" animate="visible" // Animate header immediately
        className="text-center pt-4 md:pt-8 pb-8 md:pb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight mb-3">
          My Achievements & Recognitions
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          A showcase of my academic milestones, certifications, and other notable accomplishments.
        </p>
      </motion.header>

      {/* Achievements Statistics Dashboard */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3}}
        className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Total Achievements */}
            <motion.div
              whileHover={{scale: 1.05, y: -5}}
              transition={{ duration: 0.2}}
              className="bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl p-6 text-center border border-sky-500/30 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0}}
                  whileInView={{ scale: 1}}
                  transition={{ duration: 0.5, delay: 0.1}}
                  className="text-3xl md:text-4xl font-bold text-sky-400 mb-2"
                  >
                  {achievementsData.length}
                </motion.div>
                <p className="text-slate-300 text-sm font-medium"> Total Achievements</p>
                <div className="mt-2 h-1 bg-sky-500/300 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-full bg-sky-500 rounded-full"
                    />
                </div>
                  </motion.div>

            {/* Academic Excellence */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5}}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-xl p-6 text-center border border-purple-500/30 backdrop-blur-sm"
            >
              <motion.div
              initial={{ scale: 0}}
              whileInView={{ scale: 1}}
              transition={{ duration: 0.5, delay: 0.2}}
              className="text-3xl md:text-4xl font-bold text-purple-400 mb-2"
            >
                {achievementsData.filter(a => a.category === 'Academic Excellence').length}
              </motion.div>
              <p className="text-slate-300 text-sm font-medium"> Academic Honors</p>
              <div className="mt-2 h-1 bg-purple-500/30 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(achievementsData.filter(a => a.category === 'Academic Excellence').length / achievementsData.length) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-full bg-purple-500 rounded-full"
                />
              </div>
              </motion.div>

            {/* Certifications */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 text-center border border-green-500/30 backdrop-blur-sm"
              >
                <motion.div
                 initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                 className="text-3xl md:text-4xl font-bold text-green-400 mb-2"
                >
                  {achievementsData.filter(a => a.category === 'Certifications').length}
                </motion.div>
                <p className="text-slate-300 text-sm font-medium">Certifications</p>
                <div className="mt-2 h-1 bg-green-500/30 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(achievementsData.filter(a => a.category === 'Certifications').length / achievementsData.length) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </motion.div>
            
          {/* Leadership & Extracurricular */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl p-6 text-center border border-orange-500/30 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold text-orange-400 mb-2"
              >
                {achievementsData.filter(a => a.category === 'Leadership & Extracurricular').length}
              </motion.div>
              <p className="text-slate-300 text-sm font-medium">Leadership</p>
              <div className="mt-2 h-1 bg-orange-500/30 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(achievementsData.filter(a => a.category === 'Leadership & Extracurricular').length / achievementsData.length) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-full bg-orange-500 rounded-full"
                />
              </div>
            </motion.div>
              
          </div>
        </motion.section>

       


      {/* "Latest Highlights" Carousel Section */}
      {featuredAchievements.length > 0 && (
        <motion.section 
          variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          id="latest-achievements"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-10 text-center">
            Recent Highlights
          </h2>
          <div className="relative px-4 md:px-10"> {/* Added padding for arrows */}
            <Swiper
              modules={[Navigation, Pagination, A11y, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={window.innerWidth < 768 ? 1 : 'auto'} // Important for coverflow and different size slides
              loop={featuredAchievements.length >= 3} // Loop if more than 3 slides for better effect
              coverflowEffect={{
                rotate: 20,      // Slide rotate in degrees
                stretch: 0,     // Stretch space between slides (percentage)
                depth: 100,     // Depth offset in px (slides translate in Z axis)
                modifier: 1,    // Effect multiplier
                slideShadows: false, // Disable default slide shadows if we use our own glow
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true, 
                dynamicBullets: true, 
                enabled: featuredAchievements.length > 1 // Only show pagination if more than 1 slide
              }} 
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="py-8" // Add padding for glow effects
              breakpoints={{
                // configure responsive breakpoints
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 'auto',
                  spaceBetween: 30
                }
              }}
            >
              {featuredAchievements.map((achievement, index) => (
                <SwiperSlide key={achievement.id} style={{ width: window.innerWidth < 768 ? '100%' : '60%', maxWidth: '380px' }}> 
                  {({ isActive }) => ( // Swiper provides isActive for centered slide
                    <AchievementCarouselCard achievement={achievement} isMain={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-700/50 hover:bg-sky-500/80 text-white rounded-full cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-slate-700/50 hover:bg-sky-500/80 text-white rounded-full cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </motion.section>
      )}

   {/* Search and Filter Section */}

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search achievements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    
      {/* Category Filter */}
      <div className="relative">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto pl-4 pr-10 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 backdrop-blur-sm appearance-none cursor-pointer"
        >
          <option value="All">All Categories</option>
          {achievementCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  
    {/* Filter Results Info */}
    {(searchTerm || selectedCategory !== 'All') && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-4"
      >
        <p className="text-slate-400 text-sm">
          {searchTerm && selectedCategory !== 'All' 
            ? `Showing results for "${searchTerm}" in ${selectedCategory}`
            : searchTerm 
              ? `Showing results for "${searchTerm}"`
              : `Showing ${selectedCategory} achievements`
          }
        </p>
      </motion.div>
    )}
  </motion.section>

      {/* "All Achievements" Section with Filtering */}
<motion.section 
  variants={sectionVariants} 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.1 }}
  id="all-achievements" 
  className="pt-10 md:pt-12"
>
  <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-10 md:mb-12 text-center">
    Browse All Achievements
  </h2>
  
  {(() => {
    // Filter logic
    let filteredAchievements = achievementsData;
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      filteredAchievements = filteredAchievements.filter(ach => ach.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      filteredAchievements = filteredAchievements.filter(ach =>
        ach.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ach.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ach.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Group by category for display
    const groupedAchievements = achievementCategories.reduce((acc, category) => {
      const achievementsInCategory = filteredAchievements.filter(ach => ach.category === category);
      if (achievementsInCategory.length > 0) {
        acc[category] = achievementsInCategory;
      }
      return acc;
    }, {});
    
    // Show message if no results
    if (filteredAchievements.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-slate-400 mb-4">
            <svg className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.9-6.17-2.379C5.36 12.138 5 11.598 5 11V7a2 2 0 012-2h10a2 2 0 012 2v4c0 .598-.36 1.138-.83 1.621A7.962 7.962 0 0112 15z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-300 mb-2">No achievements found</h3>
          <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          {(searchTerm || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          )}
        </motion.div>
      );
    }
    
    // Display filtered results
    return Object.entries(groupedAchievements).map(([category, achievements]) => (
      <div key={category} className="mb-12 md:mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-medium text-sky-400 border-b-2 border-slate-700 pb-3">
            {category}
          </h3>
          <span className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full">
            {achievements.length} {achievements.length === 1 ? 'achievement' : 'achievements'}
          </span>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
        >
          {achievements.map(achievement => (
            <AchievementGridCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>
      </div>
    ));
  })()}
</motion.section>
    </motion.div>
  );
}


export default AchievementsPage;
