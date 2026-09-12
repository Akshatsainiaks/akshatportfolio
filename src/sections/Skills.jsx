import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs,
  FaGitAlt, FaGithub, FaTerminal, FaAws, FaLinux
} from 'react-icons/fa';
import {
  SiDocker, SiKubernetes, SiNginx, SiGrafana, SiGithubactions,
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVite, SiJsonwebtokens, SiMysql, SiPostgresql, SiRedis
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaReact className="text-emerald-500" />,
    accent: 'from-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    items: [
      { name: 'React.js', icon: <FaReact className="text-cyan-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Vite', icon: <SiVite className="text-purple-500" /> },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: <FaNodeJs className="text-emerald-500" />,
    accent: 'from-teal-500/20',
    glow: 'shadow-teal-500/10',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-800 dark:text-white" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
      { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
      { name: 'REST APIs', icon: <SiPostman className="text-orange-500" /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens className="text-pink-500" /> },
    ],
  },
  {
    category: 'DevOps & Cloud Systems',
    icon: <SiDocker className="text-emerald-500" />,
    accent: 'from-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    items: [
      { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" /> },
      { name: 'Docker', icon: <SiDocker className="text-cyan-500" /> },
      { name: 'Linux (RHCSA)', icon: <FaLinux className="text-yellow-500" /> },
      { name: 'AWS Cloud', icon: <FaAws className="text-orange-500" /> },
      { name: 'CI/CD Pipelines', icon: <SiGithubactions className="text-purple-500" /> },
      { name: 'Nginx', icon: <SiNginx className="text-green-500" /> },
      { name: 'Grafana', icon: <SiGrafana className="text-orange-500" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-x-hidden min-h-screen px-6 py-28 bg-white dark:bg-[#070709] text-slate-900 dark:text-white flex flex-col items-center transition-colors duration-300"
    >
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/5 dark:bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl w-full mx-auto text-center z-10" data-aos="fade-up">
        {/* Section Label */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase">
            Tech Stack
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent uppercase">
          My Skills
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-16 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          The core engines, technologies, and DevOps toolsets I use to build scalable digital systems.
        </p>

        <div className="grid gap-8 md:grid-cols-3 w-full text-left">
          {skills.map((group, index) => (
            <div
              key={index}
              className={`relative bg-slate-50/80 dark:bg-[#111114] p-8 rounded-[2rem] border border-slate-200/80 dark:border-white/5 group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-emerald-500/30 ${group.glow}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Corner Ambient Light */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${group.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`} />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-2xl group-hover:scale-110 shadow-xs transition-all duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{group.category}</h3>
              </div>

              <ul className="flex flex-wrap gap-2.5 relative z-10">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 bg-white dark:bg-[#0a0a0c] border border-slate-200 dark:border-white/5 
                    pl-3 pr-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 
                    hover:text-emerald-600 dark:hover:text-white hover:border-emerald-500/30 shadow-xs transition-all duration-300 cursor-default"
                  >
                    <span className="text-base transition-all">
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