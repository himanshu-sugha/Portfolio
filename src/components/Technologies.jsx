import React from 'react';
import { RiHtml5Line, RiCss3Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssLine, RiNodejsLine, RiJavaLine } from 'react-icons/ri';
import { animate, motion } from 'framer-motion';

import { SiMongodb } from 'react-icons/si';
const icon=(duration)=>({
  initial:{y:-10},
  animate:{y:[-10,10]},
  transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse",
     },
})

const Technologies = () => {
  return (
    <div >
      <motion.h1  initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1,delay:0.2}} className="text-white text-6xl  text-center mb-8">Technologies</motion.h1>
      <motion.div className="flex flex-wrap gap-6 justify-center">
        {/* Frontend */}
        <div  variants={{icon}}
      initial="initial"
      animate="animate " className="flex  border-gray-700 border-2  items-centerrounded-lg p-2">
          <RiHtml5Line className="text-6xl text-red-400" />
        </div>
        <div className="flex items-center  border-gray-700 border-2  rounded-lg p-2">
          <RiCss3Line className="text-6xl text-blue-400" />
        </div>
        <div className="flex items-center  border-gray-700 border-2  rounded-lg p-2">
          <RiJavascriptLine className="text-6xl text-yellow-400" />
        </div>
        <div className="flex items-center  border-gray-700 border-2  rounded-lg p-2">
          <RiReactjsLine className="text-6xl text-blue-400" />
        </div>
        <div className="flex items-center  border-gray-700 border-2  rounded-lg p-2">
          <RiTailwindCssLine className="text-6xl  text-blue-500" />
        </div>

        {/* Backend */}
        <div className="flex items-center  border-gray-700 border-2  rounded-lg p-2">
          <RiNodejsLine className="text-6xl text-green-400" />
        </div>

        {/* Database */}
        <div className="flex items-center  border-gray-700 border-2   rounded-lg p-2">
          <SiMongodb className="text-6xl  text-green-400" />
        </div>

        {/* Other */}
        <div className="flex items-center border-gray-700 border-2 rounded-lg p-2">
          <RiJavaLine className="text-6xl  text-red-600" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
