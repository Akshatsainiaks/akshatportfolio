
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
      setScrolled(window.scrollY > 50);

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
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-cyan-400 z-[999] transition-all duration-300 overflow-x-hidden"
        style={{ width: `${scrollProgress}%`, maxWidth: "100%" }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 overflow-x-hidden transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg border-b border-cyan-500/20'
            : 'bg-gradient-to-r from-[#07182E] via-[#0A2540] to-[#07182E]/90'
        }`}
      >
        <div className="w-full flex justify-between items-center px-4 py-3">

          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-xl font-extrabold tracking-wide text-white cursor-pointer"
          >
            Akshat<span className="text-cyan-400"> Saini</span>
          </ScrollLink>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-cyan-400 border-b-2 border-cyan-400"
                  className="cursor-pointer text-white hover:text-cyan-300 transition-all pb-1"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}

            {/* Resume */}
            <a
              href="/Akshat_kumar_Saini_Resume.pdf"
              download
              className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md text-sm shadow hover:scale-105 transition"
            >
              Resume
            </a>
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#0a192f] border-t border-cyan-700/30 px-4 py-4 space-y-4 text-center overflow-x-hidden">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setIsOpen(false)}
                activeClass="text-cyan-400 font-semibold"
                className="block text-white hover:text-cyan-300 transition"
              >
                {item}
              </ScrollLink>
            ))}

            <a
              href="/Akshat_Kumar_Saini.pdf"
              download
              className="inline-block mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-md shadow hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
