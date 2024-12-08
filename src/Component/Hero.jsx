import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { asset } from '../assets/asset';

const Hero = () => {
  const { theme } = useContext(ContextApi);
  
  return (
    <div className={`py-20 flex flex-col-reverse justify-center sm:justify-between sm:flex-row px-[4vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"}`}>
      
      <section className='sm:w-2/3 w-full flex flex-col justify-start items-start'>
        <h1 className={`text-3xl font-bold mb-2 ${theme ? "text-white" : "text-black"}`}>Hi, I'm Abdullah</h1>
        <p className='mb-3 min-w-full'>
          I'm a full stack developer (React.js & Node.js) focused on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam exercitationem, quo, adipisci eius excepturi nulla quibusdam repellat aut accusantium quasi placeat dolore dolorum nihil rem consequatur ad, sed praesentium. Facere!
        </p>
        
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <img src={theme ? asset.location_light : asset.my} alt="Location Icon" aria-label="Location" />
            <p>Faisalabad, Pakistan</p>
          </div>
          <div className='flex items-center'>
            <div className='w-2 bg-[#10B981] ml-2 rounded-full h-2' />
            <p className='ml-4'>Available For New Projects</p>
          </div>
        </div>
        
        <div className='flex items-center gap-1 my-3'>
<a href="https://github.com/CODEMASTER-ABDULLAH-92"> <img src={asset.gitpink} className='h-[48px] w-[48px]' alt="" /></a>
      <a href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/"> <img src={asset.link} alt="" /> </a>    
         <a href="https://www.instagram.com/masah_dev/"> <img src={asset.insta} alt="" /></a>
          <img src={asset.yt} alt="" />
        </div>
      </section>
      
      <div className='flex flex-col justify-center items-center'>
        <img 
          src={asset.abdullah} 
          alt="Abdullah" 
          className='w-[280px] h-[300px] object-cover border-b-4 border-l-4 p-2 border-gray-600' 
          loading="lazy" 
        />
      </div>
    </div>
  );
};

export default Hero;