import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "skills", "projects", "internships", "contact", "education"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold cursor-pointer">Vainu Wamankar</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} className="text-white" /> : <HiMenu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Vertical & Slide Down) */}
      <div
        className={`md:hidden overflow-hidden bg-gray-800/95 backdrop-blur-md shadow-lg transition-all duration-500 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-400 text-lg"
                onClick={() => setIsOpen(false)} // click par menu close ho jaye
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
