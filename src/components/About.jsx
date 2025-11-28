import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 mt-20 sm:mt-1">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
                  Hello, I'm Vainu, looking for an opportunity in the field of web development.  
                  I am a Frontend Developer  with a strong foundation in Computer Science. I have completed internships in web development, where I worked on building responsive and user-friendly web applications. I am passionate about creating seamless UI/UX experiences and continuously improving my skills in modern frontend technologies.
            </p>
        </div>


      </div>
    </section>
  );
}
