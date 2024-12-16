
import React, { useContext } from "react";
import { asset } from "../assets/asset";
import { ContextApi } from "../Context/ContextApi";

const About = () => {
  const { theme } = useContext(ContextApi);
  return (
    <div id="about">
      <div
        className={`${
          theme
            ? "bg-[--dark-about-bg] text-[--dark-text]"
            : "bg-[--ligth-about-bg] text-[--light-text]"
        } flex justify-center items-center gap-10 flex-col px-[1vw] sm:px-[5vw] md:px-[7vw] py-28 lg:px-[9vw]`}
      >
        <button className="bg-[--dark-btn-bg] text-white rounded-[17px] px-6 py-1">
          About me
        </button>
        <div className="flex sm:flex-row flex-col-reverse justify-start items-start gap-10">
          <div>
            <h2 className={`${theme ? "text-white":"text-black"} text-2xl font-semibold pb-2`}>Curious about me? Here you have it:</h2>
            <p>
              I'm a passionate, self-proclaimed developer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me. I
              began my journey as a web developer in 2023, and since then, I've
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 2 years after starting my web
              development journey,I am very much a progressive
              thinker and enjoy working on products end to end, from ideation
              all the way to development.Finally, some quick bits about me. B.S. in Software Engineering,
              Avid learner, Full-time freelancer. One last
              thing, I'm available for freelance work, so feel free to reach out
              and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
