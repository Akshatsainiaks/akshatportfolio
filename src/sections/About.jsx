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

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Award, Rocket, Layers } from 'lucide-react';
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiDocker, SiGo } from 'react-icons/si';
import Tilt from '../components/Tilt';

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
};

// 3D flip-up entrance for highlight cards
const flipUp = {
  hidden: { opacity: 0, rotateX: -50, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay: 0.25 + i * 0.12 },
  }),
};

// pop-in for tech chips
const pop = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.6 + i * 0.05 },
  }),
};

const highlights = [
  {
    icon: <Award size={20} />,
    tint: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    title: 'Certification',
    body: (
      <>
        <strong className="text-white font-semibold">Red Hat Certified System Administrator (RHCSA)</strong> with
        hands-on experience in Linux administration.
      </>
    ),
  },
  {
    icon: <Rocket size={20} />,
    tint: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'Focus Areas',
    body: (
      <>
        Interested in <strong className="text-white font-semibold">DevOps, automation, containers,</strong> and
        building scalable, reliable systems.
      </>
    ),
  },
  {
    icon: <Layers size={20} />,
    tint: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    title: 'Specialization',
    body: (
      <>
        Worked on projects involving <strong className="text-white font-semibold">DevOps and full stack</strong>{' '}
        development.
      </>
    ),
  },
];

const stack = [
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Go', icon: <SiGo className="text-cyan-500" /> },
  { name: 'SQL', icon: <FaDatabase className="text-blue-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Express', icon: <SiExpress className="text-slate-300" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-500" /> },
  { name: 'DevOps', icon: <SiDocker className="text-blue-500" /> },
];

// ---------- Animated terminal card ----------
const PROMPT = 'akshat@portfolio:~$';

const script = [
  { cmd: 'whoami', out: [[{ t: 'akshat-saini', c: 'text-white' }]] },
  { cmd: 'cat role.txt', out: [[{ t: 'Software Engineer', c: 'text-cyan-400 font-semibold' }]] },
  {
    cmd: 'kubectl get skills',
    out: [
      [{ t: 'NAME         TYPE       STATUS', c: 'text-slate-500' }],
      ...[
        ['react', 'frontend'],
        ['node', 'backend'],
        ['go', 'backend'],
        ['docker', 'devops'],
        ['kubernetes', 'devops'],
        ['linux', 'system'],
      ].map(([name, type]) => [
        { t: name.padEnd(13) + type.padEnd(11), c: 'text-slate-300' },
        { t: 'Running', c: 'text-emerald-400' },
      ]),
    ],
  },
  {
    cmd: 'echo $STATUS',
    out: [[{ t: '✔ Open to opportunities', c: 'text-emerald-400 font-semibold' }]],
  },
];

const TYPE_MS = 45; // per typed character
const OUT_MS = 90; // per output line
const PAUSE_MS = 350; // before typing / before output / between commands

const Terminal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();

  // step = current command, chars = typed chars of it, outs = output lines shown
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);
  const [outs, setOuts] = useState(0);
  const done = reduceMotion || step >= script.length;

  useEffect(() => {
    if (!inView || done) return;

    const { cmd, out } = script[step];
    let id;
    if (chars < cmd.length) {
      id = setTimeout(() => setChars((c) => c + 1), chars === 0 ? PAUSE_MS : TYPE_MS);
    } else if (outs < out.length) {
      id = setTimeout(() => setOuts((o) => o + 1), outs === 0 ? PAUSE_MS : OUT_MS);
    } else {
      id = setTimeout(() => {
        setStep((s) => s + 1);
        setChars(0);
        setOuts(0);
      }, PAUSE_MS);
    }
    return () => clearTimeout(id);
  }, [inView, done, step, chars, outs]);

  const cursor = <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-cyan-400 animate-pulse" />;

  const promptLine = (text, withCursor) => (
    <div>
      <span className="text-emerald-400">{PROMPT}</span> <span className="text-white">{text}</span>
      {withCursor && cursor}
    </div>
  );

  return (
    <div ref={ref} className="relative w-full max-w-md group">
      {/* Gradient edge glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/40 via-transparent to-violet-500/40 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative rounded-2xl bg-[#0d0d0f] border border-white/10 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="relative flex items-center gap-2 px-4 h-11 bg-white/5 border-b border-white/5">
          <span className="w-3 h-3 bg-[#ff5f56] rounded-full" />
          <span className="w-3 h-3 bg-[#ffbd2e] rounded-full" />
          <span className="w-3 h-3 bg-[#27c93f] rounded-full" />
          <span className="absolute left-1/2 -translate-x-1/2 text-[11px] font-mono text-slate-500">
            akshat — zsh
          </span>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 h-[430px] font-mono text-xs sm:text-[13px] leading-6 whitespace-pre overflow-hidden">
          {script.map((entry, i) => {
            if (!done && i > step) return null;
            const current = !done && i === step;
            const typed = current ? entry.cmd.slice(0, chars) : entry.cmd;
            const shownOut = current ? entry.out.slice(0, outs) : entry.out;
            return (
              <div key={entry.cmd} className="mb-2">
                {promptLine(typed, current && outs === 0)}
                {shownOut.map((line, li) => (
                  <div key={li}>
                    {line.map((seg, si) => (
                      <span key={si} className={seg.c}>{seg.t}</span>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
          {done && promptLine('', true)}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen px-6 py-28 bg-[#0a0a0c] text-white flex items-center justify-center"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_1fr] items-center gap-16">

        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase">
              Get to know me
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-6xl font-black tracking-tight mb-8"
          >
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            I’m <span className="font-semibold text-white">Akshat Saini</span>, a Computer Science graduate (B.Tech)
            with a strong interest in Full Stack and DevOps. Currently working as a{' '}
            <span className="text-violet-400 font-medium">Software Engineer</span>, I focus on building scalable
            applications and continuously learning modern technologies.
          </motion.p>

          {/* Highlights */}
          <div className="grid gap-4 mb-10 text-left" style={{ perspective: 1000 }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                variants={flipUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{ transformOrigin: 'top center' }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-[#111113] border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                <span
                  className={`flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl border ${h.tint} group-hover:scale-110 transition-transform duration-300`}
                >
                  {h.icon}
                </span>
                <div>
                  <h4 className="text-white font-semibold">{h.title}</h4>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">{h.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div variants={fadeUp} custom={6}>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-5">
              Current Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech.name}
                  variants={pop}
                  custom={i}
                  whileHover={{ y: -4, rotate: -2, transition: { duration: 0.2 } }}
                  className="inline-flex items-center gap-2 bg-[#16161a] border border-white/10 pl-3 pr-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors duration-300 cursor-default"
                >
                  <span className="text-base">{tech.icon}</span>
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual: Animated Terminal */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          <Tilt max={8} scale={1.01} glare rounded="rounded-2xl" className="w-full max-w-md">
            <Terminal />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
