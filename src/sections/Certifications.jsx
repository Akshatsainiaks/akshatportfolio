
// import React from 'react';

// const certifications = [
//   {
//     title: 'Foundations of Cybersecurity',
//     platform: 'Google • Coursera',
//     date: 'Feb 2024',
//     img: '/cert-cybersecurity.jpg',
//     link: 'https://coursera.org/verify/NTBCZ7H4TH6L',
//   },
//   {
//     title: 'Introduction to SQL',
//     platform: 'Great Learning',
//     date: 'Mar 2024',
//     img: '/sql.pdf',
//     link: '/sql.pdf',
//   },
//   {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/cert-sql2.jpg',
//     link: '/cert-sql2.pdf',
//   },

//    {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/cert-sql2.jpg',
//     link: '/cert-sql2.pdf',
//   },

//    {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/cert-sql2.jpg',
//     link: '/cert-sql2.pdf',
//   },

//    {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/cert-sql2.jpg',
//     link: '/cert-sql2.pdf',
//   },

//    {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/cert-sql2.jpg',
//     link: '/cert-sql2.pdf',
//   },
// ];

// const Certifications = () => {
//   return (
//     <section
//       id="certifications"
//       className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative"
//     >
//       {/* Optional Subtle Overlay */}
//       <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-5 pointer-events-none" />

//       <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-cyan-400">
//           Certifications <span className="ml-1">🎖️</span>
//         </h2>
//         <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//           A showcase of verified skills earned from global learning platforms.
//         </p>
//       </div>

//       {/* Scrollable Certificate Cards */}
//       <div className="overflow-x-auto relative z-10">
//         <div className="flex space-x-6 px-4 md:px-10 snap-x snap-mandatory scroll-smooth pb-4">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-[#1e293b] text-white rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-transform hover:-translate-y-1 border border-cyan-500/10"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               {/* Certificate Image */}
//               <div className="h-56 bg-[#0f172a] flex items-center justify-center overflow-hidden rounded-t-xl">
//                 <img
//                   src={cert.img}
//                   alt={cert.title}
//                   className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
//                 />
//               </div>

//               {/* Certificate Info */}
//               <div className="p-5">
//                 <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
//                 <p className="text-sm text-cyan-400">{cert.platform}</p>
//                 <p className="text-sm text-slate-400 mb-4">{cert.date}</p>
//                 <a
//                   href={cert.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block w-full text-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 hover:shadow transition"
//                 >
//                   View Certificate
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;



// import React from 'react';

// const certifications = [
//    {
//     title: 'Red Hat Certified System Administrator',
//     platform: 'Redhat',
//     date: 'Feb 2024',
//     img: '/Redhat.jpeg',
//     link: '/Redhat.pdf',
//   },
//   {
//     title: 'Foundations of Cybersecurity',
//     platform: 'Google • Coursera',
//     date: 'Feb 2024',
//     img: '/cybersecurity.jpg',
//     link: '/cybersecurity.pdf',
//   },
//   {
//     title: 'Introduction to SQL',
//     platform: 'Great Learning',
//     date: 'Mar 2024',
//     img: '/sql.jpg', // Replace PDF with a JPEG/PNG image thumbnail
//     link: '/sql.pdf',
//   },
//   {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/MERNgrras.jpg',
//     link: '/MERNgrras.pdf',
//   },
//   {
//     title: 'Machine Learning',
//     platform: 'IBM Nasscom',
//     date: 'Feb 2023',
//     img: '/mlcertificate.jpg',
//     link: '/mlcertificate.pdf',
//   },
//   // {
//   //   title: 'Backend Specialization',
//   //   platform: 'Grras Institute',
//   //   date: 'Apr 2024',
//   //   img: '/cert-sql2.jpg',
//   //   link: '/cert-sql2.pdf',
//   // },
// ];

// const Certifications = () => {
//   return (
//     <section
//       id="certifications"
//       className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative"
//     >
//       {/* Background overlay (optional stars) */}
//       <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-5 pointer-events-none" />

//       <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-cyan-400">
//           My Certifications <span role="img" aria-label="cap">🎓</span>
//         </h2>
//         <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//           A showcase of verified skills earned from global learning platforms.
//         </p>
//       </div>

//       {/* Horizontal scrollable card layout */}
//       <div className="overflow-x-auto relative z-10">
//         <div className="flex space-x-6 px-4 md:px-10 snap-x snap-mandatory scroll-smooth pb-4">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-[#1e293b] text-white rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-transform hover:-translate-y-1 border border-cyan-500/10"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               {/* Certificate Image */}
//               <div className="h-56 bg-[#0f172a] flex items-center justify-center overflow-hidden rounded-t-xl">
//                 <img
//                   src={cert.img}
//                   alt={cert.title}
//                   className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
//                 />
//               </div>

//               {/* Certificate Info */}
//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
//                 <p className="text-sm text-cyan-400">{cert.platform}</p>
//                 <p className="text-sm text-slate-400 mb-4">{cert.date}</p>
//                 <a
//                   href={cert.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-cyan-300 hover:underline"
//                 >
//                   Click to view certificate
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;


// import React from 'react';

// const certifications = [
//   {
//     title: 'Red Hat Certified System Administrator',
//     platform: 'Redhat',
//     date: 'Feb 2024',
//     img: '/Redhat.jpeg',
//     link: '/Redhat.pdf',
//   },
//   {
//     title: 'Foundations of Cybersecurity',
//     platform: 'Google • Coursera',
//     date: 'Feb 2024',
//     img: '/cybersecurity.jpg',
//     link: '/cybersecurity.pdf',
//   },
//   {
//     title: 'Introduction to SQL',
//     platform: 'Great Learning',
//     date: 'Mar 2024',
//     img: '/sql.jpg',
//     link: '/sql.pdf',
//   },
//   {
//     title: 'Full Stack Development',
//     platform: 'Grras Institute',
//     date: 'Apr 2024',
//     img: '/MERNgrras.jpg',
//     link: '/MERNgrras.pdf',
//   },
//   {
//     title: 'Machine Learning',
//     platform: 'IBM Nasscom',
//     date: 'Feb 2023',
//     img: '/mlcertificate.jpg',
//     link: '/mlcertificate.pdf',
//   },
// ];

// const Certifications = () => {
//   return (
//     <section
//       id="certifications"
//       className="overflow-hidden py-24 px-6 bg-gradient-to-br 
//       from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
//     >
//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-cyan-400">
//           My Certifications 🎓
//         </h2>
//         <p className="text-slate-300 text-lg max-w-2xl mx-auto">
//           A showcase of verified skills earned from global learning platforms.
//         </p>
//       </div>

//       {/* SCROLLABLE CARDS */}
//       <div className="overflow-x-auto scrollbar-none">
//         <div className="inline-flex space-x-6 px-4 md:px-10 snap-x snap-mandatory scroll-smooth pb-4">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="snap-center min-w-[260px] sm:min-w-[300px] md:min-w-[340px] 
//               bg-[#1e293b] text-white rounded-xl shadow-lg 
//               hover:shadow-cyan-500/20 transition-transform hover:-translate-y-1 
//               border border-cyan-500/10"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             >
//               {/* IMAGE */}
//               <div className="h-52 bg-[#0f172a] flex items-center justify-center overflow-hidden rounded-t-xl">
//                 <img
//                   src={cert.img}
//                   alt={cert.title}
//                   className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="p-5 text-center">
//                 <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
//                 <p className="text-sm text-cyan-400">{cert.platform}</p>
//                 <p className="text-sm text-slate-400 mb-4">{cert.date}</p>

//                 <a
//                   href={cert.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-sm text-cyan-300 hover:underline"
//                 >
//                   View Certificate
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

//final new
import React from 'react';
import { FaExternalLinkAlt, FaAward, FaFilePdf, FaEye } from 'react-icons/fa';

const certifications = [
  {
    title: 'Red Hat Certified System Administrator',
    platform: 'Redhat',
    date: 'Feb 2024',
    img: '/Redhat.jpeg',
    link: '/Redhat.pdf',
  },
  {
    title: 'Foundations of Cybersecurity',
    platform: 'Google • Coursera',
    date: 'Feb 2024',
    img: '/cybersecurity.jpg',
    link: '/cybersecurity.pdf',
  },
  {
    title: 'Introduction to SQL',
    platform: 'Great Learning',
    date: 'Mar 2024',
    img: '/sql.jpg',
    link: '/sql.pdf',
  },
  {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/MERNgrras.jpg',
    link: '/MERNgrras.pdf',
  },
  {
    title: 'Machine Learning',
    platform: 'IBM Nasscom',
    date: 'Feb 2023',
    img: '/mlcertificate.jpg',
    link: '/mlcertificate.pdf',
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-24 px-6 bg-[#0a0a0c] text-white"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] -z-10" />

      {/* HEADER - Simplified */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent uppercase">
          Certifications
        </h2>
      </div>

      {/* SCROLLABLE CARDS */}
      <div className="overflow-x-auto scrollbar-none">
        <div className="inline-flex space-x-8 px-4 md:px-20 snap-x snap-mandatory scroll-smooth pb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[400px] 
              bg-[#111113] rounded-[2rem] overflow-hidden
              border border-white/5 hover:border-cyan-500/30
              transition-all duration-500 group relative shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* IMAGE CONTAINER */}
              <div className="h-60 bg-[#070708] relative flex items-center justify-center overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  
                  className="w-full h-full object-contain p-8 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Modern Platform Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">
                    {cert.platform.split(' • ')[0]}
                  </span>
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="p-10 relative z-10 bg-gradient-to-b from-transparent to-black/20">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-black">Issue Date</span>
                    <span className="text-sm text-slate-300 font-medium">{cert.date}</span>
                  </div>

                  {/* Interaction Options */}
                  <div className="flex gap-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest py-3.5 bg-white text-black rounded-2xl hover:bg-cyan-400 transition-all duration-300"
                    >
                      <FaEye /> View
                    </a>
                    <a
                      href={cert.link}
                      download
                      className="flex items-center justify-center w-14 py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
                      title="Download PDF"
                    >
                      <FaFilePdf className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;