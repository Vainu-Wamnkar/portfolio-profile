import React from 'react'
import { motion } from 'framer-motion'


export default function ProjectCard({ project, onOpen }) {
return (
<motion.div layout whileHover={{ scale: 1.02 }} className="bg-gray-800 rounded-xl p-4 shadow">
<img src={project.image} alt={project.title} className="w-full h-36 object-cover rounded-md mb-3" />
<h3 className="text-xl font-bold">{project.title}</h3>
<p className="text-gray-300 mt-2">{project.short}</p>
<div className="mt-4 flex justify-between items-center">
<div className="text-sm text-blue-400"><a href={project.live}>Live</a></div>
<button onClick={() => onOpen(project)} className="px-3 py-1 border rounded">Details</button>
</div>
</motion.div>
)
}