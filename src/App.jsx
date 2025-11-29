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
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
// import Experience from "./sections/Experience";

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="font-sans scroll-smooth bg-[var(--bg)] text-[var(--text)]">
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Certifications />
//       <Contact />
//       <Footer />
//       <BackToTop />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Experience from "./sections/Experience";

import PageLoader from "./components/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // ⛔ Stop scrolling when loader is active
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);

      // ✅ Restore scrolling after loader finishes
      document.body.style.overflow = "auto";
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      {/* Actual Website */}
      {!loading && (
        <div className="font-sans scroll-smooth bg-[var(--bg)] text-[var(--text)]">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
