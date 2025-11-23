import { section } from "framer-motion/client";
import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaMicrosoft, FaGithub 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiPostman, SiExpress, SiVscodium, SiFigma 
} from "react-icons/si";

export default function Skills() {

  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
    { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" /> },
    { name: "API Handling", icon: <SiPostman size={40} className="text-orange-400" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-400" /> },
  ];

  const softwareTools = [
    { name: "MS Word", icon: <FaMicrosoft size={40} className="text-blue-500" /> },
    { name: "MS Excel", icon: <FaMicrosoft size={40} className="text-green-500" /> },
    { name: "PowerPoint", icon: <FaMicrosoft size={40} className="text-orange-500" /> },
    { name: "VS Code", icon: <SiVscodium size={40} className="text-blue-400" /> },
    { name: "GitHub", icon: <FaGithub size={40} className="text-white" /> },
    { name: "Postman", icon: <SiPostman size={40} className="text-orange-400" /> }
  
  ];

  return (
    <section id="skills">
        <div className="py-20 bg-gray-900 px-6 text-white">
        <h2 className="text-3xl text-center font-bold mb-12">Skills</h2>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {technicalSkills.map((skill, index) => (
            <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition shadow-lg cursor-pointer"
            >
                <div className="flex justify-center mb-3">{skill.icon}</div>
                <p className="text-lg font-semibold">{skill.name}</p>
            </div>
            ))}
        </div>

        {/* Software Tools */}
        <h3 className="text-2xl font-semibold mb-6 text-center">Software Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {softwareTools.map((tool, index) => (
            <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl text-center hover:bg-gray-700 transition shadow-lg cursor-pointer"
            >
                <div className="flex justify-center mb-3">{tool.icon}</div>
                <p className="text-lg font-semibold">{tool.name}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
