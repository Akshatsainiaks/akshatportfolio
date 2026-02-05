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
//             <a
//               href="https://github.com/Akshatsainiaks"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-cyan-400"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://linkedin.com/in/akshat-saini-0ba25924b/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-cyan-400"
//             >
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
//             {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
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

//new final
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0c] text-slate-400 pt-20 pb-10 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 bg-violet-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left relative z-10">
        
        {/* Brand Section */}
        <div className="md:col-span-2">
          <h3 className="text-white font-black text-2xl tracking-tighter mb-4 uppercase">
            Akshat<span className="text-cyan-400">.</span>Saini
          </h3>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm mb-6 font-light">
            Building the next generation of <span className="text-white font-medium">scalable applications</span> and 
            <span className="text-white font-medium"> automated systems</span> with a focus on modern DevOps and Full Stack engineering.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/Akshatsainiaks" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/in/akshat-saini-0ba25924b/" },
              { icon: <FaEnvelope />, link: "mailto:akshatsaini336@gmail.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6">Explore</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-sm cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6">Contact</h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Location</p>
              <p className="text-sm text-slate-300">Udaipur, Rajasthan, India</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Email</p>
              <p className="text-sm text-slate-300">akshatsaini336@gmail.com</p>
            </div>
            <div className="pt-2">
              {/* <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-400 font-bold uppercase tracking-tighter">
                Available for hire
              </span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 font-medium tracking-wide">
          © {new Date().getFullYear()} <span className="text-white">AKSHAT SAINI</span>. ALL RIGHTS RESERVED.
        </p>
        
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="group flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 cursor-pointer transition-all"
        >
          <span>BACK TO TOP</span>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-cyan-500/10 transition-all text-sm">↑</span>
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;