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
        <FaLinkedin className='text-white text-4xl mx-2' />
        <FaGithub className='text-white text-4xl mx-2' />
        <FaInstagram className='text-white text-4xl mx-2' />
      </div>
    </nav>
  );
};

export default Navbar;
