import React from 'react';

function HeadphoneIcon({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" // Kept original viewBox
      className={className} // Apply className for sizing and color
      fill="currentColor" // Changed to allow Tailwind text color
    >
      <path d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29c-2.204-.051-4.251.736-5.816 2.256A7.93 7.93 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306a5.98 5.98 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2" />
      <path d="M7 12h2v8H7zm8 0h2v8h-2z" />
    </svg>
  );
}

export default HeadphoneIcon;