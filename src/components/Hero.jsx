import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-auto mt-10 px-6 flex items-center" id="home">
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl font-bold mt-6"
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
            <a href="/vainu-wamnkar.pdf" className="px-6 py-3 border border-white rounded-lg hover:bg-gray-700">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/ritikwamnkar.jpg"
            alt="Profile"
            className="w-80 h-96 object-cover rounded-lg shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
