import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types/project';
import { fadeInUp } from '../animations/variants';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <motion.a
            href={project.github}
            target='_blank'
            className="flex items-center text-gray-600 hover:text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={e => e.stopPropagation()}
          >
            <Github size={20} className="mr-2" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            className="flex items-center text-indigo-600 hover:text-indigo-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={20} className="mr-2" target='_blank' />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}