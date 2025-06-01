import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { Link } from "react-router-dom";
import { asset } from "../assets/asset";

const Projects = () => {
  const { theme } = useContext(ContextApi);

  const projects = [
    {
      title: "CodeCraft Portfolio",
      description: "A modern developer portfolio showcasing my skills, projects, and professional journey. Built with performance and aesthetics in mind, featuring smooth animations and responsive design.",
      image: asset.port,
      demoUrl: "https://abdullah-kohl.vercel.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/Portofolio",
      technologies: ["React.js", "GSAP", "Tailwind CSS", "Node.js", "MongoDB", "Express" , "Figma", "Vite"],
      accentColor: "#3B82F6" // blue
    },
    {
      title: "ScholarPath Finder",
      description: "A comprehensive scholarship application platform helping students discover and apply for educational funding opportunities worldwide with smart matching algorithms.",
      image: asset.scholar,
      demoUrl: "https://scholar-ship-app.vercel.app/",
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/ScholarShip-App",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express", "JWT Auth"],
      accentColor: "#10B981" // emerald
    },{
      title: "Code365",
      description: "An aesthetic learning platform for mastering Data Structures, Algorithms, and core programming languages using interactive 3D models and modern UI.",
      image: asset.code365, // replace with your actual image asset variable
      demoUrl: "https://mesh-dev.vercel.app/", // update if you have a live URL
      codeUrl: "https://github.com/CODEMASTER-ABDULLAH-92/mesh-dev", // update if you have a GitHub repo
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      accentColor: "#3B82F6" // a vibrant bluish tone from Tailwind palette
    }
    
  ];

  return (
    <div
      id="project"
      className={`${
        theme
          ? "bg-[--dark-about-bg] text-[--dark-text]"
          : "bg-[--light-about-bg] text-[--light-text]"
      } transition-colors duration-300 py-16 px-6 md:px-16`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            My Projects
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Explore my featured projects that demonstrate my expertise in modern web development, 
            with attention to design, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-xl ${
                theme ? "bg-[--dark-card-bg]" : "bg-[--light-card-bg]"
              } transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-20 z-10"></div>
              
              {/* Project Image */}
              <div className=" overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-[#F53E32] transition-colors duration-300">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                    } hover:bg-gray-600 hover:text-white transition-colors`}
                  >
                    Source Code
                  </a>
                </div>
                
                <p className="mb-6 text-sm sm:text-base opacity-90 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: theme 
                          ? `${project.accentColor}20` // 20% opacity
                          : `${project.accentColor}10`,
                        color: theme 
                          ? project.accentColor 
                          : `${project.accentColor}DD`,
                        border: theme 
                          ? `1px solid ${project.accentColor}30`
                          : `1px solid ${project.accentColor}20`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${project.accentColor}10 0%, transparent 70%)`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;