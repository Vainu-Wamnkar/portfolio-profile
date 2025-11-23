import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'


export default function ThemeToggle() {
const [light, setLight] = useState(false)


useEffect(() => {
const initial = localStorage.getItem('theme') === 'light'
setLight(initial)
document.documentElement.classList.toggle('light', initial)
}, [])


function toggle() {
const to = !light
setLight(to)
document.documentElement.classList.toggle('light', to)
localStorage.setItem('theme', to ? 'light' : 'dark')
}


return (
<button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md">
{light ? <Sun size={18} /> : <Moon size={18} />}
</button>
)
}