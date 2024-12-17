import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, slideInFromRight } from '../animations/variants';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
          >
            <motion.h1 
              className="text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Hi, I'm Guhesh Panjagall
              <motion.span 
                className="block text-indigo-600 mt-2"
                variants={fadeInUp}
              >
                Full-Stack Developer 🚀
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeInUp}
            >
              A passionate Full-Stack Developer with a strong background in both frontend and backend development, 
              I specialize in building scalable, secure, and user-friendly web applications. I love tackling complex 
              challenges and am always eager to learn new technologies. My focus is on writing clean, high-quality 
              code that follows industry standards, ensuring every project is built to last. Let's create something 
              amazing together!
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={fadeInUp}
            >
              <motion.a 
                href="#projects" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={slideInFromRight}
          >
            <motion.img
              src="https://avatars.githubusercontent.com/u/137211232?s=400&u=69107aeeb65f92a16bdf0cda1f443c3140998f92&v=4"
              alt="Guhesh Panjagall"
              className="rounded-full w-72 h-72 object-cover shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-gray-400" size={24} />
        </motion.div>
      </div>
    </section>
  );
}