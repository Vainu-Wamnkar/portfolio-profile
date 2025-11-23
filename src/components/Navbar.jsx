import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold cursor-pointer">Vainu Wamankar</h1>

        <div className="hidden md:flex space-x-6">
          {["home", "about", "skills", "projects", "internships", "contact","education"].map((item) => (
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
      </div>
    </nav>
  );
}
