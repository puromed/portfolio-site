import React, { useState, useEffect, useRef } from 'react';
import { delay, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// Import key skills icons
import ReactIcon from '../components/icons/ReactIcon';
import PythonIcon from '../components/icons/PythonIcon';
import PhpIcon from '../components/icons/PhpIcon';
import GitIcon from '../components/icons/GitIcon';
import MySqlIcon from '../components/icons/MySqlIcon';
import GithubIcon from '../components/icons/GithubIcon';

// Importing icons for interests
import FootballIcon from '../components/icons/FootballIcon';
import HeadphoneIcon from '../components/icons/HeadphoneIcon';
import ReadingIcon from '../components/icons/ReadingIcon';
import GamingIcon from '../components/icons/GamingIcon';

// Will replace the actual path to professional images in the  /public folder
    const professionalPhotoUrl = '/images/fan_image.png';

function AboutPage() {
    const [isPolaroidHovered, setIsPolaroidHovered] = useState(false); // Renamed for clarity
    const [isNameHovered, setIsNameHovered] = useState(false);
    const typewriterRef = useRef(null);

    const originalName = "Hello, I'm Arfan Haziq";
    const hoverName = "Open for Internship!";

    useEffect(() => {
        const instance = typewriterRef.current;
        if (instance) {
            // Clear any existing queue and then type the new string
            // This helps prevent issues with rapid hover in/out
            instance.stop(); // Stop any ongoing animation
            instance.deleteAll(1); // Delete very quickly

            if (isNameHovered) {
                instance.typeString(hoverName).start();
            } else {
                instance.typeString(originalName).start();
            }
        }
    }, [isNameHovered, originalName, hoverName]); // Rerun when hover state or names change


    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease:"easeOut" } }
    };

    const textBlockVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease:"easeOut" } }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, x: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.3, ease: "easeOut" }
        }
    };

    const captionVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } }
    };

    const itemGridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {y: 0, opacity: 1, transition: { ease: "easeOut" } }
    }

    // Data for "Experience Highlights"
    const experienceHighlights = [
        {
            name: 'React', icon: <ReactIcon className="w-7 h-7 text-sky-400 flex-shrink-0" />
        },
        {
            name: 'Python', icon: <PythonIcon className="w-7 h-7 text-yellow-400 flex-shrink-0" />
        },
        {
            name: 'PHP', icon: <PhpIcon className="w-7 h-7 text-indigo-400 flex-shrink-0" />
        },
        {
            name: 'Git', icon: <GitIcon className="w-7 h-7 text-orange-500 flex-shrink-0" />
        },
        {
            name: 'MySQL', icon: <MySqlIcon className="w-7 h-7 text-sky-400 flex-shrink-0" />
        },
        {
            name: 'GitHub', icon: <GithubIcon className="w-7 h-7 text-gray-400 flex-shrink-0" />
        }
    ];

    const textContentVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.3, ease: "easeOut" }
        }
    };

    const textContentVariantsRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.3, ease: "easeOut" }
        }
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 py-16 md:py-20 space-y-20 md:space-y-28"
        >
            {/* === SECTION 1: Introduction / "About Me" === */}
        <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 pt-0"
      >
        {/* Left Column: Text */}
        <motion.div
            variants={textBlockVariants}
            className="md:w-3/5 lg:w-2/3 text-center md:text-left"
            onMouseEnter={() => setIsNameHovered(true)}
            onMouseLeave={() => setIsNameHovered(false)}
        >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tighter mb-6 h-20 md:h-24 lg:h-28 flex items-center justify-center md:justify-start">
                <Typewriter
                    options={{
                        delay: 75,
                        deleteSpeed: 50,
                        loop: false,
                        wrapperClassName: "typewriter-wrapper", // Add class for potential styling
                        cursorClassName: "typewriter-cursor" // Add class for potential styling
                    }}
                    onInit={(typewriter) => {
                        typewriterRef.current = typewriter;
                        typewriter
                            .typeString(originalName)
                            .start();
                    }}
                />
            </h1>
            <div className='space-y-5 text-lg md:text-xl text-slate-300 leading-relaxed'>
                <p>
                 I'm an Information Science student at Universiti Teknologi Mara (UiTM), deeply passionate about the transformative power of technology and software development. My journey into this field is fueled by an insatiable curiosity to understand how things work and a drive to create solutions that are not only functional but also intuitive and impactful.
                </p>
            </div>
           
        </motion.div>
        {/* Right Column: Image */}
        <motion.div
            variants={imageVariants}
            className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end mt-10 md:mt-0"
            onHoverStart={() => setIsPolaroidHovered(true)}
            onHoverEnd={() => setIsPolaroidHovered(false)}
            whileHover={{ scale: 1.03, rotate: 1.5, boxShadow: "0px 25px 35px -15px rgba(0,0,0,0.25)" }}
        >
            <div className="bg-slate-700/30 backdrop-blur-md border border-slate-600/50 p-3 sm:p-4 rounded-lg shadow-xl w-64 sm:w-72 md:w-80 flex flex-col items-center">
                <img 
                    src={professionalPhotoUrl}
                    alt="Mohammad Arfan Haziq Bin Razlan" 
                    className="rounded-md object-cover w-full h-[24rem] sm:h-[28rem] md:h-[32rem]" 
                />
                <motion.p 
                    variants={captionVariants}
                    initial="hidden"
                    animate={isPolaroidHovered ? "visible" : "hidden"}
                    className="mt-2 text-xs sm:text-sm text-slate-600 font-mono text-center px-1"
                >
                    This is the only best image of myself.
                </motion.p>
            </div>
        </motion.div>
      </motion.section>

      {/* === SECTION 2: My Journey & Approach === */}
        <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-20" 
      >
        {/* Left Column: Text */}
        <motion.div
            variants={textBlockVariants}
            className="md:w-1/2 text-center md:text-left"
        >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6 tracking-tight">
          I believe in learning through <span className="text-sky-400">experience</span> and <span className="text-sky-400">collaboration</span>.
        </h2>
        <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
          <p>
             I'm always ready to embrace new challenges and push my limits. My learning philosophy is rooted in practical application. I find that the most profound understanding comes from building, iterating, and solving real-world problems.
          </p>
          <p>
             Whether it's coursework, personal projects, or exploring emerging technologies, I strive to go beyond surface-level knowledge. For me, every line of code and every design choice is an opportunity to learn and refine my craft.
          </p>
          <div className="mt-8">
            <Link
            to="/Achievements"
            className="inline-block text-sky-400 font-semibold hover:text-sky-300 text-lg group transition-colors duration-200" >
              My Achievements
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5 ml-1">&rarr;</span>
            </Link>
          </div>
        </div>
        </motion.div>
      
      {/* Right Column: Key Technologies/Tools Grid */}
      <motion.div
        variants={itemGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2}}
        className='md:w-1/2 flex flex-wrap justify-center gap-4 pt-6 md:pt-0'
        >
            {experienceHighlights.map((item, index) => (
                <motion.div
                    key={item.name}
                    variants={itemVariants} 
                    className="w-full sm:w-[calc(50%-0.5rem)] bg-slate-800 p-5 rounded-xl shadow-lg flex items-center space-x-4 border border-slate-700/70 hover:border-sky-500/50 transition-colors duration-300"
                >
                    {item.icon}
                    <span className="text-slate-200 font-semibold text-base sm:text-lg">{item.name}</span>
                </motion.div>
            ))}
        </motion.div>
        </motion.section>
        

      {/* We will add "SECTION 3: Beyond the Code / Interests" next */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-20"
        >
        {/* Left Column: Text */}
        <motion.div
            variants={textContentVariants}
            className="md:w-1/2 text-center md:text-left"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6 tracking-tight">Beyond the Code: My Interests & Hobbies</h2>
                <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
                    <p>
                    While I'm deeply passionate about technology and software development, I also believe in a well-rounded life. When I'm not immersed in code or exploring new tech, you'll often find me:
                    </p>
                    <p>
                        These activities provide me with the balance between my technical pursuits and personal growth. I do not want to a become a person who is only focused on technology and computers. It fulfills me, like how famous philosopher Aristotle said, "The whole is greater than the sum of its parts." I believe that a well-rounded life leads to a more fulfilling and meaningful existence.
                    </p>
                </div>
            </motion.div>

           {/* Right Column: Interest Cards Grid */}
        <motion.div 
          variants={itemGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6"
        >
          {/* Interest Card 1: Football */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 flex flex-col items-center text-center aspect-square justify-center"
          >
            <div className="mb-3 text-sky-400">
              <FootballIcon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <h4 className="font-semibold text-slate-100 text-md">Playing Football</h4>
          </motion.div>

          {/* Interest Card 2: Music */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 flex flex-col items-center text-center aspect-square justify-center"
          >
            <div className="mb-3 text-sky-400">
              <HeadphoneIcon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <h4 className="font-semibold text-slate-100 text-md">Listening to Music</h4>
          </motion.div>

          {/* Interest Card 3: Reading */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 flex flex-col items-center text-center aspect-square justify-center"
          >
            <div className="mb-3 text-sky-400">
               <ReadingIcon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <h4 className="font-semibold text-slate-100 text-md">Reading Books</h4>
          </motion.div>

          {/* Interest Card 4: Gaming */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-800/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-slate-700/60 flex flex-col items-center text-center aspect-square justify-center"
          >
            <div className="mb-3 text-sky-400">
               <GamingIcon className="h-10 w-10 md:h-12 md:w-12" />
            </div>
            <h4 className="font-semibold text-slate-100 text-md">Strategic Gaming</h4>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* === End Interests & Hobbies Section === */}
      </motion.div>
    );
}

export default AboutPage;
