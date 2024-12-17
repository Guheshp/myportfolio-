import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';

const education = [
  {
    period: '2020 - 2024',
    school: 'KLS Gogte Institute of Technology',
    degree: 'Bachelor of Information Science and Engineering',
    logo: 'https://raw.githubusercontent.com/Guheshp/microservices/refs/heads/main/gitlogo.jpeg'
  },
  {
    period: '2018 - 2020',
    school: 'SIR MV PU COLLEGE - Davangere',
    degree: 'PCMB',
    logo: 'https://raw.githubusercontent.com/Guheshp/microservices/refs/heads/main/sirmvlogo.png'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0"
              variants={fadeInUp}
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                  <GraduationCap size={14} className="text-white" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={edu.logo} 
                    alt={edu.school}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.school}</h3>
                    <p className="text-indigo-600">{edu.degree}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}