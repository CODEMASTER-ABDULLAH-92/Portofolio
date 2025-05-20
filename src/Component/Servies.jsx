// import { FaLaptopCode, FaHotel, FaChartLine, FaUserGraduate, FaGlobe, FaProjectDiagram } from 'react-icons/fa';
// import { MdWeb } from 'react-icons/md';

// const services = [
//   { icon: <FaLaptopCode />, title: "Full-Stack Applications", desc: "End-to-end development with modern technologies." },
//   { icon: <MdWeb />, title: "Custom Web Pages", desc: "Tailor-made web pages for businesses and individuals." },
//   { icon: <FaGlobe />, title: "Static & Dynamic Websites", desc: "Fast, responsive, and scalable websites." },
//   { icon: <FaHotel />, title: "Hotel Management Systems", desc: "Streamlined solutions for hotel operations." },
//   { icon: <FaChartLine />, title: "Dashboards & Analytics", desc: "Data-driven insights with interactive dashboards." },
//   { icon: <FaProjectDiagram />, title: "Portfolio & Travel Websites", desc: "Showcase your work or plan trips efficiently." },
//   { icon: <FaUserGraduate />, title: "Student Management Systems", desc: "Complete educational platform solutions." },
//   { icon: <MdWeb />, title: "And Much More!", desc: "Innovative solutions for every digital need." }
// ];

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-extrabold mb-6 text-gray-200">Our Services</h2>
//         <p className="text-lg text-gray-300 mb-12">We offer a variety of web solutions to bring your ideas to life.</p>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg hover:bg-opacity-20 transition-all duration-300">
//               <div className="text-4xl text-blue-300 mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-100">{service.title}</h3>
//               <p className="text-gray-300 mt-2">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { FaLaptopCode, FaHotel, FaChartLine, FaUserGraduate, FaGlobe, FaProjectDiagram } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const services = [
  { icon: <FaLaptopCode />, title: "Full-Stack Applications", desc: "End-to-end development with modern technologies." },
  { icon: <MdWeb />, title: "Custom Web Pages", desc: "Tailor-made web pages for businesses and individuals." },
  { icon: <FaGlobe />, title: "Static & Dynamic Websites", desc: "Fast, responsive, and scalable websites." },
  { icon: <FaHotel />, title: "Hotel Management Systems", desc: "Streamlined solutions for hotel operations." },
  { icon: <FaChartLine />, title: "Dashboards & Analytics", desc: "Data-driven insights with interactive dashboards." },
  { icon: <FaProjectDiagram />, title: "Portfolio & Travel Websites", desc: "Showcase your work or plan trips efficiently." },
  { icon: <FaUserGraduate />, title: "Student Management Systems", desc: "Complete educational platform solutions." },
  { icon: <MdWeb />, title: "And Much More!", desc: "Innovative solutions for every digital need." }
];

export default function ServicesPage() {
  const { theme } = useContext(ContextApi);

  return (
    <>
    
    <div
      id="Services"
      className={`${theme ? "bg-[--dark-about-bg] text-[white]"  : "bg-[--ligth-about-bg] text-black"}  py-16 px-6 md:px-16 flex flex-col items-center`}
        >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
      <p className="text-lg md:text-xl mb-12 text-center max-w-2xl leading-relaxed">
        We offer a variety of web solutions to bring your ideas to life.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
            <div
            key={index}
            className={`shadow-lg rounded-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
                theme
                ? "bg-[--dark-card-bg] text-[--dark-text]"
                : "bg-[--light-card-bg] text-[--light-text]"
            }`}
            >
            <div className="text-4xl mb-4 text-blue-300">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2 hover:text-[#F53E32]">{service.title}</h3>
            <p className="mb-6 text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>

        </>
  );
}
