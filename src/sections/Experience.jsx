import React from "react";

const experiences = [
  {
    role: "DevOps Intern",
    company: "Hoicko Technologies Private Limited (Internship)",
    Location:"Udaipur, Rajasthan",
    duration: "Sep 2025 – Nov 2025",
    description:
      "Worked on DevOps tasks including Linux administration, Docker, CI/CD pipelines, automation scripts, and deployment workflows.",
    skills: ["Linux", "Docker", "Git", "CI/CD"],
  },

    {
    role: "IBM",
    company: "Nasscom ML Internship",
    Location:"Udaipur, Rajasthan",
    duration: "Dec 2022 – Feb 2023",
    description:
      "Worked with Python and machine learning libraries such as Numpy, Pandas.",
    skills: ["Pyhton", "Pandas", "Numpy", "Machine Learning"],
  },
 
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cyan-400">
          Experience 📘
        </h2>
        <p className="text-slate-300 text-lg mt-3">
          My professional journey and hands-on learning experience.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Middle line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-500/20 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className={`mb-16 flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Dot */}
            <div className="relative w-full md:w-auto flex justify-center">
              <div className="w-6 h-6 bg-cyan-400 rounded-full border-4 border-[#0f172a] shadow-md"></div>
            </div>

            {/* Card */}
            <div className="bg-[#1e293b] border border-cyan-500/10 rounded-xl p-6 shadow-md w-full md:w-1/2 hover:shadow-cyan-500/20 transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.role}
              </h3>
              <p className="text-cyan-400 text-sm mb-1">{exp.company}</p>
              <p className="text-cyan-100 text-sm mb-1">{exp.Location}</p>
              <p className="text-slate-400 text-sm mb-4">{exp.duration}</p>
              <p className="text-slate-300 mb-4">{exp.description}</p>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
