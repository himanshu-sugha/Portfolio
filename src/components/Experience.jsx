import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 my-28 text-white">
      <div className="mb-8">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl font-bold mb-4 text-center"
        >
          Experience
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <div className="w-24 mr-4 text-center">
            <span className="text-gray-400">2022 - Present</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Executive Member, Team MATCOM</h3>
            <p className="text-lg">Executive member of Team MATCOM - A technical club of NIT Hamirpur</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
