// import React from 'react'

// export default function Experience(){
//   return (
//     <div className="experience-root section-card">
//       <div className="container">
//         <h2>Experience</h2>
//         <p className="lead">Experience details go here. You can add job timelines, project highlights, and skills.</p>

//         <div className="timeline">
//           <div className="timeline-item">
//             <div className="timeline-date">2024 - Present</div>
//             <div className="timeline-body">
//               <h4>GenAI Engineer</h4>
//               <p>Working on agentic architectures, LLM orchestrations, and production-ready AI tools.</p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-date">2022 - 2024</div>
//             <div className="timeline-body">
//               <h4>Software Engineer</h4>
//               <p>Worked across several web and cloud projects. Mentored junior engineers and ran workshops.</p>
//             </div>
//           </div>

//           <div className="timeline-item">
//             <div className="timeline-date">2020 - 2022</div>
//             <div className="timeline-body">
//               <h4>Capgemini</h4>
//               <p className="glowing-text">Worked on innovative projects with a focus on digital transformation and cloud solutions.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






// import React from "react";
// import { motion } from "framer-motion";

// export default function Experience() {
//   const experiences = [
//     {
//       title: "GenAI Engineer",
//       company: "Capgemini",
//       date: "Jun 2025 – Present",
//       description:
//         "Working on cutting-edge generative AI solutions, LLM systems, and enterprise AI automation.",
//       skills: ["Generative AI", "LLMs", "Python", "Azure", "LangChain"],
//     },
//     {
//       title: "Gold Microsoft Student Ambassador",
//       company: "Microsoft",
//       date: "Jul 2023 – Jun 2025",
//       description:
//         "Led technical workshops, mentored students, and built strong cloud communities.",
//       skills: ["Azure", "Cloud", "Community Building", "Workshops"],
//     },
//   ];

//   return (
//     <div className="experience-root">
//       <div className="container">
//         <h2>Experience</h2>

//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             className="exp-card"
//             initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <div className="exp-header">
//               <h3>{exp.title}</h3>
//               <span className="company-pill">{exp.company}</span>
//             </div>

//             <div className="exp-date">{exp.date}</div>
//             <p>{exp.description}</p>

//             <div className="skill-tags">
//               {exp.skills.map((skill, i) => (
//                 <span key={i} className="tag">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "GenAI Engineer",
      company: "Capgemini",
      date: "Jun 2025 – Present",
      description:
        "Working on cutting-edge generative AI solutions and enterprise LLM automation.",
      skills: ["Generative AI", "LLMs", "Python", "Azure", "LangChain"],
    },
    {
      title: "Gold Microsoft Student Ambassador",
      company: "Microsoft",
      date: "Jul 2023 – Jun 2025",
      description:
        "Led workshops, mentored developers and built strong tech communities.",
      skills: ["Azure", "Cloud", "Community", "Workshops"],
    },
  ];

  return (
    <div className="experience-root">
      <div className="container">
        <h2>Experience</h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150, // ✅ first left, second right
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.3 }}
          >
            <div className="exp-header">
              <h3>{exp.title}</h3>
              <span className="company-pill">{exp.company}</span>
            </div>

            <div className="exp-date">{exp.date}</div>

            <p>{exp.description}</p>

            <div className="skill-tags">
              {exp.skills.map((skill, i) => (
                <span key={i} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
