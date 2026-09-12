import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070a12] text-slate-400 pt-16 pb-10 px-6 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
                AS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Akshat Saini
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full Stack & DevOps Engineer building scalable cloud-native applications, distributed observability systems, and high-performance web platforms.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Akshatsainiaks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/akshat-saini-0ba25924b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:akshatsaini336@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                aria-label="Email Contact"
              >
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Udaipur, Rajasthan, India</p>
              <p className="text-slate-300 font-mono text-xs">akshatsaini336@gmail.com</p>
              <div className="pt-2">
                <a
                  href="/Akshat_kumar_Saini_Resume.pdf"
                  download
                  className="inline-block px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-slate-800 transition-all"
                >
                  Download CV / Resume
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Akshat Saini. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, Tailwind CSS & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;