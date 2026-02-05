
// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const navItems = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolledPercent = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolledPercent);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999] transition-all duration-300"
//         style={{ width: `${scrollProgress}%` }}
//       />

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
//             : 'bg-gradient-to-r from-[#07182E] via-[#0A2540] to-[#07182E]/90'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
//           {/* Logo */}
//           <ScrollLink
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="text-xl font-extrabold tracking-wide text-white cursor-pointer"
//           >
//             Akshat<span className="text-cyan-400"> Saini</span>
//           </ScrollLink>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <ScrollLink
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   spy={true}
//                   activeClass="text-cyan-400 border-b-2 border-cyan-400"
//                   className="cursor-pointer text-white hover:text-cyan-300 transition-all pb-1"
//                 >
//                   {item}
//                 </ScrollLink>
//               </li>
//             ))}

//             {/* Resume Button */}
//             <a
//               href="/Akshat_Kumar_Saini.pdf"
//               download
//               className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md text-sm shadow hover:scale-105 transition"
//             >
//               Resume
//             </a>
//           </ul>

//           {/* Mobile Toggle */}
//           <div className="md:hidden text-white">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0a192f] border-t border-cyan-700/30 px-4 py-4 space-y-4 text-center">
//             {navItems.map((item) => (
//               <ScrollLink
//                 key={item}
//                 to={item.toLowerCase()}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 onClick={() => setIsOpen(false)}
//                 activeClass="text-cyan-400 font-semibold"
//                 className="block text-white hover:text-cyan-300 transition"
//               >
//                 {item}
//               </ScrollLink>
//             ))}

//             <a
//               href="/Akshat_Kumar_Saini.pdf"
//               download
//               className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-md shadow hover:scale-105 transition"
//             >
//               Download Resume
//             </a>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolledPercent = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolledPercent);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999] transition-all duration-300"
//         style={{ width: `${scrollProgress}%` }}
//       />

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
//             : 'bg-gradient-to-r from-[#07182E] via-[#0A2540] to-[#07182E]/90'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

//           {/* Logo */}
//           <ScrollLink
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="text-xl font-extrabold tracking-wide text-white cursor-pointer"
//           >
//             Akshat<span className="text-cyan-400"> Saini</span>
//           </ScrollLink>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <ScrollLink
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   spy={true}
//                   activeClass="text-cyan-400 border-b-2 border-cyan-400"
//                   className="cursor-pointer text-white hover:text-cyan-300 transition-all pb-1"
//                 >
//                   {item}
//                 </ScrollLink>
//               </li>
//             ))}

//             {/* Resume Button */}
//             <a
//               href="/Akshat_Kumar_Saini.pdf"
//               download
//               className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md text-sm shadow hover:scale-105 transition"
//             >
//               Resume
//             </a>
//           </ul>

//           {/* Mobile Toggle */}
//           <div className="md:hidden text-white">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0a192f] border-t border-cyan-700/30 px-4 py-4 space-y-4 text-center">
//             {navItems.map((item) => (
//               <ScrollLink
//                 key={item}
//                 to={item.toLowerCase()}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 onClick={() => setIsOpen(false)}
//                 activeClass="text-cyan-400 font-semibold"
//                 className="block text-white hover:text-cyan-300 transition"
//               >
//                 {item}
//               </ScrollLink>
//             ))}

//             <a
//               href="/Akshat_Kumar_Saini.pdf"
//               download
//               className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-md shadow hover:scale-105 transition"
//             >
//               Download Resume
//             </a>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolledPercent = (scrollTop / docHeight) * 100;
//       setScrollProgress(scrolledPercent);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Scroll Progress Bar */}
//       <div
//         className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999] transition-all duration-300 overflow-x-hidden"
//         style={{ width: `${scrollProgress}%`, maxWidth: "100%" }}
//       />

//       <nav
//         className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${
//           scrolled
//             ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
//             : 'bg-gradient-to-r from-[#07182E] via-[#0A2540] to-[#07182E]/90'
//         }`}
//       >
//         <div className="w-full flex justify-between items-center px-4 py-3">

//           {/* Logo */}
//           <ScrollLink
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="text-xl font-extrabold tracking-wide text-white cursor-pointer"
//           >
//             Akshat<span className="text-cyan-400"> Saini</span>
//           </ScrollLink>

//           {/* Desktop Nav */}
//           <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <ScrollLink
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   spy={true}
//                   activeClass="text-cyan-400 border-b-2 border-cyan-400"
//                   className="cursor-pointer text-white hover:text-cyan-300 transition-all pb-1"
//                 >
//                   {item}
//                 </ScrollLink>
//               </li>
//             ))}

//             {/* Resume */}
//             <a
//               href="/Akshat_Saini.pdf"
//               download
//               className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md text-sm shadow hover:scale-105 transition"
//             >
//               Resume
//             </a>
//           </ul>

//           {/* Mobile Toggle */}
//           <div className="md:hidden text-white">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0a192f] border-t border-cyan-700/30 px-4 py-4 space-y-4 text-center overflow-x-hidden">
//             {navItems.map((item) => (
//               <ScrollLink
//                 key={item}
//                 to={item.toLowerCase()}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 spy={true}
//                 onClick={() => setIsOpen(false)}
//                 activeClass="text-cyan-400 font-semibold"
//                 className="block text-white hover:text-cyan-300 transition"
//               >
//                 {item}
//               </ScrollLink>
//             ))}

//             <a
//               href="/Akshat_Saini.pdf"
//               download
//               className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-md shadow hover:scale-105 transition"
//             >
//               Download Resume
//             </a>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// final new
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Refined Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 z-[1000] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10">

          {/* Logo with Modern Typography */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="group cursor-pointer flex items-center gap-1"
          >
            <span className="text-2xl font-black tracking-tighter text-white">
              AKSHAT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 group-hover:bg-violet-500 transition-colors duration-300"></span>
          </ScrollLink>

          {/* Desktop Nav - Clean & Minimal */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="!text-cyan-400"
                  className="relative cursor-pointer text-[13px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all duration-300 pb-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              </li>
            ))}

            {/* Premium Resume Button */}
            <a
              href="/Akshat_Saini.pdf"
              download
              className="ml-4 px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/40 active:scale-95"
            >
              Resume
            </a>
          </ul>

          {/* Mobile Toggle with Animated Container */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay Style */}
        <div 
          className={`fixed inset-x-0 top-[60px] md:hidden transition-all duration-500 ease-in-out transform ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
          }`}
        >
          <div className="mx-4 bg-[#0d0d0f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 shadow-2xl">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setIsOpen(false)}
                activeClass="text-cyan-400 font-black scale-110"
                className="text-lg font-bold tracking-widest uppercase text-white hover:text-cyan-400 transition-all"
              >
                {item}
              </ScrollLink>
            ))}

            <div className="w-full h-[1px] bg-white/5 my-2"></div>

            <a
              href="/Akshat_Saini.pdf"
              download
              className="w-full text-center py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-black uppercase tracking-widest rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;