
// import React from 'react';
// import {
//   FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
//   FaGitAlt, FaFigma, FaGithub, FaTerminal
// } from 'react-icons/fa';
// import {
//   SiTailwindcss, SiExpress, SiMongodb,
//   SiPostman, SiVite, SiJsonwebtokens
// } from 'react-icons/si';

// const skills = [
//   {
//     category: 'Frontend',
//     icon: <FaReact className="text-cyan-400" />,
//     items: [
//       { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
//       { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
//       { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
//       { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
//       { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
//     ],
//   },
//   {
//     category: 'Backend',
//     icon: <FaNodeJs className="text-green-400" />,
//     items: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
//       { name: 'Express.js', icon: <SiExpress className="text-white" /> },
//       { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
//       { name: 'JWT', icon: <SiJsonwebtokens className="text-red-400" /> },
//       { name: 'MYSQL'},
//       { name: 'REST APIs', icon: <SiPostman className="text-orange-400" /> },
//     ],
//   },
//   {
//     category: 'Tools & Platforms',
//     icon: <FaGithub className="text-gray-300" />,
//     items: [
//       { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-400" /> },
//       { name: 'VS Code', icon: <FaTerminal className="text-blue-400" /> },
//       { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
//       { name: 'Figma', icon: <FaFigma className="text-pink-400" /> },
//       { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
//     ],
//   },

  
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center"
//     >
//       <div className="max-w-6xl w-full mx-auto text-center" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Skills</h2>
//         <p className="text-slate-300 mb-10 text-lg">
//           Here are the technologies and tools I use to bring ideas to life.
//         </p>

//         <div className="grid gap-10 md:grid-cols-3 w-full text-left">
//           {skills.map((group, index) => (
//             <div
//               key={index}
//               className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 transition duration-300"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="text-2xl">{group.icon}</div>
//                 <h3 className="text-xl font-semibold text-white">{group.category}</h3>
//               </div>
//               <ul className="flex flex-wrap gap-3">
//                 {group.items.map((skill, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-2 bg-[#0f172a] border border-cyan-500/20 px-3 py-2 rounded-full text-sm text-slate-200 hover:bg-cyan-500/10 transition"
//                   >
//                     {skill.icon}
//                     {skill.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



// import React from 'react';
// import {
//   FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
//   FaGitAlt, FaFigma, FaGithub, FaTerminal
// } from 'react-icons/fa';
// import {
//   SiTailwindcss, SiExpress, SiMongodb,
//   SiPostman, SiVite, SiJsonwebtokens, SiMysql
// } from 'react-icons/si';

// const skills = [
//   {
//     category: 'Frontend',
//     icon: <FaReact className="text-cyan-400" />,
//     items: [
//       { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
//       { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
//       { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
//       { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
//       { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
//     ],
//   },

//   {
//     category: 'Backend',
//     icon: <FaNodeJs className="text-green-400" />,
//     items: [
//       { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
//       { name: 'Express.js', icon: <SiExpress className="text-white" /> },
//       { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
//       { name: 'JWT', icon: <SiJsonwebtokens className="text-red-400" /> },
//       { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
//       { name: 'REST APIs', icon: <SiPostman className="text-orange-400" /> },
//     ],
//   },

//   {
//     category: 'Tools & Platforms',
//     icon: <FaGithub className="text-gray-300" />,
//     items: [
//       { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-400" /> },
//       { name: 'VS Code', icon: <FaTerminal className="text-blue-400" /> },
//       { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
//       // { name: 'Figma', icon: <FaFigma className="text-pink-400" /> },
//       { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="overflow-x-hidden min-h-screen px-6 py-24 bg-gradient-to-br 
//       from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center"
//     >
//       <div className="max-w-6xl w-full mx-auto text-center" data-aos="fade-up">
//         <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Skills</h2>
//         <p className="text-slate-300 mb-10 text-lg">
//           Here are the technologies and tools I use to bring ideas to life.
//         </p>

//         <div className="grid gap-10 md:grid-cols-3 w-full text-left">
//           {skills.map((group, index) => (
//             <div
//               key={index}
//               className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 
//               transition duration-300"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="text-2xl">{group.icon}</div>
//                 <h3 className="text-xl font-semibold text-white">{group.category}</h3>
//               </div>

//               <ul className="flex flex-wrap gap-3">
//                 {group.items.map((skill, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-2 bg-[#0f172a] border border-cyan-500/20 
//                     px-3 py-2 rounded-full text-sm text-slate-200 hover:bg-cyan-500/10 transition"
//                   >
//                     {skill.icon}
//                     {skill.name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// final new
import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaGitAlt, FaGithub, FaTerminal
} from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiNginx, SiGrafana, SiGithubactions } from "react-icons/si";
import { FaAws, FaLinux } from "react-icons/fa";

import {
  SiTailwindcss, SiExpress, SiMongodb,
  SiPostman, SiVite, SiJsonwebtokens, SiMysql
} from 'react-icons/si'; // Fixed: Corrected the import path from "si" to "react-icons/si"

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact />,
    accent: 'from-cyan-500/20',
    glow: 'shadow-cyan-500/10',
    items: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-400" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: 'Backend',
    icon: <FaNodeJs />,
    accent: 'from-violet-500/20',
    glow: 'shadow-violet-500/10',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-400" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-red-400" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      { name: 'REST APIs', icon: <SiPostman className="text-orange-400" /> },
    ],
  },
  {
  category: 'DevOps',
  icon: <SiDocker />,
  accent: 'from-cyan-500/20',
  glow: 'shadow-cyan-500/10',
  items: [
    { name: 'Docker', icon: <SiDocker className="text-cyan-400" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
    { name: 'Linux', icon: <FaLinux className="text-yellow-400" /> },
    { name: 'Nginx', icon: <SiNginx className="text-green-500" /> },
    { name: 'Grafana', icon: <SiGrafana className="text-orange-500" /> },
    { name: 'CI/CD', icon: <SiGithubactions className="text-purple-400" /> },
  ],
},
  {
    category: 'Tools & Platforms',
    icon: <FaGithub />,
    accent: 'from-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    items: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-400" /> },
      { name: 'VS Code', icon: <FaTerminal className="text-blue-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-x-hidden min-h-screen px-6 py-32 bg-[#0a0a0c] text-white flex flex-col items-center"
    >
      {/* Background Ambient Blur for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto text-center z-10" data-aos="fade-up">
        {/* Modern Section Label */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
              Tech Stack
            </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase">
          My Skills
        </h2>
        
        <p className="text-slate-400 mb-20 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          {/* The core engines and creative toolsets I use to engineer 
          <span className="text-white font-medium"> robust, digital experiences</span>. */}
        </p>

        <div className="grid gap-8 md:grid-cols-3 w-full text-left">
          {skills.map((group, index) => (
            <div
              key={index}
              className={`relative bg-[#111113] p-8 rounded-[2.5rem] border border-white/5 group transition-all duration-500 hover:-translate-y-2 hover:border-white/10 ${group.glow}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Corner Ambient Light - Visible on Hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${group.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{group.category}</h3>
              </div>

              <ul className="flex flex-wrap gap-3 relative z-10">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 bg-[#0a0a0c] border border-white/5 
                    pl-3 pr-5 py-2.5 rounded-2xl text-sm font-medium text-slate-400 
                    hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-lg transition-all">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;