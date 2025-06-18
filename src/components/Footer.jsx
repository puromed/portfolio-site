// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // Match main dark background, adjust border
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6 pt-10 pb-6">
                {/* Default text color for footer content */}
                <div className="flex flex-wrap md:flex-nowrap justify-between text-slate-400">
                    {/* About Column */}
                    <div className="w-full md:w-2/5 mb-6 md:mb-0">
                         {/* Heading uses lighter text (inherited or explicit text-slate-100) */}
                        <h3 className="text-xl font-bold mb-4 text-slate-100">Arfan Haziq</h3>
                        <p className="mb-4">
                            Building innovative solutions...
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-4">
                           {/* Use accent on hover */}
                           <a href="https://github.com/puromed" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition duration-300" aria-label="Visit my GitHub profile">
                                {/* Github SVG */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                           </a>
                           {/* Other social links similarly */}
                           <a href="https://www.linkedin.com/in/mohammad-arfan-haziq-bin-razlan-0180482b5/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition duration-300" aria-label="Visit my LinkedIn profile">
                               {/* LinkedIn SVG */}
                               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5C4.98 2.12 6.12 1 7.5 1c1.39 0 2.5 1.12 2.5 2.5S8.89 6 7.5 6c-1.38 0-2.52-1.12-2.52-2.5zM3 8h9v14H3V8zm11 .5c-.83 0-1.5-.67-1.5-1.5S13.17 6.5 14 6.5s1.5 .67 1.5 1.5S14.83 8.5 14 8.5zm0 .75h9v13h-9v-13z"></path></svg>
                            </a>

                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="w-full md:w-1/5 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4 text-slate-100">Quick Links</h3>
                        <ul className="space-y-2">
                           {/* Use accent on hover */}
                           <li><Link to="/" className="hover:text-sky-400 transition duration-300">Home</Link></li>
                           <li><Link to="/about" className="hover:text-sky-400 transition duration-300">About</Link></li>
                           <li><Link to="/achievements" className="hover:text-sky-400 transition duration-300">Achievements</Link></li>
                           <li><Link to="/contact" className="hover:text-sky-400 transition duration-300">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div className="w-full md:w-2/5">
                        <h3 className="text-xl font-bold mb-4 text-slate-100">Contact</h3>
                        <p className="mb-2">Feel free to reach out!</p>
                        <p className="mb-2">
                            {/* Use accent on hover */}
                            <a href="mailto:arfanhaziq33@gmail.com" className="hover:text-sky-400 transition duration-300">
                                arfanhaziq33@gmail.com
                            </a>
                        </p>
                        <p>Location: Jenjarom, Selangor</p>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className="border-t border-slate-800 py-4">
                 {/* More muted copyright text */}
                <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Arfan Haziq. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;