// import React, { useContext } from "react";
// import { ContextApi } from "../Context/ContextApi";

// // FontAwesome icons
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaCube } from "react-icons/fa";

// // SimpleIcons
// import {
//   SiJavascript,
//   SiNextdotjs,
//   SiExpress,
//   SiMongodb,
//   SiTailwindcss,
//   SiCplusplus,
//   SiGit,
// } from "react-icons/si";

// const Tech = () => {
//   const { theme } = useContext(ContextApi);

//   const skills = [
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-500" /> },
//     { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
//     { name: "OOP", icon: <FaCube className="text-purple-600" /> },
//     { name: "Git", icon: <SiGit className="text-orange-600" /> },
//   ];

//   return (
//     <div
//       id="skill"
//       className={`${
//         theme
//           ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
//           : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
//       } transition-colors duration-300 py-24 px-6`}
//     >
//       <div className="max-w-4xl mx-auto">
//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="relative inline-block">
//               <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
//               <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//                 Skills & Tools
//               </span>
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
//             The <span className="font-medium text-blue-500">technologies</span> and{" "}
//             <span className="font-medium text-purple-500">tools</span> I excel at
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
//                 theme
//                   ? "bg-gray-800/90 backdrop-blur-sm hover:shadow-blue-900/30"
//                   : "bg-white/90 backdrop-blur-sm hover:shadow-blue-400/20"
//               }`}
//               style={{
//                 boxShadow: `0 10px 25px -10px rgba(0,0,0,0.15)`,
//               }}
//             >
//               <div className="text-5xl transform transition-transform duration-500 group-hover:scale-125">
//                 {skill.icon}
//               </div>
//               <p className="text-lg font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tech;


import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

// FontAwesome
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaCube } from "react-icons/fa";

// SimpleIcons
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiRedux,
  SiTypescript,
  SiEslint,
  SiGreensock, // GSAP
} from "react-icons/si";

// Context API has no official icon, so we’ll use React icon with a custom color
const ContextIcon = () => (
  <FaReact className="text-pink-500 rotate-90" title="Context API" />
);

const Tech = () => {
  const { theme } = useContext(ContextApi);

  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Context API", icon: <ContextIcon /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "GSAP", icon: <SiGreensock className="text-green-700" /> },
  ];

  return (
    <div
      id="skill"
      className={`${
        theme
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      } transition-colors duration-300 py-24 px-6`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Skills & Tools
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            The <span className="font-medium text-blue-500">technologies</span> and{" "}
            <span className="font-medium text-purple-500">tools</span> I excel at
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                theme
                  ? "bg-gray-800/90 backdrop-blur-sm hover:shadow-blue-900/30"
                  : "bg-white/90 backdrop-blur-sm hover:shadow-blue-400/20"
              }`}
              style={{
                boxShadow: `0 10px 25px -10px rgba(0,0,0,0.15)`,
              }}
            >
              <div className="text-5xl transform transition-transform duration-500 group-hover:scale-125">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
