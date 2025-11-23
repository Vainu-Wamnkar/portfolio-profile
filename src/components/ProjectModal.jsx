import React from 'react'
import { motion } from 'framer-motion'


export default function ProjectModal({ project, onClose }) {
if (!project) return null
return (
<div className="fixed inset-0 z-50 flex items-center justify-center">
<div onClick={onClose} className="absolute inset-0 bg-black/60" />
<motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }} className="relative bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-2xl">
<button onClick={onClose} className="absolute top-4 right-4">Close</button>
<img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
<h3 className="text-2xl font-bold">{project.title}</h3>
<p className="mt-2 text-gray-300">{project.description}</p>
<div className="mt-4 flex gap-2">
{project.tech.map(t => (<span key={t} className="px-2 py-1 bg-gray-800 rounded">{t}</span>))}
</div>
<div className="mt-4 flex gap-3">
<a href={project.live} className="px-4 py-2 bg-blue-600 rounded">Live</a>
<a href={project.repo} className="px-4 py-2 border rounded">Code</a>
</div>
</motion.div>
</div>
)
}