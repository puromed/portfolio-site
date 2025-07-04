import React from 'react';

function GamingIcon({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 15 15" // Kept original viewBox
      className={className} // Apply className for sizing and color
      fill="currentColor" // Changed to allow Tailwind text color
    >
      <path d="M13.1 11.5c-.6.3-1.4.1-1.8-.5l-1.1-1.4H4.8L3.7 11c-.5.7-1.4.8-2.1.3c-.5-.4-.7-1-.6-1.5l.7-3.7C1.9 4.9 3 4 4.2 4H7V2.5C7 1.7 7.6 1 8.4 1h3.1c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.4V4h2.8c1.2 0 2.3.9 2.5 2.1l.7 3.7c.1.7-.2 1.4-.9 1.7M6 6.5C6 5.7 5.3 5 4.5 5S3 5.7 3 6.5S3.7 8 4.5 8S6 7.3 6 6.5m6 0c0-.3-.2-.5-.5-.5H11v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5h.5v.5c0 .3.2.5.5.5s.5-.2.5-.5V7h.5c.3 0 .5-.2.5-.5" />
    </svg>
  );
}

export default GamingIcon;