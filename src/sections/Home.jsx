// Update in profile image
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import newprofile from '../assets/newprofile.jpg';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaChevronDown,
} from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-7xl w-full">
        {/* Text */}
        <div className="text-center md:text-left flex-1">
          <span className="inline-block text-sm text-cyan-400 bg-cyan-900/20 px-4 py-1 rounded-full mb-4 tracking-wide">
            🚀 Open to Opportunities
          </span>

          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I’m <span className="text-cyan-400">Akshat Saini</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6 min-h-[36px]">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Tech Enthusiast',
                'Problem Solver',
                'Open Source Contributor',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 max-w-xl text-base sm:text-lg mb-8 mx-auto md:mx-0 leading-relaxed">
            I create fast, secure, and scalable web applications. I love solving problems with clean architecture and modern UI.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition"
            >
              Let’s Connect
            </a>
            <a
              href="/upResume.pdf"
              download
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 justify-center md:justify-start text-xl">
            <a href="#" className="text-cyan-400 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-cyan-400 hover:text-white transition">
              <FaCode />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[5px] rounded-xl shadow-lg hover:shadow-cyan-400/40 transition">
            <img
              src={newprofile}
              alt="Profile"
              className="w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-lg border-4 border-[#1e293b]"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-cyan-400 animate-bounce text-lg hover:text-white transition">
          <FaChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Home;
