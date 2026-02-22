// import React, { useEffect, useRef } from 'react';
// import useInView from '../hooks/useInView';

// export default function About() {
//   const photoRef = useRef(null);
//   const textRef = useRef(null);
//   const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const photoInView = useInView(photoRef);
//   const textInView = useInView(textRef);
//   const cardInView = cardRefs.map((ref) => useInView(ref));

//   useEffect(() => {
//     if (photoInView) {
//       photoRef.current.classList.add('slide-right', 'in-view');
//     }
//     if (textInView) {
//       textRef.current.classList.add('slide-left', 'in-view');
//     }
//     cardRefs.forEach((ref, index) => {
//       if (cardInView[index]) {
//         ref.current.classList.add('slide-up', 'in-view');
//       }
//     });
//   }, [photoInView, textInView, cardInView]);

//   const cards = [
//     {
//       title: 'GenAI Engineer @ Capgemini',
//       description:
//         'Building cutting-edge generative AI solutions, multi-agent systems, and automating enterprise workflows with LLMs.',
//     },
//     {
//       title: 'Gold Microsoft Learn Student Ambassador',
//       description:
//         'Leading technical workshops, mentoring developers & building communities around Cloud, AI & Innovation.',
//     },
//     {
//       title: 'Community Organizer & Leader',
//       description:
//         'Organized numerous workshops, events & hackathons while guiding newcomers in their tech journey.',
//     },
//     {
//       title: 'Open Source Advocate',
//       description:
//         'Dedicated to community-driven growth, inspiring others to explore, innovate & excel in technology.',
//     },
//   ];

//   return (
//     <div className="about-root section-card">
//       <div className="container">
//         <div className="about-left" ref={textRef}>
//           <h2>About Me</h2>
//           <p className="lead">
//             Tech enthusiast & visionary community leader with a B.Tech in
//             Computer Science and Engineering, passionate about building the
//             future with AI.
//           </p>

//           <div className="cards">
//             {cards.map((card, index) => (
//               <div
//                 className="info-card"
//                 key={index}
//                 ref={cardRefs[index]}
//                 style={{ animationDelay: `${index * 0.3}s` }}
//               >
//                 <div className="info-body">
//                   <h3>{card.title}</h3>
//                   <p>{card.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="about-right" ref={photoRef}>
//           <div className="avatar-large">Your Photo</div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useEffect, useRef } from 'react';
// import useInView from '../hooks/useInView';
// import profilePic from '../assets/icons/profile_photo.png';

// export default function About() {
//   const photoRef = useRef(null);
//   const textRef = useRef(null);
//   const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   const photoInView = useInView(photoRef);
//   const textInView = useInView(textRef);
//   const cardInView = cardRefs.map((ref) => useInView(ref));

//   useEffect(() => {
//     if (photoInView) {
//       photoRef.current.classList.add('slide-right', 'in-view');
//     }
//     if (textInView) {
//       textRef.current.classList.add('slide-left', 'in-view');
//     }
//     cardRefs.forEach((ref, index) => {
//       if (cardInView[index]) {
//         ref.current.classList.add('slide-up', 'in-view');
//       }
//     });
//   }, [photoInView, textInView, cardInView]);

//   const cards = [
//     {
//       title: 'GenAI Engineer @ Capgemini',
//       description:
//         'Building cutting-edge generative AI solutions, multi-agent systems, and automating enterprise workflows with LLMs.',
//     },
//     {
//       title: 'Gold Microsoft Learn Student Ambassador',
//       description:
//         'Leading technical workshops, mentoring developers & building communities around Cloud, AI & Innovation.',
//     },
//     {
//       title: 'Community Organizer & Leader',
//       description:
//         'Organized numerous workshops, events & hackathons while guiding newcomers in their tech journey.',
//     },
//     {
//       title: 'Open Source Advocate',
//       description:
//         'Dedicated to community-driven growth, inspiring others to explore, innovate & excel in technology.',
//     },
//   ];

//   return (
//     <div className="about-root">
//       <div className="about-container">
        
//         {/* LEFT SIDE */}
//         <div className="about-left" ref={textRef}>
//           <h2>About Me</h2>
//           <p className="lead">
//             Tech enthusiast & visionary community leader with a B.Tech in
//             Computer Science and Engineering, passionate about building the
//             future with AI.
//           </p>

//           <div className="cards">
//             {cards.map((card, index) => (
//               <div
//                 className="info-card"
//                 key={index}
//                 ref={cardRefs[index]}
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="about-right" ref={photoRef}>
//           <div className="profile-wrapper">
//             <img src={profilePic} alt="Profile" className="profile-img" />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }






// import React from "react";
// import { motion } from "framer-motion";
// import profilePic from "../assets/icons/profile_photo.png";

// export default function About() {
//   const cards = [
//     {
//       title: "GenAI Engineer @ Capgemini",
//       description:
//         "Building cutting-edge generative AI solutions, multi-agent systems, and automating enterprise workflows with LLMs.",
//     },
//     {
//       title: "Gold Microsoft Learn Student Ambassador",
//       description:
//         "Leading technical workshops, mentoring developers & building communities around Cloud, AI & Innovation.",
//     },
//     {
//       title: "Community Organizer & Leader",
//       description:
//         "Organized numerous workshops, events & hackathons while guiding newcomers in their tech journey.",
//     },
//     {
//       title: "Open Source Advocate",
//       description:
//         "Dedicated to community-driven growth, inspiring others to explore, innovate & excel in technology.",
//     },
//   ];

//   return (
//     <div className="about-root">
//       <div className="about-container">
        
//         {/* LEFT CONTENT */}
//         <motion.div
//           className="about-left"
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2>About Me</h2>

//           <p className="lead">
//             Tech enthusiast & visionary community leader with a B.Tech in
//             Computer Science and Engineering, passionate about building the
//             future with AI.
//           </p>

//           <div className="cards">
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="info-card"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT PROFILE */}
//         <motion.div
//           className="about-right"
//           initial={{ opacity: 0, x: 120 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <div className="profile-wrapper">
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="profile-img"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }


















import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/icons/profile_photo.png";

export default function About() {
  const cards = [
    {
      title: "GenAI Engineer @ Capgemini",
      description:
        "Building cutting-edge generative AI solutions, multi-agent systems, and automating enterprise workflows with LLMs.",
    },
    {
      title: "Gold Microsoft Learn Student Ambassador",
      description:
        "Leading technical workshops, mentoring developers & building communities around Cloud, AI & Innovation.",
    },
    {
      title: "Community Organizer & Leader",
      description:
        "Organized numerous workshops, events & hackathons while guiding newcomers in their tech journey.",
    },
    {
      title: "Open Source Advocate",
      description:
        "Dedicated to community-driven growth, inspiring others to explore, innovate & excel in technology.",
    },
  ];

  return (
    <div className="about-root">
      <div className="about-container">

        {/* LEFT SIDE */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}   // ❌ removed once:true
        >
          <h2>About Me</h2>

          <p className="lead">
            Tech enthusiast & visionary community leader with a B.Tech in
            Electronics and Communication Engineering, passionate about building the
            future with AI.
          </p>

          <div className="cards">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ amount: 0.3 }}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="profile-wrapper">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
