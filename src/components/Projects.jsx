import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 py-8 text-white'>
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-6xl font-bold mb-6 text-center'
      >
        Projects
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='mb-8'
      >
        <h2 className='text-3xl font-semibold'>Video Streaming App</h2>
        <p className='text-lg italic text-gray-400'>July 2024 - August 2024</p>
        <p className='mt-2 text-lg'>
          Built a YouTube clone with React, Redux Toolkit, and TailwindCSS.
        </p>
        <p className='mt-2 text-lg'>
          Features include creating a YouTube video list with lazy loading, video preview, search suggestions, search caching, optimized search with debouncing, comments section, and live chat with API polling. Currently not responsive.
        </p>
        <a
          href='https://github.com/himanshu-sugha/vidzilla'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 hover:underline mt-4 block'
        >
          View Project on GitHub
        </a>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className='text-3xl font-semibold'>Food Ordering App</h2>
        <p className='text-lg italic text-gray-400'>May 2024 - June 2024</p>
        <p className='mt-2 text-lg'>
          Developed a food ordering app with features like Shimmer UI, Swiggy API integration, and a search-based restaurant filter.
        </p>
        <p className='mt-2 text-lg'>
          Utilized technologies: ReactJS, Redux Toolkit, React Router DOM, Tailwind CSS, Parcel Bundler.
        </p>
        <a
          href='https://github.com/himanshu-sugha/SughaFoods'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 hover:underline mt-4 block'
        >
          View Project on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
