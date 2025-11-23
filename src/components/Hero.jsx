import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen px-6 flex items-center mt-20 sm:mt-1" id="home">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold"
          >
            Hi, I’m <span className="text-blue-400">Vainu Wamankar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mt-4 max-w-xl"
          >
            Frontend Developer | UI/UX Developer | Frontend Engineer | Web Developer   
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 space-x-4"
          >
            <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-lg">
              Hire Me
            </a>

            <a href="/vainu-wamnkar.pdf" className="px-6 py-3 border border-white rounded-lg">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/ritik.jpg"
            alt="Profile"
            className="w-80 h-72 object-cover rounded-xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
