import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    // helper function to determine if the link is active
    const getNavLinkClass = ({ isActive}) => {
        return isActive
        // Active: Use sky blue accent
      ? 'text-sky-400 font-semibold px-3 py-2 rounded-md text-sm'
      // Inactive: Light slate text, sky blue on hover
      : 'text-slate-300 hover:text-sky-400 px-3 py-2 rounded-md text-sm transition duration-150';
    };

    return (
        // sticky navbar with white background, shadow and z-index
        <nav className={ // Dark glass background using slate-900 base with opacity
        "bg-slate-900/80 backdrop-blur-lg " + "border-b border-slate-700/50 " + "shadow-md sticky top-0 z-50"}>
            {/* Centered container with padding, using flex to align items */}
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">

            {/* Logo or Brand Name */}
            <NavLink to="/" className="text-xl font-bold text-white hover:text-slate-200 transition duration-150">
          Arfan Haziq {/* Name */}
        </NavLink>

        {/* Navigation Links Section */}
        <ul className="flex space-x-1 md:space-x-3"> {/* Adjust spacing as needed */}
          <li>
            <NavLink to="/" className={getNavLinkClass} end> {/* 'end' prop for exact matching */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements" className={getNavLinkClass}>
              Achievements
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </li>
          {/* Add NavLinks for other pages here */}
          {/* Example:
          <li>
            <NavLink to="/contact" className={getNavLinkClass}>
              Contact
            </NavLink>
          </li>
          */}
        </ul>
      </div>
            
        </nav>
    )
}



export default Navbar;