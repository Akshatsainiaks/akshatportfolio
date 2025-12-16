
// import React from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import newprofile from '../assets/akshat.JPG';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   // FaCode,
//   FaChevronDown,
// } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
//     >
//       <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl w-full">
//         {/* Text Section */}
//         <div className="flex-1 text-center md:text-left">
//           <span className="inline-block text-sm text-cyan-400 bg-cyan-900/20 px-4 py-1 rounded-full mb-4 tracking-wide">
//             🚀 Open to Opportunities
//           </span>

//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
//             Hi, I’m <span className="text-cyan-400">Akshat Saini</span>
//           </h1>

//           <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6 min-h-[36px]">
//             <Typewriter
//               words={[
//                 'Full Stack Developer',
//                 'Tech Enthusiast',
//                 'Problem Solver',
//                 'Open Source Contributor',
//               ]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={60}
//               deleteSpeed={40}
//               delaySpeed={1500}
//             />
//           </h2>

//           <p className="text-gray-400 max-w-xl text-base sm:text-lg mb-8 mx-auto md:mx-0 leading-relaxed">
//             I create fast, secure, and scalable web applications. I love solving problems with clean architecture and modern UI.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
//             <a
//               href="#contact"
//               className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition"
//             >
//               Let’s Connect
//             </a>
//             <a
//               href="/Akshat_Kumar_Saini.pdf"
//               download
//               className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition"
//             >
//               Download Resume
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-5 justify-center md:justify-start text-xl">
//             <a href="https://github.com/Akshatsainiaks" className="text-cyan-400 hover:text-white transition">
//               <FaGithub />
//             </a>
//             <a href="https://www.linkedin.com/in/akshat-saini-0ba25924b/" className="text-cyan-400 hover:text-white transition">
//               <FaLinkedin />
//             </a>
//             {/* <a href="#" className="text-cyan-400 hover:text-white transition">
//               <FaTwitter />
//             </a> */}
//             {/* <a href="#" className="text-cyan-400 hover:text-white transition">
//               <FaCode />
//             </a> */}
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex-1 flex justify-center mb-10 md:mb-0">
//           <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[5px] rounded-xl shadow-lg hover:shadow-cyan-400/40 transition">
//             <img
//               src={newprofile}
//               alt="Profile"
//               className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-lg border-4 border-[#1e293b]"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Scroll Down Arrow */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//         <a
//           href="#about"
//           className="text-cyan-400 animate-bounce text-lg hover:text-white transition"
//         >
//           <FaChevronDown size={24} />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import newprofile from '../assets/akshat.JPG';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaChevronDown,
// } from 'react-icons/fa';

// const Home = () => {
//   const [openImage, setOpenImage] = useState(false);

//   // Close modal on ESC key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setOpenImage(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   return (
//     <>
//       {/* MAIN HERO SECTION */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
//       >
//         <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl w-full">
          
//           {/* TEXT SECTION */}
//           <div className="flex-1 text-center md:text-left">
//             <span className="inline-block text-sm text-cyan-400 bg-cyan-900/20 px-4 py-1 rounded-full mb-4 tracking-wide">
//               🚀 Open to Opportunities
//             </span>

//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
//               Hi, I’m <span className="text-cyan-400">Akshat Saini</span>
//             </h1>

//             <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6 min-h-[36px]">
//               <Typewriter
//                 words={[
//                   'Full Stack Developer',
//                   'Tech Enthusiast',
//                   'Problem Solver',
//                   'Open Source Contributor',
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={60}
//                 deleteSpeed={40}
//                 delaySpeed={1500}
//               />
//             </h2>

//             <p className="text-gray-400 max-w-xl text-base sm:text-lg mb-8 mx-auto md:mx-0 leading-relaxed">
//               I create fast, secure, and scalable web applications. I love solving problems with clean architecture and modern UI.
//             </p>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
//               <a
//                 href="#contact"
//                 className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition"
//               >
//                 Let’s Connect
//               </a>
//               <a
//                 href="/Akshat_Kumar_Saini.pdf"
//                 download
//                 className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition"
//               >
//                 Download Resume
//               </a>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex gap-5 justify-center md:justify-start text-xl">
//               <a href="https://github.com/Akshatsainiaks" className="text-cyan-400 hover:text-white transition">
//                 <FaGithub />
//               </a>
//               <a href="https://www.linkedin.com/in/akshat-saini-0ba25924b/" className="text-cyan-400 hover:text-white transition">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* IMAGE SECTION */}
//           <div className="flex-1 flex justify-center mb-10 md:mb-0">
//             <div
//               onClick={() => setOpenImage(true)}
//               className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[5px] rounded-xl shadow-lg hover:shadow-cyan-400/40 transition cursor-pointer"
//             >
//               <img
//                 src={newprofile}
//                 alt="Profile"
//                 className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-lg border-4 border-[#1e293b]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Scroll Down Arrow */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <a
//             href="#about"
//             className="text-cyan-400 animate-bounce text-lg hover:text-white transition"
//           >
//             <FaChevronDown size={24} />
//           </a>
//         </div>
//       </section>

//       {/* IMAGE POPUP MODAL */}
//       {openImage && (
//         <div
//           onClick={() => setOpenImage(false)}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn"
//         >
//           <img
//             src={newprofile}
//             alt="Full"
//             className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border border-cyan-400/40 animate-zoomIn"
//           />
//         </div>
//       )}

//       {/* ANIMATIONS */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to   { opacity: 1; }
//           }
//           @keyframes zoomIn {
//             from { transform: scale(0.7); opacity: 0; }
//             to   { transform: scale(1); opacity: 1; }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.3s ease-out;
//           }
//           .animate-zoomIn {
//             animation: zoomIn 0.3s ease-out;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import newprofile from '../assets/akshat.JPG';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaChevronDown,
// } from 'react-icons/fa';

// const Home = () => {
//   const [openImage, setOpenImage] = useState(false);

//   // Close modal on ESC key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setOpenImage(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   return (
//     <>
//       {/* MAIN HERO SECTION */}
//       <section
//         id="home"
//         className="overflow-x-hidden w-full min-h-screen pt-24 md:pt-32 pb-12 flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
//       >
//         <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl w-full">
          
//           {/* TEXT SECTION */}
//           <div className="flex-1 text-center md:text-left">
//             <span className="inline-block text-sm text-cyan-400 bg-cyan-900/20 px-4 py-1 rounded-full mb-4 tracking-wide">
//               🚀 Open to Opportunities
//             </span>

//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
//               Hi, I’m <span className="text-cyan-400">Akshat Saini</span>
//             </h1>

//             <h2 className="text-xl sm:text-2xl text-gray-300 font-medium mb-6 min-h-[36px]">
//               <Typewriter
//                 words={[
//                   'Full Stack Developer',
//                   'Tech Enthusiast',
//                   'Problem Solver',
//                   'Open Source Contributor',
//                 ]}
//                 loop
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={60}
//                 deleteSpeed={40}
//                 delaySpeed={1500}
//               />
//             </h2>

//             <p className="text-gray-400 max-w-xl text-base sm:text-lg mb-8 mx-auto md:mx-0 leading-relaxed">
//               I create fast, secure, and scalable web applications. I love solving problems with clean architecture and modern UI.
//             </p>

//             {/* BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
//               <a
//                 href="#contact"
//                 className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition"
//               >
//                 Let’s Connect
//               </a>
//               <a
//                 href="/Akshat_Kumar_Saini.pdf"
//                 download
//                 className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition"
//               >
//                 Download Resume
//               </a>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex gap-5 justify-center md:justify-start text-xl">
//               <a href="https://github.com/Akshatsainiaks" className="text-cyan-400 hover:text-white transition">
//                 <FaGithub />
//               </a>
//               <a href="https://www.linkedin.com/in/akshat-saini-0ba25924b/" className="text-cyan-400 hover:text-white transition">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>

//           {/* IMAGE SECTION */}
//           <div className="flex-1 flex justify-center mb-10 md:mb-0">
//             <div
//               onClick={() => setOpenImage(true)}
//               className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[5px] rounded-xl shadow-lg hover:shadow-cyan-400/40 transition cursor-pointer"
//             >
//               <img
//                 src={newprofile}
//                 alt="Profile"
//                 className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 object-cover rounded-lg border-4 border-[#1e293b]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Scroll Down Arrow (DESKTOP ONLY) */}
//         <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <a
//             href="#about"
//             className="text-cyan-400 animate-bounce text-lg hover:text-white transition"
//           >
//             <FaChevronDown size={24} />
//           </a>
//         </div>
//       </section>

//       {/* IMAGE POPUP MODAL */}
//       {openImage && (
//         <div
//           onClick={() => setOpenImage(false)}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn"
//         >
//           <img
//             src={newprofile}
//             alt="Full"
//             className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border border-cyan-400/40 animate-zoomIn"
//           />
//         </div>
//       )}

//       {/* ANIMATIONS */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to   { opacity: 1; }
//           }
//           @keyframes zoomIn {
//             from { transform: scale(0.7); opacity: 0; }
//             to   { transform: scale(1); opacity: 1; }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.3s ease-out;
//           }
//           .animate-zoomIn {
//             animation: zoomIn 0.3s ease-out;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import newprofile from '../assets/akshat.JPG';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const [openImage, setOpenImage] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpenImage(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <section
        id="home"
        className="overflow-x-hidden w-full min-h-screen pt-24 md:pt-32 pb-12 flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-7xl w-full">

          {/* TEXT SECTION */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-sm text-cyan-400 bg-cyan-900/20 px-4 py-1 rounded-full mb-4 tracking-wide">
              🚀 Open to Opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
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

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a href="#contact" className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition">
                Let’s Connect
              </a>
              <a href="/Akshat_kumar_Saini_Resume.pdf" download className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition">
                Download Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 justify-center md:justify-start text-xl">
              <a href="https://github.com/Akshatsainiaks" className="text-cyan-400 hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akshat-saini-0ba25924b/" className="text-cyan-400 hover:text-white transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center mb-10 md:mb-0">
            <div
              onClick={() => setOpenImage(true)}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 p-[5px] rounded-xl shadow-lg hover:shadow-cyan-400/40 transition cursor-pointer"
            >
              <img
                src={newprofile}
                alt="Profile"
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 object-cover rounded-lg border-4 border-[#1e293b]"
              />
            </div>
          </div>
        </div>

        {/* Desktop-only Arrow */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="text-cyan-400 animate-bounce text-lg hover:text-white transition">
            <FaChevronDown size={24} />
          </a>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          onClick={() => setOpenImage(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn"
        >
          <img
            src={newprofile}
            alt="Full"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border border-cyan-400/40 animate-zoomIn"
          />
        </div>
      )}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
          @keyframes zoomIn { from {transform:scale(0.7);opacity:0;} to {transform:scale(1);opacity:1;} }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-zoomIn { animation: zoomIn 0.3s ease-out; }
        `}
      </style>
    </>
  );
};

export default Home;
