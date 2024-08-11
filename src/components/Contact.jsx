import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 py-8 text-white'>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-4xl font-bold mb-4'
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-lg'
      >
        Palampur (HP) 176093
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex items-center mt-4'
      >
        <a href='https://www.linkedin.com/in/himanshu-sugha-80438725a/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-4xl text-blue-400 hover:text-blue-500 mr-4 cursor-pointer' />
        </a>
        <a href='https://github.com/himanshu-sugha' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='text-4xl text-gray-400 hover:text-gray-500 mr-4 cursor-pointer' />
        </a>
        <a href='https://instagram.com/himanshu_sugha' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='text-4xl text-pink-400 hover:text-pink-500 mr-4 cursor-pointer' />
        </a>
        <a href='tel:6230153184'>
          <FaPhone className='text-4xl text-green-400 hover:text-green-500 mr-4 cursor-pointer' />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
