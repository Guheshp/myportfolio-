import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Gp 🚀</h1>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Guheshp" className="text-gray-600 hover:text-gray-900" target='_blank'>
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/guheshp" className="text-gray-600 hover:text-gray-900" target='_blank'>
                <Linkedin size={20} />
              </a>
              <a href="mailto:guheshpanjagall.in@gmail.com" className="text-gray-600 hover:text-gray-900">
  <Mail size={20} />
</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}