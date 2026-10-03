
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
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { MapPin, X, GraduationCap, Briefcase, Calendar, ArrowRight, Check } from "lucide-react";
import Tilt from "../components/Tilt";
import hoickoLogo from "../assets/hoicko.jpeg";
import ibmLogo from "../assets/ibmLogo.png";
import gnpsLogo from "../assets/gnpsLogo.png";
import tinjnrLogo from "../assets/tinjnrLogo.png";

const EASE = [0.16, 1, 0.3, 1];

// newest first
const education = [
  {
    title: "B.Tech in Computer Science",
    school: "Techno India NJR Institute of Technology",
    location: "Udaipur, Rajasthan",
    duration: "2022 – 2026",
    description: "Completed | CGPA = 8.44",
    logo: tinjnrLogo,
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
    title: "Secondary (10th)",
    school: "Guru Nanak Public School (RBSE)",
    location: "Udaipur, Rajasthan",
    duration: "2019 – 2020",
    description: "Percentage = 80.0",
    logo: gnpsLogo,
  },
];

const experiences = [
  {
    role: "DevOps Intern",
    company: "Hoicko Technologies Private Limited",
    logo: hoickoLogo,
    location: "Udaipur, Rajasthan",
    duration: "Sep 2025 – Dec 2025",
    description: "Managed Linux administration, Docker, CI/CD pipelines, and automated deployment workflows.",
    moreInfo: [
      "Configured and managed Linux servers",
      "Created Docker images and containers for internal applications",
      "Built CI/CD pipelines using Azure DevOps",
      "Worked with Kubernetes at production level",
      "Monitored logs and optimized deployments",
    ],
    skills: ["Linux", "Docker", "Git", "CI/CD"],
  },
  {
    role: "IBM – Nasscom ML Intern",
    company: "IBM",
    logo: ibmLogo,
    location: "Udaipur, Rajasthan",
    duration: "Dec 2022 – Feb 2023",
    description: "Developed ML models using Python and libraries such as NumPy and Pandas.",
    moreInfo: ["Learned the basics of Machine Learning", "Learned about NumPy & Pandas"],
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
  },
];

const accents = {
  violet: {
    icon: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    text: "text-violet-400",
    dot: "border-violet-500 shadow-[0_0_14px_rgba(139,92,246,0.7)]",
    line: "from-violet-500 via-violet-500/60 to-transparent",
    hover: "hover:border-violet-500/30",
  },
  cyan: {
    icon: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    text: "text-cyan-400",
    dot: "border-cyan-500 shadow-[0_0_14px_rgba(34,211,238,0.7)]",
    line: "from-cyan-500 via-cyan-500/60 to-transparent",
    hover: "hover:border-cyan-500/30",
  },
};

/* Timeline column — the line draws itself as you scroll */
const Timeline = ({ title, icon, accent, from, children }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const a = accents[accent];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: from === "left" ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex items-center gap-4 mb-12 justify-center lg:justify-start"
      >
        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${a.icon}`}>{icon}</div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase italic tracking-widest">{title}</h3>
      </motion.div>

      <div ref={ref} className="relative ml-3 sm:ml-6">
        {/* track + animated fill */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5" />
        <motion.div
          className={`absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b ${a.line}`}
          style={{ scaleY: reduceMotion ? 1 : scaleY }}
        />
        <div className="space-y-10">{children}</div>
      </div>
    </div>
  );
};

/* Single timeline entry — swings in with a 3D turn, then tilts on hover */
const Entry = ({ accent, from, index, children }) => {
  const a = accents[accent];
  return (
    <motion.div
      className="relative pl-8 sm:pl-10"
      style={{ perspective: 1200 }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* dot */}
      <motion.span
        className={`absolute -left-[7px] top-8 w-[15px] h-[15px] rounded-full bg-[#0a0a0c] border-2 ${a.dot}`}
        variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 } } }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, rotateY: from === "left" ? 25 : -25, x: from === "left" ? -40 : 40 },
          show: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 0.9, ease: EASE, delay: index * 0.1 } },
        }}
      >
        <Tilt max={6} scale={1.01} glare rounded="rounded-[2rem]">
          <div className={`p-6 sm:p-8 rounded-[2rem] bg-[#111113] border border-white/5 ${a.hover} transition-colors duration-500 shadow-xl`}>
            {children}
          </div>
        </Tilt>
      </motion.div>
    </motion.div>
  );
};

const CardHeader = ({ logo, title, subtitle, duration, accent, current }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-5">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ffffff] p-2 border border-white/10">
        <img src={logo} alt="" className="w-full h-full object-contain" />
      </div>
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">{title}</h4>
        <p className={`${accents[accent].text} text-sm font-medium`}>{subtitle}</p>
      </div>
    </div>
    <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
      {current && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Current
        </span>
      )}
      <span className="px-3.5 py-1.5 rounded-full bg-white/5 text-slate-400 text-xs font-bold border border-white/5 whitespace-nowrap">
        {duration}
      </span>
    </div>
  </div>
);

const Experience = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <section id="experience" className="relative py-28 px-6 bg-[#0a0a0c] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        className="relative max-w-7xl mx-auto text-center mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10">
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">My Journey</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
          Education &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Experience</span>
        </h2>
      </motion.div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Education */}
        <Timeline title="Education" icon={<GraduationCap size={26} />} accent="violet" from="left">
          {education.map((edu, i) => (
            <Entry key={edu.title} accent="violet" from="left" index={i}>
              <CardHeader logo={edu.logo} title={edu.title} subtitle={edu.school} duration={edu.duration} accent="violet" />
              <p className="text-slate-300 text-sm mb-4 font-medium">{edu.description}</p>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                <MapPin size={14} className="text-violet-400" /> {edu.location}
              </div>
            </Entry>
          ))}
        </Timeline>

        {/* Experience */}
        <Timeline title="Experience" icon={<Briefcase size={26} />} accent="cyan" from="right">
          {experiences.map((exp, i) => (
            <Entry key={exp.role} accent="cyan" from="right" index={i}>
              <CardHeader
                logo={exp.logo}
                title={exp.role}
                subtitle={exp.company}
                duration={exp.duration}
                accent="cyan"
                current={exp.current}
              />
              <p className="text-slate-400 text-sm mb-3 leading-relaxed">{exp.description}</p>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-6">
                <MapPin size={14} className="text-cyan-400" /> {exp.location}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-cyan-500/5 border border-cyan-500/15 text-cyan-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelected(exp)}
                  className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  More Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Entry>
          ))}
        </Timeline>
      </div>

      {/* Details modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-[#0a0a0ce0] backdrop-blur-xl flex items-center justify-center z-[1100] px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ perspective: 1200 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.role} details`}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0d0d0f] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
              initial={{ opacity: 0, rotateX: -20, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, rotateX: 15, y: 40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:rotate-90 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-5 mb-8 pb-8 border-b border-white/5 pr-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-3xl bg-[#ffffff] border border-white/10 p-3">
                  <img src={selected.logo} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">{selected.role}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                    <p className="text-cyan-400 font-bold text-xs uppercase tracking-widest">{selected.company}</p>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-widest flex items-center gap-1">
                      <Calendar size={12} /> {selected.duration}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {selected.moreInfo.map((line, i) => (
                  <motion.li
                    key={line}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                  >
                    <span className="mt-0.5 w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                      <Check size={12} />
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">{line}</p>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/5">
                {selected.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
