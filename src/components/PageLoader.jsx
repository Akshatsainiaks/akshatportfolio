// import React, { useEffect } from "react";
// import { motion } from "framer-motion";

// const PageLoader = ({ onFinish }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 1500); // 1.5 seconds loader

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center 
//                  bg-[#0f172a] text-white pointer-events-none"
//     >
//       {/* NAME */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="text-4xl md:text-6xl font-extrabold tracking-wide text-cyan-400"
//       >
//         Akshat Saini
//       </motion.h1>

//       {/* Underline */}
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: "140px" }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="h-[3px] mt-4 bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
//       />

//       {/* Loading Dots */}
//       <div className="flex gap-2 mt-6">
//         {[0, 0.2, 0.4].map((delay, idx) => (
//           <motion.div
//             key={idx}
//             animate={{ opacity: [0.3, 1, 0.3] }}
//             transition={{ repeat: Infinity, duration: 1, delay }}
//             className="w-3 h-3 rounded-full bg-cyan-300"
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default PageLoader;


// final new
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PageLoader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0c]"
    >
      <div className="relative">
        {/* Breathing background glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative text-3xl font-black tracking-tighter text-white"
        >
          A<span className="text-cyan-400">.</span>S
        </motion.h1>
      </div>
      
      {/* Tiny bottom indicator */}
      <div className="absolute bottom-12 flex gap-1">
        {[0, 0.1, 0.2].map((d) => (
          <motion.div
            key={d}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: d }}
            className="w-1 h-1 bg-violet-500 rounded-full"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PageLoader;