import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello, I'm Vainu, looking for an opportunity in the field of web development.  
            I am a web developer and recently completed a web development course from Sheryanse Coding,  
            which gave me the latest skills and knowledge in the web development industry.  
            I have done projects of different types of websites.  

            My focus is on designing and developing websites that look great and work well.  
            I am skilled in programming languages and platforms, including HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js, and MongoDB.  

            I attend professional web development courses to improve my skills.  
            My goal is creating websites that are both visually appealing and easy to use.  
            If you are looking for a web developer with these skills, please feel free to get in touch with me.
          </p>
        </div>


      </div>
    </section>
  );
}
