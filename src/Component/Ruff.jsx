import React from 'react'

const Ruff = () => {
  return (
    <div>
       {/* Animate the skills in horizontally  */}
            {/* As a full-stack developer with expertise in{" "}
<strong className="text-[#10B981] inline-flex overflow-hidden">
  <motion.div 
    ref={skillRef} 
    className="flex whitespace-nowrap items-center gap-2"
    animate={{ x: ["0%", "-100%"] }}
    transition={{ 
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
  >

    {[...skills, ...skills].map((skill, index) => (
      <motion.span 
        key={index} 
        className="inline-flex items-center gap-1 px-1"
        whileHover={{ scale: 1.1 }}
      >
        {skill.icon}
        {skill.name}
        {index < skills.length * 2 - 1 && ","}
      </motion.span>
    ))}
  </motion.div>
</strong> */}
    </div>
  )
}

export default Ruff
