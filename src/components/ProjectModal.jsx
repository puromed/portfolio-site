import React from 'react';
import { motion } from 'framer-motion';
import {  XMarkIcon } from '@heroicons/react/24/solid';
import { a } from 'framer-motion/client';

function ProjectModal({ project, onClose}) {
    if (!project) return null; // Don't render if no project is selected

    // Prevent click propagation from content to backdrop closer
    // This allows users to click inside the modal without closing it
    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        // Backdrop: Covers the screen, closes modal on click
        <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={onClose} // Close modal on backdrop click
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Animate to visible
            exit={{ opacity: 0 }} // Animate to hidden on exit
            transition={{ duration: 0.3 }} // Transition duration
            >
             {/* Modal Content Box */}
             <motion.div
                className="bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                onClick={handleContentClick} // Prevent closing when clicking inside
                initial={{ scale: 0.9, opacity: 0, y: 20 }} // Initial scale
                animate={{ scale: 1, opacity: 1, y: 0 }} // Animate to full size
                exit={{ scale: 0.9, opacity: 0, y: 20 }} // Animate to smaller size on exit
                transition={{ type: 'spring', stiffness: 260, damping: 25, duration: 0.4 }} // Transition duration
                >
                    {/* Header with Title and Close Button */}
                    <div className="px-6 py-4 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-100 truncate pr-4">
                            {project.title}
                        </h2>
                        <button className="text-slate-100 hover:text-slate-300" onClick={onClose}>
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="p-6 overflow-y-auto flex-grow space-y-6">
                        {/* Project Image */}
                        {project.imageUrl && (
                            <div className="aspect-video bg-slate-700/50 rounded-lg overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={`${project.title} detailed view`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Project Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-slate-100 mb-2">Description</h3>
                            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                                {project.longDescription || "No detailed description available."}
                            </p>
                        </div>

                        {/* Technologies Used */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-slate-200 mb-3">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span
                                            key={tech}
                                            className="bg-slate-700 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer with Links */}
                    {(project.liveUrl || project.repoUrl) && (
                        <div className="px-6 py-4 border-t border-slate-700 flex-shrink-0 flex flex-wrap justify-end gap-3">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-600 hover:bg-slate-500 text-slate-100 font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                >
                                    View Repository
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-sky-500 hover:bg-sky-400 text-slate-100 font-semibold py-2 px-4 rounded-lg text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                >
                                    View Live
                                </a>
                            )}
                        </div>
                    )}
                </motion.div>
            </motion.div>
    );
}

export default ProjectModal;