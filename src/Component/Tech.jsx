import React from 'react'
import { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { asset } from '../assets/asset';
const Tech = () => {
    const { theme } = useContext(ContextApi);
  return (
    <div className={`${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} flex justify-center items-center flex-col gap-10 px-[1vw] sm:px-[5vw] md:px-[7vw] py-16 lg:px-[9vw]`} id='skill'>
      <button className='bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1'>Skills</button>
      <p className='text-xl text-center'>The skills, tools and technologies I am really good at:</p>
      <div className='flex justify-between items-start gap-12  '>


        <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-y-6 lg:grid-cols-10'>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.react} alt="" />
        <p>React</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.git} alt="" />
        <p>Git</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.db} alt="" />
        <p>Mongodb</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.tailwind} alt="" />
        <p>Tailwind</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.figma} alt="" />
        <p>Figma</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={`${theme ? asset.exp_light: asset.exp_night}`} alt="" />
        <p>Express</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.javaScript} alt="" />
        <p>JavaScript</p>
        </div>
        <div className='flex  justify-between gap-4 items-center  flex-col'>
        <img src={asset.next} alt="" />
        <p>Next.js</p>
        </div>
        <div className='flex  justify-between h-[65px] w-[65px] gap-4 items-center  flex-col'>
        <img src={asset.node} alt="" />
        <p>Node.js</p>
        </div>
        <div className='flex  justify-between h-[65px] w-[65px] gap-4 items-center  flex-col'>
        <img src={asset.redux} alt="" />
        <p>Redux</p>
        </div>
        </div>
      </div>
</div>



  )
}

export default Tech;