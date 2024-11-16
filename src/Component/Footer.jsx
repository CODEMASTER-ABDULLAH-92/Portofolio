import React, { useRef, useContext, useState } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { asset } from '../assets/asset';

const Footer = () => {
  const { theme } = useContext(ContextApi);
  const [removeIcon,setRemoveIcon] = useState(true);
  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} py-20 flex flex-col justify-center items-center gap-5 px-[1vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] `} id='contact'>
      <button className='bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1'>Get In Touch</button>
      <p className='text-center'>What’s next? Feel free to reach out to me if you're looking for a developer, <br />have a query, or simply want to connect.</p>
      
      <div className='flex justify-center items-center'>
        <img className='w-6 sm:w-8 hide' src={theme ? asset.email_light : asset.email} alt="Email Icon" />
        <h2 
          className={`${theme ? "text-white" : "text-black"} text-[17px] text-balance sm:text-3xl font-semibold`} 
          onClick={() => copyTextToClipboard("abdullahpeerzada92@gmail.com")}
        >
          abdullahpeerzada92@gmail.com
        </h2>
        <img 
          className={`w-8 sm:w-10 cursor-pointer ${removeIcon ? "removeIcons": ""} `} 
          src={theme ? asset.copy_light : asset.copy} 
          alt="Copy Icon" 
          onClick={() => copyTextToClipboard("abdullahpeerzada92@gmail.com")}
        />
      </div>

      <div className='flex justify-center items-center'>
        <img className='w-6 sm:w-8 hide' src={theme ? asset.call_dark : asset.call_icon} alt="Phone Icon" />
        <h2 
          className={`${theme ? "text-white" : "text-black"}  text-[17px] sm:text-3xl font-semibold`}
        >
          +923233381938
        </h2>
        <img 
          className={`w-8 sm:w-10 cursor-pointer ${removeIcon ? "removeIcons": ""} `} 
          src={theme ? asset.copy_light : asset.copy} 
          alt="Copy Icon" 
          onClick={() => copyTextToClipboard("+923233381938")}
        />
      </div>
      <p className='text-center'>You may also find me on these platforms!</p>
      <div className='flex items-center gap-1 my-3'>
<a href="https://github.com/CODEMASTER-ABDULLAH-92"> <img src={asset.gitpink} className='h-[48px] w-[48px]' alt="" /></a>
      <a href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/"> <img src={asset.link} alt="" /> </a>    
      <a href="https://www.instagram.com/masah_dev/"> <img src={asset.insta} alt="" /></a>
          <img src={asset.yt} alt="" />
        </div>
    </div>
  );
};

export default Footer;
