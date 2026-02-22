// import React from 'react';
// import './Projects.css';

// const projects = [
//   {
//     title: 'POC: Insurance Claim Processing',
//     description: 'Built a modular, Agentic AI, multi-agent system for end-to-end insurance claim automation from FNOL to payment. Integrated agents for customer verification, policy validation, damage assessment, compliance, and communication, orchestrated using AutoGen. Designed for dynamic cross-domain claims (auto, home, health) with improved accuracy and reduced manual review time.',
//     role: 'Designed multi-agent AutoGen system with SelectorGroupChat, integrated Socket.IO/WebSockets for real-time agent log streaming, implemented Mistral OCR for image extraction, and built interactive UI in Next.js.',
//     tags: ['Next.js', 'React.js', 'Python', 'AutoGen 0.4', 'WebSocket', 'Azure OpenAI', 'Mistral OCR'],
//     type: 'Featured POC',
//   },
//   {
//     title: 'POC: Agentic Warehouse Management',
//     description: 'Built an AI-powered, multi-agent warehouse management system to automate and optimize supply chain operations using Agentic AI with Autogen. Integrated intelligent agents for inventory tracking, order fulfillment, supplier coordination, and logistics optimization. Enables real-time decision-making and adaptive workflows.',
//     role: 'Designed agentic workflows using Autogen and AgentChat, implemented real-time visualization dashboards for warehouse managers, integrated PostgreSQL for data management, and deployed on Azure with CI/CD via GitHub Actions.',
//     tags: ['Python', 'Autogen', 'AgentChat', 'PostgreSQL', 'Next.js', 'React.js', 'Azure OpenAI'],
//     type: 'Featured POC',
//   },
//   {
//     title: 'AI Interview Prep Application',
//     description: 'An intelligent interview preparation platform powered by AI that helps candidates practice and improve their interview skills. Features include AI-generated questions based on job roles, real-time feedback on responses, mock interview sessions with AI interviewer, and personalized improvement suggestions.',
//     role: 'Full-stack development with AI integration for question generation and response analysis, built Conversational AI interface, and implemented progress tracking dashboard.',
//     tags: ['React.js', 'Python', 'LangChain', 'Azure OpenAI', 'FastAPI', 'MongoDB'],
//     type: 'AI Project',
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="section-title">My Projects</h2>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="project-header">
//               <span className="project-type">{project.type}</span>
//               <span className="project-privacy">Private</span>
//             </div>
//             <h3 className="project-title">{project.title}</h3>
//             <p className="project-description">{project.description}</p>
//             <div className="project-role">
//               <strong>Role:</strong> {project.role}
//             </div>
//             <div className="project-tags">
//               {project.tags.map((tag, idx) => (
//                 <span key={idx} className="project-tag">{tag}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }







// import React from "react";
// import { motion } from "framer-motion";
// import "./Projects.css";

// const projects = [
//   {
//     title: "POC: Insurance Claim Processing",
//     description:
//       "Built a modular, Agentic AI, multi-agent system for end-to-end insurance claim automation.",
//     role:
//       "Designed multi-agent AutoGen system and integrated WebSockets for real-time logs.",
//     tags: [
//       "Next.js",
//       "React.js",
//       "Python",
//       "AutoGen",
//       "Azure OpenAI",
//     ],
//     type: "Featured POC",
//   },
//   {
//     title: "POC: Agentic Warehouse Management",
//     description:
//       "Built an AI-powered multi-agent warehouse automation system.",
//     role:
//       "Designed agentic workflows and deployed on Azure with CI/CD.",
//     tags: [
//       "Python",
//       "Autogen",
//       "PostgreSQL",
//       "Next.js",
//       "Azure",
//     ],
//     type: "Featured POC",
//   },
//   {
//     title: "AI Interview Prep Application",
//     description:
//       "AI-powered interview preparation platform with real-time feedback.",
//     role:
//       "Full-stack development with conversational AI integration.",
//     tags: [
//       "React.js",
//       "Python",
//       "LangChain",
//       "FastAPI",
//       "MongoDB",
//     ],
//     type: "AI Project",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="section-title">My Projects</h2>

//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="project-card"
//             initial={{
//               opacity: 0,
//               rotateX: -90,   // FLAT
//               scale: 0.8
//             }}
//             whileInView={{
//               opacity: 1,
//               rotateX: 0,     // STAND
//               scale: 1
//             }}
//             transition={{
//               duration: 0.8,
//               ease: "easeOut"
//             }}
//             viewport={{ amount: 0.3 }} // replay on scroll
//             whileHover={{
//               rotate: [0, -2, 2, -2, 2, 0],  // SHAKE 2 TIMES
//               transition: { duration: 0.5 }
//             }}
//           >
//             <div className="project-header">
//               <span className="project-type">{project.type}</span>
//               <span className="project-privacy">Private</span>
//             </div>

//             <h3 className="project-title">{project.title}</h3>
//             <p className="project-description">{project.description}</p>

//             <div className="project-role">
//               <strong>Role:</strong> {project.role}
//             </div>

//             <div className="project-tags">
//               {project.tags.map((tag, idx) => (
//                 <span key={idx} className="project-tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "POC: Insurance Claim Processing",
    description:
      "Built a modular, Agentic AI, multi-agent system for end-to-end insurance claim automation from FNOL to payment. Integrated intelligent agents for customer verification, policy validation, damage assessment, compliance checks, fraud detection, and automated communication. The system was orchestrated using AutoGen with dynamic agent routing to handle cross-domain claims including auto, home, and health. Significantly improved processing accuracy while reducing manual review time.",
    role:
      "Architected and developed a multi-agent AutoGen system using SelectorGroupChat. Integrated Socket.IO/WebSockets for real-time agent log streaming and transparency. Implemented Mistral OCR for intelligent image data extraction from claim documents. Built an interactive UI using Next.js and deployed scalable backend services on Azure.",
    tags: [
      "Next.js",
      "React.js",
      "Python",
      "AutoGen 0.4",
      "WebSocket",
      "Azure OpenAI",
      "Mistral OCR",
    ],
    type: "Featured POC",
  },
  {
    title: "POC: Agentic Warehouse Management",
    description:
      "Designed and implemented an AI-powered, multi-agent warehouse management system to automate and optimize supply chain operations using Agentic AI with AutoGen. Developed intelligent agents responsible for inventory tracking, smart order fulfillment, supplier coordination, logistics optimization, and predictive stock analysis. Enabled real-time decision-making with adaptive workflows and exception handling.",
    role:
      "Engineered agentic workflows using AutoGen and AgentChat frameworks. Built real-time visualization dashboards for warehouse managers to monitor stock levels and logistics flow. Integrated PostgreSQL for structured data management and deployed the solution on Azure using CI/CD pipelines via GitHub Actions.",
    tags: [
      "Python",
      "AutoGen",
      "AgentChat",
      "PostgreSQL",
      "Next.js",
      "React.js",
      "Azure OpenAI",
    ],
    type: "Featured POC",
  },
  {
    title: "AI Interview Prep Application",
    description:
      "Developed an intelligent AI-driven interview preparation platform that helps candidates practice and improve their technical and behavioral interview skills. The system dynamically generates interview questions based on selected job roles and experience level. Provides real-time feedback on answers, conducts mock interview sessions with an AI interviewer, and delivers personalized improvement insights.",
    role:
      "Led full-stack development with seamless AI integration for question generation and response analysis using LLMs. Built a conversational AI interface for mock interviews and implemented a performance tracking dashboard to monitor user progress. Designed scalable APIs using FastAPI and integrated MongoDB for storing session analytics.",
    tags: [
      "React.js",
      "Python",
      "LangChain",
      "Azure OpenAI",
      "FastAPI",
      "MongoDB",
    ],
    type: "AI Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{
              opacity: 0,
              rotateX: -90,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              rotateX: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{
              rotate: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <div className="project-header">
              <span className="project-type">{project.type}</span>
              <span className="project-privacy">Private</span>
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-role">
              <strong>Role:</strong> {project.role}
            </div>

            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
