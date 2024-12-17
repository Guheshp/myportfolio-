import React from 'react';
import { Code, Database, Globe, Layout, Server,TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../animations/variants';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap', "dasyiUI", "Material UI", "Shadcn/ui"],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js',"Microservices", "REST APIs", "Data Structures"],
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Database & Tools',
    icon: Database,
    skills: ["MySQL (Sequelize)", 'MongoDB(mongoose)', 'PostgreSQL', 'Firebase'],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    title: 'Testing & Version Control',
    icon: Code,
    skills: ['Jest',"React-Jest library", 'Git', 'Github', 'Bitbucket'],
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Cloud & DevTools',
    icon: Globe,
    skills: ['AWS',"Hostinger", 'Linux', 'Postman', 'Firebase'],
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    title: 'Optimization',
    icon: TrendingUp,
    skills: ['System Design', 'Asset Optimization', 'Web Performance', 'Postman', 'LLD & HLD', 'Code Modularity', "Agile Methodologies"],
    color: 'text-red-600',
    bgColor: 'bg-purple-100', 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor} ${category.color} mr-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${category.bgColor} ${category.color}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}