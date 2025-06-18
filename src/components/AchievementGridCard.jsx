// src/components/AchievementGridCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function AchievementGridCard({ achievement }) {
  const { icon, title, organization, date, description, link } = achievement;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col h-full transform transition-all duration-300 hover:bg-slate-700/70 hover:shadow-sky-500/20"
    >
      <div className="flex items-start mb-4">
        {icon && (
          <div className="mr-4 flex-shrink-0 text-sky-400">
            {React.cloneElement(icon, { className: "w-8 h-8 md:w-10 md:w-10" })}
          </div>
        )}
        <div>
          <h4 className="text-md md:text-lg font-semibold text-slate-100 leading-tight">{title}</h4>
          <p className="text-xs text-sky-400 mt-1">{organization} - {date}</p>
        </div>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-sky-400 hover:text-sky-300 mt-auto font-medium self-start" // mt-auto pushes link to bottom if card height varies
        >
          View Details &rarr;
        </a>
      )}
    </motion.div>
  );
}

export default AchievementGridCard;