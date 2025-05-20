
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
                    <div key={index} className={`flex flex-col items-center justify-center gap-3 p-4 rounded-lg shadow-lg bg-opacity-50  transition-transform duration-300  cursor-pointer ${theme ? "bg-gray-700":""}`}>
                        <div className='text-5xl hover:scale-125 transition-transform duration-700'>{skill.icon}</div>
                        <p className='text-lg font-semibold'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tech;
