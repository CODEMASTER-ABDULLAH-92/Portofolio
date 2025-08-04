import React, { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

const Testimonials = () => {
  const { theme } = useContext(ContextApi);

  const testimonials = [
    {
      quote:
        "Abdullah is an exceptional developer with a strong eye for design. He transformed our vision into a fully functional and modern application.",
      author: "John Doe",
      role: "CEO, TechCorp",
      avatar: "https://i.pravatar.cc/150?img=3",
      accentColor: "#3B82F6",
    },
    {
      quote:
        "The dedication and creativity Abdullah brings to his projects are truly inspiring. Working with him was a seamless experience.",
      author: "Sarah Ali",
      role: "Project Manager, InnovateX",
      avatar: "https://i.pravatar.cc/150?img=5",
      accentColor: "#10B981",
    },
    {
      quote:
        "A developer who not only writes efficient code but also ensures a beautiful and user-friendly interface. Highly recommended!",
      author: "Michael Lee",
      role: "CTO, NextGen Solutions",
      avatar: "https://i.pravatar.cc/150?img=7",
      accentColor: "#8B5CF6",
    },
  ];

  return (
    <div
      id="testimonials"
      className={`${
        theme
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      } transition-colors duration-300 py-24 px-6 md:px-16`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-75"></span>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Testimonials
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Hear from people I’ve <span className="font-medium text-blue-500">collaborated</span> with and those who’ve{" "}
            <span className="font-medium text-purple-500">trusted my work</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                theme ? "hover:shadow-blue-900/30" : "hover:shadow-blue-400/20"
              }`}
              style={{
                boxShadow: `0 10px 30px -10px ${testimonial.accentColor}40`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition duration-500"
                style={{
                  background: `linear-gradient(135deg, ${testimonial.accentColor} 0%, ${testimonial.accentColor}80 100%)`,
                }}
              ></div>

              <div
                className={`relative h-full rounded-2xl p-8 ${
                  theme
                    ? "bg-gray-800/90 backdrop-blur-sm"
                    : "bg-white/90 backdrop-blur-sm"
                }`}
              >
                <p
                  className={`mb-8 text-sm italic leading-relaxed ${
                    theme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  “{testimonial.quote}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2"
                    style={{ borderColor: testimonial.accentColor }}
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                    <p
                      className={`text-sm ${
                        theme ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg opacity-80 mb-6">
            Want to collaborate with me?
          </p>
          <a
            href="mailto:abdullahpeerzada92@gmail.com"
            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
              theme
                ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"
            } shadow-lg hover:shadow-xl`}
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
