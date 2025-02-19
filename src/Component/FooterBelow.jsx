import React, { useContext } from 'react';
import { ContextApi } from '../Context/ContextApi';

const FooterBelow = () => {
  const { theme } = useContext(ContextApi);

  return (
    
    <footer className={` ${theme ? "bg-[--dark-hero-bg] text-[--dark-text]" : "bg-[--light-hero-bg] text-[--light-text]"} py-6 text-center px-[1vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]`}>
      <p>&copy; 2025 | <a href="https://github.com/CODEMASTER-ABDULLAH-92"> Coded </a> with &hearts; by Abdullah Al-Hussaini</p>
    </footer>
  );
}

export default FooterBelow;
