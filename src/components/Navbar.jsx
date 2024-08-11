import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center space-x-4'>
        <img
          src='https://masterbundles.com/wp-content/uploads/2024/05/a18-18-490x490.jpg'
          alt='Logo'
          className='h-10 border-none rounded-xl'
        />
      </div>
      <div className='flex items-center space-x-4'>
        <a href='https://in.linkedin.com/in/himanshu-sugha' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='text-white text-4xl mx-2' />
        </a>
        <a href='https://github.com/himanshu-sugha' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='text-white text-4xl mx-2' />
        </a>
        <a href='https://instagram.com/himanshu_sugha' target='_blank' rel='noopener noreferrer'>
          <FaInstagram className='text-white text-4xl mx-2' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
