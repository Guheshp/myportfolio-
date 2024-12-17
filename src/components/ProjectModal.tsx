import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
            >
              <X size={20} />
            </button>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
          </div>
          
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none mb-6">
              <h4 className="text-xl font-semibold mb-2">Project Overview</h4>
              <p className="text-gray-600">{project.description}</p>
              
              <h4 className="text-xl font-semibold mt-6 mb-2">Key Features</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              {project.challenges && (
                <>
                  <h4 className="text-xl font-semibold mt-6 mb-2">Challenges & Solutions</h4>
                  <p className="text-gray-600">{project.challenges}</p>
                </>
              )}
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 text-white py-3 rounded-lg text-center hover:bg-gray-800 transition"
              >
                View Source Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg text-center hover:bg-indigo-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}