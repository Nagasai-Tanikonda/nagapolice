// // import React from 'react'
// // import useInView from '../hooks/useInView'
// // import FloatingIcons from './FloatingIcons'
// // // import profilePhoto from '../assets/profile.jpg'  // ✅ FIX
// // import profilePhoto from '../assets/profile_photo.jpg'  // ✅ FIX
// // export default function Hero() {
// //   const [leftRef, leftInView] = useInView({ threshold: 0.15 })
// //   const [rightRef, rightInView] = useInView({ threshold: 0.15 })

// //   return (
// //     <section className="hero-root">
// //       <FloatingIcons />
// //       <div className="hero-inner">
// //         <div
// //           ref={leftRef}
// //           className={`hero-left slide-left ${leftInView ? 'in-view' : ''}`}
// //         >
// //           <button
// //             className="btn-primary"
// //             onClick={() =>
// //               document.getElementById('contact')
// //                 ?.scrollIntoView({ behavior: 'smooth' })
// //             }
// //           >
// //             Get in Touch
// //           </button>
// //         </div>

// //         <div
// //           ref={rightRef}
// //           className={`hero-right slide-right ${rightInView ? 'in-view' : ''}`}
// //         >
// //           <div className="card-avatar">
// //             <img
// //               // src={profilePhoto}
// //               alt="Profile"
// //               className="avatar-image"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }





// import React from 'react'
// import useInView from '../hooks/useInView'
// import FloatingIcons from './FloatingIcons'
// import profilePhoto from '../assets/icons/profile_photo.png'

// export default function Hero() {
//   const [leftRef, leftInView] = useInView({ threshold: 0.15 })
//   const [rightRef, rightInView] = useInView({ threshold: 0.15 })

//   return (
//     <section className="hero-root">
//       <FloatingIcons />
//       <div className="hero-inner">
//         <div
//           ref={leftRef}
//           className={`hero-left slide-left ${leftInView ? 'in-view' : ''}`}
//         >
//           <button
//             className="btn-primary"
//             onClick={() =>
//               document.getElementById('contact')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             Get in Touch
//           </button>
//         </div>

//         <div
//           ref={rightRef}
//           className={`hero-right slide-right ${rightInView ? 'in-view' : ''}`}
//         >
//           <div className="card-avatar">
//             <img
//               src={profilePhoto}
//               alt="Profile"
//               className="avatar-image"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



























// import React from 'react'
// import useInView from '../hooks/useInView'
// import FloatingIcons from './FloatingIcons'
// import profilePhoto from '../assets/icons/profile_photo.png'

// export default function Hero() {
//   const [leftRef, leftInView] = useInView({ threshold: 0.15 })
//   const [rightRef, rightInView] = useInView({ threshold: 0.15 })

//   return (
//     <section className="hero-root">
//       <FloatingIcons />

//       <div className="hero-inner">

//         {/* LEFT SIDE */}
//         <div
//           ref={leftRef}
//           className={`hero-left slide-left ${leftInView ? 'in-view' : ''}`}
//         >
//           <h4 className="hero-intro">Hello, I'm</h4>

//           <h1 className="hero-title">
//             GenAI Engineer
//           </h1>

//           <p className="hero-desc">
//             I specialize in designing <span>Agentic AI Architectures</span> 
//             that streamline real-world processes using multi-agent collaboration 
//             and LLM-driven automation.
//           </p>

//           <button
//             className="btn-primary"
//             onClick={() =>
//               document.getElementById('contact')
//                 ?.scrollIntoView({ behavior: 'smooth' })
//             }
//           >
//             Get in Touch
//           </button>
//         </div>

//         {/* RIGHT SIDE */}
//         <div
//           ref={rightRef}
//           className={`hero-right slide-right ${rightInView ? 'in-view' : ''}`}
//         >
//           <div className="card-avatar">
//             <img
//               src={profilePhoto}
//               alt="Profile"
//               className="avatar-image"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   )
// }








// import React from "react";
// import { motion } from "framer-motion";
// import profilePhoto from "../assets/icons/profile_photo.png";

// export default function Hero() {

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.4
//       }
//     }
//   };

//   const textVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, x: 150 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, ease: "easeOut" }
//     }
//   };

//   return (
//     <section className="hero-root">

//       <div className="hero-inner">

//         {/* LEFT SIDE */}
//         <motion.div
//           className="hero-left"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h4 variants={textVariants} className="hero-intro">
//             Hello, I'm <span className="name-gradient">Nagasai Tanikonda 👋</span>
//           </motion.h4>

//           <motion.h1 variants={textVariants} className="hero-title">
//             GenAI Engineer
//           </motion.h1>

//           <motion.p variants={textVariants} className="hero-company">
//             — AT CAPGEMINI
//           </motion.p>

//           <motion.p variants={textVariants} className="hero-desc">
//             I specialize in designing <span>Agentic AI Architectures</span> 
//             that streamline complex real-world processes using multi-agent 
//             collaboration, LLM-driven automation, and intelligent workflow orchestration.
//           </motion.p>

//           <motion.div variants={textVariants}>
//             <button
//               className="btn-primary"
//               onClick={() =>
//                 document.getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//             >
//               Get in Touch
//             </button>
//           </motion.div>
//         </motion.div>


//         {/* RIGHT SIDE */}
//         <motion.div
//           className="hero-right"
//           variants={imageVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div className="card-avatar">
//             <img
//               src={profilePhoto}
//               alt="Profile"
//               className="avatar-image"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }




















import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/icons/profile_photo.png";

export default function Hero() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="hero-root" id="home">

      <div className="hero-inner">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}  // 🔥 important
        >
          <motion.h4 variants={textVariants} className="hero-intro">
            Hello, I'm <span className="name-gradient">Nagasai Tanikonda 👋</span>
          </motion.h4>

          <motion.h1 variants={textVariants} className="hero-title">
            GenAI Engineer
          </motion.h1>

          <motion.p variants={textVariants} className="hero-company">
            — AT CAPGEMINI
          </motion.p>

          <motion.p variants={textVariants} className="hero-desc">
            I specialize in designing <span>Agentic AI Architectures</span> 
            that streamline complex real-world processes using multi-agent 
            collaboration, LLM-driven automation, and intelligent workflow orchestration.
          </motion.p>

          {/* NEW PARAGRAPH 1 */}
          <motion.p variants={textVariants} className="hero-desc highlight-box">
            As a former <span>Gold Microsoft Student Ambassador</span>, 
            I've led technical workshops, mentored developers, and built vibrant 
            tech communities — empowering others through knowledge sharing and open innovation.
          </motion.p>

          {/* NEW PARAGRAPH 2 */}
          <motion.p variants={textVariants} className="hero-desc">
            My passion lies in building AI systems that <span>think</span>, 
            <span> collaborate</span>, and solve real business challenges — 
            while staying human-centered and accessible.
          </motion.p>

          <motion.div variants={textVariants}>
            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}  // 🔥 animation replays
        >
          <div className="card-avatar">
            <img
              src={profilePhoto}
              alt="Profile"
              className="avatar-image"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
