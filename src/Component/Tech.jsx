// import React from 'react'
// import { useContext } from 'react';
// import { ContextApi } from '../Context/ContextApi';
// import { asset } from '../assets/asset';
// const Tech = () => {
//     const { theme } = useContext(ContextApi);
//   return (
//     <div className={`${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} flex justify-center items-center flex-col gap-10 px-[1vw] sm:px-[5vw] md:px-[7vw] py-16 lg:px-[9vw]`} id='skill'>
//       <button className='bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1'>Skills</button>
//       <p className='text-xl text-center'>The skills, tools and technologies I am really good at:</p>
//       <div className='flex justify-between items-start gap-12  '>


//         <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-y-6 lg:grid-cols-10'>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.react} alt="" />
//         <p>React</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.git} alt="" />
//         <p>Git</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.db} alt="" />
//         <p>Mongodb</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.tailwind} alt="" />
//         <p>Tailwind</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.figma} alt="" />
//         <p>Figma</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={`${theme ? asset.exp_light: asset.exp_night}`} alt="" />
//         <p>Express</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.javaScript} alt="" />
//         <p>JavaScript</p>
//         </div>
//         <div className='flex  justify-between gap-4 items-center  flex-col'>
//         <img src={asset.next} alt="" />
//         <p>Next.js</p>
//         </div>
//         <div className='flex  justify-between h-[65px] w-[65px] gap-4 items-center  flex-col'>
//         <img src={asset.node} alt="" />
//         <p>Node.js</p>
//         </div>
//         <div className='flex  justify-between h-[65px] w-[65px] gap-4 items-center  flex-col'>
//         <img src={asset.redux} alt="" />
//         <p>Redux</p>
//         </div>
//         </div>
//       </div>
// </div>



//   )
// }

// export default Tech;


import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { FaReact, FaGitAlt, FaDatabase, FaCss3Alt, FaFigma, FaNodeJs, FaJsSquare, FaServer, FaCodeBranch, FaChartBar } from 'react-icons/fa';

const Tech = () => {
    const { theme } = useContext(ContextApi);
    
    const skills = [
        { icon: <FaReact className='text-blue-500' />, name: 'React' },
        { icon: <FaGitAlt className='text-orange-600' />, name: 'Git' },
        { icon: <FaDatabase className='text-green-600' />, name: 'MongoDB' },
        { icon: <FaCss3Alt className='text-blue-400' />, name: 'Tailwind' },
        { icon: <FaFigma className='text-purple-500' />, name: 'Figma' },
        { icon: <FaServer className='text-gray-500' />, name: 'Express' },
        { icon: <FaJsSquare className='text-yellow-500' />, name: 'JavaScript' },
        { icon: <FaNodeJs className='text-green-500' />, name: 'Node.js' },
        { icon: <FaCodeBranch className='text-red-500' />, name: 'Next.js' },
        { icon: <FaChartBar className='text-indigo-500' />, name: 'Redux' },
    ];

    return (
        <div className={`${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} flex justify-center items-center flex-col gap-10 px-[1vw] sm:px-[5vw] md:px-[7vw] py-16 lg:px-[9vw]`} id='skill'>
            <button className='bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1 text-lg font-semibold'>Skills</button>
            <p className='text-xl text-center font-medium'>The skills, tools, and technologies I am really good at:</p>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center'>
                {skills.map((skill, index) => (
                    <div key={index} className='flex flex-col items-center justify-center gap-3 p-4 rounded-lg shadow-lg bg-opacity-50 hover:scale-110 transition-transform duration-300 cursor-pointer'>
                        <div className='text-5xl'>{skill.icon}</div>
                        <p className='text-lg font-semibold'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tech;
