// import React from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen px-6 py-24 bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center"
//     >
//       <div
//         className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-14"
//         data-aos="fade-up"
//       >
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
//             About Me
//           </h2>

//           <p className="text-lg text-gray-600 leading-relaxed mb-6">
//             I’m <span className="font-semibold text-blue-600">Akshat Saini</span>, a developer driven by curiosity and powered by coffee ☕. I build full stack applications with a love for clean code, great UX, and solving real problems.
//           </p>

//           {/* Highlights like a dev journey */}
//           <div className="space-y-4 mb-6">
//             <div className="flex items-start gap-3">
//               <span className="text-blue-600 text-xl">💻</span>
//               <p className="text-gray-700 text-base">
//                 Built <strong>full-stack apps</strong> using <span className="font-medium">React, Node, MongoDB</span>.
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-yellow-500 text-xl">🏆</span>
//               <p className="text-gray-700 text-base">
//                 Participated in <strong>hackathons</strong> & contributed to <strong>open-source</strong> projects.
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-green-500 text-xl">🚀</span>
//               <p className="text-gray-700 text-base">
//                 Passionate about <strong>performance, design systems,</strong> and developer experience.
//               </p>
//             </div>
//           </div>

//           {/* Tech Stack Pills */}
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech I Love:</h3>
//             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//               {[
//                 'React.js',
//                 'Next.js',
//                 'Node.js',
//                 'MongoDB',
//                 'Tailwind CSS',
//                 'Express',
//                 'Git & GitHub',
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm text-gray-700 shadow hover:bg-blue-100 transition"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Visual: Code Card or SVG */}
//         <div
//           className="flex-1 flex justify-center md:justify-end"
//           data-aos="zoom-in"
//         >
//           <div className="w-full max-w-xs rounded-xl shadow-xl bg-gray-900 text-left text-green-400 font-mono text-sm p-4 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 flex items-center px-3 space-x-2">
//               <span className="w-3 h-3 bg-red-500 rounded-full" />
//               <span className="w-3 h-3 bg-yellow-400 rounded-full" />
//               <span className="w-3 h-3 bg-green-500 rounded-full" />
//             </div>
//             <div className="pt-10">
//               <pre className="whitespace-pre-wrap">
// {`const akshat = {
//   role: "Full Stack Developer",
//   tech: ["React", "Node", "MongoDB", "Tailwind"],
//   openToWork: true
// };`}
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// import React from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex items-center justify-center"
//     >
//       <div
//         className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-14"
//         data-aos="fade-up"
//       >
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6">
//             About Me
//           </h2>

//           <p className="text-lg text-slate-300 leading-relaxed mb-6">
//             I’m <span className="font-semibold text-white">Akshat Saini</span>, a developer who builds full-stack applications with a strong focus on clean code, intuitive user experiences, and solving real-world problems.
//           </p>

     
//           <div className="space-y-4 mb-6">
//             <div className="flex items-start gap-3">
//               <span className="text-cyan-400 text-xl">💻</span>
//               <p className="text-slate-300 text-base">
//                 Built <strong>full-stack apps</strong> using <span className="text-white font-medium">React, Node, MongoDB</span>.
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-yellow-400 text-xl">🏆</span>
//               <p className="text-slate-300 text-base">
//                 Participated in <strong>hackathons</strong>
//                  {/* & contributed to <strong>open-source</strong>projects. */}
//               </p>
//             </div>
//             <div className="flex items-start gap-3">
//               <span className="text-green-400 text-xl">🚀</span>
//               <p className="text-slate-300 text-base">
//                 Passionate about <strong>performance, design systems,</strong> and developer experience.
//               </p>
//             </div>
//           </div>

         
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-cyan-400 mb-3">Tech I Love:</h3>
//             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//               {[
//                 'React.js',
//                 // 'Next.js',
//                 'Node.js',
//                 'MongoDB',
//                 'Tailwind CSS',
//                 'Express',
//                 'Git & GitHub',
//               ].map((tech) => (
//                 <span
//                   key={tech}
//                   className="bg-[#1e293b] border border-cyan-500/30 px-4 py-2 rounded-full text-sm text-cyan-300 shadow-sm hover:bg-cyan-500/10 transition"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Visual: Code Card */}
//         <div
//           className="flex-1 flex justify-center md:justify-end"
//           data-aos="zoom-in"
//         >
//           <div className="w-full max-w-xs rounded-xl shadow-xl bg-[#0f172a] text-left text-green-400 font-mono text-sm p-4 relative overflow-hidden border border-white/10">
//             <div className="absolute top-0 left-0 w-full h-8 bg-[#1e293b] flex items-center px-3 space-x-2">
//               <span className="w-3 h-3 bg-red-500 rounded-full" />
//               <span className="w-3 h-3 bg-yellow-400 rounded-full" />
//               <span className="w-3 h-3 bg-green-500 rounded-full" />
//             </div>
//             <div className="pt-10">
//               <pre className="whitespace-pre-wrap">
// {`const akshat = {
//   role: "Full Stack Developer",
//   tech: ["React", "Node", "MongoDB", "Tailwind"],
//   openToWork: true
// };`}
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="overflow-x-hidden min-h-screen px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex items-center justify-center"
    >
      <div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
  I’m <span className="font-semibold text-white">Akshat Saini</span>, a final-year B.Tech student with a strong interest in Full Stack and DevOps. Currently working as a DevOps intern, I focus on building scalable applications and continuously learning to grow into a successful software engineer.
</p>


          {/* <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">💻</span>
              <p className="text-slate-300 text-base">
                Built <strong>full-stack apps</strong> using <span className="text-white font-medium">React, Node, MongoDB</span>.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 text-xl">🏆</span>
              <p className="text-slate-300 text-base">
                Participated in <strong>hackathons</strong>.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 text-xl">🚀</span>
              <p className="text-slate-300 text-base">
                Passionate about <strong>performance, design systems,</strong> and developer experience.
              </p>
            </div>
          </div> */}

          <div className="space-y-4 mb-6">
  <div className="flex items-start gap-3">
    {/* <span className="text-cyan-400 text-xl">💻</span>
    <p className="text-slate-300 text-base">
      Built multiple <strong>full-stack applications</strong> using
      <span className="text-white font-medium"> React, Node.js, MongoDB</span> and modern UI practices.
    </p> */}
  </div>

  <div className="flex items-start gap-3">
    <span className="text-yellow-400 text-xl">📜</span>
    <p className="text-slate-300 text-base">
      <strong>Red Hat Certified System Administrator (RHCSA)</strong> with hands-on experience in Linux system administration.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-green-400 text-xl">🚀</span>
    <p className="text-slate-300 text-base">
      Interested in <strong>DevOps, automation, containers,</strong> and building scalable, reliable systems.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-purple-400 text-xl">🛠️</span>
    <p className="text-slate-300 text-base">
      Worked on projects involving <strong>Docker, and full stack</strong>.
    </p>
  </div>
</div>


          <div className="mt-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Tech I Love:
            </h3>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                'React.js',
                'Node.js',
                'MongoDB',
                'Tailwind CSS',
                'Express',
                'Git & GitHub',
                'Devops',
                
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1e293b] border border-cyan-500/30 px-4 py-2 rounded-full text-sm text-cyan-300 shadow-sm hover:bg-cyan-500/10 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual: Code Card */}
        <div
          className="flex-1 flex justify-center md:justify-end"
          data-aos="zoom-in"
        >
          <div className="w-full max-w-xs rounded-xl shadow-xl bg-[#0f172a] text-left text-green-400 font-mono text-sm p-4 relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#1e293b] flex items-center px-3 space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <div className="pt-10">
              <pre className="whitespace-pre-wrap">{`const akshat = {
  role: "Full Stack Developer",
  tech: ["React", "Node", "MongoDB", "Tailwind"],
  openToWork: true
};`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
