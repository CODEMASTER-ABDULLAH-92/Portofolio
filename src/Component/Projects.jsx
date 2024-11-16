
import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { asset } from "../assets/asset";

const Projects = () => {
  const { theme } = useContext(ContextApi);
  
  return (
    <div id="Project"
      className={`${
        theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"
      } flex justify-center py-14 items-center flex-col px-[1vw]  sm:px-[5vw] md:px-[7vw] lg:px-[9vw]`}
    >
      <button className="bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1">
        Work
      </button>
      <p className="text-xl py-3">
        Some of the noteworthy projects I have built:
      </p>
      <div className="flex flex-col gap-10 w-full max-w-4xl">


        <div className={`  shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]  flex flex-col sm:flex-row project-cont justify-start items-start pt-2 ${
        theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"
      } `}>
        
          <div
            className={`${
              theme ? "bg-[--dark-btn-bg]" : "bg-[--ligth-about-bg]"
            } min-h-[300px] sm:min-h-[420px] w-full sm:w-[520px] rounded-l-lg flex justify-center items-center px-3`}
          >
         <a href="https://gym-24-three.vercel.app/">
         <img
  src={asset.gymome}
  className="project-img rounded-2xl object-cover h-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
  alt="Screenshot of Gym Website"
/>
  </a>

          </div>

          <div
            className={`${
              theme ? "bg-[--dark-card-bg]" : "bg-[--light-about-bg]"
            } min-h-[300px] sm:min-h-[420px] media-pad w-full sm:w-[520px] p-4 rounded-r-lg`}
          >
            <h1
              className={`${
                theme ? "text-white " : "text-black"
              } text-2xl font-semibold py-6 mrdia-heading`}
            >
              Gym WebSite
            </h1>
            <p className="pb-6 pad-pra">
            GYM24 is a modern, responsive fitness website built using React and Tailwind CSS. It offers users an intuitive interface to explore gym services, membership plans, workout routines, and health tips. The site is designed for optimal performance on all devices, ensuring a smooth user experience with fast loading times and easy navigation, making fitness accessible anytime, anywhere.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
                <button key={tech} className="bg-[--dark-btn-bg] text-white rounded-[17px] px-4 py-1">
                  {tech}
                </button>
              ))}
            </div>
          </div>


        </div>




        <div className="flex flex-col sm:flex-row project-cont justify-start items-start pt-2">
        <div
            className={`${
              theme ? "bg-[--dark-card-bg]" : "bg-[--light-about-bg]"
            } min-h-[300px] sm:min-h-[420px] media-pad w-full sm:w-[520px] p-4 rounded-r-lg`}
          >
            <h1
              className={`${
                theme ? "text-white" : "text-black"
              } text-2xl font-semibold py-6 mrdia-heading`}
            >
              Electra Car
            </h1>
            <p className="pb-6 pad-pra">
The Electric Car website is a sleek, modern platform built with React and Tailwind CSS, showcasing the latest in electric vehicle technology. It offers users detailed information on electric cars, their features, pricing, and sustainability benefits. Designed for a seamless, eco-friendly experience on all devices.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
                <button key={tech} className="bg-[--dark-btn-bg] text-white rounded-[17px] px-4 py-1">
                  {tech}
                </button>
              ))}
            </div>
          </div>
          <div
            className={`${
              theme ? "bg-[--dark-btn-bg]" : "bg-[--light-about-bg]"
            } min-h-[300px] sm:min-h-[420px] w-full sm:w-[520px] rounded-l-lg flex justify-center items-center px-3`}
          >
            <a href="https://electra-car-app.vercel.app/">

            <img
  src={asset.carHome}
  className="project-img rounded-2xl object-cover h-full p-2 transition-transform duration-300 ease-in-out hover:scale-110"
  alt="Screenshot of Gym Website"
/>
  </a>

          </div>
          
        </div>



      </div>
      <h1>Addin the Servises Section wich i privode aliek e-com protofioli web compler mern app </h1>
    </div>
  );
};

export default Projects;

