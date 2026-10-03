
// import React from 'react';
// import project1 from '../assets/project1.png';
// import project2 from '../assets/project2.png';

// const projects = [
//   {
//     title: 'Tic Tac Toe Game',
//     description: 'A simple and interactive tic tac toe game built using vanilla web tech.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'Responsive developer portfolio with animations, project showcase, contact form, and smooth scroll navigation.',
//     tech: ['React', 'Tailwind', 'AOS'],
//     github: 'https://github.com/yourusername/portfolio',
//     live: 'https://yourportfolio.netlify.app',
//     image: project2,
//   },
//   {
//     title: 'Todo App with Auth',
//     description: 'Todo app with user authentication, JWT, and MongoDB backend. Includes dark mode and filters.',
//     tech: ['React', 'Express', 'MongoDB', 'JWT'],
//     github: 'https://github.com/yourusername/todo-auth-app',
//     live: 'https://yourtodoapp.netlify.app',
//     image: project2,
//   },
//     {
//     title: 'Todo App with Auth',
//     description: 'Todo app with user authentication, JWT, and MongoDB backend. Includes dark mode and filters.',
//     tech: ['React', 'Express', 'MongoDB', 'JWT'],
//     github: 'https://github.com/yourusername/todo-auth-app',
//     live: 'https://yourtodoapp.netlify.app',
//     image: project2,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 flex flex-col items-center"
//     >
//       <div className="max-w-6xl w-full mx-auto text-center mb-16" data-aos="fade-up">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       <div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
//         data-aos="fade-up"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300 overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             {/* Project Image */}
//             <img
//               src={project.image}
//               alt={`${project.title} preview`}
//               className="w-full h-40 object-cover rounded-t-xl"
//             />

//             {/* Card Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-slate-400 text-sm mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from 'react';
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';


// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description: 'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },
//   // {
//   //   title: 'Todo App with Auth',
//   //   description: 'Todo app with user authentication, JWT, and MongoDB backend. Includes dark mode and filters.',
//   //   tech: ['React', 'Express', 'MongoDB', 'JWT'],
//   //   github: 'https://github.com/yourusername/todo-auth-app',
//   //   live: 'https://yourtodoapp.netlify.app',
//   //   image: project2,
//   // },
//   {
//     title: 'Weather App',
//     description: 'A responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API, providing real-time forecasts with a clean UI.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },

//    {
//     title: 'Tic Tac Toe Game',
//     description: 'A simple and interactive tic tac toe game built using HTML/CSS Javascript web tech.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 flex flex-col items-center"
//     >
//       <div className="max-w-6xl w-full mx-auto text-center mb-16" data-aos="fade-up">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
//         data-aos="fade-up"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300 overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             {/* Project Image */}
//             <img
//               src={project.image}
//               alt={`${project.title} preview`}
//               className="w-full h-40 object-cover rounded-t-xl"
//             />

//             {/* Card Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-slate-400 text-sm mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All Projects CTA */}
//       <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             className="w-5 h-5"
//           >
//             <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 008.027 10.947c.586.108.8-.253.8-.563 0-.278-.01-1.017-.016-1.996-3.27.711-3.958-1.577-3.958-1.577-.534-1.358-1.305-1.72-1.305-1.72-1.066-.73.082-.715.082-.715 1.18.083 1.803 1.212 1.803 1.212 1.048 1.797 2.75 1.278 3.42.976.107-.76.411-1.278.748-1.572-2.61-.297-5.354-1.305-5.354-5.812 0-1.284.46-2.332 1.214-3.153-.122-.297-.527-1.492.114-3.112 0 0 .987-.316 3.233 1.204a11.26 11.26 0 012.946-.396c1 .005 2.007.135 2.947.396 2.244-1.52 3.23-1.204 3.23-1.204.643 1.62.238 2.815.117 3.112.756.82 1.213 1.868 1.213 3.153 0 4.519-2.748 5.512-5.367 5.804.423.364.801 1.082.801 2.183 0 1.576-.014 2.846-.014 3.232 0 .313.21.676.812.561A11.502 11.502 0 0023.5 12c0-6.353-5.147-11.5-11.5-11.5z" />
//           </svg>
//           View All Projects on GitHub
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },

//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API, providing real-time forecasts with a clean UI.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },

//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="overflow-x-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 flex flex-col items-center"
//     >
//       {/* Heading */}
//       <div
//         className="max-w-6xl w-full mx-auto text-center mb-16"
//         data-aos="fade-up"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
//         data-aos="fade-up"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300 overflow-hidden"
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-44 sm:h-48 object-cover rounded-t-xl"
//             />

//             {/* Card Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-slate-400 text-sm mb-4">
//                 {project.description}
//               </p>

//               {/* Tech Pills */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All CTA */}
//       <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             className="w-5 h-5"
//           >
//             <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 008.027 10.947c.586.108.8-.253.8-.563 0-.278-.01-1.017-.016-1.996-3.27.711-3.958-1.577-3.958-1.577-.534-1.358-1.305-1.72-1.305-1.72-1.066-.73.082-.715.082-.715 1.18.083 1.803 1.212 1.803 1.212 1.048 1.797 2.75 1.278 3.42.976.107-.76.411-1.278.748-1.572-2.61-.297-5.354-1.305-5.354-5.812 0-1.284.46-2.332 1.214-3.153-.122-.297-.527-1.492.114-3.112 0 0 .987-.316 3.233 1.204a11.26 11.26 0 012.946-.396c1 .005 2.007.135 2.947.396 2.244-1.52 3.23-1.204 3.23-1.204.643 1.62.238 2.815.117 3.112.756.82 1.213 1.868 1.213 3.153 0 4.519-2.748 5.512-5.367 5.804.423.364.801 1.082.801 2.183 0 1.576-.014 2.846-.014 3.232 0 .313.21.676.812.561A11.502 11.502 0 0023.5 12c0-6.353-5.147-11.5-11.5-11.5z" />
//           </svg>
//           View All Projects on GitHub
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;



// import React from 'react';
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },

//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API, providing real-time forecasts.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },

//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="
//         relative 
//         overflow-x-hidden 
//         overflow-y-visible 
//         bg-gradient-to-br 
//         from-[#0f172a] via-[#1e293b] to-[#0f172a] 
//         text-white 
//         px-6 
//         py-24 
//         flex 
//         flex-col 
//         items-center
//       "
//     >
//       {/* Heading */}
//       <div
//         className="max-w-6xl w-full mx-auto text-center mb-16"
//         data-aos="fade-up"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
//         data-aos="fade-up"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="
//               bg-[#1e293b] 
//               border border-cyan-500/10 
//               rounded-xl 
//               shadow-md 
//               hover:shadow-cyan-500/20 
//               hover:-translate-y-1 
//               transition 
//               duration-300 
//               overflow-hidden
//             "
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-44 sm:h-48 object-cover rounded-t-xl"
//             />

//             {/* Card Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-slate-400 text-sm mb-4">
//                 {project.description}
//               </p>

//               {/* Tech Pills */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View All CTA */}
//       <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//             className="w-5 h-5"
//           >
//             <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 008.027 10.947c.586.108.8-.253.8-.563 0-.278-.01-1.017-.016-1.996-3.27.711-3.958-1.577-3.958-1.577-.534-1.358-1.305-1.72-1.305-1.72-1.066-.73.082-.715.082-.715 1.18.083 1.803 1.212 1.803 1.212 1.048 1.797 2.75 1.278 3.42.976.107-.76.411-1.278.748-1.572-2.61-.297-5.354-1.305-5.354-5.812 0-1.284.46-2.332 1.214-3.153-.122-.297-.527-1.492.114-3.112 0 0 .987-.316 3.233 1.204a11.26 11.26 0 012.946-.396c1 .005 2.007.135 2.947.396 2.244-1.52 3.23-1.204 3.23-1.204.643 1.62.238 2.815.117 3.112.756.82 1.213 1.868 1.213 3.153 0 4.519-2.748 5.512-5.367 5.804.423.364.801 1.082.801 2.183 0 1.576-.014 2.846-.014 3.232 0 .313.21.676.812.561A11.502 11.502 0 0023.5 12c0-6.353-5.147-11.5-11.5-11.5z" />
//           </svg>
//           View All Projects on GitHub
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },

//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API, providing real-time forecasts.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },

//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="
//         relative
//         overflow-x-hidden
//         bg-gradient-to-br 
//         from-[#0f172a] via-[#1e293b] to-[#0f172a]
//         text-white
//         px-6
//         py-24
//         flex 
//         flex-col 
//         items-center
//       "
//     >
//       {/* Heading */}
//       <div
//         className="max-w-6xl w-full mx-auto text-center mb-16"
//         data-aos="fade-up"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div
//         className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
//         data-aos="fade-up"
//       >
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="
//               bg-[#1e293b]
//               border border-cyan-500/10 
//               rounded-xl
//               shadow-md
//               hover:shadow-cyan-500/20
//               hover:-translate-y-1
//               transition 
//               duration-300
//               overflow-hidden
//             "
//             data-aos="zoom-in"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-44 sm:h-48 object-cover rounded-t-xl"
//             />

//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-slate-400 text-sm mb-4">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           View All Projects on GitHub
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },
//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS and OpenWeatherMap API.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },
//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="
//         w-full
//         bg-gradient-to-br 
//         from-[#0f172a] via-[#1e293b] to-[#0f172a]
//         text-white 
//         px-6 
//         py-24 
//       "
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="
//               bg-[#1e293b] 
//               border border-cyan-500/10 
//               rounded-xl 
//               shadow-md 
//               hover:shadow-cyan-500/20 
//               hover:-translate-y-1 
//               transition 
//               duration-300 
//               overflow-hidden
//             "
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-44 sm:h-48 object-cover"
//             />

//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">
//                 {project.title}
//               </h3>

//               <p className="text-slate-400 text-sm mb-4">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center text-sm">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-400 font-medium hover:underline"
//                 >
//                   🔗 Live Demo
//                 </a>

//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-slate-300 font-medium hover:underline"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           View All Projects on GitHub
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';

// // Existing project images
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';

// // Auth system images
// import auth1 from '../assets/auth1.png';
// import auth2 from '../assets/auth2.png';
// import auth3 from '../assets/auth3.png';
// import auth4 from '../assets/auth4.png';
// import auth5 from '../assets/auth5.png';
// import auth6 from '../assets/auth6.png';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: ['React.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     image: project3,
//   },
//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS and OpenWeatherMap API.',
//     tech: ['React', 'Vite', 'TailwindCSS'],
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     image: project2,
//   },
//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     image: project1,
//   },
//   {
//     title: 'Auth System – Redis & ClickHouse (Docker)',
//     description:
//       'Authentication system built using Node.js with Redis for session management and ClickHouse for high-performance analytics. Fully containerized using Docker Compose and running on a Red Hat Linux VM (VMware).',
//     tech: [
//       'Node.js',
//       'Redis',
//       'ClickHouse',
//       'Docker',
//       'Docker Compose',
//       'RHEL (VM)',
//     ],
//     note: 'Runs locally on Red Hat VM (Not Live)',
//     images: [auth1, auth2, auth3, auth5, auth4, auth6],
//   },
// ];

// const Projects = () => {
//   const [modalImages, setModalImages] = useState(null);
//   const [modalIndex, setModalIndex] = useState(0);

//   const nextImage = () => {
//     setModalIndex((prev) =>
//       prev === modalImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setModalIndex((prev) =>
//       prev === 0 ? modalImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="projects"
//       className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24"
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {projects.map((project, index) => {
//           const [current, setCurrent] = useState(0);

//           return (
//             <div
//               key={index}
//               className="bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 transition overflow-hidden"
//             >
//               {/* Image */}
//               <div className="relative cursor-pointer">
//                 <img
//                   src={project.images ? project.images[current] : project.image}
//                   alt={project.title}
//                   onClick={() => {
//                     if (project.images) {
//                       setModalImages(project.images);
//                       setModalIndex(current);
//                     }
//                   }}
//                   className="w-full h-44 sm:h-48 object-cover hover:opacity-90"
//                 />

//                 {project.images && (
//                   <>
//                     <button
//                       onClick={() =>
//                         setCurrent(
//                           current === 0
//                             ? project.images.length - 1
//                             : current - 1
//                         )
//                       }
//                       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 rounded"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={() =>
//                         setCurrent(
//                           current === project.images.length - 1
//                             ? 0
//                             : current + 1
//                         )
//                       }
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 rounded"
//                     >
//                       ›
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Dots */}
//               {project.images && (
//                 <div className="flex justify-center gap-1 mt-2">
//                   {project.images.map((_, i) => (
//                     <span
//                       key={i}
//                       className={`w-2 h-2 rounded-full ${
//                         i === current ? 'bg-cyan-400' : 'bg-slate-500'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               )}

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-slate-400 text-sm mb-3">
//                   {project.description}
//                 </p>

//                 {project.note && (
//                   <p className="text-yellow-400 text-xs mb-4">
//                     ⚠ {project.note}
//                   </p>
//                 )}

//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           View All Projects on GitHub
//         </a>
//       </div>

//       {/* Image Modal */}
//       {modalImages && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//           {/* Close */}
//           <button
//             onClick={() => setModalImages(null)}
//             className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
//           >
//             ✕
//           </button>

//           {/* Previous */}
//           <button
//             onClick={prevImage}
//             className="absolute left-6 text-white text-4xl cursor-pointer select-none"
//           >
//             ‹
//           </button>

//           {/* Image */}
//           <img
//             src={modalImages[modalIndex]}
//             alt="Preview"
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
//           />

//           {/* Next */}
//           <button
//             onClick={nextImage}
//             className="absolute right-6 text-white text-4xl cursor-pointer select-none"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;


// import React, { useState } from 'react';

// // Existing project images
// import project1 from '../assets/project1.jpeg';
// import project2 from '../assets/project2.jpeg';
// import project3 from '../assets/project3.jpeg';
// import fixora from '../assets/fixora.png';
// // Auth system images
// import auth1 from '../assets/auth1.png';
// import auth2 from '../assets/auth2.png';
// import auth3 from '../assets/auth3.png';
// import auth4 from '../assets/auth4.png';
// import auth5 from '../assets/auth5.png';
// import auth6 from '../assets/auth6.png';
// import auth7 from '../assets/auth7.png'

// // Currently working project images
// import current1 from '../assets/current1.png';
// import current2 from '../assets/current2.png';

// const projects = [
//   {
//     title: 'AI SaaS Web App – Full Stack PERN Project',
//     description:
//       'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
//     tech: [
//       'React.js',
//       'Tailwind CSS',
//       'Node.js',
//       'PostgreSQL',
//       'Clerk',
//       'Neon Database',
//       'API',
//     ],
//     live: 'https://ai-project-brown-gamma.vercel.app/',
//     github: 'https://github.com/Akshatsainiaks/AiProject',
//     image: project3,
//   },
//   {
//     title: 'Weather App',
//     description:
//       'A responsive weather application built with React, Tailwind CSS and OpenWeatherMap API.',
//     tech: ['React', 'Vite', 'TailwindCSS', 'Weather API'],
//     live: 'https://weather-app-akshat-project.vercel.app/',
//     github: 'https://github.com/Akshatsainiaks/WeatherApp',
//     image: project2,
//   },
//   {
//     title: 'Tic Tac Toe Game',
//     description:
//       'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
//     tech: ['HTML', 'CSS', 'JavaScript'],
//     live: 'https://tic-tac-toe-akshat-project.vercel.app/',
//     github: 'https://github.com/Akshatsainiaks/TicTacToe',
//     image: project1,
//   },
//   {
//     title: 'Auth System – Redis & ClickHouse (Docker)',
//     description:
//       'Authentication system built using Node.js with Redis for session management and ClickHouse for high-performance analytics. Fully containerized using Docker Compose and running on a Red Hat Linux VM (VMware).',
//     tech: [
//       'Node.js',
//       'Redis',
//       'ClickHouse',
//       'Docker',
//       'Docker Compose',
//       'RHEL (VM)',
//     ],
//     note: 'Runs locally on Red Hat VM (Not Live)',
//     images: [auth1, auth2, auth3, auth5, auth4, auth6, auth7],
//   },
//   {
//     title: 'AI Interview Platform & Question Bank (In Progress)',
//     description:
//       'Currently working on an AI-powered interview preparation platform and question bank designed to help students learn and practice in an easy and structured way.',
//     tech: ['React', 'Node.js', 'MongoDB', 'OpenAPI', 'JWT'],
//     note: 'Currently under development',
//     images: [current1, current2],
//   },
//   {
//   title: 'Fixora – Ticket & Issue Management System',
//   description:
//     'A full-stack ticket and issue management system with role-based access, project-wise tickets, and developer assignment. Built for learning real-world system design and workflows.',
//   tech: [
//     'React',
//     'Tailwind CSS',
//     'Node.js',
//     'Express.js',
//     'MongoDB',
//     'JWT',
//   ],
//   live: 'https://fixora-tawny.vercel.app/',
//   github: 'https://github.com/Akshatsainiaks/Fixora', // change if repo name differs
//   image: fixora, // 👉 replace with a Fixora screenshot when ready
// }
// ];

// const Projects = () => {
//   const [modalImages, setModalImages] = useState(null);
//   const [modalIndex, setModalIndex] = useState(0);

//   const nextImage = () => {
//     setModalIndex((prev) =>
//       prev === modalImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setModalIndex((prev) =>
//       prev === 0 ? modalImages.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="projects"
//       className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24"
//     >
//       {/* Heading */}
//       <div className="max-w-6xl mx-auto text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           My Projects <span className="text-cyan-400">💡</span>
//         </h2>
//         <p className="text-slate-300 text-lg">
//           Some of the things I've built recently.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {projects.map((project, index) => {
//           const [current, setCurrent] = useState(0);

//           return (
//             <div
//               key={index}
//               className="flex flex-col bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 transition overflow-hidden"
//             >
//               {/* Image */}
//               <div className="relative">
//                 <img
//                   src={project.images ? project.images[current] : project.image}
//                   alt={project.title}
//                   onClick={() => {
//                     if (project.live) {
//                       window.open(project.live, '_blank');
//                     } else if (project.images) {
//                       setModalImages(project.images);
//                       setModalIndex(current);
//                     }
//                   }}
//                   className="w-full h-44 sm:h-48 object-cover hover:opacity-90 cursor-pointer"
//                 />

//                 {project.images && (
//                   <>
//                     <button
//                       onClick={() =>
//                         setCurrent(
//                           current === 0
//                             ? project.images.length - 1
//                             : current - 1
//                         )
//                       }
//                       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 rounded"
//                     >
//                       ‹
//                     </button>
//                     <button
//                       onClick={() =>
//                         setCurrent(
//                           current === project.images.length - 1
//                             ? 0
//                             : current + 1
//                         )
//                       }
//                       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-2 rounded"
//                     >
//                       ›
//                     </button>
//                   </>
//                 )}
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-slate-400 text-sm mb-3">
//                   {project.description}
//                 </p>

//                 {project.note && (
//                   <p className="text-yellow-400 text-xs mb-4">
//                     ⚠ {project.note}
//                   </p>
//                 )}

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Action Links */}
//                 {(project.live || project.github) && (
//                   <div className="mt-auto flex items-center justify-between text-sm pt-4 border-t border-cyan-500/10">
//                     {project.live ? (
//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-cyan-400 hover:text-cyan-300 transition"
//                       >
//                         🔗 Live
//                       </a>
//                     ) : (
//                       <span />
//                     )}

//                     {project.github && (
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-slate-300 hover:text-white transition"
//                       >
//                         💻 GitHub
//                       </a>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <a
//           href="https://github.com/Akshatsainiaks"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-md shadow hover:bg-cyan-600 transition"
//         >
//           View All Projects on GitHub
//         </a>
//       </div>

//       {/* Image Modal */}
//       {modalImages && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//           <button
//             onClick={() => setModalImages(null)}
//             className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
//           >
//             ✕
//           </button>

//           <button
//             onClick={prevImage}
//             className="absolute left-6 text-white text-4xl cursor-pointer"
//           >
//             ‹
//           </button>

//           <img
//             src={modalImages[modalIndex]}
//             alt="Preview"
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
//           />

//           <button
//             onClick={nextImage}
//             className="absolute right-6 text-white text-4xl cursor-pointer"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;


//final new
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, useInView, animate } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { Star, Images, Activity, BrainCircuit, ScrollText, Server, ArrowUpRight, Copy, Check, BookOpen, Terminal } from 'lucide-react';
import { FaDocker } from 'react-icons/fa';
import Tilt from '../components/Tilt';
import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import auth1 from '../assets/auth1.webp';
import auth2 from '../assets/auth2.webp';
import auth3 from '../assets/auth3.webp';
import auth4 from '../assets/auth4.webp';
import auth5 from '../assets/auth5.webp';
import auth6 from '../assets/auth6.webp';
import auth7 from '../assets/auth7.webp';
import srevoxDashboard from '../assets/srevox_dashboard.webp';
import srevoxDiagnosis from '../assets/srevox3.webp';
import srevoxLiveLogs from '../assets/srevox_live_logs.webp';
import srevoxClusters from '../assets/srevox_logs.webp';
import srevoxLight from '../assets/srevox_topology.webp';

const EASE = [0.16, 1, 0.3, 1];
const SLIDE_MS = 4500;

/* ---------------- Srevox (master project) ---------------- */
const srevox = {
  title: 'Srevox',
  subtitle: 'Kubernetes Observability & Incident Intelligence Platform',
  description:
    'An all-in-one Kubernetes observability & incident intelligence platform featuring real-time multi-container log streaming, topology mapping, and automated diagnostic runbooks.',
  tech: ['Next.js', 'Go', 'Kubernetes', 'Helm', 'PostgreSQL', 'Redis'],
  live: 'https://srevox.in',
  github: 'https://github.com/Akshatsainiaks/srevox-setup',
  docs: 'https://docs.srevox.in',
  dockerHub: 'https://hub.docker.com/u/akshatsaini08',
  install: 'curl -fsSL https://raw.githubusercontent.com/Akshatsainiaks/srevox-setup/main/setup.sh | bash',
  // Same figure as shown on srevox.in — update when the site's number changes
  dockerPulls: 3454,
  features: [
    { label: 'Dashboard', caption: 'Real-time CrashLoopBackOff, OOMKilled and LivenessProbe detection.', icon: Activity, image: srevoxDashboard },
    { label: 'AI Incident Diagnosis', caption: 'AI root-cause analysis using OpenAI, Anthropic or Ollama.', icon: BrainCircuit, image: srevoxDiagnosis },
    { label: 'Live Log Streaming', caption: 'Stream live pod logs directly in your browser.', icon: ScrollText, image: srevoxLiveLogs },
    { label: 'Cluster Health', caption: 'Agentless or agent-based cluster connection, with alerts via Slack, Teams & Email.', icon: Server, image: srevoxClusters },
  ],
};

/* Number that counts up when scrolled into view */
const CountUp = ({ to, prefix = '', suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: (v) => setVal(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduceMotion, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString('en-US')}
      {suffix}
    </span>
  );
};

/* One-line install command with copy button */
const InstallCommand = ({ command }) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — command is still selectable */
    }
  };
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#0a0a0c] border border-white/10 pl-4 pr-2 py-2 font-mono text-xs sm:text-[13px]">
      <Terminal size={15} className="shrink-0 text-emerald-400" />
      <span className="text-emerald-400 shrink-0">$</span>
      <code className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap text-slate-300 py-1.5 [scrollbar-width:none]">{command}</code>
      <button
        onClick={copy}
        aria-label="Copy install command"
        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer font-sans text-[11px] font-bold uppercase tracking-wider"
      >
        {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};
const srevoxGallery = [...srevox.features.map((f) => f.image), srevoxLight];

/* ---------------- Other projects ---------------- */
const projects = [
  {
    title: 'AI SaaS Web App – Full Stack PERN Project',
    description: 'Developed and deployed a full-stack AI SaaS application using React.js, Node.js, Express.js, and PostgreSQL.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Clerk', 'API'],
    live: 'https://ai-project-brown-gamma.vercel.app/',
    github: 'https://github.com/Akshatsainiaks/AiProject',
    image: project3,
  },
  {
    title: 'Auth System – Redis & ClickHouse',
    description: 'Authentication system with Redis for sessions and ClickHouse for analytics. Fully containerized using Docker Compose on RHEL.',
    tech: ['Node.js', 'Redis', 'ClickHouse', 'Docker', 'RHEL'],
    note: 'Runs locally on Red Hat VM (Not Live)',
    images: [auth1, auth2, auth3, auth5, auth4, auth6, auth7],
  },
  {
    title: 'Weather App',
    description: 'A responsive weather application built with React and OpenWeatherMap API.',
    tech: ['React', 'Vite', 'TailwindCSS', 'Weather API'],
    live: 'https://weather-app-akshat-project.vercel.app/',
    github: 'https://github.com/Akshatsainiaks/WeatherApp',
    image: project2,
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A simple and interactive tic tac toe game built using HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tic-tac-toe-akshat-project.vercel.app/',
    github: 'https://github.com/Akshatsainiaks/TicTacToe',
    image: project1,
  },
];

/* Screenshot with the browser's own tab/bookmark bar cropped off */
const Shot = ({ src, alt, className = '' }) => (
  <div className={`relative w-full aspect-[1024/555] overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-bottom" draggable="false" />
  </div>
);

/* ---------------- Featured Srevox showcase ---------------- */
const SrevoxShowcase = ({ onOpenGallery }) => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const feature = srevox.features[active];

  // auto-advance tabs
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % srevox.features.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, paused, reduceMotion]);

  const back1 = srevox.features[(active + 1) % srevox.features.length].image;
  const back2 = srevox.features[(active + 2) % srevox.features.length].image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative rounded-[2rem] sm:rounded-[2.5rem] p-[1.5px] overflow-hidden"
    >
      {/* animated gradient border */}
      <div
        className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] motion-reduce:animate-none"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, var(--color-cyan-400) 70deg, var(--color-violet-500) 140deg, transparent 210deg, transparent 360deg)',
        }}
      />

      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-[#0d0d0f] overflow-hidden">
        {/* inner glows */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-6 p-6 sm:p-10 lg:p-12 items-center">

          {/* ---- Info ---- */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] font-bold uppercase tracking-widest">
                <Star size={12} className="fill-current" /> Featured Project
              </span>
              <a
                href={srevox.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold tracking-wide hover:bg-emerald-500/20 transition-colors"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                srevox.in · Live
              </a>
            </div>

            <h3 className="text-5xl sm:text-6xl font-black tracking-tighter mb-3">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
                {srevox.title}
              </span>
            </h3>
            <p className="text-lg sm:text-xl font-semibold text-white mb-4 leading-snug">{srevox.subtitle}</p>
            <p className="text-slate-400 leading-relaxed mb-8">{srevox.description}</p>

            {/* Feature tabs */}
            <div
              className="grid gap-2 mb-8"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {srevox.features.map((f, i) => {
                const Icon = f.icon;
                const isActive = i === active;
                return (
                  <button
                    key={f.label}
                    onClick={() => setActive(i)}
                    className={`relative text-left flex items-center gap-3 px-4 py-3 rounded-xl border overflow-hidden transition-colors duration-300 cursor-pointer ${
                      isActive ? 'bg-white/5 border-white/10' : 'border-transparent hover:bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-lg transition-colors ${
                        isActive ? 'bg-cyan-500/15 text-cyan-400' : 'bg-white/5 text-slate-500'
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-sm font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>{f.label}</span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            className="block text-xs text-slate-400 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {f.caption}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    {/* progress bar */}
                    {isActive && !reduceMotion && (
                      <motion.span
                        key={`${active}-${paused}`}
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500"
                        initial={{ width: '0%' }}
                        animate={{ width: paused ? '0%' : '100%' }}
                        transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: 'linear' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {srevox.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href={srevox.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-cyan-400 transition-all active:scale-95"
              >
                Visit srevox.in
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={srevox.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all active:scale-95"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href={srevox.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 text-slate-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-all active:scale-95"
              >
                <BookOpen size={16} /> Docs
              </a>
              <button
                onClick={() => onOpenGallery(srevoxGallery, active)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-white/10 text-slate-300 font-bold text-sm hover:text-white hover:bg-white/5 transition-all active:scale-95 cursor-pointer"
              >
                <Images size={16} /> Gallery
              </button>
            </div>
          </div>

          {/* ---- 3D screenshot stack ---- */}
          <div
            className="order-1 lg:order-2 relative py-6 lg:py-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Tilt max={10} scale={1.02} className="lg:pl-6">
              <div
                className="relative"
                style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-10deg) rotateX(6deg)' }}
              >
                {/* ghost layers behind */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 opacity-40"
                  style={{ transform: 'translate3d(36px, -28px, -120px)' }}
                >
                  <Shot src={back2} alt="" />
                </div>
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 opacity-60"
                  style={{ transform: 'translate3d(18px, -14px, -60px)' }}
                >
                  <Shot src={back1} alt="" />
                </div>

                {/* main browser window */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0a0a0c] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center justify-center px-4 h-9 bg-[#16161a] border-b border-white/5">
                    <span className="w-full max-w-[220px] px-3 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-400 text-center truncate">
                      🔒 srevox.in
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenGallery(srevoxGallery, active)}
                    className="relative block w-full cursor-zoom-in"
                    style={{ perspective: 1200 }}
                    aria-label={`Open ${feature.label} screenshot`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={feature.label}
                        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotateY: -25, scale: 0.96 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, rotateY: 25, scale: 0.96 }}
                        transition={{ duration: 0.5, ease: EASE }}
                      >
                        <Shot src={feature.image} alt={`Srevox – ${feature.label}`} />
                      </motion.div>
                    </AnimatePresence>
                  </button>
                </div>

                {/* floating caption chip */}
                <motion.div
                  key={`chip-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute -bottom-5 left-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111113] border border-white/10 shadow-xl text-xs font-bold text-white"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  <feature.icon size={14} className="text-cyan-400" />
                  {feature.label}
                </motion.div>
              </div>
            </Tilt>
          </div>
        </div>

        {/* ---- Docker pulls + install ---- */}
        <div className="relative border-t border-white/5 px-6 sm:px-10 lg:px-12 py-8 flex flex-col lg:flex-row gap-5 lg:items-end">
          <motion.a
            href={srevox.dockerHub}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, rotateX: 30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ transformPerspective: 800 }}
            className="group relative shrink-0 lg:w-72 rounded-2xl bg-[#1d63ed]/[0.06] border border-[#1d63ed]/25 hover:border-[#1d63ed]/50 p-5 overflow-hidden transition-colors"
          >
            <FaDocker className="absolute -right-3 -bottom-4 text-[#1d63ed]/15 group-hover:text-[#1d63ed]/25 transition-colors" size={92} />
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-1 flex items-center gap-2">
              <FaDocker className="text-[#4d8bff]" size={14} /> Docker Image Pulls
            </p>
            <p className="text-4xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              <CountUp to={srevox.dockerPulls} suffix="+" />
            </p>
            <p className="mt-1 text-xs font-semibold text-[#4d8bff] inline-flex items-center gap-1">
              View on Docker Hub <ArrowUpRight size={12} />
            </p>
          </motion.a>

          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-2">
              Install in one command · 100% self-hosted · zero data leaks
            </p>
            <InstallCommand command={srevox.install} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- Project card ---------------- */
const ProjectCard = ({ project, index, onOpenGallery }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images;
  const src = images ? images[current] : project.image;

  const step = (dir) => (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + dir + images.length) % images.length);
  };

  const openPreview = () => {
    if (project.live) window.open(project.live, '_blank', 'noopener');
    else if (images) onOpenGallery(images, current);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE, delay: (index % 2) * 0.12 }}
      style={{ transformPerspective: 1200 }}
      className="h-full"
    >
      <Tilt max={7} scale={1.015} glare rounded="rounded-[2rem]" className="h-full">
        <div className="group h-full flex flex-col bg-[#111113] border border-white/5 hover:border-violet-500/30 rounded-[2rem] overflow-hidden transition-colors duration-500">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-[#070708]" onClick={openPreview}>
            {/* blurred fill so non-16:10 screenshots never look empty */}
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
            />
            {/* full screenshot — never cropped */}
            <img
              src={src}
              alt={project.title}
              className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* hover action */}
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {project.live ? <>Open Live <ArrowUpRight size={12} /></> : <>View Screens <Images size={12} /></>}
            </span>

            {images && (
              <>
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={step(-1)}
                    aria-label="Previous screenshot"
                    className="w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={step(1)}
                    aria-label="Next screenshot"
                    className="w-8 h-8 flex items-center justify-center bg-black/60 backdrop-blur-md text-white rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 flex gap-1">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col flex-grow">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">{project.description}</p>

            {project.note && (
              <div className="self-start mb-5 px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">Note: {project.note}</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 text-slate-300 border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.live || project.github) && (
              <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={11} /> Live Demo
                  </a>
                ) : (
                  <span />
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* ---------------- Gallery lightbox ---------------- */
const Gallery = ({ images, index, setIndex, onClose }) => {
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length, setIndex]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length, setIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', onKey);
    };
  }, [next, prev, onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[1100] bg-[#0a0a0ce0] backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-red-500 transition-colors cursor-pointer"
      >
        <FaTimes size={18} />
      </button>
      <span className="absolute top-7 left-6 text-xs font-mono text-slate-400">
        {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </span>

      <div className="relative w-full max-w-6xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={prev}
          aria-label="Previous"
          className="hidden sm:flex absolute -left-2 lg:-left-16 z-10 w-12 h-12 items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            className="max-w-full max-h-[72vh] rounded-2xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.96, rotateY: 10 }}
            transition={{ duration: 0.35, ease: EASE }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) next();
              if (info.offset.x > 60) prev();
            }}
          />
        </AnimatePresence>
        <button
          onClick={next}
          aria-label="Next"
          className="hidden sm:flex absolute -right-2 lg:-right-16 z-10 w-12 h-12 items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* thumbnails */}
      <div className="mt-6 flex gap-2 overflow-x-auto max-w-full px-2 pb-1" onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => setIndex(i)}
            className={`shrink-0 w-20 h-12 sm:w-24 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              i === index ? 'border-cyan-400 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

/* ---------------- Section ---------------- */
const Projects = () => {
  const [gallery, setGallery] = useState(null); // { images, index }

  const openGallery = useCallback((images, index = 0) => setGallery({ images, index }), []);
  const setIndex = useCallback(
    (updater) => setGallery((g) => ({ ...g, index: typeof updater === 'function' ? updater(g.index) : updater })),
    []
  );
  const closeGallery = useCallback(() => setGallery(null), []);

  return (
    <section id="projects" className="w-full bg-[#0a0a0c] text-white px-6 py-28 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10">
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase">What I've Built</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        {/* Master project */}
        <SrevoxShowcase onOpenGallery={openGallery} />

        {/* More projects */}
        <motion.div
          className="flex items-center gap-4 mt-24 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 whitespace-nowrap">More Projects</h3>
          <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onOpenGallery={openGallery} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/Akshatsainiaks"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-2xl transition-all hover:bg-cyan-400 active:scale-95"
          >
            <FaGithub size={18} />
            Explore All Repositories
          </a>
        </div>
      </div>

      <AnimatePresence>
        {gallery && (
          <Gallery images={gallery.images} index={gallery.index} setIndex={setIndex} onClose={closeGallery} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
