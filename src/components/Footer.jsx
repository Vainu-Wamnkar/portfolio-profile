import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Email */}
        <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
        <a
          href="mailto:wamnkarr@gmail.com"
          className="flex items-center justify-center gap-2 text-lg text-blue-400 hover:text-blue-500 transition-all"
        >
          <FaEnvelope className="text-xl" />
          wamnkarr@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-6 text-3xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-blue-500 transition-transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-pink-500 transition-transform hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-gray-400 transition-transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Divider */}
        <div className="mt-8 h-[1px] bg-gray-700 w-full"></div>

        {/* Copyright */}
        <p className="text-sm mt-4 text-gray-400">
          © 2025 <span className="font-semibold text-white">Vainu Wamankar</span> — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
