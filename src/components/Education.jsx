import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 my-28 text-white">
      <div className="mb-8">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 ,delay:0.2}}
          className="text-6xl font-bold mb-4 text-center"
        >
          Education
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center mb-6"
        >
          <div className="w-16 mr-4 text-center">
            <span className="text-gray-400">2022-2026</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">National Institute of Technology, Hamirpur</h3>
            <p className="text-lg">B.Tech in Mathematics and Computing</p>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center"
        >
          <div className="w-16 mr-4 text-center">
            <span className="text-gray-400">2020-2021</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">DAV Public School, Alampur</h3>
            <p className="text-lg">Class 12th in Science (Non-Medical) stream</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
