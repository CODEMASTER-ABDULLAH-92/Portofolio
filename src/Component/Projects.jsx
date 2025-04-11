import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { Link } from "react-router-dom";

const Projects = () => {
  const { theme } = useContext(ContextApi);

  return (
    <div
      id="Project"
      className={`${
        theme
          ? "bg-[--dark-hero-bg] text-[--dark-text]"
          : "bg-[--light-hero-bg] text-[--light-text]"
      } py-16 px-6 md:px-16 flex flex-col items-center`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Projects
      </h2>
      <p className="text-lg md:text-xl mb-12 text-center max-w-2xl leading-relaxed">
        Explore some of the noteworthy projects I have built, showcasing my
        expertise in modern web development technologies and design practices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Project 1 */}

 {/* <Link
  to="https://mesh-dev.vercel.app/"
  className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
    theme
      ? "bg-[--dark-card-bg] text-[--dark-text]"
      : "bg-[--light-card-bg] text-[--light-text]"
  }`}
>
<Link to="https://github.com/CODEMASTER-ABDULLAH-92/TroJobs" 
  className="absolute right-4 top-4  text-white px-4 py-2 rounded-md bg-gray-700 transition"
>
  Source Code
</Link>

  <a
    href="https://mesh-dev.vercel.app/"
    className="text-2xl font-bold mb-4 hover:text-[#F53E32]"
    target="_blank"
    rel="noopener noreferrer"
  >
Mesh Dev
  </a>
  <p className="mb-6 text-sm sm:text-base">
  Masah Dev is a DSA learning platform designed to help programmers master Data Structures and Algorithms. Built with modern web technologies, it provides an engaging and interactive experience for learners.
  </p>
  <div className="flex flex-wrap gap-2">
    {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "Figma"].map((tech) => (
      <span
        key={tech}
        className="bg-[--dark-btn-bg] text-white px-4 py-1 rounded-full text-sm"
      >
        {tech}
      </span>
    ))}
  </div>
</Link>  */}

       
        {/* Additional Projects */}
        <Link
          to="https://food-trove-app-h7hl.vercel.app/"
          className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
            theme
              ? "bg-[--dark-card-bg] text-[--dark-text]"
              : "bg-[--light-card-bg] text-[--light-text]"
          }`}
        >
          <a
            href="https://food-trove-app-h7hl.vercel.app/"
            className="text-2xl font-bold mb-4 hover:text-[#F53E32]"
            target="_blank"
            rel="noopener noreferrer"
          >
            FoodTrove
          </a>
          <Link to="https://github.com/CODEMASTER-ABDULLAH-92/FoodTrove" 
  className="absolute right-4 top-4  text-white px-4 py-2 rounded-md bg-gray-700 transition"
>
  Source Code
</Link>
          <p className="mb-6 text-sm sm:text-base">
            FoodTrove is a MERN stack app showcasing web development skills.
            Perfect for food-related services, it integrates modern design and
            efficient data management.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
              <span
                key={tech}
                className="bg-[--dark-btn-bg] text-white px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>

        <Link
          to="https://gym-24-three.vercel.app/"
          className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
            theme
              ? "bg-[--dark-card-bg] text-[--dark-text]"
              : "bg-[--light-card-bg] text-[--light-text]"
          }`}
        >
          <a
            href="https://gym-24-three.vercel.app/"
            className="text-2xl font-bold mb-4 hover:text-[#F53E32]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GYM24
          </a>
          <Link to="https://github.com/CODEMASTER-ABDULLAH-92/CompleteGYM" 
  className="absolute right-4 top-4  text-white px-4 py-2 rounded-md bg-gray-700 transition"
>
  Source Code
</Link>
          <p className="mb-6 text-sm sm:text-base">
            GYM24 is a fitness-focused React app showcasing gym services,
            membership plans, and workout routines with a seamless and modern
            UI.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
              <span
                key={tech}
                className="bg-[--dark-btn-bg] text-white px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>

        <Link
          to="https://electra-car-app.vercel.app/"
          className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
            theme
              ? "bg-[--dark-card-bg] text-[--dark-text]"
              : "bg-[--light-card-bg] text-[--light-text]"
          }`}
        >
          <a
            href="https://electra-car-app.vercel.app/"
            className="text-2xl font-bold mb-4 hover:text-[#F53E32]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electra Car
          </a>
          <Link to="https://github.com/CODEMASTER-ABDULLAH-92/Car-App" 
  className="absolute right-4 top-4  text-white px-4 py-2 rounded-md bg-gray-700 transition"
>
  Source Code
</Link>
          <p className="mb-6 text-sm sm:text-base">
            A platform showcasing the latest in electric car technology,
            including detailed features, pricing, and sustainability benefits.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
              <span
                key={tech}
                className="bg-[--dark-btn-bg] text-white px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>
        <Link
          to="https://forge-gaming-app.vercel.app/"
          className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
            theme
              ? "bg-[--dark-card-bg] text-[--dark-text]"
              : "bg-[--light-card-bg] text-[--light-text]"
          }`}
        >
          <a
            href="https://forge-gaming-app.vercel.app/"
            className="text-2xl font-bold mb-4 hover:text-[#F53E32]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forge App
          </a>
          <Link to="https://github.com/CODEMASTER-ABDULLAH-92/Forge-Gaming-App" 
  className="absolute right-4 top-4  text-white px-4 py-2 rounded-md bg-gray-700 transition"
>
  Source Code
</Link>
          <p className="mb-6 text-sm sm:text-base">
            Forge Gaming App is a MERN stack-powered platform for gamers to
            explore news, reviews, and resources. It offers personalized
            profiles, real-time updates, and a sleek interface for a seamless
            experience.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Git", "Figma"].map((tech) => (
              <span
                key={tech}
                className="bg-[--dark-btn-bg] text-white px-4 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
