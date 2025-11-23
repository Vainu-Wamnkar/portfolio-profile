import React from "react";

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "10th",
      school: "HSSB MP Board",
      year: "Year: 2019", // Aap yahan pass out year daal sakte ho
      percentage: "85.2%",
    },
    {
      id: 2,
      degree: "12th",
      school: "HSSB Board",
      year: "Year: 2021",
      percentage: "84%",
    },
    {
      id: 3,
      degree: "B.Tech in Computer Science",
      school: "RGPV University",
      year: "Year: 2025",
      percentage: "73%", // Agar CGPA/Percentage hai toh daal do
    },
  ];

  return (
    <section id="education">
        <div className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-6">
            {educationData.map((edu) => (
            <div
                key={edu.id}
                className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-300">{edu.school}</p>
                <p className="text-gray-400">{edu.year}</p>
                <p className="text-gray-400">Percentage: {edu.percentage}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
