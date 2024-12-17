import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Guhesh Panjagall</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Guheshp" className="hover:text-indigo-400 transition" target='_blank'>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/guheshp" className="hover:text-indigo-400 transition"
            target='_blank'>
              <Linkedin size={24} />
            </a>
            <a href="mailto:guheshpanjagall.in@gmail.com" className="hover:text-indigo-400 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Guhesh Panjagall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}