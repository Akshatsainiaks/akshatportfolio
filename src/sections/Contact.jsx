
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
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check, AlertCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import Tilt from '../components/Tilt';

const EASE = [0.16, 1, 0.3, 1];
const EMAIL = 'akshatsaini336@gmail.com';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: i * 0.1 } }),
};

/* Input with a floating label */
const Field = ({ label, name, type = 'text', textarea = false, ...rest }) => {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="relative group/field">
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        placeholder=" "
        required
        rows={textarea ? 5 : undefined}
        className={`peer w-full bg-[#0a0a0c] text-white border border-white/10 rounded-2xl px-5 pt-6 pb-2.5 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)] transition-all ${
          textarea ? 'resize-none' : ''
        }`}
        {...rest}
      />
      <label
        htmlFor={name}
        className="absolute left-5 top-4 text-slate-500 text-sm pointer-events-none transition-all duration-200
          peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-cyan-400
          peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest"
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#22d3ee', '#8b5cf6', '#ffffff'] });
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error(error?.text || error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 6000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-28 bg-[#0a0a0c] text-white min-h-screen flex items-center"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
          >
            <MessageSquare size={14} className="text-cyan-400" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400">Get in touch</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have a project or collaboration in mind? I’d love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ---------- 3D contact card ---------- */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            style={{ transformPerspective: 1200 }}
          >
            <Tilt max={10} scale={1.02} glare rounded="rounded-[2rem]">
              <div className="relative rounded-[2rem] p-[1.5px] overflow-hidden">
                <div
                  className="absolute -inset-[100%] animate-[spin_8s_linear_infinite] motion-reduce:animate-none"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, var(--color-cyan-400) 70deg, var(--color-violet-500) 140deg, transparent 210deg, transparent 360deg)',
                  }}
                />
                <div className="relative rounded-[2rem] bg-[#0d0d0f] p-7 sm:p-8 overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

                  {/* identity */}
                  <div className="relative flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white font-black">
                        AS
                      </div>
                      <div>
                        <p className="font-bold text-white leading-tight">Akshat Saini</p>
                        <p className="text-xs text-slate-400">Software Engineer</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                      </span>
                      Available
                    </span>
                  </div>

                  {/* details */}
                  <div className="relative space-y-3">
                    <div className="group/row flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Mail size={20} />
                      </span>
                      <a href={`mailto:${EMAIL}`} className="min-w-0 flex-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">Email</p>
                        <p className="text-sm font-medium text-white break-all sm:break-normal sm:truncate">{EMAIL}</p>
                      </a>
                      <button
                        onClick={copyEmail}
                        aria-label="Copy email address"
                        title={copied ? 'Copied!' : 'Copy email'}
                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={copied ? 'ok' : 'copy'}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                          </motion.span>
                        </AnimatePresence>
                      </button>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <Phone size={20} />
                      </span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">Phone</p>
                        <p className="text-sm font-medium text-white">+91 8949 XX XXXX</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <span className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <MapPin size={20} />
                      </span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">Location</p>
                        <p className="text-sm font-medium text-white">Udaipur, Rajasthan, India</p>
                      </div>
                    </div>
                  </div>

                  {/* socials */}
                  <div className="relative flex items-center gap-3 mt-8 pt-6 border-t border-white/5">
                    <a
                      href="https://github.com/Akshatsainiaks"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:-translate-y-1 transition-all"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/akshat-saini-0ba25924b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all"
                    >
                      <FaLinkedin />
                    </a>
                    <p className="ml-auto text-xs text-slate-500 italic text-right max-w-[11rem] leading-snug">
                      “Let’s build something great together.”
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* ---------- Form ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            style={{ transformPerspective: 1200 }}
            className="lg:col-span-3 relative rounded-[2.5rem] bg-[#111113] border border-white/5 focus-within:border-cyan-500/20 p-7 sm:p-10 transition-colors duration-500"
          >
            <form ref={form} onSubmit={sendEmail} className="relative space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="First Name" name="first_name" autoComplete="given-name" />
                <Field label="Last Name" name="last_name" autoComplete="family-name" />
              </div>
              <Field label="Email Address" name="user_email" type="email" autoComplete="email" />
              <Field label="Tell me about your project..." name="message" textarea />

              <motion.button
                whileHover={status === 'idle' ? { scale: 1.01 } : undefined}
                whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
                type="submit"
                disabled={status === 'sending'}
                className={`group relative w-full overflow-hidden py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors duration-300 cursor-pointer disabled:cursor-wait ${
                  status === 'success'
                    ? 'bg-emerald-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-black hover:bg-cyan-400'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={status}
                    className="flex items-center gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {status === 'idle' && (
                      <>
                        Send Message
                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending…
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <Check size={18} /> Message Sent
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <AlertCircle size={18} /> Failed — Try Again
                      </>
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-sm font-semibold text-center bg-emerald-500/10 py-3 rounded-xl border border-emerald-500/20"
                  >
                    ✅ Thank you for your message. I’ll get back to you shortly!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm font-semibold text-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                  >
                    Something went wrong. Please email me directly at {EMAIL}.
                  </motion.p>
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
