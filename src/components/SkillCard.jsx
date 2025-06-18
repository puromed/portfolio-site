// src/components/SkillCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 }, // Start slightly lower and smaller
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } // Custom ease for smoother feel
  }
};

function SkillCard({ name, icon /*, description (optional) */ }) {
  return (
    <motion.div
      variants={cardVariants}
      className={
        "bg-slate-800/70 " +         // Slightly lighter than slate-900, with some transparency
        "border border-slate-700/50 " + // Subtle border, adjust color/opacity as needed
        "rounded-xl shadow-lg " +      // Larger rounding, more pronounced shadow for depth
        "p-6 md:p-8 text-center " +   // Generous padding
        "flex flex-col items-center justify-start " + // Align items, start content from top
        "h-full " +                   // Ensure cards in a row have same height if content differs
        "transform transition-all duration-300 ease-in-out " +
        "hover:bg-slate-700/80 hover:shadow-sky-500/20 hover:border-sky-500/50 hover:scale-[1.03]" // Enhanced hover
      }
    >
      {/* Icon Container */}
      <div className="mb-5 text-sky-400"> {/* Accent color for icon, or keep it white/slate-300 */}
        {/* Ensure your icon components accept className and are sized appropriately */}
        {React.cloneElement(icon, { className: "w-10 h-10 md:w-12 md:h-12" })}
      </div>

      {/* Skill Name (Card Title) */}
      <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-2">
        {name}
      </h3>

      {/* Optional: Short Description (uncomment if you add a description prop) */}
      {/* {description && (
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      )} */}
    </motion.div>
  );
}

export default SkillCard;