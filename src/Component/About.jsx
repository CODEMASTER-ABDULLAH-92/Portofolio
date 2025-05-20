import { FaBullseye, FaRegComments, FaClock } from "react-icons/fa";
import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

const About = () => {
  const { theme } = useContext(ContextApi);
  
  const features = [
    {
      icon: FaBullseye,
      title: "Quality Focus",
      description: "Delivering high-quality results while maintaining attention to every detail. Our commitment to excellence ensures your project meets the highest standards with pixel-perfect precision and robust functionality.",
      iconBg: theme ? "bg-blue-900" : "bg-blue-100",
      iconColor: theme ? "text-blue-300" : "text-blue-600"
    },
    {
      icon: FaRegComments,
      title: "Reliable Communication",
      description: "Keeping you updated at every step to ensure transparency and clarity. We provide regular progress reports, quick responses, and clear documentation to keep you informed throughout the development process.",
      iconBg: theme ? "bg-green-900" : "bg-green-100",
      iconColor: theme ? "text-green-300" : "text-green-600"
    },
    {
      icon: FaClock,
      title: "Timely Delivery",
      description: "Meeting deadlines without compromising on quality. Our agile workflow and efficient project management ensure your product is delivered on schedule, every time.",
      iconBg: theme ? "bg-purple-900" : "bg-purple-100",
      iconColor: theme ? "text-purple-300" : "text-purple-600"
    }
  ];

  return (
    <section id="about" className={`${theme ? "bg-[--dark-about-bg]" : "bg-[--light-about-bg]"} transition-colors duration-300`}>
      <div className={`${theme ? "text-[--dark-text]" : "text-[--light-text]"} container mx-auto px-4 sm:px-6 py-28`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <button className={`${theme ? "bg-[--dark-btn-bg]" : "bg-[--light-btn-bg]"} text-white rounded-[17px] px-6 py-1 font-medium mb-4 transition-colors duration-300`}>
            About me
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Core Principles</h2>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            These values guide every project I undertake, ensuring exceptional results and satisfied clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${theme ? "bg-[--dark-card-bg]" : "bg-white"} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <div className={`${feature.iconBg} p-3 rounded-full mr-4`}>
                  <feature.icon className={`${feature.iconColor} text-2xl`} />
                </div>
                <h3 className={`text-xl font-bold ${theme ? "text-white" : "text-gray-800"}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`${theme ? "text-gray-300" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;