
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, XCircle } from "lucide-react";

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
    description: "Current Semester: 7th  CGPA = 8.28",
    logo: tinjnrLogo,
  },
];


const experiences = [
  {
    role: "DevOps Intern",
    company: "Hoicko Technologies Private Limited",
    logo: hoickoLogo,
    Location: "Udaipur, Rajasthan",
    duration: "Sep 2025 – Nov 2025",
    description:
      "Worked on DevOps tasks including Linux administration, Docker, CI/CD pipelines, automation scripts, and deployment workflows.",
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
    description:
      "Worked with Python and machine learning libraries such as Numpy and Pandas.",
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
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#162238] to-[#0f172a] text-white"
    >

      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-16">
        Education & Experience 🎓📘
      </h2>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">


        <div>
          <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center md:text-left">
            Education
          </h3>

          <div className="relative">
            <div className="absolute left-[12px] top-0 bottom-0 w-[3px] bg-cyan-500/20"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-12 mb-12"
                whileHover={{ y: -5 }}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-cyan-400 border-4 border-[#0f172a] rounded-full" />

                <div className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition">
                  <p className="text-cyan-300 text-sm mb-2">{edu.duration}</p>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-cyan-400/20">
                      <img src={edu.logo} className="w-8 h-8 object-contain" />
                    </div>

                    <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                  </div>

                  <p className="text-cyan-400 text-sm">{edu.school}</p>
                  <p className="text-cyan-200 text-xs flex items-center gap-2 mb-3">
                    <MapPin size={16} /> {edu.location}
                  </p>

                  <p className="text-slate-300 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

   
        <div>
          <h3 className="text-3xl font-bold text-cyan-400 mb-12 text-center md:text-left">
            Experience
          </h3>

          <div className="relative">
            <div className="absolute left-[12px] top-0 bottom-0 w-[3px] bg-cyan-500/20"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12 mb-12"
                whileHover={{ y: -5 }}
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-cyan-400 border-4 border-[#0f172a] rounded-full" />

                <div className="bg-[#0f172a]/60 backdrop-blur-lg border border-cyan-400/20 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/20 transition">

                  <p className="text-cyan-300 text-sm mb-1">{exp.duration}</p>

                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={exp.logo}
                      className="w-10 h-10 rounded bg-white/10 border border-cyan-400/20 p-1"
                    />
                    <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                  </div>

                  <p className="text-cyan-400 text-sm">{exp.company}</p>

                  <p className="text-cyan-200 text-xs flex items-center gap-2 mb-4">
                    <MapPin size={16} /> {exp.Location}
                  </p>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                
                  <button
                    onClick={() => setSelected(exp)}
                    className="text-sm text-cyan-300 underline hover:text-cyan-200 cursor-pointer"
                  >
                    More Info →
                  </button>

                 
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                bg-[#0f172a]/80 
                backdrop-blur-xl 
                border border-cyan-400/30 
                rounded-2xl 
                p-8 
                max-w-xl 
                w-full 
                shadow-[0_0_40px_rgba(0,255,255,0.15)]
                relative

                max-h-[80vh]
                overflow-y-auto
                scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-transparent
              "
              initial={{ y: 60, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.9 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-cyan-300 hover:text-white transition cursor-pointer"
              >
                <XCircle size={30} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-cyan-400/20 flex items-center justify-center">
                  <img
                    src={selected.logo}
                    className="w-10 h-10 rounded-md object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-cyan-300">
                    {selected.role}
                  </h3>
                  <p className="text-cyan-400 text-sm">{selected.company}</p>
                </div>
              </div>

              <div className="space-y-3 mt-3 pb-6">
                {selected.moreInfo
                  .trim()
                  .split("\n")
                  .map((line, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {line.replace("-", "")}
                      </p>
                    </div>
                  ))}
              </div>

              <div className="border-t border-cyan-400/10 pt-4 text-right">
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition cursor-pointer"
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
