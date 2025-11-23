import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Internship from "./components/Internship";
import Education from "./components/Education";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const welcomeText = "Welcome To My Portfolio";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    // Letter-by-letter animation
    const interval = setInterval(() => {
      setDisplayedText(welcomeText.substring(0, index));
      index++;

      if (index > welcomeText.length) {
        clearInterval(interval);
      }
    }, 100); // Speed of each letter (100ms)

    // Hide welcome screen after 3 sec
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showWelcome ? (
        // ------------------ LETTER BY LETTER SCREEN ------------------
        <div className="h-screen flex items-center justify-center bg-black text-white">
          <h1 className="text-5xl font-bold tracking-wide fade-scale">
            {displayedText}
          </h1>

          {/* Animation CSS */}
          <style>
            {`
              .fade-scale {
                animation: scaleFade 0.3s ease-in-out;
              }

              @keyframes scaleFade {
                from {
                  opacity: 0;
                  transform: scale(0.9);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}
          </style>
        </div>
      ) : (
        // ------------------ MAIN PORTFOLIO ------------------
        <div className="min-h-screen bg-gray-900 text-white font-sans">
          <Navbar />
          <main className="pt-16">
            <Hero />
            <About />
            <Education/>
            <Skills />
            <Internship/>
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
