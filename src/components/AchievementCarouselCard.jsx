import React from 'react';
import { motion } from 'framer-motion';

//Animation variant for individual card
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut"}},
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn"}}
};

// Props:
// - achievement: object { icon (JSX), title, organization, date, description, link }
// - isMain: boolean, true if it's the centered, main card in the carousel
function AchievementCarouselCard({ achievement, isMain}) {
    const { icon, title, organization, date, description, link } = achievement;

    const glowClass = isMain ? "filter drop-shadow-[0_0px_25px_rgba(56,189,284,0.4)]"
        : "filter drop-shadow-[0_0px_10px_rgba(56,189,248,0.2)] opacity-70 scale-90";

    const iconContainerClass = isMain ? "w-16 h-16 mb-4 text-sky-300" 
    : "w-12 h-12 mb-3 text-sky-500";

    const titleClass = isMain
    ? "text-lg md:text-xl font-semibold text-sky-300" // Larger icon for main
    : "text-sm md:text-base font-medium text-sky-500"; // smaller icon for peek

    const dateAndOrgClass = isMain
    ? "text-sm text-sky-400 mb-3"
    : "text-xs text-slate-400 mb-2";

    const descriptionClass = isMain
    ? "text-sm text-slate-300 leading-relaxed mb-4"
    : "text-xs text-slate-500 leading-snug mb-3";

    const linkClass = isMain
    ? "bg-sky-500/80 hover:bg-sky-500 text-white font-semibold py-1.5 px-4 rounded-md text-xs mt-3 transition-colors duration-150"
    : "text-xs text-sky-500 hover:text-sky-400 mt-2 inline-block font-medium";

    return (
        <motion.div
        variants={cardVariants}
        layout // added for layout animations between states
        className={`flex flex-col items-center text-center p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out ${glowClass}`}
        >
            <div className={`flex items-center justify-center ${iconContainerClass}`}>
                {icon || <div className="w-full h-full bg-slate-700 rounded-full animate-pulse" /> /* Placeholder if no icon */}
            </div>
            <h3 className={titleClass}>{title}</h3>
            <p className={dateAndOrgClass}>
                {organization} - {date}
            </p>
            <p className={descriptionClass}>{description}</p>
            {link && (
                <a href={link} 
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                >
                    {isMain ? "View Certificate" : "Details ->"}
                    </a>
                )}   
        </motion.div>
    );

}

export default AchievementCarouselCard;