import React, { useContext, useRef, useState } from "react";
import { asset } from "../assets/asset";
import { ContextApi } from "../Context/ContextApi";
const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ContextApi);
  
  // Navigation items data
  const navItems = [
    { id: "skill", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" }
  ];

const navRef = useRef();
  return (
    <header
      className={`${
        theme ? "bg-[--dark-hero-bg]" : "bg-[--light-hero-bg] shadow-md"
      } sticky top-0 z-50 py-4 backdrop-blur-md transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`${
            theme ? "bg-[--dark-hero-bg]" : "bg-[--light-hero-bg]"
          } flex items-center justify-between rounded-xl border border-opacity-20 p-4 backdrop-blur-sm ${
            theme ? "border-gray-600" : "border-gray-300"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className={`text-2xl font-bold ${
              theme ? "text-[--dark-text]" : "text-[--light-text]"
            } hover:opacity-80 transition-opacity duration-400 to-blue-600 from-red-400 bg-gradient-to-r  bg-clip-text text-transparent`}
          >
            Abdullah-dev.
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${
                      theme ? "text-[--dark-text]" : "text-[--light-text]"
                    } font-medium hover:text-opacity-80 transition-colors`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>


            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  theme ? "bg-gray-700" : "bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                <img
                  src={theme ? asset.moon : asset.sun}
                  alt="Theme icon"
                  className="w-5 h-5"
                />
              </button>

              <a
                href="/abdullah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme
                    ? "bg-[--light-hero-bg] text-[--light-text]"
                    : "bg-[--dark-hero-bg] text-[--dark-text]"
                } px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            <img
              src={
                mobileMenuOpen
                  ? theme
                    ? asset.cross_light
                    : asset.cross_gray
                  : theme
                  ? asset.burger_light
                  : asset.burger
              }
              alt="Menu"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-xl p-6 ${
              theme ? "bg-[--dark-hero-bg]" : "bg-[--light-hero-bg]"
            } min-h-screen shadow-lg`}
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 ${
                      theme ? "text-[--dark-text]" : "text-[--light-text]"
                    } font-medium hover:opacity-80 transition-opacity`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-6 pt-6 border-t border-opacity-20">
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className={`p-2 rounded-full ${
                  theme ? "bg-gray-700" : "bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                <img
                  src={theme ? asset.moon : asset.sun}
                  alt="Theme icon"
                  className="w-5 h-5"
                />
              </button>

              <a
                href="/abdullah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme
                    ? "bg-[--light-hero-bg] text-[--light-text]"
                    : "bg-[--dark-hero-bg] text-[--dark-text]"
                } px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;