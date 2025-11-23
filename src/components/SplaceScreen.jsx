import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-screen flex items-center justify-center bg-gray-900"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Welcome to My <span className="text-blue-400">Portfolio</span>
      </h1>
    </motion.div>
  );
}
