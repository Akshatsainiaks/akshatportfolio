// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f172a] text-slate-400 py-8 text-center border-t border-cyan-500/10">
//       <div className="flex justify-center gap-6 mb-4 text-2xl">
//         <a
//           href="https://github.com/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-cyan-400 transition"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://linkedin.com/in/yourusername"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-cyan-400 transition"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="mailto:yourmail@gmail.com"
//           className="hover:text-cyan-400 transition"
//         >
//           <FaEnvelope />
//         </a>
//       </div>
//       <p className="text-sm text-slate-500">
//         © {new Date().getFullYear()} <span className="text-white font-semibold">Akshat Saini</span>. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


// import React from 'react';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { Link as ScrollLink } from 'react-scroll';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-6 px-6 border-t border-cyan-500/10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
//         {/* Left */}
//         <div>
//           <h3 className="text-white font-bold text-xl mb-2">Akshat Saini</h3>
//           <p className="text-slate-400 mb-4">
//             Passionate Full Stack Developer crafting scalable solutions with modern technologies.
//           </p>
//           <div className="flex gap-4 text-xl text-slate-400">
//             <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
//               <FaLinkedin />
//             </a>
//             <a href="mailto:akshatsaini336@gmail.com" className="hover:text-cyan-400">
//               <FaEnvelope />
//             </a>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h4 className="text-white font-semibold text-sm uppercase mb-3">Navigation</h4>
//           <ul className="space-y-2 text-sm">
//             {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
//               <li key={item}>
//                 <ScrollLink
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   className="cursor-pointer hover:text-cyan-400"
//                 >
//                   {item}
//                 </ScrollLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="text-white font-semibold text-sm uppercase mb-3">Get in Touch</h4>
//           <p className="text-sm text-slate-400">Udaipur, Rajasthan, India</p>
//           <p className="text-sm text-slate-400">akshatsaini336@gmail.com</p>
//           <p className="text-xs text-slate-500 mt-1">Available for freelance opportunities</p>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-slate-700 mt-10 pt-4 text-center text-sm text-slate-500">
//         © {new Date().getFullYear()} <span className="text-white font-semibold">Akshat Saini</span>. All rights reserved.
//         <ScrollLink
//           to="home"
//           smooth={true}
//           duration={500}
//           offset={-70}
//           className="ml-4 text-slate-400 hover:text-cyan-400 cursor-pointer"
//         >
//           Back to Top ↑
//         </ScrollLink>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-12 pb-6 px-6 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        
        {/* Left */}
        <div>
          <h3 className="text-white font-bold text-xl mb-2">Akshat Saini</h3>
          <p className="text-slate-400 mb-4">
            Passionate Full Stack Developer crafting scalable solutions with modern technologies.
          </p>
          <div className="flex gap-4 text-xl text-slate-400">
            <a
              href="https://github.com/Akshatsainiaks"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/akshat-saini-0ba25924b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:akshatsaini336@gmail.com" className="hover:text-cyan-400">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-cyan-400"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase mb-3">Get in Touch</h4>
          <p className="text-sm text-slate-400">Udaipur, Rajasthan, India</p>
          <p className="text-sm text-slate-400">akshatsaini336@gmail.com</p>
          <p className="text-xs text-slate-500 mt-1">Available for freelance opportunities</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-10 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Akshat Saini</span>. All rights reserved.
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="ml-4 text-slate-400 hover:text-cyan-400 cursor-pointer"
        >
          Back to Top ↑
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;
