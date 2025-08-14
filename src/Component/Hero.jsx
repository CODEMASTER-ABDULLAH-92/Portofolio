import React, { useContext, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaCube
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPython, 
  SiGit,
  SiJavascript,
  SiCplusplus,
} from "react-icons/si";
import { ContextApi } from "../Context/ContextApi";
import { asset } from "../assets/asset";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const { theme } = useContext(ContextApi);
  const skillRef = useRef(null);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "OOP", icon: <FaCube className="text-purple-600" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  ];

  useGSAP(() => {
    gsap.to(skillRef.current, {
      y: () => -skillRef.current.scrollHeight + 30, // Adjust 30 to match your h-[30px]
      duration: 10,
      repeat: -1,
      ease: "none",
      yoyo: true,
      delay: 0.2,
      stagger: 0.2,
      repeatDelay: 0
    });
  });

  return (
    <div className='flex relative flex-col'>
      <div className={`py-20 relative flex flex-col-reverse justify-center sm:justify-between sm:flex-row px-[4vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"}`}>
        {/* Left Section */}
        <section className="sm:w-2/3 w-full relative flex flex-col justify-start items-start">
          {/* Animated Heading */}
          <motion.h1
            className={`text-4xl group font-extrabold mb-2 leading-tight ${theme ? "text-white" : "text-black"}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Abdullah
            <div className={`h-1 rounded mt-1 bg-current transition-all duration-500 origin-right scale-x-0 group-hover:scale-x-100`}></div>
          </motion.h1>

          {/* Description with Animated Masah Dev */}
          <p className="mb-3 text-lg leading-relaxed w-full">
            I'm the builder of 

              {/* {" "} */}
              <Link to="https://hire-mate-87dg.vercel.app/hireMate-academy-code365">
                <div className=" top-[60px] left-36 absolute flex items-center gap-1">
                  <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c328e54-ed15-4aea-b7b3-467e55711e10.png" alt="buggyCode bug logo" className="w-6 h-6 rounded-full object-cover shadow-[0_0_20px_rgba(255,109,0,0.5)]"/>
                  <h1 className="text-xl bg-gradient-to-r from-orange-500 from-45% via-orange-500 via-55% to-gray-200 bg-clip-text text-transparent relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-transparent">buggyCode</h1>
                </div>
              </Link>
           <br /> a platform dedicated to helping learners master Data Structures and Algorithms (DSA).

            As a full-stack developer with expertise in {" "}
            <strong className="text-[#10B981] inline-flex overflow-hidden h-[30px]">
              <div ref={skillRef} className="flex flex-col">
                {skills.map((skill, index) => (
                  <span key={index}>
                    <div className='flex text-2xl items-center gap-1'>
                      {skill.icon}
                      {skill.name}
                    </div>
                  </span>
                ))}
              </div>
            </strong>
            <br /> I build intuitive and scalable applications that make learning efficient and enjoyable.
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
                animate={{ scale: [1, 1.5, 1] }} 
                transition={{ repeat: Infinity, duration: 1.9 }}
              />
              <p className="ml-4 text-lg">Currently Building    
                <Link to="https://hire-mate-87dg.vercel.app/hireMate-academy-code365">
                <div className="  top-[235px] left-[180px] absolute flex items-center gap-1">
                  <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c328e54-ed15-4aea-b7b3-467e55711e10.png" alt="buggyCode bug logo" className="w-6 h-6 rounded-full object-cover shadow-[0_0_20px_rgba(255,109,0,0.5)]"/>
                  <h1 className="text-xl bg-gradient-to-r from-orange-500 from-45% via-orange-500 via-55% to-gray-200 bg-clip-text text-transparent relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-transparent">buggyCode</h1>
                </div>
              </Link>
              </p>
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
    </div>
  );
};

export default Hero;



{/* As a full-stack developer with expertise in{" "}
<strong className="text-[#10B981] inline-flex overflow-hidden">
  <motion.div 
    ref={skillRef} 
    className="flex whitespace-nowrap items-center gap-2"
    animate={{ x: ["0%", "-100%"] }}
    transition={{ 
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
  >

    {[...skills, ...skills].map((skill, index) => (
      <motion.span 
        key={index} 
        className="inline-flex items-center gap-1 px-1"
        whileHover={{ scale: 1.1 }}
      >
        {skill.icon}
        {skill.name}
        {index < skills.length * 2 - 1 && ","}
      </motion.span>
    ))}
  </motion.div>
</strong> */}



