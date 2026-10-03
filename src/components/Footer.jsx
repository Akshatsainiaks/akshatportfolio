import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaDocker } from 'react-icons/fa';
import { ArrowUpRight, Download } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

const socials = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/Akshatsainiaks', label: 'GitHub' },
  { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/akshat-saini-0ba25924b/', label: 'LinkedIn' },
  { icon: <FaDocker size={16} />, href: 'https://hub.docker.com/u/akshatsaini08', label: 'Docker Hub' },
  { icon: <FaEnvelope size={15} />, href: 'mailto:akshatsaini336@gmail.com', label: 'Email' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#070a12] text-slate-400 border-t border-white/5">
      {/* ---------- Links ---------- */}
      <div className="relative max-w-7xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-16 pb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="" className="w-9 h-9" />
              <span className="text-xl font-bold tracking-tight text-white">Akshat Saini</span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full Stack & DevOps Engineer building scalable cloud-native applications, distributed observability systems, and high-performance web platforms.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/40 hover:-translate-y-1 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span className="w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Udaipur, Rajasthan, India</p>
              <a href="mailto:akshatsaini336@gmail.com" className="block text-slate-300 font-mono text-xs hover:text-cyan-400 transition-colors">
                akshatsaini336@gmail.com
              </a>
              <a href="https://srevox.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors">
                srevox.in <ArrowUpRight size={13} />
              </a>
              <div className="pt-2">
                <a
                  href="/Akshat_kumar_Saini_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 transition-all"
                >
                  <Download size={13} /> Download CV / Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-start text-xs text-slate-500">
          <p>© {currentYear} Akshat Saini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
