import React from 'react';

function ReadingIcon({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" // Kept original viewBox
      className={className} // Apply className for sizing and color
      fill="currentColor" // Changed to allow Tailwind text color
    >
      <path 
        fillRule="evenodd" // Changed from fill-rule
        d="M331.52 117.547c0 41.386-33.707 74.88-74.88 74.88c-41.387 0-74.88-33.494-74.88-74.88c0-41.387 33.493-74.88 74.88-74.88s74.88 33.493 74.88 74.88m-96.853 125.748L64 157.867v215.04l170.667 85.428zm42.666 215.681l171.947-86.069v-215.04l-171.947 86.069z" 
        clipRule="evenodd" // Changed from clip-rule
      />
    </svg>
  );
}

export default ReadingIcon;