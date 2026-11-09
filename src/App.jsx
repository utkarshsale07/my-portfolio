import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer><div className="wrap">Utkarsh Ambadas Sale, Maharashtra, India</div></footer>
    </>
  )
}
