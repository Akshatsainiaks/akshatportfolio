import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-8 text-center border-t border-cyan-500/10">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Akshat Saini</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
