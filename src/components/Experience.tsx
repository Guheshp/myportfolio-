import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';

const experiences = [
  {
    title: 'Junior Full-Stack Developer',
    company: 'Wedding Cluster PVT LTD',
    period: 'SEPTEMPER 2023 - Present',
    description: [
      'Developed and maintained full-stack web applications using React, Node.js, MongoDB, and MySQL, delivering responsive solutions from scratch to production.',
'Architected and implemented a microservices-based architecture with RESTful APIs, enhancing modularity and scalability while streamlining development across teams.',
'Optimized application performance by implementing caching strategies, lazy loading, and code splitting techniques, resulting in a 40% reduction in page load times and a 25% increase in user engagement through interactive data visualizations.',
'Integrated automated testing frameworks and tools such as Jest, CI/CD pipelines using Jenkins for continuous delivery and SonarQube for static code analysis.',
'Conducted code reviews and mentoring to ensure high-quality, maintainable code while collaborating with product managers and designers to deliver new features on time and under budget.',
    ]
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'Wedding Cluster PVT LTD',
    period: 'June 2023 - August 2023 (2 Months)',
    description: [
      'Completed an extensive training program in full-stack web development.',
      'Actively contributed to the ongoing development of a web application.',
      'Mentored by senior developers on best practices and code optimization.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-8 pb-12 last:pb-0"
              variants={fadeInUp}
            >
              <div className="absolute left-0 top-0 h-full w-0.5 bg-indigo-200">
                <div className="absolute -left-2 -top-2 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-indigo-600 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}