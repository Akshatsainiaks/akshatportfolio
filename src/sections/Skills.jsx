
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



import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaGitAlt, FaFigma, FaGithub, FaTerminal
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb,
  SiPostman, SiVite, SiJsonwebtokens, SiMysql
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact className="text-cyan-400" />,
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
    icon: <FaNodeJs className="text-green-400" />,
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
    category: 'Tools & Platforms',
    icon: <FaGithub className="text-gray-300" />,
    items: [
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-400" /> },
      { name: 'VS Code', icon: <FaTerminal className="text-blue-400" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
      // { name: 'Figma', icon: <FaFigma className="text-pink-400" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="overflow-x-hidden min-h-screen px-6 py-24 bg-gradient-to-br 
      from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">My Skills</h2>
        <p className="text-slate-300 mb-10 text-lg">
          Here are the technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid gap-10 md:grid-cols-3 w-full text-left">
          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-cyan-500/20 
              transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{group.icon}</div>
                <h3 className="text-xl font-semibold text-white">{group.category}</h3>
              </div>

              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 bg-[#0f172a] border border-cyan-500/20 
                    px-3 py-2 rounded-full text-sm text-slate-200 hover:bg-cyan-500/10 transition"
                  >
                    {skill.icon}
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
