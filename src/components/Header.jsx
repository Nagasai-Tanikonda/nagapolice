// import React, { useEffect, useState } from 'react'
// import useActiveSection from '../hooks/useActiveSection'

// export default function Header() {
//   const { activeSection } = useActiveSection()
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     // close mobile menu when active section changes
//     setOpen(false)
//   }, [activeSection])

//   const nav = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About me' },
//     { id: 'expertise', label: 'Expertise' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' },
//   ]

//   function go(id) {
//     const el = document.getElementById(id)
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
//   }

//   return (
//     <header className="site-header">
//       <div className="site-header-inner">
//         <div className="brand">Nagasai <span className="brand-accent">Tanikonda</span></div>
//         <nav className="main-nav">
//           {nav.map((n) => (
//             <button
//               key={n.id}
//               className={"nav-link " + (activeSection === n.id ? 'active' : '')}
//               onClick={() => go(n.id)}
//             >
//               {n.label}
//             </button>
//           ))}
//         </nav>
//         <button className="mobile-toggle" onClick={() => setOpen((s) => !s)}>☰</button>
//       </div>
//     </header>
//   )
// }










import React, { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const { activeSection } = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activeSection]);

  const nav = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT ME" },
    { id: "expertise", label: "EXPERTISE" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECT" },
    { id: "contact", label: "CONTACT" },
  ];

  function go(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          Nagasai <span className="brand-accent">Tanikonda</span>
        </div>

        <nav className="main-nav">
          {nav.map((n) => (
            <button
              key={n.id}
              className={`nav-link ${
                activeSection === n.id ? "active" : ""
              }`}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
