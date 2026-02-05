// import React, { useEffect, useState } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const BackToTop = () => {
//   const [visible, setVisible] = useState(false);

//   const toggleVisible = () => {
//     setVisible(window.scrollY > 300);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisible);
//     return () => window.removeEventListener('scroll', toggleVisible);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return visible ? (
//     <button
//       onClick={scrollToTop}
//       className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
//     >
//       <FaArrowUp />
//     </button>
//   ) : null;
// };

// export default BackToTop;

// new final
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] p-4 bg-[#111113]/80 backdrop-blur-xl text-white rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            <FaArrowUp className="text-cyan-400 group-hover:text-white transition-colors" size={20} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;