import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
import Experiences from './components/Experiences.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <About />
    <Contact />
    <Skills />
    <Experiences />
    <Projects />
    <Testimonials />
  </React.StrictMode>,
)
