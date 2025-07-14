
import React from 'react';

const certifications = [
  {
    title: 'Foundations of Cybersecurity',
    platform: 'Google • Coursera',
    date: 'Feb 2024',
    img: '/cert-cybersecurity.jpg',
    link: 'https://coursera.org/verify/NTBCZ7H4TH6L',
  },
  {
    title: 'Introduction to SQL',
    platform: 'Great Learning',
    date: 'Mar 2024',
    img: '/cert-sql.jpg',
    link: '/cert-sql.pdf',
  },
  {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/cert-sql2.jpg',
    link: '/cert-sql2.pdf',
  },

   {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/cert-sql2.jpg',
    link: '/cert-sql2.pdf',
  },

   {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/cert-sql2.jpg',
    link: '/cert-sql2.pdf',
  },

   {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/cert-sql2.jpg',
    link: '/cert-sql2.pdf',
  },

   {
    title: 'Full Stack Development',
    platform: 'Grras Institute',
    date: 'Apr 2024',
    img: '/cert-sql2.jpg',
    link: '/cert-sql2.pdf',
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative"
    >
      {/* Optional Subtle Overlay */}
      <div className="absolute inset-0 bg-[url('/stars-bg.svg')] bg-cover opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-cyan-400">
          Certifications <span className="ml-1">🎖️</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          A showcase of verified skills earned from global learning platforms.
        </p>
      </div>

      {/* Scrollable Certificate Cards */}
      <div className="overflow-x-auto relative z-10">
        <div className="flex space-x-6 px-4 md:px-10 snap-x snap-mandatory scroll-smooth pb-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px] bg-[#1e293b] text-white rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-transform hover:-translate-y-1 border border-cyan-500/10"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Certificate Image */}
              <div className="h-56 bg-[#0f172a] flex items-center justify-center overflow-hidden rounded-t-xl">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Certificate Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-cyan-400">{cert.platform}</p>
                <p className="text-sm text-slate-400 mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:scale-105 hover:shadow transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
