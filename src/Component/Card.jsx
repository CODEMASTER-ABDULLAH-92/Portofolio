import React from 'react'
import { asset } from '../assets/asset'
import { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
const Card = ({text1,text2,text3,img}) => {
    const { theme } = useContext(ContextApi);
  return (
    <div className={`${theme ? "bg-[--dark-card-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} flex justify-start items-center flex-col mb-6 gap-4 max-h-[430px] sm:min-h-[430px] px-[2vw] pt-11 rounded-lg  w-[28%] pb-5 card-media`}>
      <img src={img} className='h-24 w-24 rounded-full' alt="" />
      <p className='text-[16px] text-center'>{text1}</p>
      <div>
        <h1 className='text-center'>{text2}</h1>
        <p className='text-center'>{text3}</p>
      </div>
    </div>
  )
}

export default Card
