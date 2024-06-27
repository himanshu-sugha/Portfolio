import React from 'react';
import { animate, motion } from 'framer-motion';
const container=(delay)=>({
  hidden:{x:-100,opacity:0},
  visible:{x:0,opacity:1,
    transition:{duration :0.5,delay:delay}
  }
})
const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center p-8">
      <div className="flex flex-row items-center space-x-12 max-w-6xl mx-auto">
        <div className="flex-1 text-left">
          <motion.h1 variants={container(0)} 
          initial="hidden"
          whileInView="visible" className="text-white text-6xl font-bold mb-4">
            Himanshu Sugha
          </motion.h1>
          <motion.span variants={container(0.2)} 
          initial="hidden"
          whileInView="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight bg-clip-text text-transparent text-4xl mb-4 block">
            Full Stack Developer
          </motion.span>
          <motion.p variants={container(0.4)} 
          initial="hidden"
          whileInView="visible" className="text-white text-lg">
            I am Himanshu Sugha, a pre-final year B.Tech student in Mathematics and Computing at
            the National Institute of Technology Hamirpur. I have a passion for learning new
            technologies and tackling complex challenges head-on to deliver technically sound
            solutions with optimum efficiency.
          </motion.p >
        </div>
        <div className="flex-1">
          <motion.img initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration :1,delay :0.2}}
            src="https://static.vecteezy.com/system/resources/thumbnails/021/999/915/small_2x/coding-career-black-and-white-concept-spot-illustration-editable-2d-flat-monochrome-cartoon-character-for-web-design-software-development-creative-line-art-idea-for-website-mobile-blog-vector.jpg"
            alt="Coding Illustration"
            className="rounded-2xl max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
