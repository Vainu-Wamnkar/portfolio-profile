import React from "react";

export default function Projects() {
  const data = [
    {
      title: "Food Delivery App",
      desc: "React + Tailwind + API based UI.",
    },
    {
      title: "GitHub User Search",
      desc: "Charts + API + Modern UI.",
    },
    {
      title: "EMS Software",
      desc: "Login, Attendance, CRUD.",
    },
  ];

  return (
    <section id="projects">
        <div className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
            {data.map((p) => (
            <div key={p.title} className="bg-gray-800 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-300">{p.desc}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
