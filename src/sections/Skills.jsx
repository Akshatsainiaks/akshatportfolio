import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaAws, FaLinux
} from 'react-icons/fa';
import {
  SiDocker, SiKubernetes, SiNginx, SiGrafana, SiGithubactions, SiGo,
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVite, SiJsonwebtokens, SiMysql, SiPostgresql, SiRedis
} from 'react-icons/si';
import { Monitor, Server, Cloud } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const skills = [
  {
    category: 'Frontend Development',
    icon: <Monitor size={22} />,
    tint: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    glow: 'rgba(34,211,238,0.15)',
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
    icon: <Server size={22} />,
    tint: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    glow: 'rgba(139,92,246,0.15)',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Go', icon: <SiGo className="text-cyan-500" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-300" /> },
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
    icon: <Cloud size={22} />,
    tint: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    glow: 'rgba(16,185,129,0.15)',
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

/* ---------------- 3D skill sphere ----------------
   Icons are placed on a sphere (Fibonacci distribution) and projected
   each frame. Auto-rotates, can be dragged, slows down on hover. */
const SkillSphere = () => {
  const wrapRef = useRef(null);
  const nodeRefs = useRef([]);
  const reduceMotion = useReducedMotion();

  const items = useMemo(() => skills.flatMap((g) => g.items), []);

  // unit-sphere positions
  const points = useMemo(() => {
    const n = items.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return items.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return [Math.cos(theta) * r, y, Math.sin(theta) * r];
    });
  }, [items]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let rotX = -0.3;
    let rotY = 0;
    let velX = 0;
    let velY = reduceMotion ? 0 : 0.004;
    const baseVel = velY;
    let hovering = false;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let frame;

    const render = () => {
      const R = wrap.offsetWidth * 0.4;
      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      const cy = Math.cos(rotY), sy = Math.sin(rotY);

      points.forEach(([x, y, z], i) => {
        // rotate around Y, then X
        const x1 = x * cy + z * sy;
        const z1 = -x * sy + z * cy;
        const y2 = y * cx - z1 * sx;
        const z2 = y * sx + z1 * cx;

        const depth = (z2 + 1) / 2; // 0 = back, 1 = front
        const scale = 0.55 + depth * 0.65;
        const el = nodeRefs.current[i];
        if (!el) return;
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * R}px, ${y2 * R}px, 0) scale(${scale})`;
        el.style.opacity = String(0.25 + depth * 0.75);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.35 ? 'blur(1px)' : 'none';
        // only the front-most icons show their label
        el.style.setProperty('--label', String(Math.max(0, (depth - 0.72) / 0.28)));
      });
    };

    const tick = () => {
      if (!dragging) {
        const target = hovering ? baseVel * 0.25 : baseVel;
        velY += (target - velY) * 0.03;
        velX *= 0.95;
      }
      rotY += velY;
      rotX = Math.max(-1.2, Math.min(1.2, rotX + velX));
      render();
      frame = requestAnimationFrame(tick);
    };

    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      wrap.setPointerCapture?.(e.pointerId);
    };
    const onMove = (e) => {
      if (!dragging) return;
      velY = (e.clientX - lastX) * 0.005;
      velX = -(e.clientY - lastY) * 0.005;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = () => (dragging = false);
    const onEnter = () => (hovering = true);
    const onLeave = () => {
      hovering = false;
      dragging = false;
    };

    wrap.addEventListener('pointerdown', onDown);
    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerup', onUp);
    wrap.addEventListener('pointerenter', onEnter);
    wrap.addEventListener('pointerleave', onLeave);

    render();
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      wrap.removeEventListener('pointerdown', onDown);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerup', onUp);
      wrap.removeEventListener('pointerenter', onEnter);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, [points, reduceMotion]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[460px] aspect-square mx-auto cursor-grab active:cursor-grabbing select-none touch-pan-y"
      aria-label="Interactive 3D sphere of skills — drag to rotate"
      role="img"
    >
      {/* core glow + orbit rings */}
      <div className="absolute inset-[22%] rounded-full bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 blur-3xl" />
      <div className="absolute inset-[8%] rounded-full border border-white/5" />
      <div className="absolute inset-[8%] rounded-full border border-white/5 [transform:rotateX(70deg)]" />

      {items.map((item, i) => (
        <div
          key={item.name}
          ref={(el) => (nodeRefs.current[i] = el)}
          className="absolute left-1/2 top-1/2 flex flex-col items-center gap-1 will-change-transform"
        >
          <span className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-[#111113] border border-white/10 shadow-lg text-xl sm:text-2xl">
            {item.icon}
          </span>
          <span
            className="text-[10px] font-semibold text-slate-300 whitespace-nowrap"
            style={{ opacity: 'var(--label, 0)' }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

/* ---------------- 3D tilt card ---------------- */
const TiltCard = ({ children, glow, index }) => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glowBg = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(400px circle at ${x} ${y}, ${glow}, transparent 60%)`
  );

  const onMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative p-6 sm:p-7 rounded-[1.75rem] bg-[#111113] border border-white/5 hover:border-white/10 transition-colors duration-300 overflow-hidden"
      >
        {/* cursor-following light */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glowBg }}
        />
        <div className="relative" style={{ transform: 'translateZ(30px)' }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen px-6 py-28 bg-[#0a0a0c] text-white flex flex-col items-center"
    >
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <span className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">Tech Stack</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            The core engines, technologies, and DevOps toolsets I use to build scalable digital systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* 3D sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="flex flex-col items-center"
          >
            <SkillSphere />
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-500 font-bold">
              Drag to rotate
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid gap-6">
            {skills.map((group, index) => (
              <TiltCard key={group.category} glow={group.glow} index={index}>
                <div className="flex items-center gap-4 mb-5">
                  <span className={`w-11 h-11 flex items-center justify-center rounded-xl border ${group.tint}`}>
                    {group.icon}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight">{group.category}</h3>
                  <span className="ml-auto text-xs font-mono text-slate-500">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 bg-[#0a0a0c] border border-white/5 pl-2.5 pr-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors duration-300 cursor-default"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
