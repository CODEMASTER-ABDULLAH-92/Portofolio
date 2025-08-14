import React, { useContext, useRef, useEffect } from "react";
import { ContextApi } from "../Context/ContextApi";
import { asset } from "../assets/asset";
import gsap from "gsap";

const Certificates = () => {
  const { theme } = useContext(ContextApi);
  const marqueeRef = useRef(null);
  const marqueeWrapperRef = useRef(null);

  const certificates = [
    { img: asset.c1, title: "Agile Project Management by HP Life" },
    { img: asset.c2, title: "UX Design by Google" },
    { img: asset.c3, title: "Project Management by Google" },
    { img: asset.c4, title: "Agile Essentials by Google" },
    { img: asset.b1, title: "Agile Essentials Badge by Google" },
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const wrapper = marqueeWrapperRef.current;
    
    // Calculate total width of all items plus gaps
    const items = marquee.querySelectorAll(".marquee-item");
    const gap = 32; // Your gap value
    let totalWidth = 0;
    
    items.forEach(item => {
      totalWidth += item.offsetWidth + gap;
    });
    
    // Set the wrapper width to half (since we duplicated the items)
    wrapper.style.width = `${totalWidth / 2}px`;
    
    // Create the animation timeline
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate the marquee
    tl.fromTo(
      marquee,
      { x: 0 },
      {
        x: `-=${totalWidth / 2}`,
        duration: 20,
        ease: "none",
      }
    );
    
    // Clean up the animation on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      id="certificates"
      className={`${
        theme
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      } transition-colors duration-300 py-16 px-6 overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                Certificates
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Recognitions &{" "}
            <span className="font-medium text-green-500">achievements</span>
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden" ref={marqueeWrapperRef}>
          <div
            ref={marqueeRef}
            className="flex gap-8 w-max"
          >
            {/* Duplicate certificates twice for smooth loop */}
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className={`marquee-item flex flex-col items-center justify-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  theme
                    ? "bg-gray-800/90 backdrop-blur-sm hover:shadow-green-900/30"
                    : "bg-white/90 backdrop-blur-sm hover:shadow-green-400/20"
                }`}
                style={{
                  boxShadow: "0 10px 25px -10px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="h-32 w-32 object-contain rounded-lg grayscale-0 hover:grayscale transition-all duration-500"
                />
                <p className="text-sm font-medium">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;