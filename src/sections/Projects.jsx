
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

import React from 'react';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';


const projects = [
  {
    title: 'Portfolio Website',
    description: 'Responsive developer portfolio with animations, project showcase, contact form, and smooth scroll navigation.',
    tech: ['React', 'Tailwind', 'AOS'],
    github: 'https://github.com/Akshatsainiaks/AiProject',
    live: 'https://ai-project-brown-gamma.vercel.app/',
    image: project3,
  },
  // {
  //   title: 'Todo App with Auth',
  //   description: 'Todo app with user authentication, JWT, and MongoDB backend. Includes dark mode and filters.',
  //   tech: ['React', 'Express', 'MongoDB', 'JWT'],
  //   github: 'https://github.com/yourusername/todo-auth-app',
  //   live: 'https://yourtodoapp.netlify.app',
  //   image: project2,
  // },
  {
    title: 'Weather App',
    description: 'A responsive weather application built with React, Tailwind CSS, and OpenWeatherMap API, providing real-time forecasts with a clean UI.',
    tech: ['React', 'Vite', 'TailwindCSS'],
    github: 'https://github.com/Akshatsainiaks/WeatherApp',
    live: 'https://weather-app-akshat-project.vercel.app/',
    image: project2,
  },

   {
    title: 'Tic Tac Toe Game',
    description: 'A simple and interactive tic tac toe game built using HTML/CSS Javascript web tech.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Akshatsainiaks/TicTacToe',
    live: 'https://tic-tac-toe-akshat-project.vercel.app/',
    image: project1,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6 py-24 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My Projects <span className="text-cyan-400">💡</span>
        </h2>
        <p className="text-slate-300 text-lg">
          Some of the things I've built recently.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] border border-cyan-500/10 rounded-xl shadow-md hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300 overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-40 object-cover rounded-t-xl"
            />

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 font-medium hover:underline"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 font-medium hover:underline"
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
        <a
          href="https://github.com/Akshatsainiaks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-md shadow hover:bg-cyan-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 008.027 10.947c.586.108.8-.253.8-.563 0-.278-.01-1.017-.016-1.996-3.27.711-3.958-1.577-3.958-1.577-.534-1.358-1.305-1.72-1.305-1.72-1.066-.73.082-.715.082-.715 1.18.083 1.803 1.212 1.803 1.212 1.048 1.797 2.75 1.278 3.42.976.107-.76.411-1.278.748-1.572-2.61-.297-5.354-1.305-5.354-5.812 0-1.284.46-2.332 1.214-3.153-.122-.297-.527-1.492.114-3.112 0 0 .987-.316 3.233 1.204a11.26 11.26 0 012.946-.396c1 .005 2.007.135 2.947.396 2.244-1.52 3.23-1.204 3.23-1.204.643 1.62.238 2.815.117 3.112.756.82 1.213 1.868 1.213 3.153 0 4.519-2.748 5.512-5.367 5.804.423.364.801 1.082.801 2.183 0 1.576-.014 2.846-.014 3.232 0 .313.21.676.812.561A11.502 11.502 0 0023.5 12c0-6.353-5.147-11.5-11.5-11.5z" />
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
