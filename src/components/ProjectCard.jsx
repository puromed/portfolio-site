import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95},
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition : { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
    }
};

// Assuming onCardClick will be passed down to trigger the modal
function ProjectCard({ project, onCardClick}) {
    const { title, category, imageUrl, shortDescription } = project;

    return (
        <motion.div
        variants={cardVariants}
        layout // add layout prop for smooth transitions
        className={
            "bg-slate-800/70 rounded-xl shadow-lg overflow-hidden " + //Overflow-hidden for image rounding
            "flex flex-col h-full " + // Ensure the card in a row to maintain same height
            "transform transition-all duration-300 ease-in-out cursor-pointer " + 
            "hover:bg-slate-700/80 hover:shadow-sky-500/20 hover:scale-[1.03]"
        }
        onClick={() => onCardClick(project)} // Trigger the modal on click
        >
            {/* Project Image */}
            <div className="w-full h48 md:h56 overflow-hidden">
                <img
                    src={imageUrl || '/images/projects/placeholder-default.jpg'} // Fallback image
                    alt={`${title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Zoom effect on hover
                    // Consider adding group class to parent div for group-hover if needed, or just use direct hover
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
           </div>

            {/* Project Details */}
            <div className="p5 md:p-6 flex flex-col flex-grow">
                {/* Category tag */}
                 <p className="text-xs text-sky-400 mb-1 uppercase tracking-wider">{category}</p>
                 <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">{title}</h3>
                 <p className="text-sm text-slate-400 leading-relaxed flex-grow"> {/* flex-grow for description */}
                   {shortDescription}
                 </p>
                 {/* Add any additional details or buttons here */}
            </div>
        </motion.div>
    );
}

export default ProjectCard;