import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { asset } from '../assets/asset';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom'
const Hero = () => {
  const { theme } = useContext(ContextApi);
  return (
    <div className={`py-20 flex flex-col-reverse justify-center sm:justify-between sm:flex-row px-[4vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"}`}>
      
      {/* Left Section */}
      <section className="sm:w-2/3 w-full flex flex-col justify-start items-start">
        
        {/* Animated Heading */}
        <motion.h1 
          className={`text-4xl font-extrabold mb-2 leading-tight ${theme ? "text-white" : "text-black"}`} 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Abdullah
        </motion.h1>

        {/* Description with Animated Masah Dev */}
        <p className="mb-3 text-lg leading-relaxed">
          I'm the founder of 
          <motion.span 
            className="font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {" " } <Link to="https://mash-dev92.vercel.app/"> Masah Dev 🔗</Link>
          </motion.span>
          , a platform dedicated to helping learners master Data Structures and Algorithms (DSA).
          As a full-stack developer with expertise in{" "}
          <strong className="text-[#10B981]">React.js & Node.js</strong>, I build intuitive and scalable applications that make learning efficient and enjoyable.
        </p>
        
        {/* Location & Availability */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img src={theme ? asset.location_light : asset.my} alt="Location Icon" aria-label="Location" />
            <p className="text-lg">Faisalabad, Pakistan</p>
          </div>
          <div className="flex items-center">
            <motion.div 
              className="w-2 h-2 bg-[#10B981] ml-2 rounded-full"
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <p className="ml-4 text-lg">Currently Building Masah Dev 🚀</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-5">
          <motion.a href="https://github.com/CODEMASTER-ABDULLAH-92" whileHover={{ scale: 1.1 }}>
            <img src={asset.gitpink} className="h-[40px] w-[40px]" alt="GitHub" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/" whileHover={{ scale: 1.1 }}>
            <img src={asset.link} className="h-[40px] w-[40px]" alt="LinkedIn" />
          </motion.a>
          <motion.a href="https://www.instagram.com/masah.dev/" whileHover={{ scale: 1.1 }}>
            <img src={asset.insta} className="h-[40px] w-[40px]" alt="Instagram" />
          </motion.a>
          <motion.a href="https://www.youtube.com/@MasahDev" whileHover={{ scale: 1.1 }}>
            <img src={asset.yt} className="h-[40px] w-[40px]" alt="YouTube" />
          </motion.a>
        </div>
      </section>

      {/* Right Section - Image */}
      <div className="flex flex-col justify-center items-center">
        <motion.img 
          src={asset.abdullah} 
          alt="Abdullah" 
          className="w-[280px] h-[300px] object-cover object-top border-b-4 border-l-4 p-2 border-gray-600 rounded-lg shadow-lg"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
