
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


// import React, { useState, useEffect } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import newprofile from '../assets/akshat.JPG';
// import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';

// const Home = () => {
//   const [openImage, setOpenImage] = useState(false);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setOpenImage(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   return (
//     <>
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
//                   // 'Open Source Contributor',
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
//               <a href="#contact" className="px-6 py-3 bg-cyan-500 text-white rounded-md font-medium shadow hover:scale-105 transition">
//                 Let’s Connect
//               </a>
//               <a href="/Akshat_kumar_Saini_Resume_2.pdf" download className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition">
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

//         {/* Desktop-only Arrow */}
//         <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <a href="#about" className="text-cyan-400 animate-bounce text-lg hover:text-white transition">
//             <FaChevronDown size={24} />
//           </a>
//         </div>
//       </section>

//       {/* IMAGE MODAL */}
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
//           @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
//           @keyframes zoomIn { from {transform:scale(0.7);opacity:0;} to {transform:scale(1);opacity:1;} }
//           .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
//           .animate-zoomIn { animation: zoomIn 0.3s ease-out; }
//         `}
//       </style>
//     </>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from 'react';
// import { Typewriter } from 'react-simple-typewriter';
// import newprofile from '../assets/akshat.JPG';
// import { FaGithub, FaLinkedin, FaChevronDown, FaTimes } from 'react-icons/fa';

// const Home = () => {
//   const [openImage, setOpenImage] = useState(false);

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') setOpenImage(false);
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);

//   return (
//     <>
//       <section
//         id="home"
//         className="relative overflow-x-hidden w-full min-h-screen pt-24 md:pt-32 pb-12 flex items-center justify-center px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
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
//               I have a strong interest in Full Stack development and DevOps, focusing on building secure, scalable applications and learning modern system architecture.
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
//                 href="/Akshat_kumar_Saini_Resume.pdf"
//                 download
//                 className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-medium hover:bg-cyan-500/10 transition"
//               >
//                 Download Resume
//               </a>
//             </div>

//             {/* SOCIAL ICONS */}
//             <div className="flex gap-5 justify-center md:justify-start text-xl">
//               <a
//                 href="https://github.com/Akshatsainiaks"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-cyan-400 hover:text-white transition"
//                 aria-label="GitHub"
//               >
//                 <FaGithub />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/akshat-saini-0ba25924b/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-cyan-400 hover:text-white transition"
//                 aria-label="LinkedIn"
//               >
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
//                 alt="Akshat Saini profile"
//                 loading="lazy"
//                 className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 object-cover rounded-lg border-4 border-[#1e293b]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Desktop-only Arrow */}
//         <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <a
//             href="#about"
//             className="text-cyan-400 animate-bounce hover:text-white transition"
//             aria-label="Scroll to About"
//           >
//             <FaChevronDown size={24} />
//           </a>
//         </div>
//       </section>

//       {/* IMAGE MODAL */}
//       {openImage && (
//         <div
//           onClick={() => setOpenImage(false)}
//           className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn"
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setOpenImage(false)}
//             className="absolute top-6 right-6 text-white text-2xl cursor-pointer hover:text-cyan-400 transition"
//             aria-label="Close image"
//           >
//             <FaTimes />
//           </button>

//           {/* Image */}
//           <img
//             src={newprofile}
//             alt="Akshat Saini full profile"
//             onClick={(e) => e.stopPropagation()}
//             className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl border border-cyan-400/40 animate-zoomIn"
//           />
//         </div>
//       )}

//       {/* ANIMATIONS */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; }
//             to { opacity: 1; }
//           }
//           @keyframes zoomIn {
//             from { transform: scale(0.85); opacity: 0; }
//             to { transform: scale(1); opacity: 1; }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.25s ease-out;
//           }
//           .animate-zoomIn {
//             animation: zoomIn 0.25s ease-out;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Home;


//new final
import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import newprofile from '../assets/Hsection.webp';
import Tilt from '../components/Tilt';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaArrowRight, FaDownload } from 'react-icons/fa';

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const socials = [
  { icon: <FaGithub />, link: 'https://github.com/Akshatsainiaks', label: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/akshat-saini-0ba25924b/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, link: 'mailto:akshatsaini336@gmail.com', label: 'Email' },
];

const Home = () => {
  const [openImage, setOpenImage] = useState(false);
  const reduceMotion = useReducedMotion();

  // Mouse parallax for the background glows (-1 … 1)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 50, damping: 20 });
  const sy = useSpring(py, { stiffness: 50, damping: 20 });
  const glow1X = useTransform(sx, (v) => v * 40);
  const glow1Y = useTransform(sy, (v) => v * 40);
  const glow2X = useTransform(sx, (v) => v * -40);
  const glow2Y = useTransform(sy, (v) => v * -40);

  const onHeroMove = (e) => {
    if (reduceMotion) return;
    px.set((e.clientX / window.innerWidth) * 2 - 1);
    py.set((e.clientY / window.innerHeight) * 2 - 1);
  };

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
        onMouseMove={onHeroMove}
        className="relative overflow-hidden w-full min-h-screen pt-28 md:pt-32 pb-20 md:pb-24 flex items-center justify-center px-6 bg-[#0a0a0c] text-white"
      >
        {/* Ambient Background Glows */}
        <motion.div
          style={{ x: glow1X, y: glow1Y }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          style={{ x: glow2X, y: glow2Y }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20 max-w-7xl w-full">

          {/* TEXT SECTION */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-7xl font-black mb-5 leading-[1.05] tracking-tight"
            >
              Hi, I’m <br className="md:hidden" />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Akshat Saini
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="text-xl sm:text-3xl text-slate-300 font-light mb-6 h-[40px]"
            >
              <Typewriter
                words={['Software Engineer', 'Full Stack Developer', 'DevOps Enthusiast']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>

            <motion.p
              variants={item}
              className="text-slate-400 max-w-lg text-base sm:text-lg mb-10 mx-auto md:mx-0 leading-relaxed"
            >
              I build <span className="text-white font-medium">secure, scalable applications</span> with
              a strong focus on <span className="text-white font-medium">Full Stack development</span> and{' '}
              <span className="text-white font-medium">DevOps</span>, while continuously learning modern
              system architecture.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-70}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold cursor-pointer transition-all hover:bg-cyan-400 active:scale-95"
              >
                Let’s Connect
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </ScrollLink>
              <a
                href="/Akshat_kumar_Saini_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-xl font-bold hover:bg-white/10 transition-all hover:border-white/20 active:scale-95"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div variants={item} className="flex gap-4 justify-center md:justify-start">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target={social.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:-translate-y-1 transition-all duration-300 text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <div className="relative">
              {/* 3D orbit rings behind the photo */}
              <div className="absolute inset-0 pointer-events-none" style={{ perspective: 900 }}>
                <motion.div
                  className="absolute -inset-[22%] rounded-full border border-cyan-400/25"
                  style={{ rotateX: 72, rotateY: -12 }}
                  animate={reduceMotion ? undefined : { rotateZ: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_16px_4px_rgba(34,211,238,0.6)]" />
                </motion.div>
                <motion.div
                  className="absolute -inset-[14%] rounded-full border border-violet-500/25"
                  style={{ rotateX: 66, rotateY: 48 }}
                  animate={reduceMotion ? undefined : { rotateZ: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_14px_4px_rgba(139,92,246,0.6)]" />
                </motion.div>
              </div>

              {/* Photo — 3D tilt + animated gradient border */}
              <Tilt max={12} glare rounded="rounded-3xl">
                <div onClick={() => setOpenImage(true)} className="relative group cursor-pointer">
                  {/* Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />

                  <div className="relative p-[2px] rounded-3xl overflow-hidden">
                    {/* spinning conic border */}
                    <div
                      className="absolute -inset-[50%] animate-[spin_6s_linear_infinite] motion-reduce:animate-none"
                      style={{
                        background:
                          'conic-gradient(from 0deg, transparent 0deg, var(--color-cyan-400) 60deg, var(--color-violet-500) 120deg, transparent 180deg, transparent 360deg)',
                      }}
                    />
                    <div className="relative p-2 bg-[#16161a] rounded-[22px]">
                      <img
                        src={newprofile}
                        alt="Akshat Saini"
                        className="w-60 h-60 sm:w-80 sm:h-80 object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                        style={{ transform: 'translateZ(40px)' }}
                      />
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <ScrollLink
          to="about"
          smooth={true}
          duration={600}
          offset={-70}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll to About"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-bold group-hover:text-cyan-400 transition-colors">Scroll</span>
          <span className="relative w-5 h-8 rounded-full border border-white/15 flex justify-center">
            <motion.span
              className="absolute top-1.5 w-1 h-1.5 rounded-full bg-cyan-400"
              animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </ScrollLink>
      </section>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          onClick={() => setOpenImage(false)}
          className="fixed inset-0 bg-[#0a0a0ca0] backdrop-blur-xl flex justify-center items-center z-[9999] animate-fadeIn p-4"
        >
          <button
            onClick={() => setOpenImage(false)}
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition-all"
            aria-label="Close image"
          >
            <FaTimes />
          </button>
          <img
            src={newprofile}
            alt="Akshat Saini"
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 animate-zoomIn"
          />
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes zoomIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
          .animate-zoomIn { animation: zoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}
      </style>
    </>
  );
};

export default Home;
