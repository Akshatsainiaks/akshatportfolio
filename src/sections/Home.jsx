
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
//                 href="/Akshat_Saini.pdf"
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
import newprofile from '../assets/akshat.JPG';
import { FaGithub, FaLinkedin, FaChevronDown, FaTimes } from 'react-icons/fa';

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
        className="relative overflow-x-hidden w-full min-h-screen pt-24 md:pt-32 pb-12 flex items-center justify-center px-6 bg-[#0a0a0c] text-white"
      >
        {/* Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -z-10" />

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 max-w-7xl w-full">

          {/* TEXT SECTION */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 transition-all hover:bg-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                Open to Opportunities
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-4 leading-tight tracking-tight">
              Hi, I’m <br className="md:hidden" />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Akshat Saini
              </span>
            </h1>

            <div className="text-xl sm:text-3xl text-slate-300 font-light mb-8 h-[40px]">
              <Typewriter
                words={['Full Stack Developer', 'DevOps Enthusiast', 'Problem Solver']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <p className="text-slate-400 max-w-lg text-lg mb-10 mx-auto md:mx-0 leading-relaxed font-light">
              {/* Building secure, scalable applications with a focus on  */}
              
              <span className="text-white font-medium">I have a strong interest in Full Stack development and DevOps, focusing on building secure, scalable applications and learning modern system  architecture. </span> 
             
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mb-10">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold transition-all hover:scale-105 active:scale-95"
              >
                Let’s Connect
              </a>

              <a
                href="/Akshat_Saini.pdf"
                download
                className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-xl font-bold hover:bg-white/10 transition-all hover:border-white/20"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 justify-center md:justify-start">
              {[
                { icon: <FaGithub />, link: "https://github.com/Akshatsainiaks", label: "GitHub" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/akshat-saini-0ba25924b/", label: "LinkedIn" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-300 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex-1 flex justify-center items-center">
            <div
              onClick={() => setOpenImage(true)}
              className="relative group cursor-pointer"
            >
              {/* Animated Ring Background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative p-2 bg-[#16161a] rounded-3xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={newprofile}
                  alt="Akshat Saini"
                  loading="lazy"
                  className="w-56 h-56 sm:w-80 sm:h-80 object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                />
              </div>

              {/* Decorative Tag */}
              {/* <div className="absolute -bottom-4 -right-4 bg-white text-black px-4 py-2 rounded-lg font-bold text-xs shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform">
                BASED IN INDIA 🇮🇳
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 font-bold">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>
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