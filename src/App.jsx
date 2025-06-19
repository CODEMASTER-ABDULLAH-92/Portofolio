import React, { useRef } from 'react'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import Tech from './Component/Tech'
import Testimonal from './Component/Testimonal'
import Footer from './Component/Footer'
import About from './Component/About'
import Projects from './Component/Projects'
import ServicesPage from './Component/Servies'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const bodyRef = useRef();
  const cursorRef = useRef();
  
  useGSAP(() => {
    // Move cursor element with mouse
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        left:e.x - 10,
        top: e.y - 10,
      });
    };
    
    bodyRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      bodyRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, { scope: bodyRef });

  return (
    <div ref={bodyRef} className='relative cursor-pointer'>
      {/* Custom cursor */}
      <div 
        ref={cursorRef} 
        id='cursor' 
        className='h-[40px] hidden md:block w-[40px] bg-red-500 rounded-full fixed pointer-events-none top-[50%] left-[50%] z-50 mix-blend-difference'
      ></div>

      {/* Page content */}
      <div className='relative z-10'>
        <Nav/>
        <Hero/>
        <About/>
        <Tech/>
        <Projects/>
        <Testimonal/>
        <ServicesPage/>
        <Footer/>
      </div>
    </div>
  )
}

export default App