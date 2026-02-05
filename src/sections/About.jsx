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


// import React from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="overflow-x-hidden min-h-screen px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white flex items-center justify-center"
//     >
//       <div
//         className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14"
//         data-aos="fade-up"
//       >
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6">
//             About Me
//           </h2>

//           <p className="text-lg text-slate-300 leading-relaxed mb-6">
//   I’m <span className="font-semibold text-white">Akshat Saini</span>, a final-year B.Tech student with a strong interest in Full Stack and DevOps. Currently working as a DevOps intern, I focus on building scalable applications and continuously learning to grow into a successful software engineer.
// </p>


//           {/* <div className="space-y-4 mb-6">
//             <div className="flex items-start gap-3">
//               <span className="text-cyan-400 text-xl">💻</span>
//               <p className="text-slate-300 text-base">
//                 Built <strong>full-stack apps</strong> using <span className="text-white font-medium">React, Node, MongoDB</span>.
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-yellow-400 text-xl">🏆</span>
//               <p className="text-slate-300 text-base">
//                 Participated in <strong>hackathons</strong>.
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <span className="text-green-400 text-xl">🚀</span>
//               <p className="text-slate-300 text-base">
//                 Passionate about <strong>performance, design systems,</strong> and developer experience.
//               </p>
//             </div>
//           </div> */}

//           <div className="space-y-4 mb-6">
//   <div className="flex items-start gap-3">
//     {/* <span className="text-cyan-400 text-xl">💻</span>
//     <p className="text-slate-300 text-base">
//       Built multiple <strong>full-stack applications</strong> using
//       <span className="text-white font-medium"> React, Node.js, MongoDB</span> and modern UI practices.
//     </p> */}
//   </div>

//   <div className="flex items-start gap-3">
//     <span className="text-yellow-400 text-xl">📜</span>
//     <p className="text-slate-300 text-base">
//       <strong>Red Hat Certified System Administrator (RHCSA)</strong> with hands-on experience in Linux system administration.
//     </p>
//   </div>

//   <div className="flex items-start gap-3">
//     <span className="text-green-400 text-xl">🚀</span>
//     <p className="text-slate-300 text-base">
//       Interested in <strong>DevOps, automation, containers,</strong> and building scalable, reliable systems.
//     </p>
//   </div>

//   <div className="flex items-start gap-3">
//     <span className="text-purple-400 text-xl">🛠️</span>
//     <p className="text-slate-300 text-base">
//       Worked on projects involving <strong>Docker, and full stack</strong>.
//     </p>
//   </div>
// </div>


//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-cyan-400 mb-3">
//               Tech I Love:
//             </h3>

//             <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//               {[
//                 'React.js',
//                 'Node.js',
//                 'MongoDB',
//                 'Tailwind CSS',
//                 'Express',
//                 'Git & GitHub',
//                 'Devops',
                
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
//               <pre className="whitespace-pre-wrap">{`const akshat = {
//   role: "Full Stack Developer",
//   tech: ["React", "Node", "MongoDB", "Tailwind"],
//   openToWork: true
// };`}</pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


//new final

import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="overflow-x-hidden min-h-screen px-6 py-24 bg-[#0a0a0c] text-white flex items-center justify-center relative"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />

      <div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
            <span className="text-sm font-medium tracking-wider text-violet-400 uppercase">
              Get to know me
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-black mb-8 bg-gradient-to-r from-white via-cyan-400 to-violet-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
            I’m <span className="font-bold text-white border-b-2 border-cyan-500/50">Akshat Saini</span>, 
            a final-year B.Tech student with a strong interest in Full Stack and DevOps. 
            Currently working as a <span className="text-violet-400 font-medium">DevOps intern</span>, 
            I focus on building scalable applications and continuously learning to grow into a successful software engineer.
          </p>

          <div className="grid gap-6 mb-10">
            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500 text-2xl group-hover:scale-110 transition-transform">
                📜
              </span>
              <div>
                <h4 className="text-white font-semibold">Certification</h4>
                <p className="text-slate-400 text-sm mt-1">
                  <strong>Red Hat Certified System Administrator (RHCSA)</strong> with hands-on experience in Linux administration.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 text-green-500 text-2xl group-hover:scale-110 transition-transform">
                🚀
              </span>
              <div>
                <h4 className="text-white font-semibold">Focus Areas</h4>
                <p className="text-slate-400 text-sm mt-1">
                  Interested in <strong>DevOps, automation, containers,</strong> and building scalable, reliable systems.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/10">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 text-2xl group-hover:scale-110 transition-transform">
                🛠️
              </span>
              <div>
                <h4 className="text-white font-semibold">Specialization</h4>
                <p className="text-slate-400 text-sm mt-1">
                  Worked on projects involving <strong>DevOps and full stack</strong> development.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-5">
              Current Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                'React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express', 'Git & GitHub', 'DevOps'
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#16161a] border border-white/10 px-5 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual: Professional Code Card */}
        <div
          className="flex-1 flex justify-center md:justify-end"
          data-aos="zoom-in"
        >
          <div className="w-full max-w-sm rounded-2xl shadow-2xl bg-[#0d0d0f] text-left border border-white/10 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="absolute top-0 left-0 w-full h-10 bg-white/5 flex items-center px-4 space-x-2 rounded-t-2xl border-b border-white/5">
              <span className="w-3 h-3 bg-[#ff5f56] rounded-full" />
              <span className="w-3 h-3 bg-[#ffbd2e] rounded-full" />
              <span className="w-3 h-3 bg-[#27c93f] rounded-full" />
              <span className="ml-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">developer-profile.js</span>
            </div>

            <div className="p-8 pt-14">
              <pre className="text-sm font-mono leading-relaxed">
                <code className="text-violet-400">const</code> <code className="text-cyan-400">akshat</code> = {'{'} <br />
                &nbsp;&nbsp;<span className="text-slate-400">role:</span> <code className="text-yellow-200">"Full Stack Developer"</code>,<br />
                &nbsp;&nbsp;<span className="text-slate-400">specialty:</span> <code className="text-yellow-200">"DevOps"</code>,<br />
                &nbsp;&nbsp;<span className="text-slate-400">tech:</span> [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-emerald-400">"React"</code>, <code className="text-emerald-400">"Node"</code>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-emerald-400">"Docker"</code>, <code className="text-emerald-400">"Linux"</code><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;<span className="text-slate-400">openToWork:</span> <code className="text-orange-400">true</code><br />
                {'};'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;