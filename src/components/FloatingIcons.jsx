// import React, { useEffect, useState, useRef } from 'react'

// const TECH = [
//   { id: 'js', label: 'JS' },
//   { id: 'react', label: '⚛' },
//   { id: 'git', label: 'Git' },
//   { id: 'k8s', label: 'K8s' },
//   { id: 'py', label: 'Py' },
//   { id: 'html', label: 'HTML' },
//   { id: 'css', label: 'CSS' },
//   { id: 'fastapi', label: 'API' },
// ]

// function rand(min, max) {
//   return Math.random() * (max - min) + min
// }

// export default function FloatingIcons() {
//   const containerRef = useRef(null)
//   const [icons, setIcons] = useState([])

//   useEffect(() => {
//     // create a small pool of icons
//     const pool = Array.from({ length: 8 }).map((_, i) => ({
//       id: i,
//       tech: TECH[Math.floor(Math.random() * TECH.length)].id,
//       left: rand(5, 95),
//       top: rand(2, 95),
//       opacity: 0.7,
//       size: 20 + Math.floor(rand(0, 10)), // smaller sizes (20-29px)
//       delay: rand(0, 3),
//     }))
//     setIcons(pool)

//     let mounted = true

//     // every few seconds move random icon to new place and change tech; fade out / respawn behavior
//     const tick = setInterval(() => {
//       if (!mounted) return
//       setIcons((prev) => {
//         return prev.map((it) => {
//           // less frequent movement so icons are subtle
//           if (Math.random() < 0.18) {
//             return {
//               ...it,
//               left: rand(5, 95),
//               top: rand(2, 95),
//               opacity: 0.7,
//               tech: TECH[Math.floor(Math.random() * TECH.length)].id,
//               size: 18 + Math.floor(rand(0, 12)),
//             }
//           }
//           // occasionally mark for fade (rare)
//           if (Math.random() < 0.03) {
//             return { ...it, opacity: 0.15 }
//           }
//           return it
//         })
//       })
//     }, 3000) // slightly slower updates

//     return () => {
//       mounted = false
//       clearInterval(tick)
//     }
//   }, [])

//   return (
//     <div className="floating-icons" ref={containerRef} aria-hidden>
//       {icons.map((it) => (
//         <div
//           key={it.id}
//           className={"float-icon dynamic " + it.tech}
//           style={{
//             left: it.left + '%',
//             top: it.top + '%',
//             opacity: it.opacity,
//             width: it.size + 'px',
//             height: it.size + 'px',
//             transform: 'translate(-50%,-50%)',
//             transition: 'all 1800ms cubic-bezier(.2,.9,.2,1)',
//           }}
//         >
//           <div className="icon-label">{it.tech === 'react' ? '⚛' : it.tech.toUpperCase()}</div>
//         </div>
//       ))}
//     </div>
//   )
// }





// // import { motion } from "framer-motion";
// // import { useMemo } from "react";
// import React from "react";
// import { motion } from "framer-motion";
// import { useMemo } from "react";

// import pythonI from '../assets/icons/python1.jpg'
// import fastapiI from '../assets/icons/fastapi1.jpg'
// import langchainI from '../assets/icons/langchain1.jpg'
// import autogenI from '../assets/icons/autogen1.jpg'
// import gitI from '../assets/icons/Github.jpg'
// import dockerI from '../assets/icons/Docker1.jpg'
// import reactI from '../assets/icons/react.jpg'
// import k8sI from '../assets/icons/kubernaties.jpg'
// import jsI from '../assets/icons/javascript.jpg'
// import htmlI from '../assets/icons/html1.jpg'
// import cssI from '../assets/icons/css1.jpg'
// import nodeI from '../assets/icons/Nodejs1.jpg'
// import mongoI from '../assets/icons/Mongodb1.jpg'
// import mysqlI from '../assets/icons/Mysql1.jpg'
// import tailwindI from '../assets/icons/Tailwind1.jpg'
// import chromaI from '../assets/icons/CosmosdB1.jpg'

// const icons = [
//   pythonI, fastapiI, langchainI, autogenI,
//   gitI, dockerI, reactI, k8sI,
//   jsI, htmlI, cssI, nodeI,
//   mongoI, mysqlI, tailwindI, chromaI
// ];

// export default function FloatingIcons() {

//   // Shuffle icons once so no repetition order
//   const shuffledIcons = useMemo(() => {
//     return [...icons].sort(() => Math.random() - 0.5);
//   }, []);

//   return (
//     <div className="floating-wrapper">
//       {shuffledIcons.map((icon, index) => {

//         const randomX = Math.random() * 200 - 100;
//         const randomY = Math.random() * 200 - 100;
//         const duration = 10 + Math.random() * 10;

//         return (
//           <motion.img
//             key={index}
//             src={icon}
//             className="floating-icon"
//             initial={{
//               x: Math.random() * window.innerWidth,
//               y: Math.random() * window.innerHeight,
//               opacity: 0
//             }}
//             animate={{
//               x: [0, randomX, -randomX, 0],
//               y: [0, randomY, -randomY, 0],
//               opacity: 0.6
//             }}
//             transition={{
//               duration: duration,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut"
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }





// import React from "react";
// import { motion } from "framer-motion";

// import pythonI from '../assets/icons/python1.jpg'
// import fastapiI from '../assets/icons/fastapi1.jpg'
// import langchainI from '../assets/icons/langchain1.jpg'
// import autogenI from '../assets/icons/autogen1.jpg'
// import gitI from '../assets/icons/Github.jpg'
// import dockerI from '../assets/icons/Docker1.jpg'
// import reactI from '../assets/icons/react.jpg'
// import k8sI from '../assets/icons/kubernaties.jpg'
// import jsI from '../assets/icons/javascript.jpg'
// import htmlI from '../assets/icons/html1.jpg'
// import cssI from '../assets/icons/css1.jpg'
// import nodeI from '../assets/icons/Nodejs1.jpg'
// import mongoI from '../assets/icons/Mongodb1.jpg'
// import mysqlI from '../assets/icons/Mysql1.jpg'
// import tailwindI from '../assets/icons/Tailwind1.jpg'
// import chromaI from '../assets/icons/CosmosdB1.jpg'

// const icons = [
//   pythonI, fastapiI, langchainI, autogenI,
//   gitI, dockerI, reactI, k8sI,
//   jsI, htmlI, cssI, nodeI,
//   mongoI, mysqlI, tailwindI, chromaI
// ];

// export default function FloatingIcons() {

//   return (
//     <div className="floating-wrapper">
//       {icons.map((icon, index) => {

//         const randomTop = Math.random() * 100;
//         const randomLeft = Math.random() * 100;
//         const duration = 20 + Math.random() * 20;

//         return (
//           <motion.img
//             key={index}
//             src={icon}
//             className="floating-icon"
//             style={{
//               top: `${randomTop}%`,
//               left: `${randomLeft}%`
//             }}
//             animate={{
//               x: [0, 200, -200, 0],
//               y: [0, -150, 150, 0],
//               rotate: [0, 360]
//             }}
//             transition={{
//               duration: duration,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// }















import React from "react";
import { motion } from "framer-motion";

import pythonI from '../assets/icons/python1.jpg'
import fastapiI from '../assets/icons/fastapi1.jpg'
import langchainI from '../assets/icons/langchain1.jpg'
import autogenI from '../assets/icons/autogen1.jpg'
import gitI from '../assets/icons/Github.jpg'
import dockerI from '../assets/icons/Docker1.jpg'
import reactI from '../assets/icons/react.jpg'
import k8sI from '../assets/icons/kubernaties.jpg'
import jsI from '../assets/icons/javascript.jpg'
import htmlI from '../assets/icons/html1.jpg'
import cssI from '../assets/icons/css1.jpg'
import nodeI from '../assets/icons/Nodejs1.jpg'
import mongoI from '../assets/icons/Mongodb1.jpg'
import mysqlI from '../assets/icons/Mysql1.jpg'
import tailwindI from '../assets/icons/Tailwind1.jpg'
import chromaI from '../assets/icons/CosmosdB1.jpg'

const icons = [
  pythonI, fastapiI, langchainI, autogenI,
  gitI, dockerI, reactI, k8sI,
  jsI, htmlI, cssI, nodeI,
  mongoI, mysqlI, tailwindI, chromaI
];

export default function FloatingIcons() {

  return (
    <div className="floating-wrapper">
      {icons.map((icon, index) => {

        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        const duration = 30 + Math.random() * 20;
        const delay = Math.random() * 5;

        return (
          <motion.img
            key={index}
            src={icon}
            className="floating-icon"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`
            }}
            animate={{
  y: [0, -150, 150, 0],
  x: [0, 100, -100, 0],
  rotate: [0, 360]
}}
transition={{
  duration: duration,
  repeat: Infinity,
  ease: "linear"
}}

          />
        );
      })}
    </div>
  );
}
