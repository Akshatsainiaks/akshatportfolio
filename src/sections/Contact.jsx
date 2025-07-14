
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, SendHorizonal } from 'lucide-react';
import confetti from 'canvas-confetti';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
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
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
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
      className="px-6 py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-2"
        >
          Let’s Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-slate-300 mb-12 text-lg"
        >
          Have a project or collaboration in mind? I’d love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <Mail className="text-cyan-400 w-6 h-6" />,
                title: 'Email',
                value: 'akshatsaini336@gmail.com',
              },
              {
                icon: <Phone className="text-cyan-400 w-6 h-6" />,
                title: 'Phone',
                value: '+91 8949 XX XXXX',
              },
              {
                icon: <MapPin className="text-cyan-400 w-6 h-6" />,
                title: 'Location',
                value: 'Udaipur, Rajasthan, India',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-6 bg-[#1e293b] rounded-xl border border-cyan-500/10 shadow hover:shadow-cyan-500/10 transition-all"
              >
                {item.icon}
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-slate-300">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <p className="text-sm text-slate-400 pt-4">
              Always open to new ideas and opportunities. Let’s build something great together. 👋
            </p>
          </div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] shadow-lg rounded-xl p-8 space-y-6 border border-cyan-500/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-[#0f172a] text-white border border-cyan-500/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-700 transition"
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <SendHorizonal size={18} />
              </motion.span>
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 mt-3 text-sm text-center"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
