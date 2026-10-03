
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
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaFilePdf, FaTimes } from 'react-icons/fa';
import { Award, Calendar, Star, Maximize2, ShieldCheck } from 'lucide-react';
import Tilt from '../components/Tilt';

const EASE = [0.16, 1, 0.3, 1];

const featured = {
  title: 'Red Hat Certified System Administrator',
  short: 'RHCSA',
  platform: 'Red Hat',
  date: 'Feb 2024',
  img: '/Redhat.jpeg',
  link: '/Redhat.pdf',
  description: 'Industry-recognised certification validating hands-on Linux system administration skills.',
};

const certifications = [
  { title: 'Foundations of Cybersecurity', platform: 'Google • Coursera', date: 'Feb 2024', img: '/cybersecurity.jpg', link: '/cybersecurity.pdf' },
  { title: 'Introduction to SQL', platform: 'Great Learning', date: 'Mar 2024', img: '/sql.jpg', link: '/sql.pdf' },
  { title: 'Full Stack Development', platform: 'Grras Institute', date: 'Apr 2024', img: '/MERNgrras.jpg', link: '/MERNgrras.pdf' },
  { title: 'Machine Learning', platform: 'IBM Nasscom', date: 'Feb 2023', img: '/mlcertificate.jpg', link: '/mlcertificate.pdf' },
];

/* Certificate image — always fully visible, blurred fill behind portrait ones */
const CertImage = ({ src, alt, className = '' }) => (
  <div className={`relative overflow-hidden bg-[#070708] ${className}`}>
    <img src={src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30" />
    <img src={src} alt={alt} className="relative w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]" />
  </div>
);

const Certifications = () => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!preview) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setPreview(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [preview]);

  return (
    <section id="certifications" className="relative overflow-hidden py-28 px-6 bg-[#0a0a0c] text-white">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-amber-500/30 bg-amber-500/10">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">Credentials</span>
          </div>
          <h2 className="text-[2.6rem] sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
        </motion.div>

        {/* ---------- Featured: RHCSA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] p-[1.5px] overflow-hidden mb-8"
        >
          {/* animated gold border */}
          <div
            className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] motion-reduce:animate-none"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, var(--color-amber-400) 60deg, var(--color-red-500) 120deg, transparent 190deg, transparent 360deg)',
            }}
          />
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#0d0d0f] overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative grid md:grid-cols-[1fr_1.1fr] gap-10 items-center p-6 sm:p-10 lg:p-12">
              {/* info */}
              <div className="order-2 md:order-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
                  <Star size={12} className="fill-current" /> Top Credential
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                    <ShieldCheck size={22} />
                  </span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tight">{featured.short}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">{featured.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{featured.description}</p>
                <div className="flex items-center gap-5 text-sm mb-8">
                  <span className="text-slate-300 font-semibold">{featured.platform}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={14} /> {featured.date}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-amber-400 transition-colors active:scale-95"
                  >
                    <FaEye /> View Certificate
                  </a>
                  <a
                    href={featured.link}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-colors active:scale-95"
                  >
                    <FaFilePdf /> Download PDF
                  </a>
                </div>
              </div>

              {/* certificate in 3D */}
              <div className="order-1 md:order-2">
                <Tilt max={10} scale={1.02} glare rounded="rounded-2xl">
                  <button
                    onClick={() => setPreview(featured)}
                    className="group relative block w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] cursor-zoom-in"
                    aria-label="Open RHCSA certificate"
                  >
                    <div className="relative aspect-[1.42] bg-[#ffffff]">
                      <img src={featured.img} alt={featured.title} className="w-full h-full object-contain" />
                      {/* sheen sweep */}
                      <motion.div
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                        initial={{ left: '-40%' }}
                        whileInView={{ left: '130%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.6 }}
                      />
                    </div>
                    <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} />
                    </span>
                  </button>
                </Tilt>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---------- Other certificates ---------- */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1200 }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className="h-full"
            >
              <Tilt max={8} scale={1.02} glare rounded="rounded-[1.75rem]" className="h-full">
                <div className="group h-full flex flex-col rounded-[1.75rem] bg-[#111113] border border-white/5 hover:border-cyan-500/30 overflow-hidden transition-colors duration-500">
                  <button
                    onClick={() => setPreview(cert)}
                    className="relative block cursor-zoom-in"
                    aria-label={`Open ${cert.title} certificate`}
                  >
                    <CertImage src={cert.img} alt={cert.title} className="aspect-[4/3]" />
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-xl px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {cert.platform.split(' • ')[0]}
                    </span>
                    <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={14} />
                    </span>
                  </button>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-start gap-2.5 mb-4">
                      <Award size={18} className="mt-0.5 shrink-0 text-amber-400" />
                      <h3 className="font-bold text-white leading-snug">{cert.title}</h3>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={12} /> {cert.date}
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${cert.title}`}
                          title="View"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-black hover:bg-cyan-400 hover:border-cyan-400 transition-colors"
                        >
                          <FaEye size={13} />
                        </a>
                        <a
                          href={cert.link}
                          download
                          aria-label={`Download ${cert.title} PDF`}
                          title="Download PDF"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <FaFilePdf size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ---------- Preview lightbox ---------- */}
      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-[#0a0a0ce0] backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            style={{ perspective: 1200 }}
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-red-500 transition-colors cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
            <motion.img
              src={preview.img}
              alt={preview.title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[75vh] rounded-2xl shadow-2xl border border-white/10 bg-[#ffffff]"
              initial={{ opacity: 0, rotateX: -15, scale: 0.92 }}
              animate={{ opacity: 1, rotateX: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, ease: EASE }}
            />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
              <span className="text-white font-bold mr-2">{preview.title}</span>
              <a
                href={preview.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-cyan-400 transition-colors"
              >
                <FaEye /> Open PDF
              </a>
              <a
                href={preview.link}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-colors"
              >
                <FaFilePdf /> Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
