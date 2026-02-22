// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Expertise from './components/Expertise'
// import Experience from './components/Experience'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
// import './styles/hero.css'

// export default function App() {
//   return (
//     <div className="app-root">
//       <Header />
//       <main>
//         <section id="home" data-section="home">
//           <Hero />
//         </section>

//         <section id="about" data-section="about">
//           <About />
//         </section>

//         <section id="expertise" data-section="expertise">
//           <Expertise />
//         </section>

//         <section id="experience" data-section="experience">
//           <Experience />
//         </section>

//         <section id="projects" data-section="projects">
//           <Projects />
//         </section>

//         <section id="contact" data-section="contact">
//           <Contact />
//         </section>
//       </main>
//     </div>
//   )
// }



import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FloatingIcons from './components/FloatingIcons'   // ✅ Added
import './styles/global.css'
import './styles/hero.css'

export default function App() {
  return (
    <div className="app-root">

      {/* ✅ Floating Background Icons */}
      <FloatingIcons />

      <Header />

      <main>
        <section id="home" data-section="home">
          <Hero />
        </section>

        <section id="about" data-section="about">
          <About />
        </section>

        <section id="expertise" data-section="expertise">
          <Expertise />
        </section>

        <section id="experience" data-section="experience">
          <Experience />
        </section>

        <section id="projects" data-section="projects">
          <Projects />
        </section>

        <section id="contact" data-section="contact">
          <Contact />
        </section>
      </main>

    </div>
  )
}
