import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';
import { 
  FaReact, FaGitAlt, FaDatabase, FaCss3Alt, 
  FaFigma, FaNodeJs, FaJsSquare, FaServer, 
  FaCodeBranch, FaChartBar 
} from 'react-icons/fa';

const Tech = () => {
  const { theme } = useContext(ContextApi);

  const skills = [
    { icon: <FaReact className="text-blue-500" />, name: 'React' },
    { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
    { icon: <FaDatabase className="text-green-600" />, name: 'MongoDB' },
    { icon: <FaCss3Alt className="text-blue-400" />, name: 'Tailwind' },
    { icon: <FaFigma className="text-purple-500" />, name: 'Figma' },
    { icon: <FaServer className="text-gray-500" />, name: 'Express' },
    { icon: <FaJsSquare className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
    { icon: <FaCodeBranch className="text-red-500" />, name: 'Next.js' },
    { icon: <FaChartBar className="text-indigo-500" />, name: 'Redux' },
  ];

  return (
    <div
      id="skill"
      className={`${
        theme
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      } transition-colors duration-300 py-24 px-6 `}
    >
      <div className="max-w-4xl mx-auto">
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
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
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
