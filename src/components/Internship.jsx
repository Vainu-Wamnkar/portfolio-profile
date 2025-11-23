import React from "react";

export default function Internship() {
  return (
    <section id="internships">
      <div className="py-20 px-6 max-w-4xl mx-auto" >
        <h2 className="text-3xl font-bold mb-8 text-white">Internships</h2>

        {/* Internship 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow mb-6 hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-bold text-white">
            Backend Developer Intern – Info Bharat
          </h3>
          <p className="text-gray-300 mt-2">
            Built complete jewellery backend API with authentication, CRUD routes,
            order routes, and admin access system. Worked on database models and
            performance optimization.
          </p>
          <p className="text-gray-400 mt-2 italic">April 2025 – June 2025</p>
        </div>

        {/* Internship 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-[1.02] transition duration-300">
          <h3 className="text-xl font-bold text-white">
            Full Stack Developer Intern – Codec Technologies
          </h3>
          <p className="text-gray-300 mt-2">
            Built a complete Employee Management System with React, Node.js,
            Express, MongoDB. Worked on authentication, admin dashboard, and
            attendance tracking modules.
          </p>
          <p className="text-gray-400 mt-2 italic">
            September 2025 – October 2025
          </p>
        </div>
      </div>
    </section>
  );
}
