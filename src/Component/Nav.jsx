import React, { useContext, useState } from "react";
import { asset } from "../assets/asset";
import { NavLink } from "react-router-dom";
import { ContextApi } from "../Context/ContextApi";
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const [hover,setHover] = useState("Home");
  const { theme, toggleTheme } = useContext(ContextApi);
  return (
    <div
      className={`${
        theme === true ? "bg-[--dark-hero-bg]" : "bg-[--light-hero-bg]"
      } sticky top-0 border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[20px]`}
    >
      <div className={`${
          theme === true ? "bg-[--dark-hero-bg]" : "bg-[--light-hero-bg]"
        }  flex justify-between items-center py-4 px-[4vw] sm:px-[5vw] md:px-[7vw]   inset-0 bg-gradient-to-br from-white/10 to-transparent   lg:px-[9vw]`}
      >
        {/* logo  */}
        <h2
          className={`${
            theme === true ? "text-[--dark-text]" : "text-[--light-text]"
          } font-semibold text-xl`}
        >
         <a href="/">Abdullah</a>
        </h2>
        {/* links  */}
        <div className="flex justify-center items-center gap-2">
          <ul className="hidden sm:flex justify-center items-center gap-2">
            <a href="#about" className={`${theme === true ? "text-[--dark-text]" : "text-[--light-text]"} font-semibold`}> About</a>
            <a href="#skill"
              className={`${
                theme === true ? "text-[--dark-text]" : "text-[--light-text]"
              } font-semibold`}
            >
              Skill
            </a>
            <a href="#Project"
              className={`${
                theme === true ? "text-[--dark-text]" : "text-[--light-text]"
              } font-semibold`}
            >
              Projects
            </a>
            <a href="#contact"
              className={`${
                theme === true ? "text-[--dark-text]" : "text-[--light-text]"
              } font-semibold`}
            >
              Contact
            </a>
          </ul>
          <div className="hidden sm:flex justify-center items-center gap-2">
            <img
              src={theme === true ? asset.moon : asset.sun}
              alt=""
              onClick={toggleTheme}
            />
            <button
              className={`${
                theme
                  ? "text-[--light-text] bg-[--light-hero-bg]"
                  : "text-[--dark-text] bg-[--dark-hero-bg]"
              } font-semibold px-7 py-2 rounded-xl`}
            >
              Download CV
            </button>
          </div>
        </div>
        {
visible ? 
          <img
          src={theme ? asset.cross_light : asset.cross_gray}
          onClick={() => setVisible(false)}
          alt=""
          />
          :
        <img
        src={theme ? asset.burger_light : asset.burger}
        onClick={() => setVisible(true)}
        className="sm:hidden"
        alt=""
        />
      }
      </div>

      <div>
        {/* Side nav */}


<ul className={`${visible === false ? "hidden":"block"} flex flex-col min-h-screen overflow-hidden justify-start items-center mt-6 gap-4 text-white`}>
            <a href="#about" onClick={()=>setVisible(!visible)}  className={`${theme === true ? "text-[--dark-text] " : "text-[--light-text]"} font-semibold`}> About</a>
            <a href="#Project"  onClick={()=>setVisible(!visible)} className={`${theme === true ? "text-[--dark-text]" : "text-[--light-text]"} font-semibold`}> Projects</a>
            <a href="#contact" onClick={()=>setVisible(!visible)}  className={`${theme === true ? "text-[--dark-text]" : "text-[--light-text]"} font-semibold`}> Contact</a>
            <a href="#skill" onClick={()=>setVisible(!visible)}  className={`${theme === true ? "text-[--dark-text]" : "text-[--light-text]"} font-semibold`}> Skills</a>
        {/* <img
              src={theme === true ? asset.moon : asset.sun}
              onClick={()=>setVisible(!visible)}
              onClick={toggleTheme}
            /> */}
            <img
  src={theme === true ? asset.moon : asset.sun}
  onClick={() => {
    setVisible(!visible);  // Toggle visibility
    toggleTheme();          // Toggle theme
  }}
/>

      </ul>
      </div>
    </div>
  );
};

export default Nav;
