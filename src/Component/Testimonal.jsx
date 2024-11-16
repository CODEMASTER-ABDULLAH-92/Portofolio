import React from 'react'
import { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import Card from './Card';
import { asset } from '../assets/asset';
const Testimonal = () => {
    const { theme } = useContext(ContextApi);
  return (
    <div className={`${theme ? "bg-[--dark-about-bg] text-[--dark-text]" : "bg-[--ligth-about-bg] text-[--light-text]"} flex justify-center items-center flex-col gap-10 px-[1vw] sm:px-[5vw] md:px-[7vw] py-28 lg:px-[9vw]`}>
      <button className='bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1'>Testimonail</button>
      <p className='text-xl text-center'>Nice things people have said about me:</p>
      <div className='flex sm:flex-row flex-col gap-4 justify-center items-center'>
        <Card text1={"Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”"} text2={"Ahmad Shah"} text3={"Client"} img={asset.man}/>
        <Card text1={"“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”"} text2={"Naveed Rana"} text3={"CEO and Founder at  Techloset"} img={asset.avater} />
        <Card text1={"“ Abdullah focused on project success. Abdullah's expertise in the MERN stack ensured smooth development, handling my application with ease and delivering great results.”"} text2={"Rajab Ali"} text3={"Freelancer"} img={asset.ava}/>
      </div>
    </div>
  )
}

export default Testimonal
