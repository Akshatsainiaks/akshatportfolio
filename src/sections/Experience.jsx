
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { MapPin, XCircle } from "lucide-react";

// import hoickoLogo from "../assets/hoicko.jpeg";
// import ibmLogo from "../assets/ibmLogo.png";

// import gnpsLogo from "../assets/gnpsLogo.png";
// import tinjnrLogo from "../assets/tinjnrLogo.png";


// const education = [
//   {
//     title: "Secondary (10th)",
//     school: "Guru Nanak Public School (RBSE)",
//     location: "Udaipur, Rajasthan",
//     duration: "2019 – 2020",
//     description: "Percentage = 80.0",
//     logo: gnpsLogo,
//   },
//   {
//     title: "Senior Secondary (12th PCM)",
//     school: "Guru Nanak Public School (RBSE)",
//     location: "Udaipur, Rajasthan",
//     duration: "2021 – 2022",
//     description: "Percentage = 68.8",
//     logo: gnpsLogo,
//   },
//   {
//     title: "B.Tech in Computer Science",
//     school: "Techno India NJR Institute of Technology",
//     location: "Udaipur, Rajasthan",
//     duration: "2022 – 2026",
//     description: "Current Semester: 7th  CGPA = 8.28",
//     logo: tinjnrLogo,
//   },
// ];


// const experiences = [
//   {
//     role: "DevOps Intern",
//     company: "Hoicko Technologies Private Limited",
//     logo: hoickoLogo,
//     Location: "Udaipur, Rajasthan",
//     duration: "Sep 2025 – Present",
//     description:
//       "Worked on DevOps tasks including Linux administration, Docker, CI/CD pipelines, automation scripts, and deployment workflows.",
//     moreInfo: `
// - Configured and managed Linux servers  
// - Created Docker images and containers for internal applications  
// - Built CI/CD pipelines using GitHub Actions  
// - Automated deployments using shell scripts  
// - Set up Nginx reverse proxy for test environment  
// - Worked with AWS EC2 for hosting internal tools  
// - Monitored logs and optimized deployments  

// `,
//     skills: ["Linux", "Docker", "Git", "CI/CD"],
//   },

//   {
//     role: "IBM – Nasscom ML Intern",
//     company: "IBM",
//     logo: ibmLogo,
//     Location: "Udaipur, Rajasthan",
//     duration: "Dec 2022 – Feb 2023",
//     description:
//       "Worked with Python and machine learning libraries such as Numpy and Pandas.",
//     moreInfo: `
// - Learned basics of Machine Learning  
// - Worked on data cleaning & preprocessing  
// - Built ML models using NumPy & Pandas  
// - Created small prediction models  
// - Practiced data visualization  
// `,
//     skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
//   },
// ];


// const Experience = () => {
//   const [selected, setSelected] = useState(null);

 
//   useEffect(() => {
//     document.body.style.overflow = selected ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [selected]);

//   return (
//     <section
//       id="experience"
//       className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#162238] to-[#0f172a] text-white"
//     >

//       <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16">
//         Education & Experience 🎓📘
//       </h2>


//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">


//         <div>
//           <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center md:text-left">
//             Education
//           </h3>

//           <div className="relative">
//             <div className="absolute left-[12px] top-0 bottom-0 w-[3px] bg-cyan-500/20"></div>

//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 className="relative pl-12 mb-12"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-cyan-400 border-4 border-[#0f172a] rounded-full" />

//                 <div className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition">
//                   <p className="text-cyan-300 text-sm mb-2">{edu.duration}</p>

//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-cyan-400/20">
//                       <img src={edu.logo} className="w-8 h-8 object-contain" />
//                     </div>

//                     <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
//                   </div>

//                   <p className="text-cyan-400 text-sm">{edu.school}</p>
//                   <p className="text-cyan-200 text-xs flex items-center gap-2 mb-3">
//                     <MapPin size={16} /> {edu.location}
//                   </p>

//                   <p className="text-slate-300 text-sm">{edu.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

   
//         <div>
//           <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center md:text-left">
//             Experience
//           </h3>

//           <div className="relative">
//             <div className="absolute left-[12px] top-0 bottom-0 w-[3px] bg-cyan-500/20"></div>

//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 className="relative pl-12 mb-12"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="absolute left-0 top-2 w-4 h-4 bg-cyan-400 border-4 border-[#0f172a] rounded-full" />

//                 <div className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition">

//                   <p className="text-cyan-300 text-sm mb-1">{exp.duration}</p>

//                   <div className="flex items-center gap-3 mb-3">
//                     <img
//                       src={exp.logo}
//                       className="w-10 h-10 rounded bg-white/10 border border-cyan-400/20 p-1"
//                     />
//                     <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
//                   </div>

//                   <p className="text-cyan-400 text-sm">{exp.company}</p>

//                   <p className="text-cyan-200 text-xs flex items-center gap-2 mb-4">
//                     <MapPin size={16} /> {exp.Location}
//                   </p>

//                   <p className="text-slate-300 mb-4">{exp.description}</p>

                
//                   <button
//                     onClick={() => setSelected(exp)}
//                     className="text-sm text-cyan-300 underline hover:text-cyan-200 cursor-pointer"
//                   >
//                     More Info →
//                   </button>

                 
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {exp.skills.map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>

//                 </div>
//               </motion.div>
//             ))}

//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="
//                 bg-[#0f172a]/80 
//                 backdrop-blur-xl 
//                 border border-cyan-400/30 
//                 rounded-2xl 
//                 p-8 
//                 max-w-xl 
//                 w-full 
//                 shadow-[0_0_40px_rgba(0,255,255,0.15)]
//                 relative

//                 max-h-[80vh]
//                 overflow-y-auto
//                 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-transparent
//               "
//               initial={{ y: 60, opacity: 0, scale: 0.9 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 40, opacity: 0, scale: 0.9 }}
//             >
//               <button
//                 onClick={() => setSelected(null)}
//                 className="absolute top-4 right-4 text-cyan-300 hover:text-white transition cursor-pointer"
//               >
//                 <XCircle size={30} />
//               </button>

//               <div className="flex items-center gap-4 mb-6">
//                 <div className="w-14 h-14 rounded-xl bg-white/10 border border-cyan-400/20 flex items-center justify-center">
//                   <img
//                     src={selected.logo}
//                     className="w-10 h-10 rounded-md object-contain"
//                   />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold text-cyan-300">
//                     {selected.role}
//                   </h3>
//                   <p className="text-cyan-400 text-sm">{selected.company}</p>
//                 </div>
//               </div>

//               <div className="space-y-3 mt-3 pb-6">
//                 {selected.moreInfo
//                   .trim()
//                   .split("\n")
//                   .map((line, i) => (
//                     <div key={i} className="flex gap-3 items-start">
//                       <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
//                       <p className="text-slate-300 text-sm leading-relaxed">
//                         {line.replace("-", "")}
//                       </p>
//                     </div>
//                   ))}
//               </div>

//               <div className="border-t border-cyan-400/10 pt-4 text-right">
//                 <button
//                   onClick={() => setSelected(null)}
//                   className="px-5 py-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition cursor-pointer"
//                 >
//                   Close
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// };

// export default Experience;


//final new
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, XCircle, GraduationCap, Briefcase, Calendar } from "lucide-react";

import hoickoLogo from "../assets/hoicko.jpeg";
import ibmLogo from "../assets/ibmLogo.png";
import gnpsLogo from "../assets/gnpsLogo.png";
import tinjnrLogo from "../assets/tinjnrLogo.png";

const education = [
  {
    title: "Secondary (10th)",
    school: "Guru Nanak Public School (RBSE)",
    location: "Udaipur, Rajasthan",
    duration: "2019 – 2020",
    description: "Percentage = 80.0",
    logo: gnpsLogo,
  },
  {
    title: "Senior Secondary (12th PCM)",
    school: "Guru Nanak Public School (RBSE)",
    location: "Udaipur, Rajasthan",
    duration: "2021 – 2022",
    description: "Percentage = 68.8",
    logo: gnpsLogo,
  },
  {
    title: "B.Tech in Computer Science",
    school: "Techno India NJR Institute of Technology",
    location: "Udaipur, Rajasthan",
    duration: "2022 – 2026",
    description: "Current Semester: 7th | CGPA = 8.28",
    logo: tinjnrLogo,
  },
];

const experiences = [
  {
    role: "DevOps Intern",
    company: "Hoicko Technologies Private Limited",
    logo: hoickoLogo,
    Location: "Udaipur, Rajasthan",
    duration: "Sep 2025 – Present",
    description: "Managed Linux administration, Docker, CI/CD pipelines, and automated deployment workflows.",
    moreInfo: `
- Configured and managed Linux servers  
- Created Docker images and containers for internal applications  
- Built CI/CD pipelines using GitHub Actions  
- Automated deployments using shell scripts  
- Set up Nginx reverse proxy for test environment  
- Worked with AWS EC2 for hosting internal tools  
- Monitored logs and optimized deployments  
`,
    skills: ["Linux", "Docker", "Git", "CI/CD"],
  },
  {
    role: "IBM – Nasscom ML Intern",
    company: "IBM",
    logo: ibmLogo,
    Location: "Udaipur, Rajasthan",
    duration: "Dec 2022 – Feb 2023",
    description: "Developed ML models using Python and libraries such as NumPy and Pandas.",
    moreInfo: `
- Learned basics of Machine Learning  
- Worked on data cleaning & preprocessing  
- Built ML models using NumPy & Pandas  
- Created small prediction models  
- Practiced data visualization  
`,
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
];

const Experience = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selected]);

  return (
    <section id="experience" className="relative py-32 px-6 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase mb-6">
          Education & Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-violet-600 mx-auto rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative">
        {/* Education Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white uppercase italic tracking-widest">Education</h3>
          </div>

          <div className="relative border-l border-white/5 ml-6 space-y-12">
            {education.map((edu, index) => (
              <motion.div key={index} className="relative pl-10" whileHover={{ x: 10 }}>
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                <div className="p-8 rounded-[2rem] bg-[#111113] border border-white/5 hover:border-violet-500/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 p-2 border border-white/10">
                        <img src={edu.logo} alt="School Logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{edu.title}</h4>
                        <p className="text-violet-400 text-sm font-medium">{edu.school}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-slate-400 text-xs font-bold border border-white/5 whitespace-nowrap tracking-wide">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-light">{edu.description}</p>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium tracking-wide">
                    <MapPin size={14} className="text-violet-500" /> {edu.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-12">
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Briefcase size={28} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-white uppercase italic tracking-widest">Experience</h3>
          </div>

          <div className="relative border-l border-white/5 ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div key={index} className="relative pl-10" whileHover={{ x: 10 }}>
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <div className="p-8 rounded-[2rem] bg-[#111113] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 p-2 border border-white/10">
                        <img src={exp.logo} alt="Company Logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{exp.role}</h4>
                        <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-slate-400 text-xs font-bold border border-white/5 whitespace-nowrap tracking-wide">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{exp.description}</p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-cyan-500/5 border border-cyan-500/10 text-cyan-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelected(exp)}
                      className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      More Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL REDESIGN */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0ce0] backdrop-blur-xl flex items-center justify-center z-[1000] px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#0d0d0f] border border-white/10 rounded-[2.5rem] p-10 max-w-2xl w-full shadow-2xl relative max-h-[85vh] overflow-y-auto scrollbar-none"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all transform hover:rotate-90 cursor-pointer"
              >
                <XCircle size={32} />
              </button>

              <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-8">
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 p-4">
                  <img src={selected.logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white leading-tight uppercase tracking-tight">
                    {selected.role}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">{selected.company}</p>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={12}/> {selected.duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {selected.moreInfo.trim().split("\n").map((line, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {line.replace("-", "").trim()}
                      </p>
                    </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-cyan-400 transition-all active:scale-95 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;