import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';

const Testimonal = ({ quote, author, role, img, accentColor }) => {
  const {theme} = useContext(ContextApi)
  return (
    <div 
      className={`relative bg-black group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        theme ? "bg-gray-800/50 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{
        boxShadow: `0 10px 30px -10px ${accentColor}20`
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)`
        }}
      ></div>
      
      <div className="relative h-full p-8">
        <div className="flex items-start mb-6">
          <div className="text-4xl opacity-30 mr-4" style={{ color: accentColor }}>"</div>
          <p className={`text-lg leading-relaxed ${
            theme ? "text-gray-300" : "text-gray-700"
          }`}>
            {quote}
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <img 
              src={img} 
              alt={author} 
              className="w-14 h-14 rounded-full object-cover border-2"
              style={{ borderColor: accentColor }}
            />
            <div 
              className="absolute -inset-1 rounded-full border-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ borderColor: accentColor }}
            ></div>
          </div>
          <div>
            <h4 className={`font-bold ${
              theme ? "text-white" : "text-gray-900"
            }`}>
              {author}
            </h4>
            <p 
              className="text-sm"
              style={{ color: accentColor }}
            >
              {role}
            </p>
          </div>
        </div>
        
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}80 100%)`
          }}
        ></div>
      </div>
    </div>
  );
};

export default Testimonal;