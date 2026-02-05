
// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';
// import { Mail, Phone, MapPin, SendHorizonal } from 'lucide-react';
// import confetti from 'canvas-confetti';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Contact = () => {
//   const form = useRef();
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           setLoading(false);
//           form.current.reset();
//           confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
//         },
//         (error) => {
//           console.error(error.text);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center text-cyan-400 mb-2"
//         >
//           Let’s Connect
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-center text-slate-300 mb-12 text-lg"
//         >
//           Have a project or collaboration in mind? I’d love to hear from you.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Contact Info */}
//           <div className="space-y-6">
//             {[
//               {
//                 icon: <Mail className="text-cyan-400 w-6 h-6" />,
//                 title: 'Email',
//                 value: 'akshatsaini336@gmail.com',
//               },
//               {
//                 icon: <Phone className="text-cyan-400 w-6 h-6" />,
//                 title: 'Phone',
//                 value: '+91 8949 XX XXXX',
//               },
//               {
//                 icon: <MapPin className="text-cyan-400 w-6 h-6" />,
//                 title: 'Location',
//                 value: 'Udaipur, Rajasthan, India',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 className="flex items-center space-x-4 p-6 bg-[#1e293b] rounded-xl border border-cyan-500/10 shadow hover:shadow-cyan-500/10 transition-all"
//               >
//                 {item.icon}
//                 <div>
//                   <p className="text-sm font-semibold text-white">{item.title}</p>
//                   <p className="text-slate-300">{item.value}</p>
//                 </div>
//               </motion.div>
//             ))}

//             <p className="text-sm text-slate-400 pt-4">
//               Always open to new ideas and opportunities. Let’s build something great together. 👋
//             </p>
//           </div>

//           {/* Contact Form */}
//           <motion.form
//             ref={form}
//             onSubmit={sendEmail}
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-[#1e293b] shadow-lg rounded-xl p-8 space-y-6 border border-cyan-500/10"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm text-slate-300 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   required
//                   className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm text-slate-300 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   required
//                   className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm text-slate-300 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-slate-300 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 required
//                 className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 placeholder="Write your message here..."
//               ></textarea>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition"
//             >
//               <motion.span
//                 animate={{ y: [0, -2, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               >
//                 <SendHorizonal size={18} />
//               </motion.span>
//               {loading ? 'Sending...' : 'Send Message'}
//             </motion.button>

//             {success && (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-green-400 mt-3 text-sm text-center"
//               >
//                 ✅ Message sent successfully!
//               </motion.p>
//             )}
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';
// import { Mail, Phone, MapPin, SendHorizontal } from 'lucide-react';
// import confetti from 'canvas-confetti';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   }),
// };

// const Contact = () => {
//   const form = useRef();
//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           setLoading(false);
//           form.current.reset();
//           confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
//         },
//         (error) => {
//           console.error(error.text);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="overflow-x-hidden px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen"
//     >
//       <div className="w-full max-w-6xl mx-auto">
        
//         {/* HEADER */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center text-cyan-400 mb-2"
//         >
//           Let’s Connect
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-center text-slate-300 mb-12 text-lg"
//         >
//           Have a project or collaboration in mind? I’d love to hear from you.
//         </motion.p>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* CONTACT INFO */}
//           <div className="space-y-6">
//             {[
//               {
//                 icon: <Mail className="text-cyan-400 w-6 h-6" />,
//                 title: 'Email',
//                 value: 'akshatsaini336@gmail.com',
//               },
//               {
//                 icon: <Phone className="text-cyan-400 w-6 h-6" />,
//                 title: 'Phone',
//                 value: '+91 8949 XX XXXX',
//               },
//               {
//                 icon: <MapPin className="text-cyan-400 w-6 h-6" />,
//                 title: 'Location',
//                 value: 'Udaipur, Rajasthan, India',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 initial="hidden"
//                 whileInView="visible"
//                 custom={index}
//                 viewport={{ once: true }}
//                 className="flex items-center space-x-4 p-6 bg-[#1e293b] rounded-xl border border-cyan-500/10 shadow hover:shadow-cyan-500/10 transition-all"
//               >
//                 {item.icon}
//                 <div>
//                   <p className="text-sm font-semibold text-white">{item.title}</p>
//                   <p className="text-slate-300">{item.value}</p>
//                 </div>
//               </motion.div>
//             ))}

//             <p className="text-sm text-slate-400 pt-4">
//               Always open to new ideas and opportunities. Let’s build something great together. 👋
//             </p>
//           </div>

//           {/* CONTACT FORM */}
//           <motion.form
//             ref={form}
//             onSubmit={sendEmail}
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="bg-[#1e293b] shadow-lg rounded-xl p-8 space-y-6 border border-cyan-500/10"
//           >
            
//             {/* Name Inputs */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm text-slate-300 mb-1">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   required
//                   className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm text-slate-300 mb-1">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   required
//                   className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm text-slate-300 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm text-slate-300 mb-1">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 required
//                 className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                 placeholder="Write your message here..."
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition"
//             >
//               <motion.span
//                 animate={{ y: [0, -2, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               >
//                 <SendHorizontal size={18} />
//               </motion.span>
//               {loading ? 'Sending...' : 'Send Message'}
//             </motion.button>

//             {success && (
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="text-green-400 mt-3 text-sm text-center"
//               >
//                 ✅ Message sent successfully!
//               </motion.p>
//             )}
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


//new final
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, SendHorizontal, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#22d3ee', '#8b5cf6', '#ffffff'] });
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 bg-[#0a0a0c] text-white min-h-screen flex items-center"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] -z-10" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <MessageSquare size={14} className="text-cyan-400" />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-cyan-400">Get in touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase mb-6"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg font-light max-w-xl mx-auto leading-relaxed"
          >
            Have a project or collaboration in mind? I’d love to hear from you.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* CONTACT INFO (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                value: 'akshatsaini336@gmail.com',
                color: 'text-cyan-400',
                bg: 'bg-cyan-400/5'
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Phone',
                value: '+91 8949 XX XXXX',
                color: 'text-violet-400',
                bg: 'bg-violet-400/5'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Location',
                value: 'Udaipur, Rajasthan, India',
                color: 'text-emerald-400',
                bg: 'bg-emerald-400/5'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                className="group flex items-center space-x-6 p-8 bg-[#111113] rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">{item.title}</p>
                  <p className="text-white font-medium tracking-tight">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="p-8 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/5"
            >
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "Always open to new ideas and opportunities. Let’s build something great together."
              </p>
            </motion.div>
          </div>

          {/* CONTACT FORM (3 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#111113] rounded-[2.5rem] p-10 border border-white/5 relative group"
          >
            {/* Form Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full bg-[#0a0a0c] text-white border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
                    placeholder="John"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full bg-[#0a0a0c] text-white border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-[#0a0a0c] text-white border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-[#0a0a0c] text-white border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-700 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(255,255,255,0.05)] cursor-pointer"
              >
                {loading ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendHorizontal size={18} />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-sm font-bold text-center bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/20"
                  >
                    ✅ Message intercepted. I'll get back to you shortly!
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;