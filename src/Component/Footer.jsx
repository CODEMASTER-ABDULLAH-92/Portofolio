import React, { useRef, useContext, useState } from 'react';
import { ContextApi } from '../Context/ContextApi';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
  FaCheck,
} from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ContextApi);
  const [copied, setCopied] = useState({ email: false, phone: false });
  const copyTimeoutRef = useRef(null);

  const copyTextToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [type]: true }));

    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);

    copyTimeoutRef.current = setTimeout(() => {
      setCopied(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email me at',
      value: 'infoabdullahdev92@gmail.com',
      type: 'email',
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Call me at',
      value: '+92 323 3381938',
      type: 'phone',
    },
  ];

  return (
    <footer
      id="contact"
      className={`${
        theme ? 'bg-[--dark-hero-bg] text-[--dark-text]' : 'bg-[--light-hero-bg] text-[--light-text]'
      } py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center gap-8`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center">
        Let's <span className="text-[--dark-btn-bg]">Connect</span>
      </h2>

      <p className="text-center max-w-2xl text-lg opacity-90 leading-relaxed">
        I'm open to exciting opportunities. Whether you want to build something amazing or just say hello, reach out!
      </p>

      <div className="w-full max-w-2xl flex flex-col gap-6">
        {contactItems.map(({ icon, label, value, type }) => (
          <div key={type} className="flex items-center gap-4 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all">
            <div className="p-3 rounded-full bg-[--dark-btn-bg] text-white">{icon}</div>
            <div className="flex-1">
              <p className="text-sm opacity-70">{label}</p>
              <div className="flex items-center gap-2">
                <span
                  className="text-base sm:text-lg font-semibold cursor-pointer hover:text-[--dark-btn-bg] transition-colors"
                  onClick={() => copyTextToClipboard(value, type)}
                >
                  {value}
                </span>
                <div className="relative">
                  <div
                    className="cursor-pointer text-gray-500 hover:text-[--dark-btn-bg] transition"
                    onClick={() => copyTextToClipboard(value, type)}
                  >
                    {copied[type] ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
                  </div>
                  {copied[type] && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-8 opacity-80 text-sm">Find me on</p>
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/CODEMASTER-ABDULLAH-92"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[--dark-btn-bg] transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-abdullah-671bb7322/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[--dark-btn-bg] transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="mt-10 text-xs opacity-60 text-center">
        &copy; {new Date().getFullYear()} | Built with <span className="text-red-500">❤</span> by Abdullah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
