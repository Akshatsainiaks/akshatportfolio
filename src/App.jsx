// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from './components/Navbar';
// import Home from './sections/Home';
// import About from './sections/About';
// import Skills from './sections/Skills';
// import Projects from './sections/Projects';
// import Certifications from './sections/Certifications';
// import Contact from './sections/Contact';
// import BackToTop from './components/BackToTop';
// import Footer from './components/Footer';

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="font-sans bg-gray-100 text-gray-800 scroll-smooth">
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Projects />
//       <Certifications />
//       <Contact />
//       <Footer/>
//       <BackToTop/>
//     </div>
//   );
// }

// export default App; // ✅ Make sure this line is here!



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans scroll-smooth bg-[var(--bg)] text-[var(--text)] transition-all duration-300">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
