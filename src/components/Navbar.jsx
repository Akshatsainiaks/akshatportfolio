
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
//               href="/Akshat_kumar_Saini_Resume.pdf"
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
//               href="/Akshat_kumar_Saini_Resume.pdf"
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
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];
const RESUME = '/Akshat_kumar_Saini_Resume.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  // Close the mobile menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setIsOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const scrollProps = (item) => ({
    to: item.toLowerCase(),
    smooth: true,
    duration: 500,
    offset: -70,
    spy: true,
    onSetActive: () => setActive(item.toLowerCase()),
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 z-[1001]"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled || isOpen
            ? 'py-3 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-6 px-6 md:px-10">

          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="group cursor-pointer flex items-center gap-1 shrink-0"
            aria-label="Back to top"
          >
            <span className="text-2xl font-black tracking-tighter text-white">
              AKSHAT
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 group-hover:bg-violet-500 transition-colors duration-300"></span>
          </ScrollLink>

          {/* Desktop Nav — glass pill with sliding active highlight */}
          <ul className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = active === item.toLowerCase();
              return (
                <li key={item} className="relative">
                  <ScrollLink
                    {...scrollProps(item)}
                    className={`relative z-10 block cursor-pointer px-3 xl:px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item}
                  </ScrollLink>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            <a
              href={RESUME}
              download
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/40 active:scale-95"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Hamburger (mobile + tablet) */}
            <button
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white cursor-pointer"
            >
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45' : '-translate-y-[4px]'
                }`}
              />
              <span
                className={`absolute h-[2px] w-4 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45' : 'translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet Menu — full screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[999] bg-[#0a0a0c]/80 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.ul
              className="h-full flex flex-col justify-center gap-2 px-8 sm:px-16 pt-20 pb-32"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {navItems.map((item, i) => {
                const isActive = active === item.toLowerCase();
                return (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    <ScrollLink
                      {...scrollProps(item)}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 py-2 cursor-pointer"
                    >
                      <span className={`font-mono text-xs ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`text-3xl sm:text-4xl font-black tracking-tight transition-colors ${
                          isActive ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                        }`}
                      >
                        {item}
                      </span>
                    </ScrollLink>
                  </motion.li>
                );
              })}
            </motion.ul>

            <motion.div
              className="absolute bottom-0 inset-x-0 px-8 sm:px-16 pb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.35 } }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={RESUME}
                download
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg active:scale-95 transition-transform"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
